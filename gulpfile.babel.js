import gulp from 'gulp'; // ES6 imports!
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const sassOpts = {outputStyle: 'compressed', errLogToConsole: true}; // "let" and "const"!!

gulp.task('sass', () => { // Arrow functions!!
    gulp.src('./scss/**/*.scss')
        .pipe(sass(sassOpts))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default', ['sass'], () => { // Arrow functions!!
    gulp.watch('./scss/**/*.scss', ['sass'])
        .on('change', (e) => {  // Arrow functions!!
            console.log(`File ${e.path} was ${e.type}, running Sass task...`); // Template strings and interpolation!!
        });
});
