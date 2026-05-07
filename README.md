# DistroHub

> Personal Linux distribution and desktop environment reviews — 2025–2026

A static single-page site documenting my hands-on experience with various Linux distros and desktop environments, presented in a retro CRT terminal aesthetic.

---

## Content

### Distro Reviews
| Distro | Rating | Period |
|---|---|---|
| Archlinux + KDE | A | Jul 2025 – Dec 2025 |
| Fedora 43 KDE | A | Dec 2025 – mid-Jan 2026 |
| Debian + KDE (X11) | B | Jan 2026 – Feb 2026 |
| Pop!_OS (Cosmic) | B | mid-Feb 2026 – present |
| Manjaro + XFCE | B | Apr 2026 |
| OpenSuse + KDE | C | Mar 2026 |
| CachyOS + KDE | C | mid-Jan 2026 – Feb 2026 |
| OpenSuse + GNOME | D | Mar 2026 |
| Endeavour OS + KDE | — | May 2026 – present |

### DE Rankings
| DE | Rating |
|---|---|
| KDE Plasma | S |
| COSMIC | A |
| XFCE | B |
| GNOME | F |

---

## Design

- **Theme** — retro CRT phosphor terminal (green-on-black, scanlines, grain noise, flicker)
- **Font** — JetBrains Mono
- **ASCII art** — custom logos per distro and DE
- **Animations** — typewriter effect on load, line-by-line card reveal on scroll (IntersectionObserver)

---

## Stack

Pure vanilla — no framework, no build step.

```
index.html       page structure
styles.css       CRT terminal theme + animations
script.js        rendering + scroll animations + typewriter
content-data.js  all data (distros, DEs, ASCII art)
logo/ascii/      source ASCII art files (30×60 chars each)
```

Open `index.html` directly in a browser — no server needed.

---

## Rating Scale

`S` → `A` → `B` → `C` → `D` → `E` → `F`
