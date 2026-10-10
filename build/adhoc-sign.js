// Notsignatur ("ad hoc") fuer macOS: ohne Apple-Konto, aber die Signatur ist wenigstens gueltig.
const path = require('path');
const { execFileSync } = require('child_process');

exports.default = async function (context) {
  if (context.electronPlatformName !== 'darwin') return;
  const app = path.join(context.appOutDir, `${context.packager.appInfo.productFilename}.app`);
  execFileSync('codesign', ['--force', '--deep', '--sign', '-', app], { stdio: 'inherit' });
};
