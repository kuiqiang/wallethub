WalletHub
======

Installation
------------

    # Install global NPM dependencies:
    npm -g install http-server
    npm -g install bower
    npm -g install gulp
    npm -g install karma

    # Get dependencies:
    npm install
    bower install

Quick Run
----------

    # Build:
    gulp

    # Serve application:
    http-server ./build

    # Run unit tests and coverage:
    gulp karma

[Gulp](http://gulpjs.com/) flows
----------
* `gulp`

  Builds project into `build` directory. Under the hood compiles and compresses Sass/CSS, compiles scripts
  with ([RequireJs](http://requirejs.org/)) and [uglifies](http://lisperator.net/uglifyjs/) it.

* `gulp karma`

  Starts Karma server watching scripts updates.

* `gulp watch`

  Listens to changes to stylesheets and scripts and reloads browser page during development.
