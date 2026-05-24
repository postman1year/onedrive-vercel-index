module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies['webworkify-webpack']) {
        // Replace the Git URL with a specific npm version
        pkg.dependencies['webworkify-webpack'] = '^2.1.5'; 
      }
      return pkg;
    }
  }
};
