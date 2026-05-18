# Clash Fight League — Site Design Specification

**Event:** Fight Night 01 · Amateur MMA  
**Date:** 13 June 2026  
**Venue:** ProAction Gym, Glen Anil, Durban

---

## 1. Navigation Bar

| Spec | Value | Notes |
|------|-------|-------|
| Position | Fixed top, z-index 1000 | |
| Height | 68px | |
| Background | #080809 at 96% opacity | `backdrop-filter: blur(12px)` |
| Border Bottom | `1px solid rgba(59,143,196,0.2)` | Subtle blue line |
| Logo | Icon image + 'CLASH / FIGHT LEAGUE' text | |
| Nav Links | HOME · FIGHT CARD · BLOG · MERCH · LIVE · GET TICKETS | |
| CTA Button | GET TICKETS — blue background | Animated glow pulse |
| Active State | Colour: white; no background | |
| Responsive | Non-CTA links hidden below 900px | |

---

## 2. Page List

| Page | Nav Label | Status / Notes |
|------|-----------|----------------|
| Home | HOME | Live — hero, sponsor bar, news, events, Instagram, newsletter, host gym |
| Fight Card | FIGHT CARD | Live — 3 tabs: Primas, Main Card, Prelims |
| Blog | BLOG | Coming Soon placeholder |
| Merch | MERCH | Coming Soon placeholder |
| Livestream | 🔴 LIVE | Live — admin stream URL setter, platform links |
| Tickets | GET TICKETS | Live — Standing R150, Seated R200, Paystack |

---

## 3. Home Page Sections

### Hero Section

| Element | Spec |
|---------|------|
| Height | 100vh minus nav (68px) |
| Background | Radial gradient: #0e1822 centre → #080809 edges |
| Grid Overlay | CSS grid lines — `rgba(59,143,196,0.06)`, 60×60px, masked radial |
| Spotlight | Blue radial glow ellipse, absolute centred top |
| Logo | 90px — white on transparent, floating animation (3s loop) |
| Eyebrow Text | 'Hosted by ProAction Gym · Durban' — blue, letter-spaced |
| Main Title | 'CLASH' — Bebas Neue, `clamp(5rem, 12rem)`, white |
| Subtitle | 'FIGHT LEAGUE' — Barlow Condensed, letter-spacing 10px, silver |
| Date Badge | 13 JUNE 2026 · 📍 Glen Anil, Durban — bordered pill |
| CTA Buttons | GET TICKETS (blue fill) + VIEW FIGHT CARD (ghost outline) |
| Animation | fadeUp on load — 1s ease, from `opacity:0` + `translateY(30px)` |

### Sponsor Bar

Thin bar between hero and news. Shows: 'Powered by' label + Empire Elite logo image (`empire_elite.png`) + 'EMPIRE ELITE NUTRITION' text in blue. Background: `var(--deep)`. Borders top and bottom.

### News Feed (3 Cards)

| Card | Headline | Content |
|------|----------|---------|
| 1 | The Clash Begins ⚔️ | First post caption verbatim. Image: Insta_cage.png. Link to Instagram. |
| 2 | Tickets Now On Sale — From R150 | Standing and seated available. Links to tickets page. |
| 3 | Full Fight Card Coming Soon | Updates via Instagram. Link to @clashfightleague. |

### Upcoming Event Block

Shows: Date (13 / JUN / 2026), event title, venue address with Google Maps link, fight summary, sponsor credit. Two CTA buttons: GET TICKETS + FIGHT CARD. Left blue border accent.

### Instagram / Social Block

Single large clickable block. Handle: **@CLASHFIGHTLEAGUE**. Link: https://www.instagram.com/clashfightleague/ — only social platform currently live. Used as news feed source. No Facebook, Twitter or TikTok yet.

### Newsletter Subscription

Fields: First Name, Surname, Email Address. Two-column layout (copy left, form right). Blue top border on box. Submit confirms with name. Note: no backend connected — placeholder form action.

### Host Gym — ProAction

