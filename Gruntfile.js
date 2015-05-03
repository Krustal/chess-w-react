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
        keepalive: true,
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
    }
  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-watchify');

  grunt.registerTask('default', ['watchify']);
};
