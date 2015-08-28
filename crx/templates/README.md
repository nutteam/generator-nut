# 扩展模板

> 扩展项目骨架

## 功能:
- 文件夹清理
- js,css,html格式化
- js检查
- less/sass编译成css
- css,js合并压缩
- 创建HTTP服务器
- 自动打开浏览器
- 监听css,less/sass文件修改，自动编译、合并压缩、刷新浏览器
- html W3C校验
- css校验
- css自动加前缀
- images sprites
- 图片压缩
- 时间戳等内容替换

## 配置：
config.json：配置js, css, less, sass, image, tpl的路径


## 命令：
```
grunt
```
开发时使用的命令，包含除了css压缩及js压缩的所有命令
```
grunt build
```
部署时使用的命令，包含css，js的压缩

## 注意：
- validation模块：性能较差，原因是有需要远程验证html是否符合w3c规范
- autoprefixer模块：配置需要兼容的前缀
- sprite模块：将icons放到image目录的sprites目录下，注意以png作为文件后缀
- 其他模块：请按需使用
