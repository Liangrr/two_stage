var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

var rename = require('gulp-rename'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var del = require('del');
var imagemin = require("gulp-imagemin");
var connect = require('gulp-connect');


gulp.task('myServer',['watcher'],function(){
       connect.server({
               name:'myServer', // 可忽略，不配置
               root:'blog',    //根目录，默认：gulpfile.js所在根目录
               port:3639,    //端口，默认：8080
               //host:'你的域名（写出了又要被百度删了，心很累！）',  //可忽略，默认值：localhost
               livereload:true // 是否自动重载，自然是true了，如果不想自动重载，就false。
       });
       
});

//给需要重载的文件加上connect.reload()控制
gulp.task('loadfiles',function(){
	console.log('更新了')
       gulp.src('blog/**/*.*')
               .pipe(connect.reload());
});

//添加gulp.watch()实时监听
gulp.task('watcher',function(){
    gulp.watch('blog/**/*.*',['loadfiles']); // 需要手动运行：gulp  watcher 才会开始监视。
});


gulp.task('test',function(){
	console.log('第一次运行')
})

gulp.task('imgmin',function(){
	return gulp.src('blog/dell.jpg')
	.pipe(imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
		.pipe(gulp.dest('dist/images'))
})

gulp.task('imagemin', function(){
	return gulp.src('blog/images/*')
		.pipe(imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
		.pipe(gulp.dest('dist/images'))
});


gulp.task('cssmin',function(){
	return gulp.src('blog/css/*.css')
	.pipe(cssmin())
	.pipe(gulp.dest('dist'));
})

gulp.task('uglify',function(){
	return gulp.src('blog/js/*.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.lrrmin'}))
	.pipe(gulp.dest('dist'))
})
