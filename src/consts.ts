export const WHATSAPP_URL =
  "https://wa.me/821075191282?text=Hi%20Balli%20Balli%21%20I%20need%20help.%0A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Address%3A%0A-%20What%27s%20the%20problem%3A%0A%0A%28Photos%20help%20a%20lot%21%29";

export const EMAIL_ADDRESS = "balliballiseoul@gmail.com";
export const EMAIL_URL =
  "mailto:balliballiseoul@gmail.com?subject=Balli%20Balli%20Seoul%20-%20Help%20request&body=Hi%20Balli%20Balli%2C%0A%0A-%20Name%3A%0A-%20Phone%2FKakaoTalk%20ID%3A%0A-%20Address%3A%0A-%20What%27s%20the%20problem%3A%0A%0A%28Photos%20help%20a%20lot%20-%20please%20attach%20them.%29";

export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf6f4cI3S08-bYTxSsbI0FpxQ4KKFAIdPJRRdx6Mc1gIs66FQ/viewform";

// 청소 CTA 전용 — 희망 요일·시간을 묻고 최소 2~3일 전 예약을 안내한다.
// 카카오 채널 채팅(pf.kakao.com)은 문구를 미리 채울 수 없어 화면 안내문(CLEANING_BOOKING_NOTICE)으로 대신한다.
export const WHATSAPP_CLEANING_URL =
  "https://wa.me/821075191282?text=Hi%20Balli%20Balli%21%20I%27d%20like%20a%20cleaning%20quote.%0A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Address%3A%0A-%20Home%20size%20%28pyeong%20or%20m2%29%3A%0A-%20What%20I%20need%20%28move-in%20deep%20clean%20%2F%20housekeeping%20%2F%20mold%20%2F%20Airbnb%29%3A%0A-%20Preferred%20day%20%28e.g.%20Sat%204%20Oct%2C%20or%20weekdays%29%3A%0A-%20Preferred%20time%20%28e.g.%2010am%2C%20or%20morning%29%3A%0A%0A%28Photos%20help%20a%20lot%21%20Please%20book%20at%20least%202%E2%80%933%20days%20ahead%20%E2%80%94%20ideally%20a%20week.%20Same-day%20or%20next-day%20requests%20may%20not%20be%20possible.%29";
export const EMAIL_CLEANING_URL =
  "mailto:balliballiseoul@gmail.com?subject=Balli%20Balli%20Seoul%20-%20Cleaning%20quote&body=Hi%20Balli%20Balli%2C%0A%0A-%20Name%3A%0A-%20Phone%2FKakaoTalk%20ID%3A%0A-%20Address%3A%0A-%20Home%20size%20%28pyeong%20or%20m2%29%3A%0A-%20What%20I%20need%20%28move-in%20deep%20clean%20%2F%20housekeeping%20%2F%20mold%20%2F%20Airbnb%29%3A%0A-%20Preferred%20day%20%28e.g.%20Sat%204%20Oct%2C%20or%20weekdays%29%3A%0A-%20Preferred%20time%20%28e.g.%2010am%2C%20or%20morning%29%3A%0A%0A%28Photos%20help%20a%20lot%20-%20please%20attach%20them.%20Please%20book%20at%20least%202%E2%80%933%20days%20ahead%20%E2%80%94%20ideally%20a%20week.%20Same-day%20or%20next-day%20requests%20may%20not%20be%20possible.%29";
export const CLEANING_BOOKING_NOTICE =
  "Please book at least 2–3 days ahead — ideally a week. Same-day or next-day requests may not be possible.";

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
