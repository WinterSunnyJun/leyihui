module.exports = function (grunt) {
    var config = {
        sftp: {
            'leyihui': {
                files: {
                    './': [
                       'css/**',
                        'img/**',
                       'js/**',
                        'index.html',
                    ]
                },
                options: {
                    path:'/home/hosts/leyihui',
                    host: '60.205.182.93',
                    username: 'root',
                    password: 'GUOwei1016.',
                    port: 22,
                    showProgress: true,
                    createDirectories: true,
                    srcBasePath: './'
                }
            },
        }
    };
    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('lyh', ['sftp:leyihui']);
}