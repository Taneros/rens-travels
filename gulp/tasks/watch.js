const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()


gulp.task('cssInject', () => {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    watch('./app/assets/styles/**/*.css', gulp.series('modernizr', 'styles', 'cssInject'))
    watch('./app/index.html', () => browserSync.reload())
    watch('./app/assets/scripts/**/*.js', gulp.series('scripts', () => browserSync.reload()))
    browserSync.init({
        server: {
            baseDir: "app",
            notify: false
        }
    })
})
