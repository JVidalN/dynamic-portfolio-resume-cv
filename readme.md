<h1 align="center">
    Resume CV and Portfolio With JavaScript and Github API
</h1>

<h3 align="center">
  <a href="readme-ptBR.md">Portuguese version</a>
</h3>

<h4 align="center">
  This is my online resume, created to showcase my experience, skills and my projects.
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jvidaln/jvidaln.github.io.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jvidaln/jvidaln.github.io.svg">
  
  <a href="https://www.codacy.com/app/jvidaln/jvidaln.github.io?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jvidaln/jvidaln.github.io&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/eac67ca345934f4c8e4435a8606e7baa.svg">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jvidaln/jvidaln.github.io.svg">
  <a href="https://github.com/jvidaln/jvidaln.github.io/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jvidaln/jvidaln.github.io.svg">
  </a>
  
  <a href="https://github.com/jvidaln/jvidaln.github.io/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jvidaln/jvidaln.github.io.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/jvidaln/jvidaln.github.io.svg"> 
</p>

<p align="center">
  <a href="#rocket-technologies-and-features">Technologies and Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-updates">Updates</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img src="assets/github/portfolio-auto-update.gif" width="100%">
</p>
<h3 align="center">
  <a href="https://jvidaln.github.io/">Demo</a>
</h3>

## :rocket: Technologies and Features

This template was designed by [Xiaoying Riley](http://themes.3rdwavemedia.com) and modified by me with improvements that i considered relevants with the following technologies:

- [GitHub REST API v3](https://developer.github.com/v3/)
- [ECMAScript][es]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

And i used features of ECMAScript: `Use Strict`, `Dynamic Imports`, `Arrow Functions`, `Destructuring Assignment`, `String Interpolation`, `Const and Let Variables`. In addition, some design patterns were used, such as `Factory`, `Dependency Injection`.

## :information_source: Updates

### Portfolio Section

The data is obtained the public API data from github itself `https://api.github.com/users/${user}/repos`.

The cards layout was inpired in [this](https://codepen.io/mhrkit/pen/GGqdvr?editors=1010) example, created by M H Rabby.

### Other Sections

I cleaned the code generating the scripts by [data source](assets/js/data.mjs) to create elements HTML.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/jvidaln/jvidaln.github.io/blob/master/LICENSE) for more information.

---

Made with ♥ by Jean Vidal :wave: [Get in touch!](https://www.linkedin.com/in/jvidaln/)

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[es]: https://www.ecma-international.org/
