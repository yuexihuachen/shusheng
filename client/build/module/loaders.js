// 将样式表抽离成专门的单独文件。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");

const { ifProduction: ifProd, ifNotProduction: ifDev } = getIfUtils(
  process.env.NODE_ENV
);

// files regexes
const cssRegex = /\.css$/;
const sassRegex = /\.s[ac]ss$/;
const photoRegex = /\.(png|jpg|gif|bmp|jpeg)$/;
const fontsRegex = /\.(woff|woff2|eot|ttf|otf|svg)$/;
const htmlRegex = /\.html$/;
const jsRegex = /\.(js|mjs|jsx|ts|tsx)$/;

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      ident: "postcss",
      plugins: [
        ["postcss-flexbugs-fixes"],
        [
          "postcss-preset-env",
          {
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
          },
        ],
      ],
    },
  },
};

const getCssLoader = () => ({
  loader: "css-loader",
});

const cssModule = function () {
  return {
    test: cssRegex,
    use: [
      ifProd(MiniCssExtractPlugin.loader, "style-loader"),
      "css-loader",
      postcssLoader,
    ],
  };
};

const sACssModule = function () {
  return {
    test: sassRegex,
    use: [
      ifProd(MiniCssExtractPlugin.loader, "style-loader"),
      getCssLoader({
        modules: false, //启用/禁用 CSS 模块及其配置
      }),
      "sass-loader",
    ],
  };
};

const photoModule = () => {
  return {
    test: photoRegex,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[path][name].[ext]",
        },
      },
    ],
  };
  //   {
  //     test: photoRegex,
  //     use: [
  //       {
  //         loader: "file-loader",
  //         options: {
  //           outputPath: function (url) {
  //             url = url.replace(/pages\//g, "");
  //             return url;
  //           },
  //           name: "[path][name].[ext]",
  //           context: "",
  //           limit: 891278,
  //         },
  //       },
  //     ],
  //   }
};

const fontsModule = () => {
  return {
    test: fontsRegex,
    type: "asset/resource",
    generator: {
      filename: 'fonts/[name][ext][query]'
    }
  };
};

const htmlModule = () => {
  // 改用 HtmlWebpackPlugin
  return {
    test: htmlRegex,
    use: [
      {
        loader: "html-loader",
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: false,
        },
      },
    ],
  };
};

const jsModule = () => {
  return {
    test: jsRegex,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };
};

const tsModule = () => {
  return {
    test: /\.tsx?$/,
    loader: "ts-loader",
    options: {
      transpileOnly: true,
    },
  };
};

module.exports = {
  cssModule,
  sACssModule,
  photoModule,
  fontsModule,
  jsModule,
  tsModule,
};
