var config = require('./config.js'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    

gulp.task('sass', function() {
    return gulp.src(config.src.scss)
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError))
               .pipe(concat('styles.css'))
               .pipe(sourcemaps.write(config.maps))
               .pipe(gulp.dest(config.dest.css))
               .pipe(reload({stream: true}));
});

gulp.task('clean', function() {
      return del.sync['build/'];
});

gulp.task('sync', ['sass'], function() {
    browserSync(config.browserSyncConfig);
    gulp.watch(config.src.scss, ['sass']);
    gulp.watch(config.src.html).on('change', reload);
});


gulp.task('default', ['clean', 'sass', 'sync']);