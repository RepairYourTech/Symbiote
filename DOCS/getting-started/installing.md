# Installing Symbiote

Symbiote is a VS Code extension that brings AI-powered coding assistance directly to your editor. Install using one of these methods:

1. **VS Code Marketplace (Recommended)** - fastest method for standard VS Code and Cursor users
2. **Open VSX Registry** - for VS Code-compatible editors like VSCodium

## VS Code Marketplace

1. Open VS Code
2. Access Extensions: Click the Extensions icon in the Activity Bar or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Symbiote"
4. Select "Symbiote" by RepairYourTech and click **Install**
5. Reload VS Code if prompted

After installation, find the Symbiote icon in the Activity Bar to open the Symbiote panel.

## Open VSX Registry

For VS Code-compatible editors without Marketplace access (like VSCodium and Windsurf):

1. Open your editor
2. Access the Extensions view
3. Search for "Symbiote"
4. Select "Symbiote" by RepairYourTech and click **Install**
5. Reload if prompted

## Manual Installation from VSIX

If you prefer to download and install the VSIX file directly:

1. **Download the VSIX file:**
   * Find official releases on the [Symbiote GitHub Releases page](https://github.com/RepairYourTech/Symbiote/releases)
   * Download the `.vsix` file from the latest release
2. **Install in VS Code:**
   * Open VS Code
   * Access Extensions view
   * Click the "..." menu in the Extensions view
   * Select "Install from VSIX..."
   * Browse to and select your downloaded `.vsix` file

## Development Builds

Developer Information Only

This section is intended only for developers contributing to Symbiote.

If you're building Symbiote from source:

1. Run `npm run build` in the project directory
2. Find the generated VSIX file in the `bin/` directory
3. In VS Code, open Extensions view and select "Install from VSIX..." from the "..." menu
4. Browse to and select your generated `.vsix` file

## Troubleshooting

**Extension Not Visible**

* Restart VS Code
* Verify Symbiote is listed and enabled in Extensions
* Try disabling and re-enabling
* Check Output panel for errors (View → Output, select "Symbiote")

**Installation Problems**

* Ensure stable internet connection
* Verify VS Code version 1.84.0 or later
* If VS Code Marketplace is inaccessible, try the Open VSX Registry method
