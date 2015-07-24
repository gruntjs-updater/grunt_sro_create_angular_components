/*
 * grunt-sro-create-angular-components
 * https://github.com/romainseb/grunt-sro-create-angular-components
 *
 * Copyright (c) 2015 romainseb
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        sro_create_angular_components: {
            website: {
                views: [
                    "app/views/home"
                ],
                directives: [
                    "app/views/home/components/siteHeader",
                    "app/views/home/components/siteAbout"
                ],
                options: {
                    initServiceController: true,
                    cssSuffix: 'less'
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['sro_create_angular_components', 'jshint']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['sro_create_angular_components']);

};
