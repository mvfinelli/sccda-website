/* ============================================================
   SEASON CONFIG — the ONLY file you edit each new season.
   ============================================================

   When SCCDA starts a new league season on Dart Connect:

     1) Log into Dart Connect and grab the new season's URLs
        for standings, schedule, matches, and leaderboard.
        (The season ID number in each URL — e.g. "21880" — will
         change to a new number for the new season.)

     2) Paste those four URLs below.

     3) Update `label` to match the new season name
        (e.g. "Fall 2026", "Spring 2027").

     4) Save the file and redeploy the site.
        That's it — every page will update automatically.

   Nothing else in the codebase needs to change season-to-season.
   ============================================================ */

export const season = {
  // Displayed at the top of Standings, Leaderboard, Matches,
  // Schedule pages, and referenced in the homepage hero + copy.
  label: 'Spring 2026',

  // Full standings table — embedded in an iframe on /standings.
  standingsUrl: 'https://tv.dartconnect.com/league/SaCzDA/21880/standings',

  // Weekly schedule — embedded in an iframe on /schedule.
  scheduleUrl: 'https://my.dartconnect.com/league/schedule/SaCzDA/21880',

  // Match results — Dart Connect blocks iframes for this page,
  // so it's linked out from /matches as a button.
  matchesUrl: 'https://tv.dartconnect.com/league/SaCzDA/matches/21880',

  // Individual player leaderboard — Dart Connect blocks iframes here
  // too, so it's linked out from /leaderboard as a button.
  leaderboardUrl: 'https://leaderboard.dartconnect.com/leaderboard#l-kvpi_21880_all',
};
