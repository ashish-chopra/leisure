/* IMPORT USED PACAKGES */

var gulp    = require('gulp'),
    clean   = require('gulp-clean'),
    connect = require('gulp-connect'),
    mbf     = require('main-bower-files'),
    concat  = require('gulp-concat'),
    filter  = require('gulp-filter'),
    sourcemap = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');




/* DEFINE PATH AND GLOBAL CONSTANTS */
var port = 3000,
    path = {
        bower: 'bower_components',
        scripts: "src/scripts/**",
        templates: "src/templates/**",
        styles: "src/css/**",
        index: "src/index.html",
        assets: "src/assets/**",
        vendor: 'dist/vendor',
        dist: "dist",
        root: "dist"
    };


/* DEFINE CUSTOM TASKS */

//cleans the dist location
gulp.task('clean', function() {
    return gulp.src(path.dist, {read: false})
    .pipe(clean());
});

// copy the static content like images
// and fonts in dist location
gulp.task('statics', function() {
    return gulp.src([path.assets], {base: 'src'})
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
});

// process the index html and templates
gulp.task('html', function() {
   return gulp.src([path.index, path.templates], {base: 'src'})
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
});

//process css
gulp.task('css', function() {
   return gulp.src(path.styles, {base: 'src'})
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
});

// process domain scripts
gulp.task('scripts', function() {
    return gulp.src(path.scripts, {base: 'src'})
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
});

//process vendor scripts and styles
gulp.task('vendor', function() {

    // Not using filters right now.
   // var jsFilter    = filter("**/*.js", {restore: true});
   //  var cssFilter   = filter("**/*.less", {restore:true});
   // var fontsFilter = filter('**/fonts/**', {restore: true});

   return gulp.src(mbf(), {base: path.bower})
        .pipe(gulp.dest(path.vendor));
});

// watching the changes and fire up the tasks
gulp.task('watch', function() {
    // watching static content
    gulp.watch(path.assets, ['statics']);
    // watching html
    gulp.watch([path.index, path.templates], ['html']);
    //watching css
    gulp.watch(path.styles, ['css']);
    //watching scripts
    gulp.watch(path.scripts, ['scripts']);

});

// connects the server at given port and root.
// enables the live reloading.
gulp.task('connect', function() {
    return connect.server({
        livereload: true,
        root: path.root,
        port: port
    });
})


/* DEFINE CUSTOM TASK CHAINING */
gulp.task('default', ['serve', 'watch']);
gulp.task('serve', ['statics', 'vendor', 'html', 'css', 'scripts', 'connect']);
