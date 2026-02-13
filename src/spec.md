# Specification

## Summary
**Goal:** Reduce the LandingHeader height by ~20% across all screen sizes while keeping the fixed header layout and navigation behavior intact.

**Planned changes:**
- Decrease the LandingHeader primary container min-height values in `frontend/src/components/LandingHeader.tsx` by ~20% for both base and `md` breakpoints.
- Reduce the logo image height values by ~20% for both base and `md` breakpoints to keep the logo visually balanced within the smaller header.
- Verify the fixed header, navigation click/scroll offsets, and mobile menu open/close behavior still work correctly with the new header height.

**User-visible outcome:** The landing page header appears ~20% shorter on mobile and desktop, with the logo scaled down proportionally, and navigation/menu interactions work as before (including correct section scroll positioning).
