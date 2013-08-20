module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.config.init
    pkg: grunt.file.readJSON "package.json"
    coffee:
      default: files:
        "build/angular-ujs.js": "src/angular-ujs.coffee"
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: 'build/<%= pkg.name %>.js'
        dest: 'build/<%= pkg.name %>.min.js'



  grunt.registerTask "default", ["coffee", "uglify"]
