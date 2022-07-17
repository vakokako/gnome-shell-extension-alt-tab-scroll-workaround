# GNOME Shell Extension Alt-Tab Scroll Workaround

Temporary fix for a bug that buffers the scroll between different windows (e.g., Chrome and VS Code)

This extension is a workaround for the following bug:
- https://github.com/Microsoft/vscode/issues/28795

## Installation

Install the requirements:
```
sudo apt install jq
```

Clone and enter this repository:
```
git clone https://github.com/lucasresck/gnome-shell-extension-alt-tab-scroll-workaround.git
cd gnome-shell-extension-alt-tab-scroll-workaround
```

Install the extension:
```
make install
```

Restart the GNOME Shell:
- Press `Alt + F2`;
- Type `restart`.

> At this point, the extension should be enabled. If not:
> ```
> make enable
> ```

## License
GPLv3
