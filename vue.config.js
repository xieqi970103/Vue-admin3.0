// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 构建项目生成的目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist', // process.env.NODE_ENV 判断是否是生产环境
    // 关闭语法自动检测
    lintOnSave: false,
}