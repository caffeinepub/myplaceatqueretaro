# Specification

## Summary
**Goal:** Replace the current Hero section background with the uploaded `myplace-qro-hero-image.jpeg` while keeping all Hero content and layout unchanged.

**Planned changes:**
- Add `myplace-qro-hero-image.jpeg` to publicly served frontend static assets so it is accessible by URL.
- Update `frontend/src/components/HeroSection.tsx` to use `myplace-qro-hero-image.jpeg` as the full-width, centered, cover-style hero background instead of the current generated PNG.
- Keep the existing hero overlay/gradient and all hero text, buttons, layout, and scroll indicator exactly as-is.

**User-visible outcome:** The landing page Hero section displays the uploaded photo as the full-width background behind the existing hero content, with no other visible changes.
