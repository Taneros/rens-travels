const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const del = require('del')
const usemin = require('gulp-usemin')
const rev = require('gulp-rev')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
// const minify = require('terser')

gulp.task('previewDist', () => {
    browserSync.init({
        server: {
            baseDir: "docs",
            notify: false
        }
    })
})

gulp.task('deleteDistFolder', () => del("./docs"))

gulp.task('optimizeImages', () => {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"))
})



gulp.task('usemin', () => {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [() => rev(), () => cssnano()],
            js: [() => rev(), () => uglify()]
        }))
        .pipe(gulp.dest("./docs"))
})

gulp.task('copyGeneralFiles', () => {
    const pathsToCopy = [
        './app/**/*',
        './app/assets/images/icons/**',
        '!./app/index.html',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs'))
})

gulp.task('build', gulp.series('deleteDistFolder', 'styles', 'scripts', 'copyGeneralFiles', 'optimizeImages', 'usemin', 'previewDist'))
