module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: [ '**/*.jsx' ],
            dest: 'build',
            ext: '.js'
          }
        ]
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: 'src/board.jsx',
        dest: 'build/app.js'
      }
    },
    watchify: {
      options: {
        callback: function(b) {
          // // b.add();
          // b.require();
          // b.external();
          // b.ignore();
          b.transform(require('grunt-react').browserify);
          return b;
        }
      },
      build: {
        src: [ './src/**/*.js', './src/**/*.jsx' ],
        dest: 'build/app.js'
      }
    },
    watch: {
      jsx: {
        files: 'build/**/*.js',
        options: {
          livereload: 35729
        }
      },
      html: {
        files: 'index.html',
        options: {
          livereload: 35729
        }
      }
    },
    connect: {
      options: {
        port: 3000,
        hostname: '0.0.0.0',
        livereload: 35729,
      },
      livereload: {
        options: {
          open: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');


  grunt.registerTask('default', ['watchify', 'connect', 'watch']);
};
