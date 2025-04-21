# Frequently Asked Questions

This page answers some common questions about Symbiote.

## General

### What is Symbiote?

Symbiote is an AI-powered autonomous coding agent that lives in your editor.

### How does Symbiote work?

Symbiote uses large language models (LLMs) to understand your requests and translate them into actions. It can:

* Read and write files in your project.
* Execute commands in your VS Code terminal.
* Perform web browsing (if enabled).
* Use external tools via the Model Context Protocol (MCP).

You interact with Symbiote through a chat interface, where you provide instructions and review/approve its proposed actions.

### What can Symbiote do?

Symbiote can help with a variety of coding tasks, including:

* Generating code from natural language descriptions.
* Refactoring existing code.
* Fixing bugs.
* Writing documentation.
* Explaining code.
* Answering questions about your codebase.
* Automating repetitive tasks.
* Creating new files and projects.

### Is Symbiote free to use?

The Symbiote extension itself is free and open-source. However, Symbiote relies on external API providers (like [Anthropic](/providers/anthropic), [OpenAI](/providers/openai), [OpenRouter](/providers/openrouter), [Requesty](/providers/requesty), etc.) for its AI capabilities. These providers typically charge for API usage based on the number of tokens processed. You will need to create an account and obtain an API key from your chosen provider. See [Setting Up Your First AI Provider](/getting-started/connecting-api-provider) for details.

### What are the risks of using Symbiote?

Symbiote is a powerful tool, and it's important to use it responsibly. Here are some things to keep in mind:

* **Symbiote can make mistakes.** Always review Symbiote's proposed changes carefully before approving them.
* **Symbiote can execute commands.** Be very cautious about allowing Symbiote to run commands, especially if you're using auto-approval.
* **Symbiote can access the internet.** If you're using a provider that supports web browsing, be aware that Symbiote could potentially access sensitive information.

## Setup & Installation

### How do I install Symbiote?

See the [Installation Guide](/getting-started/installing) for detailed instructions.

### Which API providers are supported?

Symbiote supports a wide range of API providers, including:

* [Anthropic (Claude)](/providers/anthropic)
* [OpenAI](/providers/openai)
* [OpenRouter](/providers/openrouter)
* [Google Gemini](/providers/gemini)
* [Glama](/providers/glama)
* [AWS Bedrock](/providers/bedrock)
* [GCP Vertex AI](/providers/vertex)
* [Ollama](/providers/ollama)
* [LM Studio](/providers/lmstudio)
* [DeepSeek](/providers/deepseek)
* [Mistral](/providers/mistral)
* [Unbound](/providers/unbound)
* [Requesty](/providers/requesty)
* [VS Code Language Model API](/providers/vscode-lm)

### How do I get an API key?

Each API provider has its own process for obtaining an API key. See the [Setting Up Your First AI Provider](/getting-started/connecting-api-provider) for links to the relevant documentation for each provider.

### Can I use Symbiote with local models?

Yes, Symbiote supports running models locally using [Ollama](/providers/ollama) and [LM Studio](/providers/lmstudio). See [Using Local Models](/advanced-usage/local-models) for instructions.

## Usage

### How do I start a new task?

Open the Symbiote panel and type your task in the chat box. Be clear and specific about what you want Symbiote to do. See [Typing Your Requests](/basic-usage/typing-your-requests) for best practices.

### What are modes in Symbiote?

[Modes](/basic-usage/using-modes) are different personas that Symbiote can adopt, each with a specific focus and set of capabilities. The built-in modes are:

* **Code:** For general-purpose coding tasks.
* **Architect:** For planning and technical leadership.
* **Ask:** For answering questions and providing information.
* **Debug:** For systematic problem diagnosis. You can also create [Custom Modes](/features/custom-modes).

### How do I switch between modes?

Use the dropdown menu in the chat input area to select a different mode, or use the `/` command to switch to a specific mode.

### What are tools and how do I use them?

[Tools](/basic-usage/how-tools-work) are how Symbiote interacts with your system. Symbiote automatically selects and uses the appropriate tools to complete your tasks. You don't need to call tools directly. You will be prompted to approve or reject each tool use.

### What are context mentions?

[Context mentions](/basic-usage/context-mentions) are a way to provide Symbiote with specific information about your project, such as files, folders, or problems. Use the "@" symbol followed by the item you want to mention (e.g., `@/src/file.ts`, `@problems`).

### Can Symbiote access the internet?

Yes, if you are using a provider with a model that support web browsing. Be mindful of the security implications of allowing this.

### Can Symbiote run commands in my terminal?

Yes, Symbiote can execute commands in your VS Code terminal. You will be prompted to approve each command before it's executed, unless you've enabled auto-approval for commands. Be extremely cautious about auto-approving commands. If you're experiencing issues with terminal commands, see the [Shell Integration Guide](/features/shell-integration) for troubleshooting.

### How do I provide feedback to Symbiote?

You can provide feedback by approving or rejecting Symbiote's proposed actions. You can provide additional feedback by using the feedback field.

### Can I customize Symbiote's behavior?

Yes, you can customize Symbiote in several ways:

* **Custom Instructions:** Provide general instructions that apply to all modes, or mode-specific instructions.
* **Custom Modes:** Create your own modes with tailored prompts and tool permissions.
* **`.symbiote-rules` Files:** Create `.symbiote-rules` files in your project to provide additional guidelines.
* **Settings:** Adjust various settings, such as auto-approval, diff editing, and more.

### Does Symbiote have any auto approval settings?

Yes, Symbiote has a few settings that when enabled will automatically approve actions. Find out more [here](/features/auto-approving-actions).

## Advanced Features

### Can I use Symbiote offline?

Yes, if you use a [local model](/advanced-usage/local-models).

### What is MCP (Model Context Protocol)?

[MCP](/features/mcp/overview) is a protocol that allows Symbiote to communicate with external servers, extending its capabilities with custom tools and resources.

### Can I create my own MCP servers?

Yes, you can create your own MCP servers to add custom functionality to Symbiote. See the [MCP documentation](https://github.com/modelcontextprotocol) for details.

## Troubleshooting

### Symbiote isn't responding. What should I do?

* Make sure your API key is correct and hasn't expired.
* Check your internet connection.
* Check the status of your chosen API provider.
* Try restarting VS Code.
* If the problem persists, report the issue on [GitHub](https://github.com/RepairYourTech/Symbiote/issues).

### I'm seeing an error message. What does it mean?

The error message should provide some information about the problem. If you're unsure how to resolve it, seek help in the community forums.

### Symbiote made changes I didn't want. How do I undo them?

Symbiote uses VS Code's built-in file editing capabilities. You can use the standard "Undo" command (Ctrl/Cmd + Z) to revert changes. Also, if experimental checkpoints are enabled, Symbiote can revert changes made to a file.

### How do I report a bug or suggest a feature?

Please report bugs or suggest features on the Symbiote [Issues page](https://github.com/RepairYourTech/Symbiote/issues).
