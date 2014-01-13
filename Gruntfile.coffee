module.exports = (grunt) ->

  require("load-grunt-tasks") grunt

  grunt.initConfig
    watch:
      coffee:
        files: ["src/**/*.coffee"]
        tasks: ["coffee:compile"]

    coffee:
      compile:
        files:
          "assets/js/background.js": ["src/bg/background.coffee"]
          "assets/js/options.js": ["src/options/options.coffee"]
          "assets/js/main.js": ["src/js/main.coffee"]

  grunt.registerTask "default", ["watch"]
