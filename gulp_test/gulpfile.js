var gulp = require('gulp');
//删除
var del = require('del');
// 常用插件
// 压缩javascript文件，减小文件大小
var uglify = require('gulp-uglify');
// 文件重命名
var rename = require('gulp-rename');   
// 压缩css
var cssmin = require('gulp-cssmin');
// 合并javascript文件，减少网络请求
var concat = require('gulp-concat');
//解析sass文件
var sass = require("gulp-sass");
// 压缩图片
var imagemin = require("gulp-imagemin");
// 压缩html
var htmlmin = require('gulp-htmlmin');
// babel es6转化为es5
var babel = require("gulp-babel");    // 用于ES6转化ES5
//连接服务器
var connect = require('gulp-connect');

// 这里的路径都是相对路径，我这个文件的话，相对gulp_test
// gulp.task('名字',函数) 执行任务
// gulp.dest('输出路径')  输出文件
// gulp.src('获取路径')   获取路径
// gulp.watch('需要监听的文件',改变后执行的函数或者task(数组的形式)任务)

// 使用gulp首先要安装node.js(因为gulp是在node.js下运行的,一般装在C盘)
// 安装后，cmd上执行node -v 出现版本号则成功
// 然后再你需要的地方新建一个文件夹(建议路径和文件夹名纯英文，避免意外)
// shift右键新建的文件夹，出现cmd运行面板并且是当前文件夹的路径
// 然后安装npm install gulp -g (这句话npm是国外的，如果网速不好可以用国内的cnpm（淘宝的）,
// install是安装，gulp是需要上使用的插件，-g是全局安装)
// 一样是npm -v查看版本，有则成功
// 成功后执行npm init会有很多个你需要回答的信息，可以一直按回车不填
// {   "name": "test",  "version": "1.0.0",  "description": "我是描述",
//   "main": "index.js",  "scripts": {    "test": "echo \"Error: no test specified\"
//    && exit 1"  },  "author": "",  "license": "ISC"}
// 然后会在你新建的文件夹产生一个package.json 里面有个人信息等等，在这里主要说俩个
// "devDependencies"这个是开发者模式，然后这个里面左边都是一些插件名字
// 然后这里讲下插件的安装，npm install 这样默认安装devDependencies和dependencies的插件
// 例如npm install del sass babel  这样空格可以安装多个插件
// "dependencies"这个是上线模式，和开发者模式一样

// 进入相应的文件夹的cmd控制台进行输入加前缀 gulp

gulp.task('default',function(){
    console.log('执行任务')
})
gulp.task('getsrc',function(){
    gulp.src('路径')
})
gulp.task('output',function(){
    gulp.dest('输出路径')
})
gulp.watch('监听路径',function(){
    console.log('当路径的内容发生改变的时候，执行这里')
})
// 删除
gulp.task('del',function(){
	del(['dist'])
})


// 执行任务es6转换es5
gulp.task('copy',function(){
    gulp.src('js/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
})


gulp.task('concat',function(){
     gulp.src('dist/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build'))
})

// sass转为css,然后合并css文件再输出
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('build'))
  });

// 先执行监听，然后启动服务器，如果监听的文件发生改变，执行reload
gulp.task('myServer',['watcher'],function(){
       connect.server({
               name:'myServer', // 可忽略，不配置
               root:'blog',    //根目录，默认：gulpfile.js所在根目录
               port:3639,    //端口，默认：8080
               //host:'你的域名（写出了又要被百度删了，心很累！）',  //可忽略，默认值：localhost
               livereload:true // 是否自动重载，自然是true了，如果不想自动重载，就false。
       });
});
//添加gulp.watch()实时监听
gulp.task('watcher',function(){
    gulp.watch('blog/**/*.*',['loadfiles']); // 需要手动运行：gulp  watcher 才会开始监视。
});
//给需要重载的文件加上connect.reload()控制
gulp.task('loadfiles',function(){
    	gulp.src('**/*')
    	.pipe(connect.reload());
});


