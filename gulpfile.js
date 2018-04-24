const gulp = require('gulp');
const imagemin = require('gulp-imageMin');
const minify = require('gulp-js-minify');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to files to use
	gulp.dest - Points to folder to output
	gulp.watch - Watch files and folders for changes
 */

 // Logs Message
 gulp.task('message', function(){
 	return console.log('Gulp is running...');
 });

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src(['src/img/*', 'src/img/*/*', '!src/img/svg/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))
);

// Compile Sass
gulp.task('sass', function(){
	gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
});

// Minify Scripts
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(minify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/js'))
});

// Minify & Rename CSS
gulp.task('styles', function () {
	gulp.src(['src/css/*.css', '!src/css/app.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'))
});

// Move CSS to assets/css
gulp.task('css', function(){
	gulp.src(['node_modules/font-awesome/css/font-awesome.min.css', 'src/css/*.min.css', 'src/css/app.css'])
		.pipe(gulp.dest("assets/css"))
});

// Move JS Files to assets/js
gulp.task('js', function(){
	gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'src/js/*.min.js'])
		.pipe(gulp.dest("assets/js"))
});

// Move Fonts
gulp.task('fonts', function(){
	gulp.src('src/font/*/*')
		.pipe(gulp.dest("assets/font"))
});

// Move SVG
gulp.task('svg', function(){
	gulp.src('src/img/svg/*')
		.pipe(gulp.dest("assets/img/svg"))
});

// Default & Watch
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['minify']);
	gulp.watch('src/img/*', ['imageMin']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/css/*.css', ['css']);
	gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['message', 'imageMin', 'scripts', 'styles', 'css', 'js', 'fonts', 'watch']);
