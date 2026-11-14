/**
 * Every piece of interface text on the English site lives here.
 *
 * Adding Thai later: copy this file to th.ts, translate the values (keep the keys exactly the same),
 * and register it in ./index.ts. Words in {curly braces} are filled in by the site; keep them as they are.
 */
export const en = {
  // Site-wide
  'site.name': 'KumoPlay',
  'site.slogan': 'Float in, float out, float back anytime.',
  'site.description':
    'Cozy, bite-sized games from KumoPlay. Play one round while you wait, or keep coming back. Float in, float out, float back anytime.',
  'site.logoAlt': 'KumoPlay logo: a soft lavender cloud shaped like a game controller',
  'site.ogAlt': 'The KumoPlay logo with the slogan "Float in, float out, float back anytime."',

  // Header and navigation
  'a11y.skipToContent': 'Skip to content',
  'nav.label': 'Main',
  'nav.home': 'KumoPlay home',
  'nav.games': 'Games',
  'nav.about': 'About',

  // Home page
  'home.title': 'KumoPlay: cozy little games for little moments',
  'home.heroIntro':
    'Bite-sized games for little moments: while you wait, on a short break, or whenever you need something cozy. Play one round and stop, or keep coming back.',
  'home.heroCta': 'Find a game',
  'home.newTitle': 'New games',
  'home.newIntro': 'Fresh from the cloud.',
  'home.soonTitle': 'Coming soon',
  'home.soonIntro': 'Floating your way.',
  'home.allTitle': 'All games',
  'home.allIntro': 'Pick one that fits your moment.',
  'home.noGames': 'No games yet. Our first ones are floating in soon!',

  // Filter on the home page
  'filter.legend': 'Show',
  'filter.all': 'All',
  'filter.quick': 'Quick',
  'filter.endless': 'Endless',
  'filter.help': 'Quick games are one round and done. Endless games are ones you can keep coming back to.',
  'filter.emptyQuick': 'No quick games yet. Check back soon!',
  'filter.emptyEndless': 'No endless games yet. Check back soon!',

  // Play styles
  'playStyle.quick': 'Quick',
  'playStyle.quick.hint': 'One round and done',
  'playStyle.endless': 'Endless',
  'playStyle.endless.hint': 'Keep coming back',

  // Badges
  'badge.new': 'New',
  'badge.comingSoon': 'Coming soon',

  // Platforms
  'platform.web': 'Web browser',
  'platform.ios': 'iPhone & iPad',
  'platform.android': 'Android',
  'platform.windows': 'Windows',
  'platform.macos': 'Mac',
  'platform.linux': 'Linux',

  // Game page
  'game.play': 'Play now',
  'game.comingSoon': 'Coming soon',
  'game.comingOn': 'Coming {date}',
  'game.comingSoonNote': "This game isn't ready yet. Check back soon!",
  'game.playStyle': 'Play style',
  'game.session': 'Average session',
  'game.platforms': 'Platforms',
  'game.released': 'Released',
  'game.expected': 'Expected',
  'game.about': 'About this game',
  'game.screenshots': 'Screenshots',
  'game.tags': 'Tags',
  'game.source': 'View the source code on GitHub',
  'game.back': 'All games',
  'game.pageTitle': '{title}: {tagline}',

  // About page
  'about.title': 'About KumoPlay',
  'about.description':
    'KumoPlay is a small indie studio making cozy, bite-sized games you can play anytime. Float in, float out, float back anytime.',
  'about.lead': 'Hello from the cloud! ☁️',
  'about.intro':
    'KumoPlay is a small indie studio making cozy, bite-sized games: the kind you can pick up while you wait for a friend, on a short break, or curled up before bed.',
  'about.nameTitle': 'Why "Kumo"?',
  'about.name':
    '"Kumo" means cloud in Japanese. Clouds drift in, drift away, and are always there when you look up again. That\'s how we want our games to feel.',
  'about.makeTitle': 'What we make',
  'about.makeQuick': 'Quick games are one round and done, just right for a few spare minutes.',
  'about.makeEndless': 'Endless games are little worlds you can keep coming back to, whenever you like.',
  'about.makeNote':
    "Nothing serious and nothing competitive. Just a few soft, happy minutes that are all yours. We add new games regularly, so there's always something new to discover.",
  'about.forTitle': "Who it's for",
  'about.for':
    'We make our games with girls and women of all ages in mind, from little ones to grown-ups. And everyone who loves cute, cozy things is welcome here too.',
  'about.helloTitle': 'Say hello',
  'about.hello':
    'Found a bug, or have an idea for a game? We would love to hear from you on GitHub.',
  'about.helloLink': 'Visit KumoPlay on GitHub',

  // 404 page
  '404.title': 'Page not found',
  '404.description': 'This page floated away.',
  '404.heading': 'This page floated away',
  '404.text': "We looked everywhere, but this page drifted off like a little cloud. Let's get you back to the games.",
  '404.cta': 'Back to all games',
  '404.suggestions': 'Or try one of these',

  // Footer
  'footer.links': 'More',
  'footer.rss': 'New games feed (RSS)',
  'footer.github': 'KumoPlay on GitHub',
  'footer.copyright': '© {year} KumoPlay',

  // RSS feed
  'rss.title': 'KumoPlay: new games',
  'rss.description': 'New cozy, bite-sized games from KumoPlay.',
} as const;
