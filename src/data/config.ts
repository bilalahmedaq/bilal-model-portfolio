// ============================================================
//  PORTFOLIO CONFIGURATION — edit this file to update content
// ============================================================

/**
 * Your physical measurements displayed in the header data strip.
 * Update any value here and it will be reflected instantly on the page.
 */
export const measurements = {
  height:   "5'10\"",
  chest:    "38\"",
  waist:    "30\"",
  hips:     "35\"",
  shoe:     "US 10",
  hair:     "Black",
  eyes:     "Black",
} as const;

/**
 * Your contact email — used in the footer "Contact Me" link.
 */
export const contactEmail = "bilalahmedaq@gmail.com";

/**
 * Your display name shown in the header.
 */
export const modelName = "BILAL AQ";

/**
 * Gallery images — polaroid photos displayed in the masonry grid.
 *
 * To add a photo:     1. Drop the image file into /public/polaroids/
 *                     2. Add a new entry to this array below.
 *
 * To remove a photo:  Delete or comment out the entry.
 * To reorder photos:  Simply move the entry up or down in the array.
 *
 * `alt` is important for accessibility and SEO — describe the shot briefly.
 */
export const galleryImages: { src: string; alt: string }[] = [
  // ── Row 1: Close-up / portrait shots (3 × col-span-2) ──────────────────────
  { src: "/polaroids/Stern Studio Portrait in Black Tank.png",       alt: "Direct front-facing studio portrait" },
  { src: "/polaroids/Profile Athletic Portrait on White.png",        alt: "Side profile close-up portrait" },
  { src: "/polaroids/Slicked-Back Athlete Profile on White.png",     alt: "Slicked-back hair profile close-up" },

  // ── Rows 2 & 3: Full-body shots (4 × col-span-3, 2 per row) ────────────────
  { src: "/polaroids/Studio Portrait of a Young Athlete.png",        alt: "Full body front studio shot" },
  { src: "/polaroids/Confident Athlete in Black Activewear.png",     alt: "Full body confident front pose" },
  { src: "/polaroids/Side-Profile Athlete in Black Sportswear.png",  alt: "Full body right side profile" },
  { src: "/polaroids/Sleek Left-Profile Athletic Portrait.png",       alt: "Full body left side profile" },
];
