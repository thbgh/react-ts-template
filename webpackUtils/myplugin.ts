// webpack plugin 有20+生命周期钩子
const fs = require('fs');

class MyConsolePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyConsolePlugin', compilation => {
      console.log('webpack 打包完成');
    });
  }
}

module.exports = MyConsolePlugin;
