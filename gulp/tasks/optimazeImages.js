import imagemin, { mozjpeg, optipng } from "gulp-imagemin";

export const optimazeImages = () => {
  return (
    app.gulp
      .src("src/img/**/*.{png,jpg}")
      // .pipe(
      //   imagemin([
      //     optipng({ optimizationLevel: 3 }),
      //     mozjpeg({ quality: 75, progressive: true }),
      //   ])
      // )
      .pipe(app.gulp.dest("build/img"))
  );
};
