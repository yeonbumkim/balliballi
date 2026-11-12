// 2026-11-11 전 서비스 종료.
// 왓츠앱·카카오톡 문의 동선과 구글 문의 폼은 제거했다. 남은 연락 창구는 이메일뿐이다.

export const EMAIL_ADDRESS = "balliballiseoul@gmail.com";
export const EMAIL_URL =
  "mailto:balliballiseoul@gmail.com?subject=Balli%20Balli%20Seoul%20-%20Enquiry&body=Hi%20Balli%20Balli%2C%0A%0A%28Note%3A%20all%20services%20ended%20on%2011%20November%202026.%20If%20you%20had%20something%20underway%20with%20us%2C%20tell%20us%20what%20it%20was%20and%20we%20will%20say%20where%20it%20stands.%29%0A%0A";

// service enum -> 서비스 페이지 (전부 종료, 참고용으로만 유지)
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
