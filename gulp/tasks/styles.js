// @ts-ignore
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const cssImport = require('postcss-import')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')


gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString())
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/styles'))
})