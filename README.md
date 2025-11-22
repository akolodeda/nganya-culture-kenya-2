# Nganya Culture Landing Page

**Live Site:** [https://nganya-culture-kenya.netlify.app/](https://nganya-culture-kenya.netlify.app/)

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Objective](#objective)  
3. [Design & Branding](#design--branding)  
4. [Technical Stack](#technical-stack)  
5. [Responsive Design](#responsive-design)  
6. [Content Sections](#content-sections)  
7. [Components](#components)  
8. [Performance & Accessibility](#performance--accessibility)  
9. [Deployment](#deployment)  
10. [Screenshots](#screenshots)  
11. [Credits & Resources](#credits--resources)  
12. [Git Commit History](#git-commit-history)  

---

## Project Overview
Nganya Culture is a responsive landing page built to showcase the culture, products, and services of the Nganya brand. The project implements **precise layout accuracy, custom branding, and optimized responsive behavior** across mobile, tablet, and desktop breakpoints.

---

## Objective
- Recreate the provided LG (desktop) Figma design while maintaining exact layout spacing, grid structure, and component positioning.  
- Transform content to reflect a unique brand identity, including text, colors, images, and logos.  
- Demonstrate responsive design and maintain high performance, accessibility, and SEO standards.

---

## Design & Branding
**Brand Identity:**
- Brand Name: Nganya Culture  
- Tagline: *Celebrating Heritage, Inspiring Creativity*  
- Color Palette (Tailwind configured):  
  - `primary`: #1F2937  
  - `secondary`: #F59E0B  
  - `accent`: #10B981  
  - `neutral-dark`: #111827  
  - `neutral-light`: #F3F4F6  
- Typography: Custom type scale with 3 font weights, consistent across breakpoints  
- Imagery: High-quality WebP images optimized for web  

**Design Reference:**  
[Figma Design File](https://www.figma.com/design/6m2quKuO5myPkTegr33xoU/Landing-Page?node-id=1-78&t=reggmyT9Fpvi2XyY-1)

---

## Technical Stack
- **React v18+**: Functional components with hooks  
- **Tailwind CSS v3+**: Utility-first styling  
- **Vite**: Build tooling and bundling  
- **Netlify**: Hosting and deployment  

**Development Practices:**
- PropTypes for component validation  
- Custom hooks for repeated logic  
- Responsive images with lazy loading  
- ESLint configured for code quality  
- Prettier for formatting  

---

## Responsive Design
| Breakpoint | Device | Notes |
|------------|--------|-------|
| LG (≥1024px) | Desktop | Matches Figma design precisely |
| MD (641px - 1023px) | Tablet | Maintains layout proportions |
| SM (≤640px) | Mobile | Smooth, accessible UI with readable text and tappable buttons |

---

## Content Sections
1. **Hero Section** – Headline, tagline, and call-to-action  
2. **Features/Services** – 3+ cards highlighting key offerings  
3. **About/Story Section** – Brand story and mission  
4. **Contact/CTA Section** – Lead form and social links  

_All text content is original, reflecting Nganya Culture’s brand voice._

---

## Components
- **Button** – Variants: primary, secondary, outline  
- **Card** – Customizable props for images, titles, and descriptions  
- **Section Wrapper** – Ensures consistent spacing across all sections  
- **Responsive Image** – Lazy-loaded for performance  

**Best Practices Implemented:**
- React.memo for expensive components  
- Conditional rendering for responsive layouts  
- Semantic HTML for accessibility  

---

## Performance & Accessibility
**Lighthouse Scores:**
- Performance: 50  
- Accessibility: 100  
- Best Practices: 100  
- SEO: 100  

**Optimizations:**
- Lazy loading of images  
- Minimized CSS and JS bundles  
- Proper contrast ratios per WCAG AA  
- Semantic HTML structure  

---

## Deployment
**Hosting Platform:** Netlify  
**Live URL:** [https://nganya-culture-kenya.netlify.app/](https://nganya-culture-kenya.netlify.app/)  

Deployment Checklist:
- Build optimized via Vite  
- SSL certificate active  
- Environment variables configured (if any)  
- Optional custom domain configured  

---

## Screenshots
**LG (Desktop) View:**  
![LG View](./screenshots/lg-view.png)

**MD (Tablet) View:**  
![MD View](./screenshots/md-view.png)

**SM (Mobile) View:**  
![SM View](./screenshots/sm-view.png)

**Lighthouse Report:**  
![Lighthouse](./screenshots/lighthouse.png)

---

## Credits & Resources
- Images: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)  
- Design Reference: Figma file (see above)  
- Icons: Lucide-react  

---

## Git Commit History
- Minimum 30–40 meaningful commits demonstrating incremental progress  
- Examples:  
  - `Add Header component`  
  - `Implement responsive navigation`  
  - `Update color system and typography`  
  - `Add Hero and Features sections`  
  - `Optimize images and lazy-load components`  

_Commit history documents the development journey and problem-solving process._

---

**Project Complete.**
