// This project has no custom native (Java/Kotlin) plugin yet, so this script
// is a safe no-op. It's kept here so the CI workflow follows the same
// reusable pattern as other apps in this pipeline: if you later add a native
// plugin under /plugins/<name>/android, wire the copy/merge logic here and
// it will run automatically during every build.
const fs = require('fs');
const path = require('path');

const pluginsDir = path.join(__dirname, '..', 'plugins');

if (!fs.existsSync(pluginsDir)) {
  console.log('[setup-native-plugin] No /plugins directory found — nothing to wire in. Skipping.');
  process.exit(0);
}

const plugins = fs.readdirSync(pluginsDir).filter((name) =>
  fs.statSync(path.join(pluginsDir, name)).isDirectory()
);

if (plugins.length === 0) {
  console.log('[setup-native-plugin] /plugins directory is empty. Skipping.');
  process.exit(0);
}

console.log('[setup-native-plugin] Found plugin folders:', plugins.join(', '));
console.log('[setup-native-plugin] No wiring logic implemented yet for these — add it here when needed.');
