/*
 * grunt-zoopinator
 * https://github.com/vagrant/gruntplugin
 *
 * Copyright (c) 2013 Zoopdoop, LLC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var zoopinator = require('zoopinator/lib/zoopinator.js').zoopinator;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('zoopinator', 'Static site generation', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      verbose: false,
      ignoreErrors: true,
      autoEscape: true,
      encoding: 'utf8',
      tzOffset: 0,
      sourceRoot: '',
      force: false
    }), 
    done;
    
    // make sure there is only one file group
    if ((this.files.length === 0) || (this.files[0].src.length === 0)) {
      grunt.log.error('No src file directive found');
      return false;
    }
    if ((this.files.length > 1) || (this.files[0].src.length > 1)) {
      grunt.log.error('Only one src file directive is allowed');
      return false;
    }
    if (this.files[0].src.length === 0) {
      grunt.log.error('Empty src file directive');
      return false;
    }    
    if (this.files[0].dest.length === 0) {
      grunt.log.error('Empty dest file directive');
      return false;
    }    
    
    // let grunt know that zoopinator is async
    done = this.async();
    
    return zoopinator(this.files[0].src[0], this.files[0].dest, options, function (err, success) {
      done();
    });
  });

};
