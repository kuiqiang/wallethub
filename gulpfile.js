/*eslint-disable no-console */

// Promise polyfill needed to run PostCSS on node.js 0.10
require('es6-promise').polyfill();

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var handleError;

// Copy
gulp.task('copy', ['sass'], function () {
    var es = require('event-stream');
    var uglify = require('gulp-uglify');

    return es.concat(
        // update index.html to work when built
        gulp.src(['source/index.html'])
            .pipe(gulp.dest('build')),
        // copy config-require
        gulp.src(['source/js/config-require.js'])
            .pipe(plumber(handleError))
            .pipe(uglify())
            .pipe(gulp.dest('build/js')),
        // copy template files
        gulp.src(['source/js/**/*.html'])
            .pipe(gulp.dest('build/js')),
        // copy vendor files
        gulp.src(['source/vendor/**/*', '!source/vendor/requirejs/require.js'])
            .pipe(gulp.dest('build/vendor')),
        // copy assets
        gulp.src(['source/assets/**/*'])
            .pipe(gulp.dest('build/assets')),
        // copy partials
        gulp.src(['source/partials/**/*'])
            .pipe(gulp.dest('build/partials')),
        // minify requirejs
        gulp.src(['source/vendor/requirejs/require.js'])
            .pipe(plumber(handleError))
            .pipe(uglify())
            .pipe(gulp.dest('build/vendor/requirejs'))
    );
});

// JavaScript
gulp.task('js', function () {
    var amdOptimize = require('amd-optimize');
    var concat = require('gulp-concat');
    var insert = require('gulp-insert');
    var ngAnnotate = require('gulp-ng-annotate');
    var uglify = require('gulp-uglify');

    var config = require('./source/js/config-require.js');
    config.baseUrl = 'source';

    return gulp.src(['source/js/main.js'])
        .pipe(plumber(handleError))
        .pipe(amdOptimize('js/main', config))
        .pipe(concat('main.js'))
        .pipe(insert.append(';require(["js/main"]);'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');

    return gulp.src(['gulpfile.js', 'source/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

// Karma
gulp.task('karma', function (done) {
    var Server = require('karma').Server;

    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    }).start();
});

// Sass
gulp.task('sass', function () {
    var cssGlobbing = require('gulp-css-globbing');
    var postcss = require('gulp-postcss');
    var sass = require('gulp-sass');

    return gulp.src(['source/sass/*.scss', '!source/sass/_*.scss'])
        .pipe(plumber(handleError))
        .pipe(cssGlobbing({
            extensions: '.scss'
        }))
        .pipe(sass())
        .pipe(postcss([
            require('postcss-assets')({
                basePath: 'source/',
                loadPaths: ['assets/fonts/', 'assets/images/']
            }),
            require('postcss-import')({
                path: 'source/'
            }),
            require('autoprefixer'),
            require('csswring')({
                preserveHacks: true,
                removeAllComments: true
            })
        ]))
        .pipe(gulp.dest('source/assets/css'));
});

// Watch
gulp.task('watch', ['sass', 'lint'], function () {
    handleError = function (err) {
        console.log(err.name, ' in ', err.plugin, ': ', err.message);
        console.log(err.getStack());
        this.emit('end');
    };
    var browserSync = require('browser-sync').create();

    gulp.watch('source/sass/**/*.scss', ['sass']);

    // enable browserSync
    browserSync.init({
        server: {
            baseDir: './source'
        },
        browser: 'google chrome'
    });

    gulp.watch([
        'source/assets/*.css',
        'source/index.html',
        'source/js/**/*',
        '!source/js/**/*.spec.js'
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['js', 'copy'], function () {
});
