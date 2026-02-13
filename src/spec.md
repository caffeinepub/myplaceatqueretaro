# Specification

## Summary
**Goal:** Add an SEO-friendly `robots.txt` that explicitly allows Googlebot, Bingbot, and PerplexityBot to crawl all paths.

**Planned changes:**
- Create `frontend/public/robots.txt` with explicit allow rules for `User-agent: Googlebot`, `User-agent: Bingbot`, and `User-agent: PerplexityBot` (allowing `/` with no disallow rules).
- Ensure the file is publicly served at `/robots.txt` on the deployed site.

**User-visible outcome:** Search engine crawlers (Googlebot, Bingbot, PerplexityBot) can access all site paths, and `/robots.txt` is available publicly.
