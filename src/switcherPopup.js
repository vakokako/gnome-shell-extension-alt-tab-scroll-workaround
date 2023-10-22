import * as AltTab from "resource:///org/gnome/shell/ui/altTab.js";
import movePointer from "./pointer.js";

export const windowSwitcherPopup = {
  _finish() {
    movePointer();
    AltTab.WindowSwitcherPopup.prototype._finish.bind(this)();
  },
};

export const appSwitcherPopup = {
  _finish(timestamp) {
    if (this._currentWindow < 0) {
      movePointer();
    }
    AltTab.AppSwitcherPopup.prototype._finish.bind(this)(timestamp);
  },
};
