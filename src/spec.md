# Specification

## Summary
**Goal:** Change the main site footer background to a burgundy/terracotta red using design tokens, while keeping footer text and links readable in both light and dark mode.

**Planned changes:**
- Add new footer color token(s) in `frontend/src/index.css` (e.g., `--footer` and optionally `--footer-foreground`) for both `:root` and `.dark`.
- Extend `frontend/tailwind.config.js` to expose the new footer token(s) as Tailwind theme colors so utilities like `bg-footer` (and optionally `text-footer-foreground`) are available.
- Update `frontend/src/components/Footer.tsx` to use the dedicated footer background utility instead of `bg-card`, and ensure all footer text/link styles have sufficient contrast in light and dark mode.

**User-visible outcome:** The site footer displays a burgundy/terracotta red background with clearly legible headings, text, and links in both light and dark mode.
