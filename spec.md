# Specification

## Summary
**Goal:** Replace the current HeroSection background image with the uploaded Querétaro aqueduct photo (new-qro-main.jpeg).

**Planned changes:**
- Save `new-qro-main.jpeg` as a static asset at `frontend/public/assets/generated/new-qro-main.jpeg`
- Update the HeroSection component to use `new-qro-main.jpeg` as its background image with `background-size: cover` and `background-position: center`
- Remove any reference to the previous background image in HeroSection

**User-visible outcome:** The hero section displays the Querétaro aqueduct with jacaranda trees as its full-screen background image.
