const fs = require('fs');

const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  let themeConfigPath = `${__dirname}/theme/theme.config`;
  if (!fs.existsSync(themeConfigPath)) {
    themeConfigPath = `${__dirname}/src/theme/theme.config`;
  }
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  return config;
};

module.exports = {
  plugins,
  modify,
};
