module.exports = {
  webpack: (config, { dev }) => {
    const newConfig = Object.assign({}, config, { devtool: 'module-source-map' });
    return newConfig;
  }
}
