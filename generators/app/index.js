// 此文件作为 generator 的核心入口
// 需要到处一个继承自 Yeoman generator 的类型

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // 接受用户输入
  prompting () {
    // Yeoman 在询问用户输入时会调用此方法
    return this.prompt({
      type: 'input',
      name: 'name',
      default: this.appname,
      message: 'Your Project name'
    }).then(res => {
      this.res = res
    })
  }
  writing () {
    //   this.fs.write(
    //     this.destinationPath('temp.txt'),
    //     Math.random().toString()
    //   )

    // 当模板较为复杂时，可以通过模板的方式写入
    // 文件读取路径
    const tmpl = this.templatePath('bar.html')
    // 文件输出目录
    const out = this.destinationPath('bar.html')
    // 内容
    const content = this.res
    this.fs.copyTpl(tmpl, out, content)
  }
}