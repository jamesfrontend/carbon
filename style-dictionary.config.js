const buildPath = "./tokens/";

module.exports = {
  source: ["src/tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath,
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    js: {
      transforms: ["attribute/cti", "name/cti/camel"],
      transformGroup: "js",
      buildPath,
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
};
