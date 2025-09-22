const { src, dest, series, parallel, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer").default;
const sass = require("gulp-sass")(require("sass"));
const minifyCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const inject = require("gulp-inject");
const browserSync = require("browser-sync").create();

function css() {
  return src("css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

function js() {
  return src("js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("img/*")
    .pipe(imagemin())
    .pipe(dest("dist/img"))
    .pipe(browserSync.stream());
}

function html() {
  const sources = src(["dist/js/*.js", "dist/css/*.css"], { read: false });
  return src("index.html")
    .pipe(inject(sources, { ignorePath: "dist", addRootSlash: false }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("css/*.scss", css);
  watch("js/*.js", js);
  watch("img/*", images);
  watch("index.html", html);
}

const build = series(parallel(css, js, images), html);

exports.css = css;
exports.js = js;
exports.images = images;
exports.html = html;
exports.build = build;
exports.serve = serve;

exports.default = build;
