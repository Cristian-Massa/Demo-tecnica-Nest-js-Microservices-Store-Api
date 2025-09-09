const { execSync } = require('child_process');

const name = process.argv[2];

if (!name) {
  console.error('Please provide a migration name');
  process.exit(1);
}

const command = `npm run typeorm migration:generate ./src/database/migrations/${name}`;
console.log(`Running command: ${command}`);

execSync(command, { stdio: 'inherit' });
