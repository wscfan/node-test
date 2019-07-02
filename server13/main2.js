process.on('exit', code => {
  console.log('退出代码为：', code);
})
console.log(process.version);
console.log(process.platform);
console.log(process.execPath);
console.log('程序运行结束');
console.log('当前目录：' + process.cwd());
console.log('内存使用情况：' + process.memoryUsage());
