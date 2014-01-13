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
          "assets/js/main.js": [
            "src/js/Main.coffee"
            "src/js/SaveComment.coffee"
          ]
          "assets/js/background.js": ["src/bg/background.coffee"]
          "assets/js/options.js": ["src/options/options.coffee"]

  grunt.registerTask "default", ["watch"]
