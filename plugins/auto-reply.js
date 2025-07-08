const axios = require('axios');
const config = require('../config');
const { cmd } = require('../command');

// JSON ya auto reply (from GitHub)
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/♛꧁༒☾FELICIAN☽༒꧂♛/felician-it-DATA/main/autoreply.json';

cmd({
  name: 'autoreply',
  type: 'all'
}, async (conn, msg, m, { body }) => {
  try {
    if (!body || msg.key?.fromMe || body.startsWith('.')) return;

    const res = await axios.get(GITHUB_RAW_URL);
    const data = res.data;
    const incomingText = body.trim().toLowerCase();

    for (const key in data) {
      if (incomingText.includes(key.toLowerCase())) {
        if (config.AUTO_REPLY?.toLowerCase() === 'true') {
          await m.reply(data[key]);
        }
        break;
      }
    }
  } catch (err) {
    console.error('❌ Auto-reply error:', err.message);
  }
});
