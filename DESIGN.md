---
name: Jishnu Portfolio
description: A warm-paper archive for full-stack project work.
colors:
  paper: "#f3f1eb"
  ink: "#171717"
  orange: "#f04b27"
  accent-ink: "#b3341b"
  muted: "#85847d"
  muted-readable: "#626159"
  surface: "#e6e3da"
  surface-raised: "#f8f6f0"
  rule: "rgba(23, 23, 23, 0.38)"
  rule-soft: "rgba(23, 23, 23, 0.2)"
  focus: "#bf2d10"
  ink-theme-accent-ink: "#ff9476"
  ink-theme-muted: "#b7b3a9"
  ink-theme-muted-readable: "#cbc7bd"
  ink-theme-surface: "#252520"
  ink-theme-surface-raised: "#20201c"
  ink-theme-rule: "rgba(243, 241, 235, 0.4)"
  ink-theme-rule-soft: "rgba(243, 241, 235, 0.23)"
  ink-theme-focus: "#ff9b7e"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.35rem, 5.15vw, 5.9rem)"
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.2vw, 5.6rem)"
    fontWeight: 500
    lineHeight: 0.84
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1
  body:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.69rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  page-gutter: "clamp(18px, 2.35vw, 38px)"
components:
  desktop-nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted-readable}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 4px"
    height: "44px"
  project-index-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "9px 0"
    height: "58px"
  mobile-project-select:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "8px"
    height: "68px"
  filter-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted-readable}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 9px"
    height: "32px"
  project-canvas:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "clamp(18px, 2vw, 31px)"
  field-notes-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted-readable}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0"
    height: "40px"
  case-study-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0"
    height: "40px"
  field-notes-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "17px 18px 19px"
---

# Design System: Jishnu Portfolio

## Overview

**Creative North Star: “The Registered Archive”**

This portfolio behaves like a project register set on warm paper: firm columns, numbered entries, thin rules, and compact technical labels give the work a clear record. Oversized Cormorant Garamond headlines add an expressive editorial voice, while IBM Plex Sans and Mono keep explanations and metadata direct.

The canvas pairs an index with a generous project study. A brief orange registration shift marks a change of project; the accent stays deliberate, while the paper and near-black surfaces carry most of the page. Project compositions remain authored editorial studies made from documented facts until actual screenshots are supplied, and are identified as studies rather than product captures.

**Key Characteristics:**
- Asymmetric project index and canvas.
- Warm paper, near-black, and restrained vivid orange.
- Oversized serif headlines with compact mono metadata.
- Fine rules, numbered folios, and a short registration reveal.

## Colors

Warm paper and near-black set the page; orange carries selective emphasis, with a darker readable accent and muted neutral text supporting small labels and rules. The optional Ink theme reverses the paper and ink roles and lifts accent and muted text colors for contrast.

### Primary
- **Registration orange** (`orange`): marks active project changes, selected underlines, and a small number of focal artwork planes.
- **Deep accent ink** (`accent-ink`): supplies emphasis where orange would be too bright for small text, including selected folio numbers.
- **Ink-theme accent** (`ink-theme-accent-ink`): the lighter small-text accent used in the dark theme.

### Neutral
- **Warm paper** (`paper`): the default page and study surface.
- **Near-black** (`ink`): primary text and the strongest dark plane.
- **Quiet gray** (`muted`): low-priority interface marks such as the scrollbar thumb.
- **Readable gray** (`muted-readable`): supporting copy, metadata, and secondary labels.
- **Soft stone** (`surface`): the canvas surround that separates project artwork from the page.
- **Raised paper** (`surface-raised`): the framed artwork surface.
- **Ink rule** (`rule`): primary hairlines and panel divisions.
- **Soft ink rule** (`rule-soft`): dotted row dividers and secondary separators.
- **Focus red** (`focus`): keyboard focus outline in the paper theme.
- **Ink-theme readable gray** (`ink-theme-muted-readable`) and **ink-theme quiet gray** (`ink-theme-muted`): muted text and low-priority marks in the dark theme.
- **Ink-theme stone** (`ink-theme-surface`) and **ink-theme raised surface** (`ink-theme-surface-raised`): tonal layers behind dark-theme content.
- **Ink-theme rules** (`ink-theme-rule`, `ink-theme-rule-soft`) and **ink-theme focus** (`ink-theme-focus`): dividers and keyboard focus treatment on dark surfaces.

**The Registration Rule.** Orange and near-black may meet in a project composition to signal a change of record; keep that gesture contained to the active project and its selection cues.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)  
**Body Font:** IBM Plex Sans (with Arial, sans-serif fallback)  
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** The serif brings a measured, expressive voice to project and section titles. Sans carries readable descriptions; the mono face makes numbered records and technical metadata feel indexed and precise.

