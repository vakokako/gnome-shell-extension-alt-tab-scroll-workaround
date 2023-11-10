# GNOME Shell Extension Alt+Tab Scroll Workaround

> Quick fix to the bug where scrolling in one application is repeated in another when switching between them using `Alt+Tab` (e.g., VS Code and Chrome)

As an example, after scrolling VS Code and switching to Chrome using `Alt+Tab` or `Super+Tab`, the VS Code scroll would be repeated in Chrome. Installing the extension should avoid this.

This bug is described in several open issues:
- https://github.com/Microsoft/vscode/issues/28795
- https://github.com/pop-os/pop/issues/2331
- https://github.com/atom/atom/issues/15482
- GitLab: [GNOME/mutter#401](https://gitlab.gnome.org/GNOME/mutter/-/issues/401)
- Chromium: [chromium#608246](https://bugs.chromium.org/p/chromium/issues/detail?id=608246)
- Chromium: [chromium#807187](https://bugs.chromium.org/p/chromium/issues/detail?id=807187)

## GNOME 45!

The extension also supports GNOME 45 now! It is already available at branch [`develop`](https://github.com/lucasresck/gnome-shell-extension-alt-tab-scroll-workaround/tree/develop), but it will be soon available at GNOME Extensions too. Follow the GitHub installation instructions but check out to the `develop` branch before installation. Make sure to close all windows before restarting the GNOME Shell, otherwise GNOME may crash.

## Usage

### Installation from GNOME Extensions

The extension can be found at the GNOME Extensions website: [Alt+Tab Scroll Workaround](https://extensions.gnome.org/extension/5282/alttab-scroll-workaround/). Just open the page, turn the extension on, and you're ready to go.

### Installation from GitHub

If, instead, you prefer to install it from this repository, follow the next steps.

Clone and enter the repository:
```
git clone https://github.com/lucasresck/gnome-shell-extension-alt-tab-scroll-workaround.git
cd gnome-shell-extension-alt-tab-scroll-workaround
```

Install the extension:
```
make install
```

Restart the GNOME Shell:

- Press `Alt+F2`;
- Type `r` and press `Enter`.

> At this point, the extension should be enabled. If not:
> ```
> make enable
> ```

## License
GPLv3
