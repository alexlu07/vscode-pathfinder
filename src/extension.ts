import * as vscode from 'vscode';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export function activate() {
  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor && editor.document) {
      const filePath = editor.document.uri.fsPath;
      const envScriptPath = path.join('/tmp', 'editor_path.txt');

      try {
        fs.writeFileSync(envScriptPath, filePath);
      } catch (err) {
        console.error("Failed to write editor path:", err);
      }
    }
  });
}

export function deactivate() {}
