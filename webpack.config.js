const { makeConfig } = require('@anansi/webpack-config');

const options = {
  basePath: 'src',
  buildDir: 'dist/',
  serverDir: 'dist-server/',
  
  htmlOptions: { title: 'rest-hooks-error', scriptLoading: 'defer', template: 'index.ejs' },
  globalStyleDir: 'style',
  
};

const generateConfig = makeConfig(options);

module.exports = (env, argv) => {
  const config = generateConfig(env, argv);
  if (!config.experiments) config.experiments = {};
  config.experiments.backCompat = false;

  return config;
};

module.exports.options = options;
