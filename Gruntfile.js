module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt, 
    {scope: 'devDependencies'});

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourceMap: 'inline',
          style : 'compressed'
        },
        files: {
          'public/stylesheets/style.min.css': 'src/scss/index.scss'
        }
      }
    },
    uglify: {
      dist : {
        options: {
          sourceMap: true,
          sourceMapName: 'public/javascripts/scripts.js.map',
        },
        files : {
          'public/javascripts/scripts.min.js' : [
            'src/js/jquery.js',
            'src/js/base.js',
            'src/js/modules/*.js'
          ]
        }
      }
    },
    nodemon: {
      dist: {
        script: './bin/www'
      }
    },
    watch: {
      script : {
        files : ['src/js/*.js'],
        tasks : ['uglify']  
      },
      style : {
        options : {livereload: true,},
        files : ['src/scss/*.scss','src/scss/*/*.scss','src/scss/*/*/*.scss'],
        tasks : ['sass']
      },
      views : {
        files : ['views/*.hjs']
      }
    },
    concurrent: {
      target: {
        tasks: ['watch:script','watch:style','watch:views','nodemon:dist'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  grunt.registerTask('default', [
    'sass','concurrent'
  ]);

  grunt.registerTask('serve', [
    'concurrent'
  ]);
};