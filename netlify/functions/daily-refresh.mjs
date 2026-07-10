/* ============================================================
   DAILY REBUILD — automatic site refresh.
   ============================================================

   This is a Netlify scheduled function. It runs once a day and
   POSTs to the site's build hook, which triggers a fresh build.

   Why we need it:
   The events page reads from a Google Sheet at BUILD time. Sheet
   edits don't appear on the live site until the site is rebuilt.
   This function makes sure the site rebuilds every morning so
   yesterday's sheet edits go live overnight.

   Schedule: 12:00 UTC daily
     = 4am PST (winter) / 5am PDT (summer)
   Chosen so any sheet edits from the previous day are live before
   anyone visits the site in the morning.

   To change the time: edit the cron string in `config` below.
   Cron format: minute hour day-of-month month day-of-week
   Reference: https://crontab.guru

   To pause the automatic rebuild: comment out `export const config`.
   To trigger a rebuild manually anytime: Netlify → Deploys →
   Trigger deploy → Deploy site.
   ============================================================ */

const BUILD_HOOK_URL = 'https://api.netlify.com/build_hooks/6a51403f44d51d653f531f6a';

export default async () => {
  const response = await fetch(BUILD_HOOK_URL, { method: 'POST' });

  if (!response.ok) {
    const body = await response.text();
    console.error('Build hook failed:', response.status, body);
    return new Response(`Build hook failed: ${response.status}`, { status: 500 });
  }

  console.log('Daily rebuild triggered.');
  return new Response('Rebuild triggered.', { status: 200 });
};

export const config = {
  schedule: '0 12 * * *',
};
