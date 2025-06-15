export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { content, username, avatar_url } = req.body;

  if (!content || !username || !avatar_url) {
    return res.status(400).json({
      error: 'Missing content, username, or avatar_url. Please provide all information.',
    });
  }

  const webhookURLs = [
    process.env.DISCORD_WEBHOOK_URL,
    process.env.DISCORD_WEBHOOK_URL2,
  ];

  try {
    const results = await Promise.all(
      webhookURLs.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content, username, avatar_url }),
        })
      )
    );

    const failed = results.filter((r) => !r.ok);
    if (failed.length > 0) {
      const errors = await Promise.all(failed.map((r) => r.text()));
      return res.status(500).json({ error: 'One or more webhooks failed', details: errors });
    }

    return res.status(200).json({ message: 'Message sent to all webhooks!' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
}

