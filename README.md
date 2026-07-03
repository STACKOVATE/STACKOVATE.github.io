# 🌐 STACKOVATE.github.io

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen)](https://pages.github.com)

个人项目展示与技术博客站点，基于 **Jekyll** 静态网站生成器构建。

➡️ **在线访问**: [https://stackovate.github.io](https://STACKOVATE.github.io)

---

## ✨ 功能特性

### 🎯 核心模块
- **响应式布局**：适配 PC/平板/手机端显示
- **暗色模式**：自动跟随系统主题或手动切换
- **文章分类**：技术博客/项目案例/开源贡献
- **搜索功能**：支持标题与内容的即时检索（Algolia 集成）

### ⚡ 技术栈
| 组件          | 技术实现                     |
|---------------|------------------------------|
| 前端框架      | Jekyll + Liquid 模板         |
| CSS 预处理器  | Sass + PostCSS               |
| 自动化构建    | GitHub Actions               |
| 评论系统      | Giscus（GitHub Discussions） |

---

## 🚀 快速开始

### 本地开发环境
```bash
# 克隆仓库
git clone https://github.com/xiaoheiprint9/xiaoheiprint9.github.io.git
cd xiaoheiprint9.github.io

# 安装依赖 (需预先安装 Ruby >= 2.5)
bundle install

# 启动本地服务器
bundle exec jekyll serve --livereload

# 访问 http://localhost:4000
