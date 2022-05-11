// loader本质上是一个函数,是导出为一个函数的node的模块。
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this); //获取loader的option配置
  //清除console.log
  const reg = /(console.log\()(.*)(\))/;
  source = source.replace(reg, '');
  // 全局替换颜色
  source = source.replace(/color: red/gi, 'color: green');
  return source;
};
