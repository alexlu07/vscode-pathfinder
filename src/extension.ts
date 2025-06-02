import * as vscode from 'vscode';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export function activate() {
  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor && editor.document) {
      const filePath = editor.document.uri.fsPath;
      const envScriptPath = path.join('/tmp', 'update_editor_env.sh');

      try {
        fs.writeFileSync(envScriptPath, `export EDITOR_PATH="${filePath.replace(/"/g, '\\"')}"\n`);
      } catch (err) {
        console.error("Failed to write EDITOR_PATH:", err);
      }
    }
  });
}

export function deactivate() {}
