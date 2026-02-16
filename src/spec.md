# Specification

## Summary
**Goal:** Update the Instagram URL in the “Follow Us” social links to point to the correct profile.

**Planned changes:**
- Update the Instagram entry in `frontend/src/components/ContactSection.tsx` `socialLinks` array to use `href === "https://www.instagram.com/myplaceatqueretaro"`.
- Ensure the Instagram link in the rendered “Follow Us” section continues to open in a new tab (`target="_blank"`) and keeps `rel="noopener noreferrer"`.

**User-visible outcome:** Clicking the Instagram icon in the “Follow Us” section opens https://www.instagram.com/myplaceatqueretaro in a new tab, while other social links remain unchanged.
