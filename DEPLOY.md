# 原麦香面粉场静态官网上线说明

这是一个纯静态展示网站，只需要上传以下内容即可显示：

```text
index.html
styles.css
script.js
assets/
.nojekyll
```

部署步骤：

1. 在 GitHub 新建一个仓库，例如 `yuanmaixiang-flour-site`。
2. 上传本项目的静态文件到仓库根目录。
3. 进入仓库 `Settings` -> `Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`，保存。

生成的网址通常是：

```text
https://你的GitHub用户名.github.io/yuanmaixiang-flour-site/
```

如果仓库名是 `你的GitHub用户名.github.io`，生成的网址会是：

```text
https://你的GitHub用户名.github.io/
```
