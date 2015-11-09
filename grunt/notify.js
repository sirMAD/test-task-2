/**
 * Notify - displays simple notifications about some grunt tasks.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('notify', {
    options: {
      title: 'test-task-2'
    },
    build: {
      options: {
        message: 'Build Completed'
      }
    },
    validation: {
      options: {
        message: 'HTML Validation Completed'
      }
    }
  });
};
