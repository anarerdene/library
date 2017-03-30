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
        },

        watch: {
          sass: {
            files: ['src/scss/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};