### Hierarchy
- **Display** (500, responsive clamp from 3.35rem to 5.9rem, 0.86 line-height): main archive and project-led page titles.
- **Headline** (500, responsive clamp from 2.8rem to 5.6rem, 0.84 line-height): section statements and case-study headings.
- **Title** (500, 2rem, 1 line-height): compact serif headings in notes and supporting blocks.
- **Body** (400, 1rem, 1.55 line-height): explanatory copy, with line lengths constrained by each content block.
- **Label** (400, 0.69rem, 0.12em tracking, uppercase): folios, section markers, categories, and project metadata.

**The Three-Voice Rule.** Reserve the serif for display hierarchy, keep prose in sans, and use mono for metadata rather than body paragraphs.

## Layout

The desktop archive uses a left register beside a larger project canvas. The register starts at 31.5% of the available grid and the archive index at 27.5%; the canvas takes the remaining width. The global content measure caps at 1840px, with page gutters driven by a responsive clamp. Fine rules define columns and section edges rather than enclosing every block in a card.

At narrower desktop widths, the index grows to preserve its reading space. The header navigation gives way to a compact menu below 900px. Below 680px, the archive becomes a single column in the order introduction, horizontal project selector, then canvas; project selection remains a dedicated tap target. At wide widths, the main surface remains centered within its capped measure.

## Elevation & Depth

Depth is mostly tonal: paper and stone surfaces, fine borders, and overlapping planes establish hierarchy. Shadows are reserved for temporary overlays such as the mobile menu and field-notes panel. The canvas transition uses a brief clipped reveal and becomes immediate when reduced motion is requested.

### Shadow Vocabulary
- **Menu overlay** (`0 12px 18px rgba(0,0,0,.08)`): separates the expanded mobile navigation from the page.
- **Field-notes overlay** (`0 10px 28px rgba(0,0,0,.12)`): lifts the contextual notes panel above the project canvas.

**The Flat-At-Rest Rule.** Keep the archive and artwork surfaces flat at rest; reserve shadows for floating overlays.

## Shapes

Containers and controls use square corners with one-pixel borders and fine solid or dotted rules. Circular geometry is reserved for the small status mark and the estimate motif inside the Revalo study. The project transition clips across the canvas edge rather than scaling the artwork.

## Components

### Buttons
- **Character:** Quiet controls sit inside the archive and gain emphasis through state, not permanent fill.
- **Shape:** Square corners with transparent backgrounds and no heavy outline at rest.
- **Field notes:** A compact text-and-icon button; hover shifts to the readable accent color.
- **Theme and menu controls:** Small outlined-on-hover controls, with the mobile menu button appearing at tablet widths.
- **Hover / Focus:** Hover adds color or a restrained rule; keyboard focus uses a visible two-pixel outline with a four-pixel offset.

### Chips
- **Style:** Archive filters use compact mono labels, a fine outline, square corners, and a transparent resting surface.
- **State:** The selected filter fills near-black and uses the page surface for its text; hover uses the same treatment.

### Cards / Containers
- **Project canvas:** A stone surround frames a raised-paper artwork surface with a fine border and no resting shadow.
- **Field notes:** A square, ruled paper panel floats over the canvas and uses the overlay shadow described above.

### Navigation
- **Desktop:** A compact sans row uses muted text and a short orange underline for hover or the current route.
- **Mobile:** A numbered, full-width list opens beneath the header; rows use fine dividers and the current route uses the readable accent.

### Project Index & Canvas
Numbered project rows pair a folio, title, category, and period. The selected row receives an accent folio and underline; hovering or focusing a desktop row shifts it right by 4px over 180ms, adds a faint orange wash, and changes the canvas. On touch layouts, a separate selector button changes the study while the case-study link remains visible.

**The Study Label Rule.** Keep project compositions clearly identified as editorial studies made from documented project details; replace them with actual captures only when those captures are supplied.

## Do's and Don'ts

### Do:
- **Do** keep the numbered index and asymmetric project canvas as the archive's organizing pattern.
- **Do** use orange for active marks and contained project planes, with paper and near-black carrying the broader surface.
- **Do** preserve readable contrast, visible focus, touch selection, and reduced-motion behavior across the archive.
- **Do** identify authored project visuals as editorial studies rather than screenshots.

### Don't:
- **Don't** turn the index-and-canvas composition into a stack of generic cards.
- **Don't** invent project metrics or present an authored study as a captured product interface.
- **Don't** use decorative controls that do not perform an action.
