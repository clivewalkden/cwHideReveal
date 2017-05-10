var gulp 		= require('gulp');
var utils 		= require('gulp-util');
var plugins 	= require('gulp-load-plugins')();
var fs 			= require('fs');
var pkg 		= JSON.parse(fs.readFileSync('./package.json'));

var comment 	= '/*\n' +
    ' * <%= pkg.name || pkg.title %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright 2017, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';


gulp.task('clean', function(){
	return gulp.src('dist/*', {read: false})
		.pipe(plugins.plumber())
		.pipe(plugins.clean());
});

gulp.task('concat', function(){
	return gulp.src('src/*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.banner(comment, {
            pkg: pkg
        }))
		.pipe(plugins.concat(pkg.name + '.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function(){
	return gulp.src('src/*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.uglify())
		.pipe(plugins.banner(comment, {
            pkg: pkg
        }))
		.pipe(gulp.dest('./dist/' + pkg.name + '.min.js'));
});

gulp.task('default', ['clean', 'concat', 'uglify']);
