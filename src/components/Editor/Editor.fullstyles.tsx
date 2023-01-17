import { createGlobalStyle } from 'styled-components';

export const EditorFullGlobal = createGlobalStyle`
			.auto-height,
			.auto-height .tui-editor-defaultUI {
				height: auto;
			}

			.auto-height .tui-editor {
				position: relative;
			}

			:not(.auto-height) > .tui-editor-defaultUI,
			:not(.auto-height) > .tui-editor-defaultUI > .te-editor-section {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-direction: column;
				flex-direction: column;
			}

			:not(.auto-height) > .tui-editor-defaultUI > .te-editor-section {
				-ms-flex: 1;
				flex: 1;
			}

			/* tui editor */
			.tui-editor:after,
			.tui-editor-defaultUI-toolbar:after {
				content: '';
				display: block;
				height: 0;
				clear: both;
			}

			.tui-editor {
				position: absolute;
				line-height: 1;
				color: #222;
				width: 100%;
				height: inherit;
			}

			.te-editor-section {
				min-height: 0px;
				position: relative;
				height: inherit;
			}

			.te-md-container {
				display: none;
				overflow: hidden;
				height: 100%;
			}

			.te-md-container .te-editor {
				line-height: 1.5;
			}

			.te-md-container .te-editor,
			.te-md-container .te-preview {
				box-sizing: border-box;
				padding: 0;
				height: inherit;
			}

			.te-md-container .CodeMirror {
				font-size: 13px;
				height: inherit;
			}

			.te-md-container .te-preview {
				overflow: auto;
				padding: 0 25px;
				height: 100%;
			}

			.te-md-container .te-preview > p:first-of-type {
				margin-top: 0 !important;
			}

			.te-md-container .te-preview .tui-editor-contents {
				padding-top: 8px;
			}

			.tui-editor .te-preview-style-tab > .te-editor,
			.tui-editor .te-preview-style-tab > .te-preview {
				float: left;
				width: 100%;
				display: none;
			}

			.tui-editor .te-preview-style-tab > .te-tab-active {
				display: block;
			}

			.tui-editor .te-preview-style-vertical > .te-tab-section {
				display: none;
			}

			.tui-editor .te-preview-style-tab > .te-tab-section {
				display: block;
			}

			.tui-editor .te-preview-style-vertical .te-editor {
				float: left;
				width: 50%;
			}

			.tui-editor .te-preview-style-vertical .te-preview {
				float: left;
				width: 50%;
			}

			.tui-editor .te-md-splitter {
				display: none;
				position: absolute;
				left: 50%;
				top: 0;
				height: 100%;
				width: 1px;
				border-left: 1px solid #e5e5e5;
			}

			.tui-editor .te-preview-style-vertical .te-md-splitter {
				display: block;
			}

			.te-ww-container {
				display: none;
				overflow: hidden;
				z-index: 10;
				height: inherit;
				background-color: #fff;
			}

			.te-ww-container > .te-editor {
				overflow: auto;
				height: inherit;
			}

			.te-ww-container .tui-editor-contents:focus {
				outline: none;
			}

			.te-ww-container .tui-editor-contents {
				padding: 0 25px;
			}

			.te-ww-container .tui-editor-contents:first-of-type {
				box-sizing: border-box;
				margin: 0px;
				padding: 16px 25px 0px 25px;
				height: inherit;
			}

			.te-ww-container .tui-editor-contents:last-child {
				margin-bottom: 16px;
			}

			.te-md-mode .te-md-container {
				display: block;
				z-index: 100;
			}

			.te-ww-mode .te-ww-container {
				display: block;
				z-index: 100;
			}

			.tui-editor.te-hide,
			.tui-editor-defaultUI.te-hide {
				display: none;
			}

			.tui-editor-defaultUI .CodeMirror-lines {
				padding-top: 18px;
				padding-bottom: 18px;
			}

			.tui-editor-defaultUI pre.CodeMirror-line {
				padding-left: 25px;
				padding-right: 25px;
			}

			.tui-editor-defaultUI .CodeMirror pre.CodeMirror-placeholder {
				margin: 0;
				padding-left: 25px;
				color: grey;
			}

			.tui-editor-defaultUI .CodeMirror-scroll {
				cursor: text;
			}

			/* Essential element style */
			.tui-editor-contents td.te-cell-selected {
				background-color: #d8dfec;
			}
			.tui-editor-contents td.te-cell-selected::selection {
				background-color: #d8dfec;
			}
			.tui-editor-contents th.te-cell-selected {
				background-color: #908f8f;
			}
			.tui-editor-contents th.te-cell-selected::selection {
				background-color: #908f8f;
			}

			/* default UI Styles */
			.tui-editor-defaultUI {
				position: relative;
				border: 1px solid #e5e5e5;
				height: 100%;
				font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
			}

			.tui-editor-defaultUI button {
				color: #fff;
				padding: 0px 14px 0px 15px;
				height: 28px;
				font-size: 12px;
				border: none;
				cursor: pointer;
				outline: none;
			}
			.tui-editor-defaultUI button.te-ok-button {
				background-color: #4b96e6;
			}
			.tui-editor-defaultUI button.te-close-button {
				background-color: #777;
			}

			.tui-editor-defaultUI-toolbar {
				padding: 0 25px;
				height: 31px;
				background-color: #fff;
				border: 0;
				overflow: hidden;
			}

			.tui-toolbar-divider {
				float: left;
				display: inline-block;
				width: 1px;
				height: 14px;
				background-color: #ddd;
				margin: 9px 6px;
			}

			.tui-toolbar-button-group {
				height: 28px;
				border-right: 1px solid #d9d9d9;
				float: left;
			}

			.te-toolbar-section {
				height: 32px;
				box-sizing: border-box;
				border-bottom: 1px solid #e5e5e5;
			}

			.tui-editor-defaultUI-toolbar button {
				float: left;
				box-sizing: border-box;
				outline: none;
				cursor: pointer;
				background-color: #fff;
				width: 22px;
				height: 22px;
				padding: 3px;
				border-radius: 0;
				margin: 5px 3px;
				border: 1px solid #fff;
			}

			.tui-editor-defaultUI-toolbar button:hover,
			.tui-editor-defaultUI-toolbar button:active,
			.tui-editor-defaultUI-toolbar button.active {
				border: 1px solid #aaa;
				background-color: #fff;
			}

			.tui-editor-defaultUI-toolbar button:first-of-type {
				margin-left: 0;
			}

			.tui-editor-defaultUI-toolbar button:last-child {
				margin-right: 0;
			}

			.tui-editor-defaultUI-toolbar button.tui-scrollsync {
				width: auto;
				color: #777777;
				border: 0;
			}

			.tui-editor-defaultUI button.tui-scrollsync:after {
				content: 'Scroll off';
			}

			.tui-editor-defaultUI button.tui-scrollsync.active {
				color: #4b96e6;
				font-weight: bold;
			}

			.tui-editor-defaultUI button.tui-scrollsync.active:after {
				content: 'Scroll on';
			}

			.tui-editor-defaultUI .te-mode-switch-section {
				background-color: #f9f9f9;
				border-top: 1px solid #e5e5e5;
				height: 20px;
				font-size: 12px;
			}

			.tui-editor-defaultUI .te-mode-switch {
				float: right;
				height: 100%;
			}

			.tui-editor-defaultUI .te-switch-button {
				width: 92px;
				height: inherit;
				background: #e5e5e5;
				outline: 0;
				color: #a0aabf;
				cursor: pointer;
				border: 0;
				border-left: 1px solid #ddd;
				border-right: 1px solid #ddd;
			}

			.tui-editor-defaultUI .te-switch-button.active {
				background-color: #fff;
				color: #000;
			}

			.tui-editor-defaultUI .te-markdown-tab-section {
				float: left;
				height: 31px;
				background: #fff;
			}

			.te-markdown-tab-section .te-tab {
				margin: 0 -7px 0 24px;
				background: #fff;
			}

			.tui-editor-defaultUI .te-tab button {
				box-sizing: border-box;
				line-height: 100%;
				position: relative;
				cursor: pointer;
				z-index: 1;
				font-size: 13px;
				background-color: #f9f9f9;
				border: solid 1px #e5e5e5;
				border-top: 0;
				padding: 0 9px;
				color: #777;
				border-radius: 0;
				outline: 0;
			}

			.te-markdown-tab-section .te-tab button:last-child {
				margin-left: -1px;
			}

			.te-markdown-tab-section .te-tab button.te-tab-active,
			.te-markdown-tab-section .te-tab button:hover.te-tab-active {
				background-color: #fff;
				color: #333;
				border-bottom: 1px solid #fff;
				z-index: 2;
			}

			.te-markdown-tab-section .te-tab button:hover {
				background-color: #fff;
				color: #333;
			}

			.tui-popup-modal-background {
				background-color: rgba(202, 202, 202, 0.6);
				position: fixed;
				margin: 0px;
				left: 0px;
				top: 0px;
				width: 100%;
				height: 100%;
				z-index: 9999;
			}

			.tui-popup-wrapper.fit-window,
			.tui-popup-modal-background.fit-window .tui-popup-wrapper {
				width: 100%;
				height: 100%;
			}

			.tui-popup-wrapper {
				width: 500px;
				margin-right: auto;
				border: 1px solid #cacaca;
				background: white;
				z-index: 9999;
			}

			.tui-popup-modal-background .tui-popup-wrapper {
				position: absolute;
				margin: auto;
				top: 0px;
				right: 0px;
				bottom: 0px;
				left: 0px;
			}

			.tui-popup-header {
				padding: 10px;
				height: auto;
				line-height: normal;
				position: relative;
				border-bottom: 1px solid #cacaca;
			}

			.tui-popup-header .tui-popup-header-buttons {
				float: right;
			}

			.tui-popup-header .tui-popup-header-buttons button {
				padding: 0px;
				background-color: transparent;
				background-size: cover;
				float: left;
			}

			.tui-popup-header .tui-popup-close-button {
				margin: 3px;
				width: 13px;
				height: 13px;
				background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAxMCAxMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5GMjc2Qzc4MC0zM0JBLTQ3MTItQTM3OC04RkQwQUNDOTFDRTk8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImxuYi1mb2xkZXItZGVsIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM3Nzc3NzciPiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDMuNTg1Nzg2NDQgTDEuNzA3MTA2NzgsMC4yOTI4OTMyMTkgTDAuMjkyODkzMjE5LDEuNzA3MTA2NzggTDMuNTg1Nzg2NDQsNSBMMC4yOTI4OTMyMTksOC4yOTI4OTMyMiBMMS43MDcxMDY3OCw5LjcwNzEwNjc4IEw1LDYuNDE0MjEzNTYgTDguMjkyODkzMjIsOS43MDcxMDY3OCBMOS43MDcxMDY3OCw4LjI5Mjg5MzIyIEw2LjQxNDIxMzU2LDUgTDkuNzA3MTA2NzgsMS43MDcxMDY3OCBMOC4yOTI4OTMyMiwwLjI5Mjg5MzIxOSBMNSwzLjU4NTc4NjQ0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+');
			}

			.tui-popup-header .tui-popup-title {
				font-size: 13px;
				font-weight: bold;
				color: #333;
				vertical-align: bottom;
			}

			.tui-popup-body {
				padding: 15px;
				font-size: 12px;
			}

			.tui-editor-popup {
				position: absolute;
				top: 30px;
				left: 50%;
				margin-left: -250px;
			}

			.tui-editor-popup.tui-popup-modal-background {
				position: fixed;
				top: 0px;
				left: 0px;
				margin: 0px;
			}

			.tui-editor-popup .tui-popup-body label {
				font-weight: bold;
				color: #666;
				display: block;
				margin: 10px 0 5px;
			}

			.tui-editor-popup .tui-popup-body .te-button-section {
				margin-top: 15px;
			}

			.tui-editor-popup .tui-popup-body input[type='text'],
			.tui-editor-popup .tui-popup-body input[type='file'] {
				padding: 4px 10px;
				border: 1px solid #bfbfbf;
				box-sizing: border-box;
				width: 100%;
			}

			.tui-editor-popup .tui-popup-body input.wrong {
				border-color: #ff0000;
			}

			.te-popup-add-link .tui-popup-wrapper {
				height: 219px;
			}

			.te-popup-add-image .tui-popup-wrapper {
				height: 243px;
			}

			.te-popup-add-image .te-tab {
				display: block;
				background: none;
				border-bottom: 1px solid #ebebeb;
				margin-bottom: 8px;
			}

			.te-popup-add-image .te-url-type {
				display: none;
			}

			.te-popup-add-image .te-file-type {
				display: none;
			}

			.te-popup-add-image div.te-tab-active,
			.te-popup-add-image form.te-tab-active {
				display: block;
			}

			.te-popup-add-image .te-tab button {
				border: 1px solid #ccc;
				background: #eee;
				min-width: 100px;
				margin-left: -1px;
				border-bottom: 0px;
				border-radius: 3px 3px 0px 0px;
			}

			.te-popup-add-image .te-tab button.te-tab-active {
				background: #fff;
			}

			.te-popup-add-table .te-table-selection {
				position: relative;
			}

			.te-popup-add-table .te-table-body {
				background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAC7mlDQ1BJQ0MgUHJvZmlsZQAAeAGFVM9rE0EU/jZuqdAiCFprDrJ4kCJJWatoRdQ2/RFiawzbH7ZFkGQzSdZuNuvuJrWliOTi0SreRe2hB/+AHnrwZC9KhVpFKN6rKGKhFy3xzW5MtqXqwM5+8943731vdt8ADXLSNPWABOQNx1KiEWlsfEJq/IgAjqIJQTQlVdvsTiQGQYNz+Xvn2HoPgVtWw3v7d7J3rZrStpoHhP1A4Eea2Sqw7xdxClkSAog836Epx3QI3+PY8uyPOU55eMG1Dys9xFkifEA1Lc5/TbhTzSXTQINIOJT1cVI+nNeLlNcdB2luZsbIEL1PkKa7zO6rYqGcTvYOkL2d9H5Os94+wiHCCxmtP0a4jZ71jNU/4mHhpObEhj0cGDX0+GAVtxqp+DXCFF8QTSeiVHHZLg3xmK79VvJKgnCQOMpkYYBzWkhP10xu+LqHBX0m1xOv4ndWUeF5jxNn3tTd70XaAq8wDh0MGgyaDUhQEEUEYZiwUECGPBoxNLJyPyOrBhuTezJ1JGq7dGJEsUF7Ntw9t1Gk3Tz+KCJxlEO1CJL8Qf4qr8lP5Xn5y1yw2Fb3lK2bmrry4DvF5Zm5Gh7X08jjc01efJXUdpNXR5aseXq8muwaP+xXlzHmgjWPxHOw+/EtX5XMlymMFMXjVfPqS4R1WjE3359sfzs94i7PLrXWc62JizdWm5dn/WpI++6qvJPmVflPXvXx/GfNxGPiKTEmdornIYmXxS7xkthLqwviYG3HCJ2VhinSbZH6JNVgYJq89S9dP1t4vUZ/DPVRlBnM0lSJ93/CKmQ0nbkOb/qP28f8F+T3iuefKAIvbODImbptU3HvEKFlpW5zrgIXv9F98LZua6N+OPwEWDyrFq1SNZ8gvAEcdod6HugpmNOWls05Uocsn5O66cpiUsxQ20NSUtcl12VLFrOZVWLpdtiZ0x1uHKE5QvfEp0plk/qv8RGw/bBS+fmsUtl+ThrWgZf6b8C8/UXAeIuJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVQ4EWO8e/fuPwYGBkYgphlgAZmspKREMwtABjPR1HSo4aOWkBTKo8E1GlwkhQBJikdT1wgNLgAMSwQgckFvTgAAAABJRU5ErkJggg==');
			}

			.te-popup-add-table .te-table-header {
				background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAC7mlDQ1BJQ0MgUHJvZmlsZQAAeAGFVM9rE0EU/jZuqdAiCFprDrJ4kCJJWatoRdQ2/RFiawzbH7ZFkGQzSdZuNuvuJrWliOTi0SreRe2hB/+AHnrwZC9KhVpFKN6rKGKhFy3xzW5MtqXqwM5+8943731vdt8ADXLSNPWABOQNx1KiEWlsfEJq/IgAjqIJQTQlVdvsTiQGQYNz+Xvn2HoPgVtWw3v7d7J3rZrStpoHhP1A4Eea2Sqw7xdxClkSAog836Epx3QI3+PY8uyPOU55eMG1Dys9xFkifEA1Lc5/TbhTzSXTQINIOJT1cVI+nNeLlNcdB2luZsbIEL1PkKa7zO6rYqGcTvYOkL2d9H5Os94+wiHCCxmtP0a4jZ71jNU/4mHhpObEhj0cGDX0+GAVtxqp+DXCFF8QTSeiVHHZLg3xmK79VvJKgnCQOMpkYYBzWkhP10xu+LqHBX0m1xOv4ndWUeF5jxNn3tTd70XaAq8wDh0MGgyaDUhQEEUEYZiwUECGPBoxNLJyPyOrBhuTezJ1JGq7dGJEsUF7Ntw9t1Gk3Tz+KCJxlEO1CJL8Qf4qr8lP5Xn5y1yw2Fb3lK2bmrry4DvF5Zm5Gh7X08jjc01efJXUdpNXR5aseXq8muwaP+xXlzHmgjWPxHOw+/EtX5XMlymMFMXjVfPqS4R1WjE3359sfzs94i7PLrXWc62JizdWm5dn/WpI++6qvJPmVflPXvXx/GfNxGPiKTEmdornIYmXxS7xkthLqwviYG3HCJ2VhinSbZH6JNVgYJq89S9dP1t4vUZ/DPVRlBnM0lSJ93/CKmQ0nbkOb/qP28f8F+T3iuefKAIvbODImbptU3HvEKFlpW5zrgIXv9F98LZua6N+OPwEWDyrFq1SNZ8gvAEcdod6HugpmNOWls05Uocsn5O66cpiUsxQ20NSUtcl12VLFrOZVWLpdtiZ0x1uHKE5QvfEp0plk/qv8RGw/bBS+fmsUtl+ThrWgZf6b8C8/UXAeIuJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVQ4EWO8e/fuPwYGBkYgphlgAZksLCxMMwtABjPR1HSo4aOWkBTKo8E1GlwkhQBJikdT1wgNLgDxKwPzTeWPdAAAAABJRU5ErkJggg==');
			}

			.te-popup-add-table .te-selection-area {
				position: absolute;
				top: 0;
				left: 0;
				background: #80d2ff;
				opacity: 0.3;
				z-index: 999;
			}

			.te-popup-add-table .te-description {
				margin: 10px 0 0 0;
				text-align: center;
			}

			.te-popup-table-utils {
				width: auto;
				min-width: 120px;
			}

			.te-popup-table-utils .tui-popup-body {
				padding: 0px;
			}

			.te-popup-table-utils button {
				display: block;
				width: 100%;
				background-color: #fff;
				border: none;
				outline: 0;
				padding: 0px 10px 0px 10px;
				font-size: 12px;
				line-height: 28px;
				text-align: left;
				color: #777;
			}

			.te-popup-table-utils button:hover {
				background-color: #f4f4f4;
			}

			.te-popup-table-utils hr {
				margin: 0;
				background-color: #cacaca;
				border-style: none;
				height: 1px;
			}

			.te-popup-table-utils .te-context-menu-disabled {
				color: #ccc;
			}

			.te-popup-table-utils .te-context-menu-disabled:hover {
				background-color: #fff;
			}

			.te-heading-add {
				width: auto;
			}

			.te-heading-add .tui-popup-body {
				padding: 0;
			}

			.te-heading-add h1,
			.te-heading-add h2,
			.te-heading-add h3,
			.te-heading-add h4,
			.te-heading-add h5,
			.te-heading-add h6,
			.te-heading-add ul,
			.te-heading-add p {
				padding: 0;
				margin: 0;
			}

			.te-heading-add ul {
				list-style: none;
			}

			.te-heading-add ul li {
				padding: 2px 10px;
				cursor: pointer;
			}

			.te-heading-add ul li:hover {
				background-color: #eee;
			}

			.te-heading-add h1 {
				font-size: 24px;
			}

			.te-heading-add h2 {
				font-size: 22px;
			}

			.te-heading-add h3 {
				font-size: 20px;
			}

			.te-heading-add h4 {
				font-size: 18px;
			}

			.te-heading-add h5 {
				font-size: 16px;
			}

			.te-heading-add h6 {
				font-size: 14px;
			}

			.te-dropdown-toolbar {
				position: absolute;
				width: auto;
			}

			.te-dropdown-toolbar .tui-popup-body {
				padding: 0px;
			}

			.tui-popup-color {
				padding: 0;
			}

			.tui-popup-color .tui-colorpicker-container,
			.tui-popup-color .tui-colorpicker-palette-container {
				width: 144px;
			}

			.tui-popup-color .tui-colorpicker-container ul {
				width: 144px;
				margin-bottom: 8px;
			}

			.tui-popup-color .tui-colorpicker-container li {
				padding: 0 1px 1px 0;
			}

			.tui-popup-color .tui-colorpicker-container li .tui-colorpicker-palette-button {
				border: 0;
				width: 17px;
				height: 17px;
			}

			.tui-popup-color .tui-popup-body {
				padding: 10px;
			}

			.tui-popup-color .tui-colorpicker-container .tui-colorpicker-palette-toggle-slider {
				display: none;
			}

			.tui-popup-color .te-apply-button,
			.tui-popup-color .tui-colorpicker-palette-hex {
				float: right;
			}

			.tui-popup-color .te-apply-button {
				height: 21px;
				width: 35px;
				background: #fff;
				border: 1px solid #efefef;
				position: absolute;
				bottom: 135px;
				right: 10px;
				color: black;
			}

			.tui-popup-color .tui-colorpicker-container .tui-colorpicker-palette-hex {
				border: 1px solid #e1e1e1;
				padding: 3px 14px;
				margin-left: -1px;
			}

			.tui-popup-color .tui-colorpicker-container div.tui-colorpicker-clearfix {
				display: inline-block;
			}

			.tui-popup-color .tui-colorpicker-container .tui-colorpicker-palette-preview {
				width: 19px;
				height: 19px;
			}

			.tui-popup-color .tui-colorpicker-slider-container .tui-colorpicker-slider-right {
				width: 22px;
			}

			.tui-popup-color .tui-colorpicker-slider-container .tui-colorpicker-huebar-handle {
				display: none;
			}

			.tui-tooltip {
				position: absolute;
				background-color: #222;
				z-index: 999;
				opacity: 0.8;
				color: #fff;
				padding: 2px 5px;
				font-size: 10px;
			}

			.tui-tooltip .arrow {
				content: '';
				display: inline-block;
				width: 10px;
				height: 10px;
				background-color: #222;
				-webkit-transform: rotate(45deg);
				-moz-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				transform: rotate(45deg);
				position: absolute;
				top: -3px;
				left: 6px;
				z-index: -1;
			}

			.tui-toolbar-icons {
				background: url('data:image/png;base64,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');
				background-size: 218px 188px;
				display: inline-block;
			}

			@media only screen and (-webkit-min-device-pixel-ratio: 2),
				only screen and (min--moz-device-pixel-ratio: 2),
				only screen and (-o-min-device-pixel-ratio: 2/1),
				only screen and (min-device-pixel-ratio: 2),
				only screen and (min-resolution: 192dpi),
				only screen and (min-resolution: 2dppx) {
				.tui-toolbar-icons {
					background: url('data:image/png;base64,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Xqz8qBcJkED0BGIbcoxe1QtDor4qT80zFpNh01flYWg2e1Fo2C6Me5NnSQLFToAeWpFfITFmxbrCUdCJMeMKxyK/iageCZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACQQgkA5QNlTRRYsWZbwEbNu2LTFdnPSAftc6pas06PesihdTmIurXdekOefi6qBfpJyD8rHrk+s4LM+gfHLpY8+P+r6Ngmc6nf7q1q1b6+26RnEcBc/S0tLmLVu2HI5Cn6Ay7Hxz3V9BywfVx17ezjfX/RW0vL29oMclQSuwPAmQAAnkS0A3ZrW1tR9Gh1ebr6w46unGrK6ubiz0GxdHO5QZD4HEDJo8aeBmmWk7jf2SnuspxFYnlkN50pg8efJLNuHdki67LZ2HJEACAQnYjVl/f/+PIeLxYjFqdmPW0dExC/rNpFELeKELWDwxgybn2NfXt1A/V9zg2/XjQsePHz8+StcBN/gZ/ZhxEiCB/Ai4GLMKSCvFXnCj5mTMYHDVNAiNWn6XPfFaZUm2iJt6YSZzfioN8e1Jtp+rLegzUi8Dfdv14yTiixcvbhw7duxdDQ0Nb/ppL2nvdsmSJZfMmzfvQH19fb9P/Qrq3SbNxw8Tvcxg9/6D8pVhRsMzE2OmthJslodJlRE2DMpXhhnFM9OMWVaFsrKyRB/+w573hVo/0YsEg7FQB42nou36caHj8CAtP6qamprEPTQwuq21tfX3GOa4vNA8nNoHo/G7d++eD/2qnPKZRgJuBFyMWQbGbHVTU9NDbvWSSvcwZvs3b958PCk92E7+BBIzaPJkDzVnaKrux0qi17XjgkbXrFkzDAroT43da9eu7SqQUmLMxKjVFah9z2Z7e3sr8TAyb+nSpTWeBZl5wRGQewKjDP/bfuLFYswwslAmhsuuH42ZncjgPE7MoHH+LPANMhw1HpUhyNWrV0u8qDZczxIYthnyoIJOIrH7qKggUBkLATFmuCf+E4k/xsPYCpVZTMZsx44dc86ePXvpypUrxyv9aMwUicEfJjaHxvmz/G4WYwjyOnQQizAf8LJdCpLPT0raMx2Og855OIiwJBlDkCOgx17I7rBk4gDpnu/32csHnfOw1w96HJSfXX7UPO3yg/Kz10+Kp2bMrsQ9m8LvvRG6pzCc2OowZ5b4MKN4ZmLMwCc7VI55sktg1ES/Ppc5s6IYZgx7f9rvh6iPw96fUeuT2JM1589CXToOQYbCx8pxE8CDzbUwYvNVO/i9l4hRKwZjJjrBmI2A8apU+kkoRq2YjZmuK+P+CCRi0Dh/5u9i5CqFDiKQN5ZLXtT55eXlRa1f1OdLeecJ4Msfv4ARq8U92qNSxaghrs9LO3pmGFavV3XiCuGpnsK87z4YNcs96rCacYBnhv5ralx6UW60BBIxaJw/C33RZKjxOnQaj4WWFIMALGnuxDXetX79+hMxiKfIQUIARuMJu1HTVHc1Zqhzr1YutuimTZtanYyaahD3saMxw709RZVhWNwEEplDw1Mb3z/L8z4Au8e83kuLew4nl9roIE7MnTvX9b20pOZwcunpll9ofm56qfRi56f0VCH0fQLzKrIg5HHs8tJ0doNn9En70nzxzJIyZkoPMWrQT16Ytny1qLKy8uCGDRssS/PFMyu0Mct1fxZ6ji3X/Zn0HFsiBg037UJ1Q0mITnC7flzoOG7agr9/5sDgTRizu4rVK8M17K+oqDhAr8zhyl3gSejkmtCRCYWsUYMx+wSM2TodSyGMmWof+p009MsaNcOYHVX5EhaDMdP1YdwfgdiHHDl/5u9C2EpxiNEGhIeDi4AYNWi83MmYyZkk7ZnZ6YlRQ9o+J2MmZQvtmdn15bE/ArF7aLgxFuqqwOvYrh8XOl5s32/MNcRYaF65hhgLrR/bLx4ChlErHoVsmhhGzZbKw8FMIHaDhg6a82cB7hAMMdYFKC7veVlWbeWqix+xzB/kvQX9ukvQMXTo92zeyjlUDMrHQYRnUlieQfl4KuOQGTVPexNx87W3F/Q4br5B9WH5eAnEPuTI+bN4LyClkwAJkAAJnCMQm4fm9uSGIch9yEuFfbINewHdntxaWlquMPSL1FMIqy/rkwAJkAAJeBOI3UPzbp65JEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJFC8BNJRq7Zo0aKMLnPbtm2ebQQtr8vOJ472rtXrQb9n9WN7PGh5e/24j+38crWX63rkqh80384vV/1c1yNXfXt+UD72+rmOw/IMyieXPvb8qHkq+dB7TDqdvgPHtZlMZrak4/gVBE04fgjtnpI0tfm4Ds2ov728vPwLjz/++CFVL98Q7ZWWlZXV9Pf3j8M+TOSUlJR0YT/Z29t7HPr16bJzXQfI6oF+7T09PYdQt1uvG1fc0Om/bfLf5nRNX5xytaXftdVJvaX5j579sL28n+MVK1aM6OzsnKeXrays3LVhw4azeprEd065xtLv2vPnN//Bsx+2l3c7LnHLYDoJkAAJOBFYvHjxDUh/CYbrO9ivQ3ys7BKXNMkzyiDqe5uCuku7u7ufX758+TTftRwKrlq1ahQM0AIYrmkwZsNRpFR2iUua5EkZh6quSahXDmNWjQKXw9BUuBaMMAMG9E67OKc0e5mkjvv6+mrsbTml2cvEeUyDFiddyiaBIUYAnfn7YXh+jtPyMjrTpMySJUv+Zx6nPw6G4+/yqJetAmM4+uzZs7PFALnJkDwpI2Xdynikl8KL9Dp3j6r+s8B5pBh4ew1Jkzx7etLH0EEeEMbZ25U0ybOnJ3VMg5YUabZDAoOcwK233joFHkITTiM7hOd1Oij3Mzytv+BVxiPvfR55rlmrV68uh4c3C51qzuG10tLSthEjRnS4CvPIgFFJwqAsgwrZdsDy97IbKkma5BV6G4frm7UfGMZ9U3ZRyEgbYOiSUrYsqYbYTjgC+LEOb2trW7d169Y6XRLG03P+ePXyccXr6+tLdu3aNX3Lli2v6204jffr+XHHi4WP23kWmo+bXk7pMBb3ozOXYTd9a0Rn9nUM4x1D/v9Ax3sP9n9oamrapheyx+3XBU/15hwQ2phq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Q4EADMZCdR5O82cqr1BhrvmzQunFdqMhEGr8368KGKb7NDyb7xnl/xHDjWu86sKIrUX+J6UMjMZnMPz3917lw+bJC9dYij/NkHMM+h3wkgn9piM/a2j5TpoXKeaRAAmQQHIEEvHQ9OFGPLW5Djeq09bL6HVVftSh/l4ZPlLsOtyo2tXL6HVVPkMSIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESGKwE0oNV8aGq92uvvZaJ89wuvfTSUNd8//7918ap34wZM56NUz5lkwAJDF0CJUP31HhmJEACJEACFxIBGrQL6WrzXEmABEhgCBOgQRvCF5enRgIkQAIXEoGyOE520aJFEyD389jfg33Otm3barzaCVreS5afvNWrV5efPXt2Un9//8je3t5K6PecV72g5b1kRZF3+PDh1AMPPGAR9alPfSo1depUS1qhDg4cOOCo3/Tp0wulEtslARK4AAhEbtBqa2v/DIZiI9iN9MMvaHk/Mr3K1NXVjT19+vTMvr4+X95p0PJebUeV9+yzA9dNSFqxGLQ//OEPA05V0mjQBmBhAgmQQIQEIjVoixcvfi+M2VboVyE6ptPpdRUVFV930zdoeTc5ftNXrVo1Cp7ZLOioVvodq66ubnarH7S8m5wo02GIU889N9ChlLRbbrklVVpaGmVzgWX19PSkXnzxxQH1JO1DH/pQqry8fEAeE0iABLwJjFtx2HP188kNU1Wf5i0oZG4uPQaKT+8vSaV/MnbspHteXZvuGpgfbUpkBg3DhtKTPog9a8wQ/rapqemTMGqOFyJo+bCnnclk0suWLZuujFlZWdnZTZs2HXTTL2j5sPr5rb9r164UjHK2uPLIZAhS0iRvwYIFfkXFUk50OHXqVFa28shkCFLSJO8tb3lLLO1GJbS+vn6iyEJ4NCqZUcr5wQ9+kH0iuPPOO3uilEtZJBAPgcyM/lTmMydP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VSp27NgxTQnDMOHxMWPG7JIhQ5WmhximPIrjl5E/wDhDRzHI+6L8yr5qW7fqKo0hCZAACZBATATgVaXx+ag/QPxVWhP3whB9TR3Da6tAx38zvJp3I03iexD+BwyehPLVEFl08Uns02F85MXm38HA/Ezm4yQ/is3QU96Py3qQIhOGqhlf+zeNqXhtr7/+unx8eCSGJtNY/NGFMqcbGxuzhk7OA9tEyKrAufSgzFn8r7Y2mY+LQke7DBo0OxEekwAJkEDMBLCwYjbmop5BR69/eeNHMAir8RmpwC9Ew3B8ECr/GkaxPUrVjU9dzYNM8zNWMK5t8+fP3w+jZA59+m0TespnsdqhZ2QvU+ttm0rqiYyTAAmQAAnER+DFF188CU/lWXhWS9GK6ocvhxdzB9JHX3nllbteeuml7Ff43bQQD2r37t0LYVxkwUg9ZHVgWPBXbuXzSX/uued6r7766jfR1jhpT2QgrDx27NgE6FmKvevll1/2NE5S7+DBg6Og5wyc3xSsiOx/4YUXIjW86tzooSkSDEmABEggYQIYenwvOvxtaHaiQ9MvI+3XMFSHUOY4PCMZpqtCXIzLfKRfj/BirV4b3hObieE+c4Wilhcqavwjz1kwSOZ7bkqgzKNBl3bo143VjlmvDWkl0K0UexXSR8AbLVflEfbBEL6Uj4enyXCM0qA5YmEiCZAACSRDAP8j7WIYCvmnnjeFbHEf5q8+ijmuP4aU41hd5sNgnC6BrpbVio6FvRO78f7da1HO96nmaNAUCYYkQAIkUEAC8NZugFGThSHvCaIGvKPnUe8HMBIPyftsQermU1a8NXwJZCrqmv9ixqcc+Wr/Mby6cBw66++x+ayeuxgNWm5GLEECJEACiRFYvnz5NAzRfRBG6gPYZ6JhGY6cYChwCsbgOOIvYn8WHtm/RfmlDaMNX4F4bBhaHA19RmP14jAZjoQHp4YW+xDvRV4HzuEszuc0FoKY/4bGVwMsRAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAKDgMD/D2WyCk5hENCOAAAAAElFTkSuQmCC');
					background-size: 218px 188px;
					display: inline-block;
				}
			}

			.tui-toolbar-icons.tui-heading {
				background-position: -172px -48px;
			}

			.tui-toolbar-icons.tui-heading:disabled {
				background-position: -193px -48px;
			}

			.tui-toolbar-icons.tui-bold {
				background-position: -4px -4px;
			}

			.tui-toolbar-icons.tui-bold:disabled {
				background-position: -25px -4px;
			}

			.tui-toolbar-icons.tui-italic {
				background-position: -4px -48px;
			}

			.tui-toolbar-icons.tui-italic:disabled {
				background-position: -25px -48px;
			}

			.tui-toolbar-icons.tui-color {
				background-position: -172px -70px;
			}

			.tui-toolbar-icons.tui-color:disabled {
				background-position: -193px -70px;
			}

			.tui-toolbar-icons.tui-strike {
				background-position: -4px -26px;
			}

			.tui-toolbar-icons.tui-strike:disabled {
				background-position: -25px -26px;
			}

			.tui-toolbar-icons.tui-hrline {
				background-position: -46px -92px;
			}

			.tui-toolbar-icons.tui-hrline:disabled {
				background-position: -67px -92px;
			}

			.tui-toolbar-icons.tui-quote {
				background-position: -4px -114px;
			}

			.tui-toolbar-icons.tui-quote:disabled {
				background-position: -25px -114px;
			}

			.tui-toolbar-icons.tui-ul {
				background-position: -46px -4px;
			}

			.tui-toolbar-icons.tui-ul:disabled {
				background-position: -67px -4px;
			}

			.tui-toolbar-icons.tui-ol {
				background-position: -46px -26px;
			}

			.tui-toolbar-icons.tui-ol:disabled {
				background-position: -67px -26px;
			}

			.tui-toolbar-icons.tui-task {
				background-position: -130px -48px;
			}

			.tui-toolbar-icons.tui-task:disabled {
				background-position: -151px -48px;
			}

			.tui-toolbar-icons.tui-indent {
				background-position: -46px -48px;
			}

			.tui-toolbar-icons.tui-indent:disabled {
				background-position: -67px -48px;
			}

			.tui-toolbar-icons.tui-outdent {
				background-position: -46px -70px;
			}

			.tui-toolbar-icons.tui-outdent:disabled {
				background-position: -67px -70px;
			}

			.tui-toolbar-icons.tui-table {
				background-position: -88px -92px;
			}

			.tui-toolbar-icons.tui-table:disabled {
				background-position: -109px -92px;
			}

			.tui-toolbar-icons.tui-image {
				background-position: -130px -4px;
			}

			.tui-toolbar-icons.tui-image:disabled {
				background-position: -151px -4px;
			}

			.tui-toolbar-icons.tui-link {
				background-position: -130px -26px;
			}

			.tui-toolbar-icons.tui-link:disabled {
				background-position: -151px -26px;
			}

			.tui-toolbar-icons.tui-code {
				background-position: -130px -92px;
			}

			.tui-toolbar-icons.tui-code:disabled {
				background-position: -151px -92px;
			}

			.tui-toolbar-icons.tui-codeblock {
				background-position: -130px -70px;
			}

			.tui-toolbar-icons.tui-codeblock:disabled {
				background-position: -151px -70px;
			}

			.tui-toolbar-icons.tui-more {
				background-position: -172px -92px;
			}

			.tui-toolbar-icons.tui-more:disabled {
				background-position: -193px -92px;
			}
			.tui-colorpicker-svg-slider {
				border: 1px solid #ebebeb;
			}
			.tui-colorpicker-vml-slider {
				border: 1px solid #ebebeb;
			}
			.tui-colorpicker-svg-huebar {
				border: 1px solid #ebebeb;
			}

			.tui-editor-pseudo-clipboard {
				position: fixed;
				left: -1000px;
				top: -1000px;
				width: 100px;
				height: 100px;
			}

			.te-ww-block-overlay.code-block-header {
				text-align: right;
				font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			}

			.te-ww-block-overlay.code-block-header span {
				font-size: 10px;
				font-weight: 600;
				padding: 0px 10px;
				color: #333333;
				cursor: default;
			}

			.te-ww-block-overlay.code-block-header button {
				margin: 8px;
				font-size: 10px;
				color: #333333;
				background-color: #f9f9f9;
				border: 1px solid #dddddd;
				padding: 4px;
				height: auto;
			}

			.te-popup-code-block-languages {
				position: fixed;
				box-sizing: border-box;
				width: 130px;
			}

			.te-popup-code-block-languages .tui-popup-body {
				max-height: 169px;
				overflow: auto;
				padding: 0px;
			}

			.te-popup-code-block-languages button {
				width: 100%;
				background-color: #fff;
				border: none;
				outline: 0;
				padding: 0px 10px 0px 10px;
				font-size: 12px;
				line-height: 24px;
				text-align: left;
				color: #777;
			}

			.te-popup-code-block-languages button.active {
				background-color: #f4f4f4;
			}

			.tui-popup-code-block-editor .tui-popup-wrapper {
				width: 70%;
				height: 70%;
				margin: auto;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-direction: column;
				flex-direction: column;
			}

			.te-input-language {
				position: relative;
				margin-left: 15px;
				cursor: pointer;
			}

			.te-input-language input {
				font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-size: 10px;
				padding: 3px 5px;
				border: 1px solid #dddddd;
				background-color: #f9f9f9;
				box-sizing: border-box;
				width: 130px;
				outline: none;
			}

			.te-input-language input::-ms-clear {
				display: none;
			}

			.te-input-language::after {
				content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMnB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCAxMiAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT42Q0NBRDk2QS0yMjYxLTRFNDAtOTk1RC1DRUUyQUREQUQ3NkQ8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNvbS10cmFuZ2xlLWQtc2lkZSIgZmlsbD0iIzU1NTU1NSI+ICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS03IiBwb2ludHM9IjIgNSAxMCA1IDYgMTAiPjwvcG9seWdvbj4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==');
				position: absolute;
				top: 1px;
				right: 3px;
			}

			.te-input-language.active::after {
				content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMnB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCAxMiAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5BNEZDRkIzMy0zNjdBLTREMjAtOEEyNC1DQ0I2ODFBMDZDODg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNvbS10cmFuZ2xlLXVwLXNpZGUiIGZpbGw9IiM1NTU1NTUiPiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuNTAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC02LjAwMDAwMCwgLTYuNTAwMDAwKSAiIHBvaW50cz0iMiA0IDEwIDQgNiA5Ij48L3BvbHlnb24+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=');
			}

			.tui-popup-code-block-editor button {
				margin: -1px 3px;
			}

			.tui-popup-code-block-editor .tui-popup-header-buttons {
				height: 20px;
			}

			.tui-popup-code-block-editor .popup-editor-toggle-preview::after {
				content: 'Preview off';
				color: #777;
				margin-right: 22px;
			}

			.tui-popup-code-block-editor .popup-editor-toggle-preview.active::after {
				content: 'Preview on';
				color: #4b96e6;
			}

			.tui-popup-code-block-editor .popup-editor-toggle-scroll::after {
				content: 'Scroll off';
				color: #777;
				margin-right: 16px;
			}

			.tui-popup-code-block-editor .popup-editor-toggle-scroll.active::after {
				content: 'Scroll on';
				color: #4b96e6;
			}

			.tui-popup-code-block-editor .popup-editor-toggle-fit {
				width: 18px;
				height: 18px;
				margin-top: 4px;
				margin-right: 14px;
				background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT40OUQ4RTYyMy1GRTAyLTQ1RUUtQkQ5Ri0xMjUyQjEzRTU1MkQ8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNvbnRlbnRzLWV4cGFuZCIgZmlsbD0iIzU1NTU1NSI+ICAgICAgICAgICAgPHBhdGggZD0iTTMsMyBMOSwzIEw5LDUgTDUsNSBMNSw5IEwzLDkgTDMsMyBaIE0xNSwxNSBMOSwxNSBMOSwxMyBMMTMsMTMgTDEzLDkgTDE1LDkgTDE1LDE1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDkuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC05LjAwMDAwMCwgLTkuMDAwMDAwKSAiPjwvcGF0aD4gICAgICAgICAgICA8cG9seWdvbiBpZD0iTGluZSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS41MDAwMDAsIDYuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMS41MDAwMDAsIC02LjUwMDAwMCkgIiBwb2ludHM9IjkuMDg1Nzg2NDQgNS41IDEyLjUgOC45MTQyMTM1NiAxMy45MTQyMTM2IDcuNSAxMC41IDQuMDg1Nzg2NDQiPjwvcG9seWdvbj4gICAgICAgICAgICA8cG9seWdvbiBpZD0iTGluZS1Db3B5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTAwMDAwLCAxMS41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTYuNTAwMDAwLCAtMTEuNTAwMDAwKSAiIHBvaW50cz0iNC4wODU3ODY0NCAxMC41IDcuNSAxMy45MTQyMTM2IDguOTE0MjEzNTYgMTIuNSA1LjUgOS4wODU3ODY0NCI+PC9wb2x5Z29uPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+');
			}

			.tui-popup-code-block-editor .popup-editor-toggle-fit.active {
				background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT4wN0Q1MjlCRi1GNTIzLTREN0EtQTlGNi05NTUzNTU5RDNEMUE8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNvbnRlbnRzLXJlZHVjZSIgZmlsbD0iIzU1NTU1NSI+ICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS41MDAwMDAsIDEyLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNS41MDAwMDAsIC0xMi41MDAwMDApICIgcG9pbnRzPSIzLjA4NTc4NjQ0IDExLjUgNi41IDE0LjkxNDIxMzYgNy45MTQyMTM1NiAxMy41IDQuNSAxMC4wODU3ODY0Ij48L3BvbHlnb24+ICAgICAgICAgICAgPHBhdGggZD0iTTksOSBMMTUsOSBMMTUsMTEgTDExLDExIEwxMSwxNSBMOSwxNSBMOSw5IFogTTksOSBMMyw5IEwzLDcgTDcsNyBMNywzIEw5LDMgTDksOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA5LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtOS4wMDAwMDAsIC05LjAwMDAwMCkgIj48L3BhdGg+ICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMzMiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCA1LjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtNS41MDAwMDApICIgcG9pbnRzPSIxNC45MTQyMTM2IDYuNSAxMS41IDMuMDg1Nzg2NDQgMTAuMDg1Nzg2NCA0LjUgMTMuNSA3LjkxNDIxMzU2Ij48L3BvbHlnb24+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=');
			}

			.tui-popup-code-block-editor .tui-popup-close-button {
				margin-top: 6px;
			}

			.tui-popup-code-block-editor .tui-popup-body {
				z-index: -1;
				padding: 0px;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-direction: column;
				flex-direction: column;
				-ms-flex: 1;
				flex: 1;
			}

			.tui-popup-code-block-editor .popup-editor-body {
				position: relative;
				-ms-flex: 1;
				flex: 1;
				border-bottom: 1px solid #cacaca;
			}

			.tui-popup-code-block-editor .te-button-section {
				padding: 15px;
			}

			.tui-popup-code-block-editor .te-button-section button {
				float: left;
			}

			.tui-popup-code-block-editor .tui-editor-contents pre {
				margin: 0px;
				background-color: transparent;
			}

			.tui-popup-code-block-editor .CodeMirror {
				height: auto;
			}

			.tui-popup-code-block-editor .CodeMirror-line {
				font-family: Consolas, Courier, 'Lucida Grande', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
				font-size: 13px;
				line-height: 160%;
				letter-spacing: -0.3px;
			}

			.tui-popup-code-block-editor .popup-editor-editor-wrapper {
				min-height: 100%;
			}

			.tui-split-scroll-wrapper {
				position: relative;
			}

			.tui-split-scroll {
				position: absolute;
			}

			.tui-split-scroll,
			.tui-split-scroll-wrapper {
				width: 100%;
				height: 100%;
			}

			.tui-split-scroll .tui-split-content-left,
			.tui-split-scroll .tui-split-content-right {
				position: absolute;
				top: 0px;
				width: 50%;
				box-sizing: border-box;
			}

			.tui-split-scroll .tui-split-content-left {
				left: 0px;
			}

			.tui-split-scroll .tui-split-content-right {
				left: 50%;
			}

			.tui-split-scroll .tui-splitter {
				position: absolute;
				left: 50%;
				top: 0;
				height: 100%;
				width: 1px;
				border-left: 1px solid #cacaca;
			}

			.tui-split-scroll .tui-split-scroll-content {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: relative;
			}

			.tui-split-scroll .tui-split-content-left,
			.tui-split-scroll .tui-split-content-right {
				height: 100%;
				overflow-x: hidden;
				overflow-y: auto;
			}

			.tui-split-scroll button.tui-scrollsync {
				top: 10px;
				opacity: 0.2;
			}

			.tui-split-scroll button.tui-scrollsync::after {
				content: 'scroll off';
			}

			.tui-split-scroll.scroll-sync button.tui-scrollsync {
				opacity: 0.5;
			}

			.tui-split-scroll.scroll-sync .tui-split-content-left,
			.tui-split-scroll.scroll-sync .tui-split-content-right {
				height: auto;
				overflow: initial;
			}

			.tui-split-scroll.scroll-sync button.tui-scrollsync::after {
				content: 'scroll on';
			}

			.tui-split-scroll.scroll-sync .tui-split-scroll-content {
				overflow-y: auto;
			}

			.tui-split-scroll.single-content .tui-splitter {
				display: none;
			}

			.tui-split-scroll.single-content .tui-split-content-left {
				width: 100%;
			}

			.tui-split-scroll.single-content .tui-split-content-right {
				display: none;
			}

			.tui-split-scroll.single-content button.tui-scrollsync {
				display: none;
			}

			@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
				/* IE10+ */
				.tui-split-scroll-wrapper .tui-splitter {
					left: calc(50% - 9px);
				}
			}

			@supports (-ms-accelerator: true) {
				/* IE Edge 12+ CSS styles go here */
				.tui-split-scroll-wrapper .tui-splitter {
					left: calc(50% - 9px);
				}
			}

			@media screen and (max-width: 480px) {
				.tui-popup-wrapper {
					max-width: 300px;
				}

				.tui-editor-popup {
					margin-left: -150px;
				}

				.te-dropdown-toolbar {
					max-width: none;
				}
			}

			.tui-editor-contents {
				margin: 0;
				padding: 0;
				font-size: 13px;
				font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
			}

			.tui-editor-contents *:not(table) {
				line-height: 160%;
				box-sizing: content-box;
			}

			.tui-editor-contents i,
			.tui-editor-contents cite,
			.tui-editor-contents em,
			.tui-editor-contents var,
			.tui-editor-contents address,
			.tui-editor-contents dfn {
				font-style: italic;
			}

			.tui-editor-contents strong {
				font-weight: bold;
			}

			.tui-editor-contents p {
				margin: 10px 0;
				color: #222;
			}

			.tui-editor-contents > h1:first-of-type,
			.tui-editor-contents > div > div:first-of-type h1 {
				margin-top: 14px;
			}

			.tui-editor-contents h1,
			.tui-editor-contents h2,
			.tui-editor-contents h3,
			.tui-editor-contents h4,
			.tui-editor-contents h5,
			.tui-editor-contents h6 {
				font-weight: bold;
				color: #222;
			}

			.tui-editor-contents h1 {
				font-size: 24px;
				line-height: 28px;
				border-bottom: 3px double #999;
				margin: 52px 0 15px 0;
				padding-bottom: 7px;
			}

			.tui-editor-contents h2 {
				font-size: 22px;
				line-height: 23px;
				border-bottom: 1px solid #dbdbdb;
				margin: 20px 0 13px 0;
				padding-bottom: 7px;
			}

			.tui-editor-contents h3 {
				font-size: 20px;
				margin: 18px 0 2px;
			}

			.tui-editor-contents h4 {
				font-size: 18px;
				margin: 10px 0 2px;
			}

			.tui-editor-contents h3,
			.tui-editor-contents h4 {
				line-height: 18px;
			}

			.tui-editor-contents h5 {
				font-size: 16px;
			}

			.tui-editor-contents h6 {
				font-size: 14px;
			}

			.tui-editor-contents h5,
			.tui-editor-contents h6 {
				line-height: 17px;
				margin: 9px 0 -4px;
			}

			.tui-editor-contents del {
				color: #999;
			}

			.tui-editor-contents blockquote {
				margin: 14px 0;
				border-left: 4px solid #e5e5e5;
				padding: 0 16px;
				color: #999;
			}

			.tui-editor-contents blockquote p,
			.tui-editor-contents blockquote ul,
			.tui-editor-contents blockquote ol {
				color: #999;
			}

			.tui-editor-contents blockquote > :first-of-type {
				margin-top: 0;
			}

			.tui-editor-contents blockquote > :last-child {
				margin-bottom: 0;
			}

			.tui-editor-contents pre,
			.tui-editor-contents code {
				font-family: Consolas, Courier, 'Apple SD 산돌고딕 Neo', -apple-system, 'Lucida Grande', 'Apple SD Gothic Neo', '맑은 고딕', 'Malgun Gothic', 'Segoe UI', '돋움', dotum, sans-serif;
				border: 0;
				border-radius: 0;
			}

			.tui-editor-contents pre {
				margin: 2px 0 8px;
				padding: 18px;
				background-color: #f5f7f8;
			}

			.tui-editor-contents code {
				color: #c1798b;
				background-color: #f9f2f4;
				padding: 2px 3px;
				letter-spacing: -0.3px;
				border-radius: 2px;
			}

			.tui-editor-contents pre code {
				padding: 0;
				color: inherit;
				white-space: pre-wrap;
				background-color: transparent;
			}

			.tui-editor-contents pre.addon {
				border: 1px solid #e8ebed;
				background-color: #fff;
			}

			.tui-editor-contents img {
				margin: 4px 0 10px;
				box-sizing: border-box;
				vertical-align: top;
				max-width: 100%;
			}

			.tui-editor-contents table {
				border: 1px solid rgba(0, 0, 0, 0.1);
				margin: 12px 0 14px;
				color: #222;
				width: auto;
				border-collapse: collapse;
				box-sizing: border-box;
			}

			.tui-editor-contents table th,
			.tui-editor-contents table td {
				border: 1px solid rgba(0, 0, 0, 0.1);
				padding: 5px 14px 5px 12px;
				height: 32px;
			}

			.tui-editor-contents table th {
				background-color: #555;
				font-weight: 300;
				color: #fff;
				padding-top: 6px;
			}

			.tui-editor-contents ul,
			.tui-editor-contents menu,
			.tui-editor-contents ol,
			.tui-editor-contents dir {
				display: block;
				list-style-type: none;
				padding-left: 24px;
				margin: 6px 0 10px;
				color: #222;
			}

			.tui-editor-contents ol {
				list-style-type: none;
				counter-reset: li;
			}

			.tui-editor-contents ol > li {
				counter-increment: li;
			}

			.tui-editor-contents ul > li::before,
			.tui-editor-contents ol > li::before {
				display: inline-block;
				position: absolute;
			}

			.tui-editor-contents ul > li::before {
				content: '';
				margin-top: 6px;
				margin-left: -17px;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: #ccc;
			}

			.tui-editor-contents ol > li::before {
				content: '.' counter(li);
				margin-left: -28px;
				width: 24px;
				text-align: right;
				direction: rtl;
				color: #aaa;
			}

			.tui-editor-contents ul ul,
			.tui-editor-contents ul ol,
			.tui-editor-contents ol ol,
			.tui-editor-contents ol ul {
				margin-top: 0 !important;
				margin-bottom: 0 !important;
			}

			.tui-editor-contents ul li,
			.tui-editor-contents ol li {
				position: relative;
			}

			.tui-editor-contents ul p,
			.tui-editor-contents ol p {
				margin: 0;
			}

			.tui-editor-contents ul li.task-list-item::before,
			.tui-editor-contents ol li.task-list-item::before,
			.tui-editor-contents pre ul li::before {
				content: '';
			}

			.tui-editor-contents hr {
				border-top: 1px solid #eee;
				margin: 16px 0;
			}

			.tui-editor-contents a {
				text-decoration: underline;
				color: #4b96e6;
			}

			.tui-editor-contents a:hover {
				color: #1f70de;
			}

			.tui-editor-contents .task-list-item {
				border: 0;
				list-style: none;
				padding-left: 24px;
				margin-left: -24px;
			}

			.tui-editor-contents .task-list-item::before {
				background-repeat: no-repeat;
				background-size: 18px 18px;
				background-position: center;
				content: '';
				margin-left: 0;
				margin-top: 0;
				border-radius: 0;
				height: 18px;
				width: 18px;
				position: absolute;
				left: 0;
				top: 1px;
				cursor: pointer;
				background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAAQklEQVQ4EWM8c+bMfwYqABaQGcbGxhQZdfbsWQYmikxA0jxqEFJg4GCOhhGOgEESHg0jpMDAwRx8YQQuj0DlCaUAAEdBCPJ7TaEPAAAAAElFTkSuQmCC');
			}

			.tui-editor-contents .task-list-item.checked::before {
				background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAA1ElEQVQ4EWP0nvbsPwMVABMVzAAbMWoQIiT5OJgYvLS5EAJQFguGCB4BkCHt/kIM8kKsYFXbrn6DqyY6sJENefjuN8ORuz/ghoAYWA0COR2kEQbQDanc+I7h049/MGkwjVANFQYZkmXHD/YCyABiDAFpxQgjkJO9dbjA4QAKDxAAhQnIO9hcAlYAJDBcBHIySANII8gAYgwBGYZhEEgQZFjVJohhhFwCUg8CjPgyLT8nE8N/YJZGD1iIVlQSI4yQpT9+R40ZZDl0NlavoSsihj/4DAIAR+hZHUj727YAAAAASUVORK5CYII=');
			}

			.tui-editor-contents .task-list-item input[type='checkbox'],
			.tui-editor-contents .task-list-item .task-list-item-checkbox {
				margin-left: -17px;
				margin-right: 3.8px;
				margin-top: 3px;
			}

			.tui-editor-contents-placeholder::before {
				content: attr(data-placeholder);
				color: grey;
				line-height: 160%;
				position: absolute;
			}

			.te-preview .tui-editor-contents h1 {
				min-height: 28px;
			}

			.te-preview .tui-editor-contents h2 {
				min-height: 23px;
			}

			.te-preview .tui-editor-contents blockquote {
				min-height: 20px;
			}

			.te-preview .tui-editor-contents li {
				min-height: 22px;
			}

			@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
				/* IE10+11 */
				.te-ww-container .tui-editor-contents li {
					vertical-align: middle;
				}

				.te-ww-container .tui-editor-contents ul > li::before,
				.te-ww-container .tui-editor-contents ol > li::before,
				.te-ww-container .tui-editor-contents .task-list-item:before {
					position: static;
					vertical-align: middle;
				}

				.te-ww-container .tui-editor-contents ul > li::before {
					margin-top: -3px;
					margin-right: 12px;
				}

				.te-ww-container .tui-editor-contents ol > li::before {
					margin-right: 6px;
				}

				.te-ww-container .tui-editor-contents .task-list-item {
					padding-left: 2px;
				}
			}

			.tui-editor-contents .te-preview-highlight {
				position: relative;
				z-index: 0;
			}

			.tui-editor-contents .te-preview-highlight::after {
				content: '';
				background-color: rgba(255, 245, 131, 0.5);
				border-radius: 4px;
				z-index: -1;
				position: absolute;
				top: -4px;
				right: -4px;
				left: -4px;
				bottom: -4px;
			}

			.tui-editor-contents h1.te-preview-highlight::after,
			.tui-editor-contents h2.te-preview-highlight::after {
				bottom: 0;
			}

			.tui-editor-contents td.te-preview-highlight::after,
			.tui-editor-contents th.te-preview-highlight::after {
				display: none;
			}

			.tui-editor-contents th.te-preview-highlight,
			.tui-editor-contents td.te-preview-highlight {
				background-color: rgba(255, 245, 131, 0.5);
			}

			.tui-editor-contents th.te-preview-highlight {
				color: #222;
			}

			.te-md-container .CodeMirror {
				font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
				color: #222;
			}

			.tui-md-heading1 {
				font-size: 24px;
			}

			.tui-md-heading2 {
				font-size: 22px;
			}

			.tui-md-heading3 {
				font-size: 20px;
			}

			.tui-md-heading4 {
				font-size: 18px;
			}

			.tui-md-heading5 {
				font-size: 16px;
			}

			.tui-md-heading6 {
				font-size: 14px;
			}

			.tui-md-heading.tui-md-delimiter.setext {
				line-height: 15px;
			}

			.tui-md-strong,
			.tui-md-heading,
			.tui-md-list-item.tui-md-list-item-bullet,
			.tui-md-list-item.tui-md-meta {
				font-weight: bold;
			}

			.tui-md-emph {
				font-style: italic;
			}

			.tui-md-strike {
				text-decoration: line-through;
			}

			.tui-md-strike.tui-md-delimiter {
				text-decoration: none;
			}

			.tui-md-delimiter,
			.tui-md-thematic-break,
			.tui-md-link,
			.tui-md-table,
			.tui-md-block-quote {
				color: #ccc;
			}

			.tui-md-code-block.tui-md-meta,
			.tui-md-code.tui-md-delimiter {
				color: #aaa;
			}

			.tui-md-meta,
			.tui-md-html,
			.tui-md-link.tui-md-link-url.tui-md-marked-text {
				color: #999;
			}

			.tui-md-block-quote.tui-md-marked-text,
			.tui-md-list-item.tui-md-meta {
				color: #555;
			}

			.tui-md-table.tui-md-marked-text {
				color: #222;
			}

			.tui-md-link.tui-md-link-desc.tui-md-marked-text,
			.tui-md-list-item-odd.tui-md-list-item-bullet {
				color: #4b96e6;
			}

			.tui-md-list-item-even.tui-md-list-item-bullet {
				color: #cb4848;
			}

			.tui-md-code.tui-md-marked-text {
				color: #c1798b;
			}

			.tui-md-code {
				background-color: rgba(243, 229, 233, 0.5);
				padding: 2px 0;
				letter-spacing: -0.3px;
			}

			.tui-md-code.tui-md-delimiter.start {
				padding-left: 2px;
				border-top-left-radius: 2px;
				border-bottom-left-radius: 2px;
			}

			.tui-md-code.tui-md-delimiter.end {
				padding-right: 2px;
				border-top-right-radius: 2px;
				border-bottom-right-radius: 2px;
			}

			.tui-md-code-block.CodeMirror-linebackground {
				left: 20px;
				right: 20px;
				background-color: #f5f7f8;
			}

			.tui-md-code-block.CodeMirror-linebackground.start {
				top: 2px;
			}

			.tui-md-code-block.CodeMirror-linebackground.end {
				bottom: 2px;
			}

			.tui-md-code,
			.tui-md-code-block {
				font-family: Consolas, Courier, 'Lucida Grande', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
			}
`;
