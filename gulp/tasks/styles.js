const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssimport = require('postcss-import')

gulp.task('styles', async function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString())
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/styles'))
})