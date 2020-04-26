var gulp = require('gulp'),
    ejs = require('gulp-ejs'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    fs = require('fs'),
    image = require('gulp-image');

gulp.task('ejs', done => {
    var jsonData01 = './snow-store.json',
        json01 = JSON.parse( fs.readFileSync( jsonData01,'utf8' ) );

    for( var i = 0; i < json01.length; i++ ) {
        var fileName = json01[i].id.replace(/ +/g, '-').toLowerCase();

        var product = json01[i];
        var suggestions = [];


        if(product.suggestions) {

            suggestions = product.suggestions.map(function(id) {

                return json01.find(function(p) {
                    return p.id === id;
                });

            });

        }


        gulp.src('src/templates/**/product.ejs')
            .pipe(ejs({
                jData01:json01[i], suggestions:suggestions
            },))

            .pipe(rename(fileName + '.html'))
            .pipe(gulp.dest('dist/templates'));
    }
    done();
});

gulp.task('html-ejs',function(){
    gulp.src(['src/templates/**/*.{ejs,html}', '!src/templates/**/product.ejs'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(ejs({ msg: 'Hello Gulp!'}, {}, { ext: '.html' }))
        .pipe(gulp.dest('dist/templates'))
});

gulp.task('connect', function() {
    connect.server({
      root: 'dist',
      livereload: true
    });
});

gulp.task('image', function () {
    gulp.src(['src/image/product/**/*','src/image/banner/*'])
      .pipe(image())
      .pipe(gulp.dest('dist/image/'));
});

gulp.task('styles', function () {
    gulp.src(['src/styles/**/*.{scss,sass,css}'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({
            prefix: 'bra-'
        }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function () {
    return gulp.src('src/javascript/**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        //.pipe(concat('main.js'))
        .pipe(rename({
            prefix: 'bra-'
        }))
        .pipe(gulp.dest('dist/javascript/'))
        .pipe(rename({
            suffix: '.min'
        }))
        //remove todos os console.log
        //.pipe(uglify({ compress: { drop_console: true } }).on('error', console.error))
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest('dist/javascript/'))
});

gulp.task('run', ['clean', 'styles', 'scripts', 'ejs', 'html-ejs']);

gulp.task('watch', function(){
  gulp.watch("src/styles/**/*.{scss,sass,css}", ['styles']);
  gulp.watch("src/javascript/**/*.js", ['scripts']);
  gulp.watch("src/templates/**/product.ejs", ['ejs']);
  gulp.watch("src/templates/**/*.{ejs,html}", ['html-ejs']);
});

// Clean up
gulp.task('clean', function() {
  return del(['dist/', '.sass-cache/']);
});

// gulp dist
gulp.task('dist', ['clean'], function() {
  gulp.start('styles', 'scripts', 'ejs', 'html-ejs', 'image');
});

gulp.task('default', ['run', 'watch', 'connect']);