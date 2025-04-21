import * as assert from "assert"
import * as vscode from "vscode"

suite("Symbiote Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"symbiote.plusButtonClicked",
			"symbiote.mcpButtonClicked",
			"symbiote.historyButtonClicked",
			"symbiote.popoutButtonClicked",
			"symbiote.settingsButtonClicked",
			"symbiote.openInNewTab",
			"symbiote.explainCode",
			"symbiote.fixCode",
			"symbiote.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
