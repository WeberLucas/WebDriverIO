try {
  const conf = require('../wdio.conf.cjs');
  console.log('Loaded config keys:', Object.keys(conf || {}));
} catch (err) {
  console.error('Failed to load config:', err.message);
  process.exit(1);
}
