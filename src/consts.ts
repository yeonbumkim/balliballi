export const WHATSAPP_URL =
  "https://wa.me/821075191282?text=Hi%20Balli%20Balli%21%20I%20need%20help.%0A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Address%3A%0A-%20What%27s%20the%20problem%3A%0A%0A%28Photos%20help%20a%20lot%21%29";

export const EMAIL_ADDRESS = "balliballiseoul@gmail.com";
export const EMAIL_URL =
  "mailto:balliballiseoul@gmail.com?subject=Balli%20Balli%20Seoul%20-%20Help%20request&body=Hi%20Balli%20Balli%2C%0A%0A-%20Name%3A%0A-%20Phone%2FKakaoTalk%20ID%3A%0A-%20Address%3A%0A-%20What%27s%20the%20problem%3A%0A%0A%28Photos%20help%20a%20lot%20-%20please%20attach%20them.%29";

export const KAKAO_URL = "https://pf.kakao.com/_RJxhSX/chat";

export const SERVICE_PAGES = {
  plumbing: { href: '/plumbing', label: 'English-speaking plumbing service' },
  locksmith: { href: '/locksmith', label: 'locksmith service arranged in English' },
  cleaning: { href: '/cleaning', label: 'cleaning service booked in English' },
  moving: { href: '/moving', label: 'moving help arranged in English' },
  'korean-lessons': { href: '/korean-lessons', label: 'Korean lessons arranged in English' },
  etc: { href: '/etc', label: 'anything-else concierge service' },
} as const;

// /blog 목록·글 상단 칩에 쓰는 독자용 분류 라벨.
// 값(슬러그)은 src/content.config.ts의 category enum과 일치해야 한다.
export const CATEGORY_LABELS = {
  home: 'Home',
  food: 'Food & drink',
  transport: 'Transport',
  health: 'Health',
  'settling-in': 'Settling in',
  'things-to-do': 'Things to do',
  culture: 'Culture',
} as const;
