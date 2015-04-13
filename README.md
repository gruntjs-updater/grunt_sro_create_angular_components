# grunt-sro-create-angular-components

> A little tool to create angularJS  components

## Getting Started
This plugin requires Grunt `~0.4.5`

```shell
npm install grunt-sro-create-angular-components --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sro-create-angular-components');
```

## The "sro_create_angular_components" task

### Overview
In your project's Gruntfile, add a section named `sro_create_angular_components` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sro_create_angular_components: {
    moduleName: {
      views:[
        //list of paths for view
       ],
       directives:[
       //list of paths for components
       }
    }
  },
});
```

The name is the last part of the path.

This will create for views this files :
- {path}/{name}_controller.js
- {path}/{name}_service.js
- {path}/{name}.css
- {path}/{name}.html

This will create for views this files :
- {path}/{name}_controller.js
- {path}/{name}_directive.js
- {path}/{name}_service.js
- {path}/{name}.css
- {path}/{name}.html

### Usage Examples

This will create the following content :

```js
app/
 | views/
 |  | home/
 |  |  | home.html
 |  |  | home.css
 |  |  | home_controller.js
 |  |  | home_service.js
 |  |  | components/
 |  |  |  | siteHeader/
 |  |  |  |  | siteHeader.css
 |  |  |  |  | siteHeader.html
 |  |  |  |  | siteHeader_controller.js
 |  |  |  |  | siteHeader_directive.js
 |  |  |  |  | siteHeader_service.js
 ```

```js
grunt.initConfig({
  sro_create_angular_components: {
    website: {
      views: [
        "app/views/home"
      ],
      directives: [
        "app/views/home/components/siteHeader"
      ]
    }
  },
});
```
