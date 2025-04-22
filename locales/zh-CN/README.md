<div align="center">
<sub>

[English](../../README.md) • [Català](../../locales/ca/README.md) • [Deutsch](../../locales/de/README.md) • [Español](../../locales/es/README.md) • [Français](../../locales/fr/README.md) • [हिन्दी](../../locales/hi/README.md) • [Italiano](../../locales/it/README.md)

</sub>
<sub>

[日本語](../../locales/ja/README.md) • [한국어](../../locales/ko/README.md) • [Polski](../../locales/pl/README.md) • [Português (BR)](../../locales/pt-BR/README.md) • [Türkçe](../../locales/tr/README.md) • [Tiếng Việt](../../locales/vi/README.md) • 简体中文 • [繁體中文](../../locales/zh-TW/README.md)

</sub>
</div>
<br>
<div align="center">
  <h1>Symbiote</h1>
  <p>AI 驱动的编码助手，与您的代码库协同工作，帮助架构、编码、调试和提高生产力。</p>
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>基于 <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/%E4%BB%8E%20Roo%20Code%20%E6%8A%98%E5%8F%89-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="从 Roo Code 折叉">
  </a>
</div>
<br>
<br>

<div align="center">

<a href="https://github.com/RepairYourTech/Symbiote/releases" target="_blank"><img src="https://img.shields.io/badge/%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC-blue?style=for-the-badge&logo=github&logoColor=white" alt="下载最新版本"></a>
<a href="https://github.com/RepairYourTech/Symbiote/issues" target="_blank"><img src="https://img.shields.io/badge/%E6%8A%A5%E5%91%8A%E9%97%AE%E9%A2%98-red?style=for-the-badge&logo=github&logoColor=white" alt="报告问题"></a>
<a href="https://github.com/RepairYourTech/Symbiote/tree/main/DOCS" target="_blank"><img src="https://img.shields.io/badge/%E6%96%87%E6%A1%A3-6B46C1?style=for-the-badge&logo=readthedocs&logoColor=white" alt="文档"></a>

</div>

## Symbiote 是什么？

**Symbiote** 是一个 AI 驱动的**自主编码代理**，它存在于您的编辑器中。它是 [Roo Code](https://github.com/RooVetGit/Roo-Code) 的完整分支，专为所有 VS Code 用户设计，注重隐私和自定义。

Symbiote 可以：

- 用自然语言沟通
- 直接在您的工作区读写文件
- 运行终端命令
- 自动化浏览器操作
- 与 OpenAI 兼容或自定义的 API/模型集成
- 通过**自定义模式**调整其功能

查看 [CHANGELOG](../../CHANGELOG.md) 获取详细更新和修复信息。

---

## 快速入门

1. **安装 Symbiote**

    - 从[发布页面](https://github.com/RepairYourTech/Symbiote/releases)下载并安装
    - 或直接从 VS Code 市场安装

2. **连接 AI 提供商**

    - 配置您首选的 AI 提供商（OpenAI、Anthropic 等）
    - 在提示时输入 API 密钥

3. **开始使用 Symbiote**
    - 在 VS Code 中打开 Symbiote 面板
    - 用自然语言输入任务或问题
    - Symbiote 帮助您更高效地编码

---

## 主要功能

### 多种模式

Symbiote 通过专业化的模式适应您的需求：

- **代码模式：** 用于通用编码任务
- **架构师模式：** 用于规划和技术领导
- **询问模式：** 用于回答问题和提供信息
- **调试模式：** 用于系统性问题诊断
- **自定义模式：** 创建无限专业角色，用于安全审计、性能优化、文档编写或任何其他任务

### 智能工具

Symbiote 配备了强大的工具，可以：

- 读写项目中的文件
- 在 VS Code 终端中执行命令
- 控制网络浏览器
- 通过 MCP（模型上下文协议）使用外部工具

MCP 通过允许您添加无限自定义工具来扩展 Symbiote 的能力。与外部 API 集成、连接数据库或创建专业开发工具 - MCP 提供了扩展 Symbiote 功能以满足您特定需求的框架。

### 自定义

使 Symbiote 按照您的方式工作：

- 自定义指令实现个性化行为
- 自定义模式用于专业任务
- 本地模型用于离线使用
- 自动批准设置加快工作流程

---

## 资源

- **GitHub：** [报告问题](https://github.com/RepairYourTech/Symbiote/issues)或请求功能
- **Changelog：** 在 [CHANGELOG](../../CHANGELOG.md) 中查看最新更新

---

## 免责声明

**Symbiote 是 [Roo Code](https://github.com/RooVetGit/Roo-Code) 的分支**，独立开发。我们保留核心功能的同时，进行了重大更改，包括完全移除遥测功能和重新品牌化。我们感谢 Roo Code 团队在原始项目上的出色工作。

**请注意**，对于与 Symbiote 相关提供或可用的任何代码、模型或其他工具，任何相关的第三方工具，或任何结果，我们**不**作出任何陈述或保证。您承担使用任何此类工具或输出的**所有风险**；此类工具按**"原样"**和**"可用性"**提供。此类风险可能包括但不限于知识产权侵权、网络漏洞或攻击、偏见、不准确、错误、缺陷、病毒、停机时间、财产损失或损坏和/或人身伤害。您对任何此类工具或输出的使用（包括但不限于其合法性、适当性和结果）负全部责任。

---

## 贡献

欢迎贡献！随时提交拉取请求。

1. 分叉仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启拉取请求

## 许可证

[Apache 2.0 © 2025 RepairYourTech](../../LICENSE)

---

**享受 Symbiote！** 我们迫不及待地想看看您会构建什么。编码愉快！
