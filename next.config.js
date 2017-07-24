module.exports = {
  webpack: (config, { dev }) => {
    const newConfig = Object.assign({}, config, { devtool: 'module-source-map' });
    console.log(newConfig);
    return newConfig;
  }
}
