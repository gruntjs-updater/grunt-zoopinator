# grunt-zoopinator

> Grunt plugin for Zoopinator static site generator

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-zoopinator --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-zoopinator');
```

## The "zoopinator" task

### Overview
In your project's Gruntfile, add a section named `zoopinator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  zoopinator: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.verbose
Type: `Boolean`
Default value: `false`

A boolean value that controls the amount of text displayed while running zoopinator

#### options.ignoreErrors
Type: `Boolean`
Default value: `true`

A boolean value that controls if zoopinator will abort on the first error

#### options.autoEscape
Type: `Boolean`
Default value: `true`

A boolean value that controls if zoopinator will auto escape output

#### options.encoding
Type: `String`
Default value: `utf8`

A string value that sets the encoding used when reading in template files

#### options.tzOffset
Type: `Integer`
Default value: `0`

The timezone offset that SWIG uses for data calculations

#### options.sourceRoot
Type: `String`
Default value: ``

A string value that specifies an alernate root for the SWIG engine to use as the root when resovling template paths

#### options.force
Type: `Boolean`
Default value: `false`

A boolean value that if true will override the confirmation when creating files outside of the dest folder

### Usage Examples

Here is a sample Gruntfile using grunt-zoopinator.  The task has two targets - dev and prod enabling you to test in the dev
directory and then use the prod folder as a git repo to deploy your site. The watch task will keep the dev directory up to
date after any file change.

```js
module.exports = function(grunt) {

  // Add our custom tasks.
  grunt.loadNpmTasks('grunt-zoopinator');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Project configuration.
  grunt.initConfig({
    zoopinator: {
      options: {
        verbose: false
      },
      dev: {
        src: 'site-templates/',
        dest: '../dev/site/'
      },
      prod: {
        src: 'site-templates/',
        dest: '../prod/site/'
      }
    },
    watch: {
      files: ['site-templates/**/*.*'],
      tasks: ['zoopinator:dev']
    }
  });

  // Default task.
  grunt.registerTask('default', ['zoopinator:dev']);
};
        
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
