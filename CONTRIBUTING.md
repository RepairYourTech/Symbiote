# Contributing to Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Based on <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Forked%20from-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Forked from Roo Code">
  </a>
</div>

We're thrilled you're interested in contributing to Symbiote. Whether you're fixing a bug, adding a feature, or improving our docs, every contribution makes Symbiote smarter! To keep our community vibrant and welcoming, all members must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## Community Engagement

We encourage all contributors to engage with the Symbiote community through GitHub:

- Use GitHub Discussions for questions and ideas
- Participate in issue discussions to provide feedback
- Review pull requests from other contributors
- Share your experiences using Symbiote
- Connect with other developers working on similar projects

## Reporting Bugs or Issues

Bug reports help make Symbiote better for everyone! Before creating a new issue, please [search existing ones](https://github.com/RepairYourTech/Symbiote/issues) to avoid duplicates. When you're ready to report a bug, head over to our [issues page](https://github.com/RepairYourTech/Symbiote/issues/new/choose) where you'll find a template to help you with filling out the relevant information.

> **Important:** If you discover a security vulnerability, please use the [GitHub security tool to report it privately](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Deciding What to Work On

Looking for a good first contribution? Check out issues labeled with "good first issue" in our [Symbiote Issues](https://github.com/RepairYourTech/Symbiote/issues) page. These are specifically curated for new contributors and areas where we'd love some help!

We also welcome contributions to our documentation! Whether it's fixing typos, improving existing guides, or creating new educational content - we'd love to build a community-driven repository of resources that helps everyone get the most out of Symbiote.

If you're planning to work on a bigger feature, please create a [feature request](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) first so we can discuss whether it aligns with Symbiote's vision. You may also want to check our [Project Roadmap](#project-roadmap) below to see if your idea fits with our strategic direction.

## Project Roadmap

Symbiote has a development roadmap that guides our priorities and future direction. Understanding our roadmap can help you:

- Align your contributions with project goals
- Identify areas where your expertise would be most valuable
- Understand the context behind certain design decisions
- Find inspiration for new features that support our vision

Our current roadmap focuses on these key pillars:

### Provider Support

We aim to support as many AI providers as possible:

- Versatile "OpenAI Compatible" support
- Support for major AI providers including Anthropic, Google, xAI, Microsoft Azure AI, and more
- Enhanced support for local models through Ollama and similar platforms

### Privacy and Security

We prioritize user privacy and security:

- No telemetry or data collection
- Local processing options where possible
- Transparent handling of user data

### System Support

We want Symbiote to run well on everyone's computer:

- Cross platform terminal integration
- Strong and consistent support for Mac, Windows, and Linux

### Documentation

We want comprehensive, accessible documentation for all users and contributors:

- Expanded user guides and tutorials
- Clear API documentation
- Better contributor guidance
- Multilingual documentation resources

### Stability

We want to significantly decrease the number of bugs and increase automated testing:

- Comprehensive test coverage
- Debug logging capabilities
- Streamlined bug reporting process

### Internationalization

We want Symbiote to be accessible to users worldwide:

- Support for multiple languages in the interface
- Localized documentation
- Community-driven translation efforts

We especially welcome contributions that advance our roadmap goals. If you're working on something that aligns with these pillars, please mention it in your PR description.

## Development Setup

1. **Clone** the repo:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Install dependencies**:

```sh
npm run install:all
```

3. **Start the webview (Vite/React app with HMR)**:

```sh
npm run dev
```

4. **Debug**:
   Press `F5` (or **Run** → **Start Debugging**) in VSCode to open a new session with Symbiote loaded.

Changes to the webview will appear immediately. Changes to the core extension will require a restart of the extension host.

Alternatively you can build a .vsix and install it directly in VSCode:

```sh
npm run build
```

A `.vsix` file will appear in the `bin/` directory which can be installed with:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Writing and Submitting Code

Anyone can contribute code to Symbiote, but we ask that you follow these guidelines to ensure your contributions can be smoothly integrated:

1. **Keep Pull Requests Focused**

    - Limit PRs to a single feature or bug fix
    - Split larger changes into smaller, related PRs
    - Break changes into logical commits that can be reviewed independently

2. **Code Quality**

    - All PRs must pass CI checks which include both linting and formatting
    - Address any ESLint warnings or errors before submitting
    - Respond to all feedback from Ellipsis, our automated code review tool
    - Follow TypeScript best practices and maintain type safety

3. **Testing**

    - Add tests for new features
    - Run `npm test` to ensure all tests pass
    - Update existing tests if your changes affect them
    - Include both unit tests and integration tests where appropriate

4. **Commit Guidelines**

    - Write clear, descriptive commit messages
    - Reference relevant issues in commits using #issue-number

5. **Before Submitting**

    - Rebase your branch on the latest main
    - Ensure your branch builds successfully
    - Double-check all tests are passing
    - Review your changes for any debugging code or console logs

6. **Pull Request Description**
    - Clearly describe what your changes do
    - Include steps to test the changes
    - List any breaking changes
    - Add screenshots for UI changes

## Contribution Agreement

By submitting a pull request, you agree that your contributions will be licensed under the same license as the project ([Apache 2.0](LICENSE)).

## Acknowledgment

This contributing guide is adapted from [Roo Code's contributing guide](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), with modifications to reflect Symbiote's specific requirements and processes.
