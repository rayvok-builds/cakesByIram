import React from "react";

export const HeroCakeSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 400 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Handcrafted 4-layer cake illustration"
    role="img"
  >
    {/* Cake Stand Base & Stem */}
    <path
      d="M130 410 C130 395, 270 395, 270 410 L290 425 H110 L130 410 Z"
      fill="var(--gold)"
      opacity="0.85"
    />
    <rect x="188" y="360" width="24" height="40" rx="4" fill="var(--gold)" opacity="0.9" />
    <path
      d="M80 365 C80 355, 320 355, 320 365 C320 375, 80 375, 80 365 Z"
      fill="var(--paper)"
      stroke="var(--gold)"
      strokeWidth="3"
    />

    {/* Cake Shadow */}
    <ellipse cx="200" cy="355" rx="100" ry="12" fill="var(--plum)" opacity="0.15" />

    {/* Bottom Tier (Layer 1) - Dark Berry/Plum */}
    <rect x="105" y="275" width="190" height="75" rx="6" fill="var(--plum)" />
    {/* Frosting filling line 1 */}
    <rect x="105" y="310" width="190" height="8" fill="var(--blush)" opacity="0.9" />
    {/* Drip Details on Layer 1 */}
    <path
      d="M105 275 Q115 288 125 275 Q135 292 145 275 Q160 286 175 275 Q190 294 205 275 Q220 287 235 275 Q250 290 265 275 Q280 285 295 275"
      fill="none"
      stroke="var(--blush)"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Tier 2 - Berry Accent */}
    <rect x="120" y="200" width="160" height="70" rx="6" fill="var(--berry)" />
    {/* Frosting filling line 2 */}
    <rect x="120" y="232" width="160" height="7" fill="var(--paper)" opacity="0.9" />
    {/* Pearl trim between Tier 1 & Tier 2 */}
    <g fill="var(--gold)">
      <circle cx="125" cy="275" r="4" />
      <circle cx="140" cy="275" r="4" />
      <circle cx="155" cy="275" r="4" />
      <circle cx="170" cy="275" r="4" />
      <circle cx="185" cy="275" r="4" />
      <circle cx="200" cy="275" r="4" />
      <circle cx="215" cy="275" r="4" />
      <circle cx="230" cy="275" r="4" />
      <circle cx="245" cy="275" r="4" />
      <circle cx="260" cy="275" r="4" />
      <circle cx="275" cy="275" r="4" />
    </g>

    {/* Tier 3 - Blush / Cream Layer */}
    <rect x="135" y="130" width="130" height="65" rx="6" fill="var(--blush)" />
    {/* Frosting filling line 3 */}
    <rect x="135" y="160" width="130" height="6" fill="var(--berry)" opacity="0.8" />

    {/* Tier 4 (Top Tier) - Paper White with Gold Edging */}
    <rect x="150" y="70" width="100" height="55" rx="6" fill="var(--paper)" stroke="var(--gold)" strokeWidth="2" />
    {/* Gold Leaf accents */}
    <path d="M160 85 Q170 80 165 95 Q180 90 172 105" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
    <path d="M225 80 Q235 92 242 85" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />

    {/* Top Buttercream Swirls */}
    <path
      d="M150 70 C155 60, 170 60, 175 70 C180 60, 195 60, 200 70 C205 60, 220 60, 225 70 C230 60, 245 60, 250 70"
      fill="var(--paper)"
      stroke="var(--blush)"
      strokeWidth="3"
    />

    {/* 3 Small Candles */}
    {/* Candle 1 (Left) */}
    <rect x="170" y="38" width="6" height="26" rx="2" fill="var(--berry)" />
    <line x1="173" y1="38" x2="173" y2="30" stroke="var(--ink)" strokeWidth="1.5" />
    <ellipse cx="173" cy="24" rx="4" ry="7" fill="var(--gold)" />
    <circle cx="173" cy="25" r="2" fill="#FFF5C0" />

    {/* Candle 2 (Center - taller) */}
    <rect x="197" y="32" width="6" height="32" rx="2" fill="var(--plum)" />
    <line x1="200" y1="32" x2="200" y2="23" stroke="var(--ink)" strokeWidth="1.5" />
    <ellipse cx="200" cy="16" rx="4.5" ry="8" fill="var(--gold)" />
    <circle cx="200" cy="17" r="2" fill="#FFF5C0" />

    {/* Candle 3 (Right) */}
    <rect x="224" y="38" width="6" height="26" rx="2" fill="var(--berry)" />
    <line x1="227" y1="38" x2="227" y2="30" stroke="var(--ink)" strokeWidth="1.5" />
    <ellipse cx="227" cy="24" rx="4" ry="7" fill="var(--gold)" />
    <circle cx="227" cy="25" r="2" fill="#FFF5C0" />

    {/* Sparkle Details */}
    <path d="M90 140 L94 148 L102 152 L94 156 L90 164 L86 156 L78 152 L86 148 Z" fill="var(--gold)" opacity="0.75" />
    <path d="M310 210 L313 216 L319 219 L313 222 L310 228 L307 222 L301 219 L307 216 Z" fill="var(--gold)" opacity="0.75" />
    <path d="M290 80 L292 84 L296 86 L292 88 L290 92 L288 88 L284 86 L288 84 Z" fill="var(--berry)" opacity="0.6" />
  </svg>
);

export const IconBiscoff: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <rect x="3" y="6" width="18" height="12" rx="3" />
    <path d="M7 10h10M7 14h6" />
  </svg>
);

export const IconVelvet: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const IconLemon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <ellipse cx="12" cy="12" rx="8" ry="6" transform="rotate(-30 12 12)" />
    <path d="M5 6c-1-1-2-1-3 0s-1 2 0 3M19 18c1 1 2 1 3 0s1-2 0-3" />
  </svg>
);

export const IconCaramel: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M12 2v6M12 22v-4M4.93 4.93l4.24 4.24M19.07 19.07l-4.24-4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M19.07 4.93l-4.24 4.24" />
  </svg>
);

export const IconPistachio: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M12 2a9 9 0 0 1 9 9c0 5-4 11-9 11S3 16 3 11a9 9 0 0 1 9-9z" />
    <path d="M12 6v12M8 10c2 2 4 2 8 0" />
  </svg>
);

export const IconHazelnut: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 5V2M9 4l3-2 3 2" />
  </svg>
);

export const IconStrawberry: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M12 22C6 22 4 14 4 10a8 8 0 0 1 16 0c0 4-2 12-8 12z" />
    <path d="M8 6c2 1 4 0 4-3c0 3 2 4 4 3" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
  </svg>
);

export const IconCookie: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="8" r="1" fill="currentColor" />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
    <circle cx="15" cy="14" r="1" fill="currentColor" />
  </svg>
);

export const IconWedding: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M6 20h12v-4H6v4zM8 16h8v-4H8v4zM10 12h4V8h-4v4zM12 8V4" />
  </svg>
);

export const IconBirthday: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16h16M12 11V7M12 4v.01" />
  </svg>
);

export const IconCupcake: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <path d="M6 10l1.5 11h9L18 10" />
    <path d="M4.5 10c0-2.5 3.5-4 7.5-4s7.5 1.5 7.5 4" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

export const IconInstagram: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="20" height="20">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const IconMail: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const IconArrowRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconMenu: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconClose: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconStar: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-gold fill-gold" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="22" height="22">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
