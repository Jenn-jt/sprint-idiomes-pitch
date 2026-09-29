---
name: Sprint Idiomes
description: Language school pitch site for a 50-year-old academy in Sant Cugat — one flat, no-nonsense chassis, one distinct color per course track.
colors:
  ink: "#15203D"
  ink-soft: "#4A5878"
  cream: "#FAF5EA"
  blue: "#2547D9"
  yellow: "#FFB800"
  kids-planet: "#EC1E8C"
  kids-planet-dark: "#B0125F"
  kids: "#FF6B35"
  kids-dark: "#CC3300"
  teens: "#26A69A"
  teens-dark: "#0F766E"
  cambridge: "#E1000F"
  adults: "#1B5E3A"
  adults-mid: "#144B2E"
  francais: "#78350F"
  francais-mid: "#92400E"
  francais-light: "#B45309"
  business: "#1A0B2E"
  business-mid: "#3D1F5C"
  business-bord: "#9B72CF"
  particulars: "#036896"
  particulars-deep: "#002A3D"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 6.4vw, 76px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(28px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Nunito, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Nunito, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.55
  small:
    fontFamily: "Nunito, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  label:
    fontFamily: "Nunito, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  pill: "100px"
  card: "20px"
  chip: "8px"
spacing:
  gutter-mobile: "22px"
  gutter-desktop: "32px"
  section-mobile: "56px"
  section-desktop: "80px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-course:
    backgroundColor: "{colors.kids}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 34px"
  button-course-hover:
    backgroundColor: "{colors.kids}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  card-level:
    backgroundColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "28px"
---

# Design System: Sprint Idiomes

## Overview

**Creative North Star: "El Fichero de Asignaturas" (The Subject Binder)**

Sprint Idiomes' site is built like a well-kept school filing system: one shared binder (navigation, typography, button shape, spacing rhythm) that never changes, with a distinct colored tab for every subject inside it. Kids Planet is magenta, Kids is orange, Teens is teal, Cambridge is red, Adults is forest green, Français is amber-brown, Business is violet, Particulars is petrol blue — walk from one course page to the next and the accent changes, but the shelf it sits on (ink-navy text, cream backgrounds, pill buttons, Bricolage Grotesque headlines) never does. That consistency is doing real work: the school is pitching 50 years of continuity (three generations of the same families), and a chassis this disciplined reads as an institution that has had its paperwork in order since 1973, not a startup improvising a brand.

The character is warm but efficient, confident without décor: **Joan Miró / CaixaBank** is the client's own stated reference — flat solid colors, no gradients, no decorative embellishment, shapes that read instantly. Color carries the personality; nothing else is asked to. Confirmed visual rejection: no gradients as a fill technique, no busy/organic shadow "stickers," no per-page typographic reinvention.

**Key Characteristics:**
- One neutral chassis (ink/cream/blue/yellow + Bricolage Grotesque/Nunito) shared by every page; one accent color per course, never mixed.
- Flat by default; a soft colored glow is reserved for primary CTA buttons only, as the hover-affordance itself, not as decoration.
- Every clickable button is a pill (100px radius) regardless of color or page — shape is the one constant users can rely on.
- Small colored dots (course identity) reused everywhere the same course is referenced: nav dropdown, course pills, mobile menu, footer — one dot, one meaning, sitewide.

## Colors

Each course track owns exactly one accent; the chassis (ink, cream, blue, yellow) is shared and never reassigned to a course.

### Primary
- **Ink Navy** (`#15203D`): the one text/heading color used everywhere, on every page, regardless of course accent. Also the default nav and footer background.
- **Signal Blue** (`#2547D9`): the sitewide "Prova gratuïta" primary action — the one CTA that means the same thing (talk to us) on every single page, independent of which course you're browsing.
- **Marker Yellow** (`#FFB800`): the exact color pulled from the logo. Used only for small, deliberate marks — active-state dots, underlines, the mobile menu's accent bar — never as a large fill. Its scarcity is what makes it read as "the brand," not just another course color.

### Secondary — Course Accents
- **Kids Planet Magenta** (`#EC1E8C`, dark `#B0125F` for AA text): 3–6 años.
- **Kids Orange** (`#FF6B35`, dark `#CC3300` for AA text): 7–12 años.
- **Teens Teal** (`#26A69A`, dark `#0F766E` for AA text): 12–17 años.
- **Cambridge Red** (`#E1000F`): exam-prep course.
- **Adults Forest** (`#1B5E3A`, mid `#144B2E`): adult general English.
- **Français Amber-Brown** (`#78350F`, mid `#92400E`, light `#B45309`): the one warm earthy accent in an otherwise saturated set, deliberately distinct from the reds/oranges nearby.
- **Business Violet** (`#9B72CF` on a near-black `#1A0B2E`/`#3D1F5C` ground): the only course whose whole hero inverts to dark, signaling "this one's for companies, not individuals."
- **Particulars Petrol Blue** (`#036896`, deep `#002A3D`): 1-to-1 private classes.

### Neutral
- **Cream** (`#FAF5EA`): the warm off-white used for section backgrounds and paper-like fills; never pure white as the "resting" color of a page.
- **Ink Soft** (`#4A5878`): secondary/body text, captions, muted labels — always paired with Ink Navy for headings, never used for a heading itself.
- **Hairline** (`rgba(21,32,61,.1)` / `.2` for the stronger variant): the only border/divider treatment on the site; no solid gray borders.

### Named Rules
**The One Accent Rule.** A page belonging to a course uses that course's accent for every colored element on it (dots, buttons, stat numbers, underlines) — never a second course's color, never the neutral chassis colors standing in for it.

## Typography

**Display Font:** Bricolage Grotesque (fallback: ui-sans-serif, system-ui, sans-serif)
**Body Font:** Nunito (fallback: ui-sans-serif, system-ui, sans-serif)

**Character:** A geometric, slightly quirky display face (used only at large sizes, tight tracking, heavy weight) paired with a rounded, friendly body face — confident headline, approachable body copy. The pairing is what keeps "50 years of institutional trust" from reading as cold.

### Hierarchy
Seven steps, audited and consolidated from the shipped code (index.html + nav.js) on 2026-09-29 — every literal `font-size` on the homepage and shared nav/footer now resolves to one of these seven values; nothing sits between them.

- **Display** (800, `clamp(44px,6.4vw,76px)`, line-height 1.02, tracking -0.04em): page-hero H1s only — one per page. index.html's campaign hero uses its own `clamp(34px,4.6vw,64px)` — the one confirmed campaign-scale exception (homepage, not an interior page).
- **Headline** (800, `clamp(28px,4vw,48px)`, line-height 1.05, tracking -0.04em): section H2s, the CTA band's closing headline. index.html's campaign section titles use `clamp(36px,5vw,72px)`; four other mid-weight headings (course card title, both contact-section h3s, the legacy stat number) share the same 36px base as a fixed size, so the section title is the only one that keeps growing past that point on wide viewports.
- **Title** (700, 22px, line-height 1.1, tracking -0.02em): card-level headings that live inside a card or list rather than opening a section — why-us card titles, method-step titles, the audience-bubble labels, the mobile full-screen menu's top-level links.
- **Lead** (600, 18px): intro/lead paragraphs that need more weight than Body but aren't a heading — section leads, the hero subhead, the method section's intro line.
- **Body** (500, 16px, line-height 1.55): paragraph copy, descriptions, form labels.
- **Small** (600, 15px): buttons, CTAs, nav links, secondary paragraph text — one step below Body for interactive/UI text and any description copy that needs to read a touch quieter than the main body size.
- **Label** (700, 12px, tracking 0.1em, uppercase): section eyebrows, stat captions, badges, nav pills, course-age tags — the smallest text on the site, reserved for short all-caps tags, never for a sentence.

### Named Rules
**The One Display Size Rule.** `--fs-h1`/`--fs-h2` are shared fluid tokens; a page never invents its own hero size — index.html's larger campaign H1 is the one confirmed exception, since it is the standalone homepage, not an interior page.
**The Seven-Step Rule.** Every new size must land on Display, Headline, Title, Lead, Body, Small, or Label — never introduce a one-off value (a 17px, a 14.5px) to split the difference between two existing steps.
**The Watermark Exception.** Two background-text elements sit outside the seven steps by design, confirmed with the user on 2026-09-29: the "1973" numeral behind the hero (`clamp(180px,28vw,400px)`, desktop; `clamp(120px,22vw,260px)`, tablet) and the footer's "Hello, Hi, Hola." (`clamp(48px,9vw,120px)`). Both render at near-zero opacity purely as oversized background texture, not as legible copy — forcing them onto the reading scale (max 64px) would shrink them into ordinary, legible-sized text and delete the watermark effect that is their entire purpose. Never resize these to match Display; if a future watermark is added, it follows this same exception, not the seven-step scale.

## Layout

Interior pages share `shared.css`'s spatial rhythm: 32px side gutter on desktop, dropping to 22px under 960px; section vertical padding is 80px desktop, 56px mobile. Content max-width is 1480px, centered. The homepage (`index.html`) is the one standalone exception with its own campaign-scale spacing, not shared.css's rhythm.

Multi-column grids (level cards, program cards, modality cards) collapse to a single column at mobile widths without exception — no forced horizontal scroll on a content grid. The one deliberate horizontal-scroll pattern is the course-switcher pill bar and schedule tables, which scroll by design (an affordance, not a bug) rather than wrapping or hiding data.

## Elevation & Depth

Flat by default: cards, badges, pills and the course-switcher bar carry no shadow at all — separation comes from a hairline border or a cream/white background swap, never a drop shadow. This is a deliberate client direction (the Miró/CaixaBank reference specifically ruled out decorative shadows on the navigation system) and it now holds for every flat surface on the site.

The one exception is intentional: a primary course CTA button (`.btn-kids`, `.btn-adults`, etc.) carries a soft, color-matched ambient glow (e.g. `0 6px 24px rgba(27,94,58,.28)` on the green Adults button) that deepens on hover (`0 10px 32px …`, `.36` alpha) alongside a `translateY(-2px)` lift. That glow *is* the hover feedback — it's not decoration sitting on top of a static button, it's the mechanism that tells you the button is interactive. A floating overlay (the desktop "Cursos" dropdown) gets a standard elevated-panel shadow (`0 8px 40px rgba(21,32,61,.13)`) for the ordinary functional reason any flyout needs separation from the page beneath it — that is not the Miró exception, it is normal UI elevation.

### Shadow Vocabulary
- **Course-glow** (`0 6px 24px <course-color>@28%`, hover `0 10px 32px @36%` + `translateY(-2px)`): primary course CTA buttons only.
- **Overlay-panel** (`0 8px 40px rgba(21,32,61,.13), 0 1px 4px rgba(21,32,61,.07)`): the desktop Cursos dropdown and any future floating panel.

### Named Rules
**The Flat-Chassis Rule.** Navigation, pills, badges and cards never carry a shadow. If something needs to look clickable, that's the course-glow's job, not a generic card shadow.

## Shapes

Buttons are pills without exception — `border-radius:100px` (or the visually-identical `50px` shorthand some pages use on a shorter button height) regardless of color, page, or context; this held even through several redesign rounds this session and is the single shape constant a user can rely on across all 11 pages. Cards and content containers use a softer 18–22px corner radius. Small tags/badges/chips use an 6–8px radius, distinctly less rounded than buttons and cards, so the eye can tell "this is a label" from "this is a button" at a glance.

## Components

Buttons, cards, and badges/pills are documented in the sidecar (`.impeccable/design.json`) with full drop-in HTML/CSS. Character in one phrase each: **solid, warm, unadorned** — Joan Miró / CaixaBank flat color blocks, no gloss, no gradient, no texture.

### Buttons
- **Shape:** full pill (100px radius), no exceptions.
- **Primary (sitewide):** Signal Blue fill, white text, `12px 22px` padding, no shadow — this is the one button that means the same thing on every page ("Prova gratuïta").
- **Course CTA:** filled with that page's course accent, white text, `16px 34px` padding, course-colored ambient glow that deepens on hover + 2px lift.
- **Ghost/secondary:** transparent fill, white or ink text depending on background, 1.5px border at ~55% opacity (raised from a much fainter default this session to clear WCAG AA and read as an actual button edge), no shadow.

### Cards / Containers
- **Corner Style:** 18–22px radius.
- **Background:** white on a cream/tinted section, or cream on a white section — always the complementary neutral, never white-on-white.
- **Shadow Strategy:** none at rest (see Elevation & Depth); a light lift-on-hover shadow is acceptable for a genuinely interactive card, but static info cards (course level cards) stay flat even on hover, per this session's accessibility pass which stripped false "looks clickable" affordance from non-interactive cards.
- **Border:** 1–1.5px hairline at ~10% ink opacity.
- **Internal Padding:** 24–28px.

### Navigation
- Top bar: white background, ink-navy text, Signal Blue "Prova gratuïta" pill always visible; active link gets a cream pill background (`#FAF5EA`), not an underline.
- Course-switcher bar (appears only on course pages): white background, one pill per course with its own colored dot, active course gets a colored underline in that course's accent.
- Mobile menu: a full-width dark curtain (`#15203D`) that drops in directly below the real page header (computed per-page, since some pages carry extra sticky bars) rather than a boxed side panel — large Bricolage Grotesque links, a small colored dot as the only "you are here" marker, no background fills or borders on the links themselves. The hamburger icon is two asymmetric hairline bars (one full-width, one at 70%) that rotate into an X and double as the close control — no separate close button.

### Forms
- Text inputs and the reason-for-class select share the flat, bordered, no-shadow language of the rest of the chassis; every label carries a matching `for`/`id` pair (fixed this session for accessibility).

## Do's and Don'ts

### Do:
- **Do** keep every button a pill (100px radius) no matter what color or page it's on.
- **Do** give each course exactly one accent color and use it for every colored element on that course's pages — dots, stat numbers, buttons, underlines.
- **Do** reserve Marker Yellow (`#FFB800`) for small marks (dots, underlines, accents), never a large fill — its rarity is what reads as "the brand."
- **Do** put the course-glow shadow only on primary course CTA buttons, and only as hover-responsive feedback, never as a resting decoration.
- **Do** keep the same neutral chassis (ink/cream/blue/yellow, Bricolage Grotesque + Nunito, pill buttons, 22–32px gutters) identical across every interior page; only the course accent changes.
- **Do** meet WCAG AA on every text/background pairing — this project already had a full contrast/focus/heading-order pass; hold that bar for new work, don't regress it.

### Don't:
- **Don't** put a shadow on a card, pill, badge, or nav element at rest — that space is reserved for the course-glow CTA treatment only.
- **Don't** use a gradient as a fill technique anywhere; the client's explicit Miró/CaixaBank reference rules this out.
- **Don't** give a static, non-interactive card (like a course level card) a hover-lift or pointer cursor — that affordance is reserved for things that actually navigate somewhere; this was an accessibility fix this session and should not regress.
- **Don't** invent a new display type size per page — reuse `--fs-h1`/`--fs-h2`; index.html's own larger campaign scale is the one confirmed exception, not a precedent for other pages.
- **Don't** mix a second course's accent color onto a page that already belongs to a different course.
