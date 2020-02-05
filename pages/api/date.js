import { helloWorld, createClient } from '@statickit/functions';

export default async (req, res) => {
  let client = createClient({ site: "9d6fb7039a1f" });
  await helloWorld(client, { subject: "Hello world!" });

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};
