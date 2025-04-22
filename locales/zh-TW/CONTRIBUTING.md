# 參與貢獻 Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>基於 <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20from-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork from Roo Code">
  </a>
</div>

我們非常歡迎您參與貢獻 Symbiote。無論是修正錯誤、新增功能或改善文件，每一份貢獻都能讓 Symbiote 變得更加出色！為了維持社群的活力與友善氛圍，所有成員皆須遵守我們的[行為準則](CODE_OF_CONDUCT.md)。

## 社群參與

我們鼓勵所有貢獻者透過 GitHub 參與 Symbiote 社群：

- 使用 GitHub Discussions 提問和分享想法
- 參與議題討論以提供回饋
- 審查其他貢獻者的拉取請求
- 分享您使用 Symbiote 的經驗
- 與在類似專案上工作的其他開發者建立連結

## 回報錯誤或問題

回報錯誤能幫助我們改善 Symbiote！在建立新議題前，請先[搜尋現有議題](https://github.com/RepairYourTech/Symbiote/issues)，避免重複回報。當您準備好回報錯誤時，請前往我們的 [議題頁面](https://github.com/RepairYourTech/Symbiote/issues/new/choose)，您將找到協助填寫相關資訊的範本。

> **重要：** 若您發現安全性漏洞，請透過 [GitHub 安全性通報工具進行私密回報](https://github.com/RepairYourTech/Symbiote/security/advisories/new)。

## 決定貢獻方向

正在尋找適合新手的貢獻機會嗎？請查看我們 [Symbiote 議題頁面](https://github.com/RepairYourTech/Symbiote/issues)中標記為「good first issue」的議題。這些議題特別適合新進貢獻者，也是我們最需要協助的領域！

我們也歡迎您對文件提出貢獻！無論是修正錯字、改善現有指南，或建立新的教學內容，我們都希望打造一個由社群推動的知識庫，協助每個人充分運用 Symbiote。

若您計畫開發較大型的功能，請先建立一個[功能請求](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests)，讓我們能討論該功能是否符合 Symbiote 的願景。您也可以參考下方的[專案藍圖](#專案藍圖)，確認您的想法是否符合我們的策略方向。

## 專案藍圖

Symbiote 擁有開發藍圖，指引我們的優先事項與未來方向。了解我們的藍圖能協助您：

- 讓您的貢獻與專案目標保持一致
- 找到最能發揮您專長的領域
- 理解特定設計決策的脈絡
- 為支援我們願景的新功能尋找靈感

目前的藍圖聚焦於這些核心支柱：

### 供應商支援

我們致力於完善各家 AI 供應商的支援：

- 多功能的「OpenAI 相容」支援
- 支援主要 AI 供應商，包括 Anthropic、Google、xAI、Microsoft Azure AI 等
- 透過 Ollama 和類似平台強化對本機模型的支援

### 隱私與安全

我們優先考量使用者隱私與安全：

- 無遙測或資料收集
- 可能時提供本機處理選項
- 透明的使用者資料處理

### 系統支援

我們希望 Symbiote 能在每個人的電腦上順暢運作：

- 跨平台終端機整合
- 為 Mac、Windows 與 Linux 提供穩定且一致的支援

### 文件

我們希望為所有使用者與貢獻者提供完整且易於取得的文件：

- 擴充使用者指南與教學
- 清晰的 API 文件
- 更完善的貢獻者指引
- 多語言文件資源

### 穩定性

我們希望顯著降低錯誤數量並增加自動化測試：

- 全面的測試覆蓋
- 除錯記錄功能
- 簡化的錯誤回報流程

### 國際化

我們希望 Symbiote 能讓全球使用者都能使用：

- 介面支援多種語言
- 本地化文件
- 社群主導的翻譯工作

我們特別歡迎推動藍圖目標的貢獻。如果您的貢獻符合這些核心支柱，請在 PR 描述中提及。

## 開發環境設定

1. **複製**儲存庫：

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **安裝相依套件**：

```sh
npm run install:all
```

3. **啟動網頁檢視（Vite/React 應用程式，支援 HMR）**：

```sh
npm run dev
```

4. **除錯**：
   在 VSCode 中按下 `F5`（或選擇**執行** → **開始除錯**）以開啟載入 Symbiote 的新工作階段。

網頁檢視的變更會立即顯示。核心擴充功能的變更則需要重新啟動擴充主機。

或者，您也可以建置 .vsix 檔案並直接在 VSCode 中安裝：

```sh
npm run build
```

建置完成後，`.vsix` 檔案會出現在 `bin/` 目錄中，可使用以下指令安裝：

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## 撰寫與提交程式碼

任何人都能為 Symbiote 貢獻程式碼，但請遵守以下準則，確保您的貢獻能順利整合：

1. **保持 Pull Request 聚焦**

    - 每個 PR 限制在單一功能或錯誤修正
    - 將較大的變更拆分成較小且相關的 PR
    - 將變更拆分成可獨立審查的邏輯提交

2. **程式碼品質**

    - 所有 PR 必須通過包含程式碼檢查與格式化的 CI 檢查
    - 提交前解決所有 ESLint 警告或錯誤
    - 回應 Ellipsis（我們的自動化程式碼審查工具）的所有建議
    - 遵循 TypeScript 最佳實務並維持型別安全

3. **測試**

    - 為新功能新增測試
    - 執行 `npm test` 確保所有測試通過
    - 如果變更影響現有測試，請更新測試
    - 在適當情況下包含單元測試和整合測試

4. **提交準則**

    - 撰寫清晰、具描述性的提交訊息
    - 使用 #issue-number 在提交中引用相關議題

5. **提交前**

    - 將您的分支重新基於最新的 main
    - 確保您的分支能成功建置
    - 再次檢查所有測試是否通過
    - 檢查您的變更中是否有任何除錯程式碼或主控台記錄

6. **PR 描述**
    - 清楚描述您的變更內容
    - 包含測試變更的步驟
    - 列出任何重大變更
    - 為使用者介面變更附上截圖

## 貢獻協議

透過提交 Pull Request，您同意您的貢獻將依照與專案相同的授權條款（[Apache 2.0](../LICENSE)）進行授權。

## 致謝

本貢獻指南改編自 [Roo Code 的貢獻指南](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md)，並進行了修改以反映 Symbiote 的特定需求和流程。
