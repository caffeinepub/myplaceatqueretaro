# Specification

## Summary
**Goal:** Replace the “X” (Twitter) social link in the Contact page “Follow Us” section with a YouTube link to the provided channel URL.

**Planned changes:**
- Update `frontend/src/components/ContactSection.tsx` to remove the existing X/Twitter icon/link entry from the “Follow Us” social links row.
- Add a YouTube icon/link in the same social links group that opens `https://youtube.com/@myplaceatqueretaro?si=FI8rt31Wp4dxLMY2` in a new tab using safe external link attributes (`target="_blank"` and `rel="noopener noreferrer"`), with an accessible aria-label for “YouTube”.

**User-visible outcome:** The Contact page “Follow Us” section shows a YouTube icon instead of X/Twitter, and clicking it opens the specified YouTube channel in a new tab.
