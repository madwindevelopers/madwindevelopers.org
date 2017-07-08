var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var nodemon = require('gulp-nodemon');
const path = require('path');

gulp.task('start', function () {
  nodemon({
    verbose: true,
    script: 'app.js',
    ext: 'js, json, css, html, png, jpg',
    ignore: ['.git', 'prod', 'node_modules'],
    tasks: function(changedFiles) {
        var tasks = [];
        if (!changedFiles) return tasks;
        console.log("Changed Files :");
        changedFiles.forEach(function (file) {
            console.log(file);
            if (path.extname(file) === '.js') tasks.push('js');
            if (path.extname(file) === '.css') tasks.push('css');
            if (path.extname(file) === '.html') tasks.push('html');
        });
        return tasks;
    }
  });
});

gulp.task('html', function() {
    return gulp.src('app/html/**')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('prod/html'));
});

gulp.task('css', function() {
    return gulp.src('app/css/**')
        .pipe(cleanCSS())
        .pipe(gulp.dest('prod/static/css'));
});

gulp.task('js', function() {
    return gulp.src('app/js/**')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulp.dest('prod/static/js'));
});

gulp.task('img', function() {
    return gulp.src('app/img/**')
        .pipe(gulp.dest('prod/static/img'));
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**')
        .pipe(gulp.dest('prod/static/fonts'));
});


gulp.task('prod', [ 'html', 'css', 'js', 'img', 'fonts' ]);

gulp.task('default', [ 'start' ]);