const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sassCompiler = require("sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// 初始化 gulp-sass
const sass = gulpSass(sassCompiler);

// Sass 編譯任務
function compileSass() {
  return gulp
    .src("styles/**/*.scss") // 支援子目錄
    .pipe(sass().on("error", sass.logError)) // 編譯 Sass
    .pipe(cleanCSS()) // 壓縮 CSS
    .pipe(rename({ suffix: ".min" })) // 加上 .min 後綴
    .pipe(gulp.dest("styles")); // 輸出到同資料夾
}

// 監聽 Sass 檔案變動
function watchSass() {
  gulp.watch("styles/**/*.scss", compileSass);
}

// Gulp 任務定義
gulp.task("sass", compileSass);
gulp.task("watch", watchSass);
gulp.task("default", gulp.series("sass", "watch"));
