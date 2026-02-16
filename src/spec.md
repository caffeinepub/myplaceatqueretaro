# Specification

## Summary
**Goal:** Replace the landing page Hero section background with the uploaded image `myplace-hero2.jpeg` exactly as-is.

**Planned changes:**
- Add/ensure `myplace-hero2.jpeg` is available as a static public asset (e.g., under `frontend/public/assets/`).
- Update `frontend/src/components/HeroSection.tsx` to use `myplace-hero2.jpeg` as the Hero background image source.
- Remove any non-image overlays (gradients/tints/darkening layers) that would visually alter the background image, while keeping the existing `object-cover object-center` behavior.
- Keep the Hero section layout/height and content positioning unchanged.

**User-visible outcome:** The landing page Hero displays the new uploaded background image with the same layout and content, without added overlays or visual filters.
