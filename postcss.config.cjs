const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      preserve: true,
      features: {
        'nesting-rules': true,
      },
      debug: true,
    }),
  ],
};