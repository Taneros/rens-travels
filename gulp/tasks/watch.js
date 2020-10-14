const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()

gulp.task('watch', () => {
    watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'))
    watch('./app/index.html', () => browserSync.reload())
    // watch('./app/index.html', gulp.series('html'))
    browserSync.init({
        server: {
            baseDir: "app",
            notify: false
        }
    })
})

// gulp.task('html', function () {
//     browserSync.reload()
// })

gulp.task('cssInject', () => {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream())
})