module.exports = function(grunt){

    grunt.initConfig({

      sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'dist/css/style.css': 'src/scss/main.scss',
          }
        }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};