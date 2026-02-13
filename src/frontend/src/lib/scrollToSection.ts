/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }

  // Get header height for offset
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;

  // Calculate position with offset
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  // Smooth scroll to position
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
