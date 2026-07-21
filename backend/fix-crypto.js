// Ensures Node's crypto is available as a global for MongoDB runtime in some environments.
// Must be loaded before requiring mongoose/mongodb.

try {
  // Ensure we provide REAL WebCrypto (required by newer mongodb session utils)
  const { webcrypto } = require('node:crypto');

  if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
  }
  if (!global.crypto) {
    global.crypto = webcrypto;
  }
} catch (e) {
  // If crypto can't be loaded, let the app fail naturally.
}


