require('./gulp/tasks/styles.js')
require('./gulp/tasks/watch.js')
require('./gulp/tasks/sprites.js')
require('./gulp/tasks/scripts.js')
require('./gulp/tasks/modernizr.js')

// moved to watch.js
// gulp.task('watch', async function () {
//     watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'))
//     watch('./app/index.html', gulp.series('html'))
//     browserSync.init({
//         server: {
//             baseDir: "app",
//             notify: false
//         }
//     })
// })

// moved to watch.js
// gulp.task('html', function () {
//     browserSync.reload()
// })

// moved to styles.js
// gulp.task('styles', async function () {
//     return gulp.src('./app/assets/styles/styles.css')
//         .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
//         .pipe(gulp.dest('./app/temp/styles'))
// })

// moved to watch.js
// gulp.task('cssInject', async function () {
//     return gulp.src('./app/temp/styles/styles.css')
//         .pipe(browserSync.stream())
// })
