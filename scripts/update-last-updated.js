const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Get the latest commit date in ISO format
  const gitDate = execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
  
  // Read settings.json
  const settingsPath = path.join(__dirname, '..', 'settings.json');
  const settingsContent = fs.readFileSync(settingsPath, 'utf8');
  const settings = JSON.parse(settingsContent);
  
  // Update lastUpdated field
  settings.lastUpdated = gitDate;
  
  // Write back to settings.json with proper formatting
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n', 'utf8');
  
  console.log('✓ Updated lastUpdated to:', gitDate);
} catch (error) {
  console.error('Error updating lastUpdated:', error.message);
  process.exit(1);
}
