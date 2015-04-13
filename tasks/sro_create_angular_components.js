/*
 * grunt-sro-create-angular-components
 * https://github.com/romainseb/grunt-sro-create-angular-components
 *
 * Copyright (c) 2015 romainseb
 * Licensed under the MIT license.
 */

'use strict';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function (grunt) {

    var createHtmlViewFile = function (path, componentName) {
        grunt.file.write(
            path + "/" + componentName + ".html",
            '<div id="' + componentName + '"></div>'
        );
    };

    var createHtmlDirectiveFile = function (path, componentName) {
        grunt.file.write(
            path + "/" + componentName + ".html",
            '<div class="' + componentName + '"></div>'
        );
    };

    var createCssFile = function (path, componentName) {
        grunt.file.write(
            path + "/" + componentName + ".css",
            ''
        );
    };

    var createControllerFile = function (path, componentName, moduleName) {
        grunt.file.write(
            path + "/" + componentName + "Controller.js",
            "angular.module('" + moduleName + "').controller('" +
            capitalizeFirstLetter(componentName) + "Controller',\n\tfunction (){\n\t}\n);"
        );
    };

    var createServiceFile = function (path, componentName, moduleName) {
        grunt.file.write(
            path + "/" + componentName + "Service.js",
            "angular.module('" + moduleName + "').service('" +
            capitalizeFirstLetter(componentName) + "Service',\n\tfunction (){\n\t}\n);"
        );
    };

    var createDirectiveFile = function (path, componentName, moduleName) {
        grunt.file.write(
            path + "/" + componentName + "Directive.js",
            "angular.module('" + moduleName + "').directive('" +
            componentName + "',\n" +
            "\tfunction (){\n" +
            '\t\treturn {\n' +
            '\t\t\trestrict:"E",\n' +
            '\t\t\tbindToController : {},\n' +
            '\t\t\tcontroller:"' + capitalizeFirstLetter(componentName) + 'Controller",\n' +
            '\t\t\tcontrollerAs :"' + componentName + '",\n' +
            '\t\t\ttemplateUrl : "' + path + "/" + componentName + '.html",\n' +
            '\t\t\tscope : true\n' +
            '\t\t};\n' +
            "\t}\n" +
            ");"
        )
        ;
    };

    grunt.registerMultiTask('sro_create_angular_components', 'A little tool to create angularJS  components', function () {

        var moduleName = this.target;

        var views = this.data.views;
        var directives = this.data.directives;
        var componentName = "";

        var i = 0;

        if (views !== undefined) {
            for (i = 0; i < views.length; i++) {
                componentName = views[i].split("/").slice(-1).pop();
                if (!grunt.file.exists(views[i])) {
                    createHtmlViewFile(views[i], componentName);
                    createCssFile(views[i], componentName);
                    createControllerFile(views[i], componentName, moduleName);
                    createServiceFile(views[i], componentName, moduleName);
                    console.log(componentName + " view created");
                }
            }
        }

        if (directives !== undefined) {
            for (i = 0; i < directives.length; i++) {
                componentName = directives[i].split("/").slice(-1).pop();
                if (!grunt.file.exists(directives[i])) {
                    createHtmlDirectiveFile(directives[i], componentName);
                    createCssFile(directives[i], componentName);
                    createControllerFile(directives[i], componentName, moduleName);
                    createServiceFile(directives[i], componentName, moduleName);
                    createDirectiveFile(directives[i], componentName, moduleName);

                    console.log(componentName + " component created");
                }
            }
        }
    });
};
