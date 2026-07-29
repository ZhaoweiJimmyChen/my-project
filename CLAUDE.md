# CLAUDE.md

This repository contains a four-page static academic website for Dr. Jimmy Zhaowei Chen.

## Structure

- `index.html`: Home and About Me
- `research.html`: Research interests and publications
- `teaching.html`: Teaching experience
- `awards-service.html`: Awards and service
- `style.css`: Shared reference-matched visual system
- `script.js`: Restrained scroll-reveal behavior
- `images/profile.jpg`: Homepage portrait

## Design contract

Preserve the established hybrid academic style:

- Nan Jia reference: text-left/photo-right profile header, white background, Libre Caslon display typography, black academic identity text.
- Arzi Adbi reference: wide unboxed content column, Lora headings, Gentium Basic body typography, blue headings and links.
- Canonical colors: `#ffffff` background, `#282424` identity ink, `#212121` body text, `#226e93` headings, `#49aad4` links, and `#006580` link hover.
- Avoid cards, gradients, glass effects, generic CTA heroes, decorative blobs, and excessive animation.
- Keep identical navigation across all four pages and preserve mobile behavior.
- Keep publication rows unnumbered, with `CHEN Z.` and journal names bold.
- Maintain the profile-image fallback: if `images/profile.jpg` fails, the gray `JC` placeholder must appear at the same dimensions.

## Local preview

Run `python3 -m http.server 4173` from the repository root and open `http://127.0.0.1:4173/index.html`.
