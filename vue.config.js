const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // pass options to sass-loader
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.sass`
        // Note: this option is named as "prependData" in sass-loader v8
        additionalData: `@import "src/assets/scss/_variables.scss";`,
      },
    },
  },
});
