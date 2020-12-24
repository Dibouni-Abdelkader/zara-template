const gulp = require('gulp'),
	concat = require('gulp-concat'),
	prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	//livereload = require('gulp-livereload'),
	sourcemaps = require('gulp-sourcemaps');
	//uglify= require('gulp-uglify');
	//notify = require('gulp-notify');
	//zip = require('gulp-zip');


// HTML Task

gulp.task('html', () => {
  return gulp.src('stage/html/index.pug')
  .pipe(pug({ pretty: true }))
	.pipe(gulp.dest('dist/'));
	//.pipe(livereload({start: true}))

});
// Css Task

gulp.task('css', () => {
	return gulp.src('stage/css/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(prefix("last 2 version"))
		.pipe(concat('main.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'));
		//.pipe(livereload({start: true}));
});

// Js Task

gulp.task('js', () => {
  return gulp.src('stage/js/*.js')
  .pipe(concat('main.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
	//.pipe(livereload({start: true}));
});




// // Compress Task
// gulp.task('compress',() =>{
// 	return gulp.src('dist/**/*.*')
// 		.pipe(zip('website.zip'))
// 		.pipe(gulp.dest('.'))
// 		//.pipe(notify('All Files Has Been Bompressd...'))
// });



// Watch Tasks
gulp.task('watch', () =>{

	//require('./server.js');
	//livereload.listen();
	gulp.watch('stage/**/*.pug', gulp.series('html'));
	gulp.watch('stage/css/**/*.scss', gulp.series('css'));
	gulp.watch('stage/js/*.js', gulp.series('js'));
	//gulp.watch('dist/**/*.*', gulp.series('compress'));
});

// Default Tasks
gulp.task('default',gulp.series('watch'));
