/**
 * grunt boilerplate
 */

"use strict";
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * 清理目录
     */
    clean: {
      options: {
        force: true
      },
      dir: ['build']
    },

    /**
     * js，css，html格式化
     */
    jsbeautifier: {
      files: ['src/scripts/**/*.js', 'Gruntfile.js'],
      options: {
        js: {
          fileTypes: ['.js'],
          indentSize: 2
        },
        html: {
          fileTypes: ['.html'],
          indentSize: 2
        }
      }
    },

    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.',
          'Bad value tpl for attribute type on element script: Subtype missing.',
          'Element dl is missing a required instance of child element dd.',
          'Element head is missing a required instance of child element title.'
        ]
      },
      files: {
        src: ['src/**/*.html']
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      css: [
        'src/styles/**/*.css'
      ]
    },

    /**
     * js语法检查
     */
    jshint: {
      options: {
        jshintrc: true,
        ignores: ['src/scripts/lib/*.js', 'src/scripts/plugin/*.js']
      },
      files: {
        src: ['src/scripts/**/*.js', 'Gruntfile.js']
      }
    },

    /**
     * 拷贝图片
     */
    copy: {
      ext: {
        files: [{
          src: ['src/**'],
          dest: 'build/'
        }]
      },
    },

    imagemin: {
      images: {
        files: [{
          expand: true,
          cwd: 'build/src/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/src/images/'
        }]
      }
    },

    /**
     * css合并压缩
     */
    cssmin: {
      options: {
        //banner: '/*! <%= pkg.name %> - <%= pkg.version %> - ' +
        //  '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */'
      },
      css: {
        files: [{
          expand: true,
          cwd: 'build/src/styles',
          src: '**/*.css',
          dest: 'build/src/styles/'
        }]
      }
    },

    /**
     * js压缩
     */
    uglify: {
      options: {
        //banner: '/*! <%= pkg.name %> - <%= pkg.version %> - ' +
        //  '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
      },
      js: {
        files: [{
          expand: true,
          cwd: 'build/src/scripts',
          src: '**/*.js',
          dest: 'build/src/scripts/'
        }]
      }
    },
    uc_crx: {
      options: {
        browserPath: '', // UC浏览器安装路径， 可以不填
        crxNameWithVer: true
      },
      ext: {
        dir: 'build/src',
        key: 'pem/<%= pkg.name %>.pem',
        name: 'build/<%= pkg.name %>'
      }
    },
    update_crx: {
      ext: '<%=uc_crx.ext%>'
    }
  });

  /**
   * 加载grunt插件
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  //grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uc-crx');

  /**
   *
   * 默认命令：grunt
   */
  grunt.registerTask('default', [
    'clean',
    'validation',
    //'sass',
    //'autoprefixer',
    'csslint',
    'jsbeautifier',
    'jshint',
    'copy',
    'cssmin',
    'uglify',
    //'sprite',
    //'concat',
    //'replace',
    //'connect',
    //'open',
    //'watch'
    'uc_crx'
  ]);

  /**
   * grunt build命令
   */
  /*grunt.registerTask('build', [
    'clean',
    'validation',
    //'sass',
    //'autoprefixer',
    'jsbeautifier',
    'jshint',
    'imagemin',
    //'concat',
    'cssmin',
    'uglify',
    //'replace',
    //'connect',
    //'open',
    //'watch'
    'uc_crx'
  ]);*/

};
