// Copyright (C) 2022  Lucas Emanuel Resck
// Copyright (C) 2022  vakokako
// Copyright (C) 2021  Taiki Sugawara

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as AltTab from "resource:///org/gnome/shell/ui/altTab.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as CustomSwitcherPopup from "./src/switcherPopup.js";

export default class AltTabScrollWorkaroundExtension extends Extension {
  constructor(metadata) {
    super(metadata);

    this.origMethods = {
      windowSwitcherPopup: AltTab.WindowSwitcherPopup,
      appSwitcherPopup: AltTab.AppSwitcherPopup,
    };
  }

  enable() {
    AltTab.WindowSwitcherPopup.prototype["_finish"] =
      CustomSwitcherPopup.windowSwitcherPopup["_finish"];
    AltTab.AppSwitcherPopup.prototype["_finish"] =
      CustomSwitcherPopup.appSwitcherPopup["_finish"];
  }

  disable() {
    AltTab.WindowSwitcherPopup = this.origMethods["windowSwitcherPopup"];
    AltTab.AppSwitcherPopup = this.origMethods["appSwitcherPopup"];
  }
}
