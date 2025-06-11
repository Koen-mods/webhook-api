export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { content, user } = req.body;
  if (!content || !user) {
    return res.status(400).json({ error: 'Missing content or user' });
  }

  const webhookURL = 'https://discord.com/api/webhooks/1382387890172203159/Ze3WGTTgDc6ng234RySCc97_JbIagz707L_5Z9geXBegGHuor3n6gjZ_1mV6Rpq88ZN2';

  // Send the message to your Discord server
  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `**${user}** verzocht: ${content}`,
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to send to Discord' });
  }

  res.status(200).json({ message: 'Message sent to Discord!' });
}