| Field | Value |
|-------|-------|
| Gym Name | ProAction Gym |
| Tagline | State-of-the-art sanctuary where elite performance meets community |
| Address | 2 Sneezewood Lane, Glen Anil, Durban |
| Phone | +27 78 460 4528 |
| Email | admin@proaction.co.za |
| Disciplines | MMA, Muay Thai, Boxing, Wrestling, Jiu-Jitsu |
| Map | Google Maps embed (iframe) + 'Open in Google Maps' link button |
| Layout | Two-column: text + contact left, map iframe right |

---

## 4. Fight Card Page

### Page Header

Background: radial gradient dark. Title: 'CLASH FIGHT LEAGUE' + 'INAUGURAL EVENT · FIGHT CARD'. Subline: powered by Empire Elite Nutrition.

### Tab Structure — 3 Tabs

| Tab | Fights | Content Per Fighter |
|-----|--------|---------------------|
| PRIMAS | 2 (Main + Co-Main) | Photo upload area, Name, Nickname, Gym, Record, Age — large two-column layout with VS centre col |
| MAIN CARD | 8 fights | Name, Gym, Record, Age — smaller fight row layout with number placeholder, VS col, weight class |
| PRELIMS | 10 fights | Name only, Age, Gym — simple left/VS/right row, no photos |

### Pre-loaded Fighter — Etiene

Etiene's photo (`Etiene.png`) is pre-loaded into the Main Event prima slot (left fighter). Displayed as 90×110px portrait, `object-fit: cover`, top-aligned. Only fighter with a real photo — all others show placeholder initials.

### Fighter Data

All 18 remaining main card and prima fighters + 10 prelim matchups are populated as TBC placeholders. Data format: `f1n, f1gym, f1rec, f1age, f2n, f2gym, f2rec, f2age, weight`. Ready to update via JavaScript array or admin UI.

---

## 5. Tickets Page

| Spec | Standing | Seated |
|------|----------|--------|
| Type Label | 🎟 Standing | 💺 Seated |
| Price | R150 per ticket | R200 per ticket |
| Min Quantity | 1 | 1 |
| Card Style | Standard dark card | Blue top border accent |
| Includes | General admission, all fights, concessions | Reserved seating, all fights, priority entry, concessions |
| Promo Codes | REMOVED — to add later | REMOVED — to add later |

### Cart & Payment

Cart summary shows automatically after 'Add to Cart'. Shows line items, quantity, total in Rands. Payment form: First Name, Last Name, Email, Phone. Payment gateway: Paystack (SA). Button triggers Paystack integration point.

Note: Paystack public key not yet connected — stub in place. Accepted: Visa, Mastercard, EFT.

### Admin Price Editing

Admin mode enables 'Edit Ticket Prices' button in admin bar. Modal allows updating both Standing and Seated prices. Prices update live across the page and recalculate cart totals.

---

## 6. Livestream Page

| Spec | Value |
|------|-------|
| Default State | STREAM NOT YET ACTIVE — placeholder text and icon |
| Admin Function | Paste YouTube embed URL → SET STREAM LIVE button |
| Embed | iframe auto-populates with URL, 100% wide × 480px height |
| Status Text | Changes to '🔴 LIVE NOW' when URL is set |
| Platform Links | YouTube channel link + Instagram link (only 2 active) |
| YouTube Handle | https://www.youtube.com/@clashfightleague (placeholder) |
| Instagram | https://www.instagram.com/clashfightleague/ (live) |

---

## 7. Coming Soon Pages

| Page | Icon | Subtext |
|------|------|---------|
| Blog | 📝 | Event blogs, fighter spotlights & fight night recaps |
| Merch | 👕 | Official Clash Fight League merchandise dropping soon |
| Fighter Profiles | N/A | Not currently a page — referred to in documentation but not yet built |

---

## 8. Design Tokens

| Token | Value |
|-------|-------|
| `--black` | #080809 |
| `--deep` | #0d0e10 |
| `--dark` | #111316 |
| `--blue` | #3b8fc4 |
| `--blue-bright` | #55aadf |
| `--blue-dim` | #1e4a6a |
| `--white` | #f0f2f5 |
| `--grey` | #777e8a |
| `--silver` | #8a9aaa |
| Primary Font | Bebas Neue (headings) |
| Secondary Font | Barlow Condensed (nav, labels) |
| Body Font | Barlow (body copy) |
| Hero Font | Instrument Serif (cinematic italic headlines) |

---

*Last updated: 14 May 2026*
