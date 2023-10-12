# Portfolio Website Readme

This is the readme file in which we will document the features implemented in both the HTML and SASS code.

## HTML Features

### 1. Header Section
   - **Navigation Menu:** Implemented as an unordered list (`<ul>`) with list items (`<li>`) for each navigation link.
   - **Logo:** Linked image with the portfolio logo.

   **Location in HTML:**
   - Header section (`<header>`).

### 2. About & Education Section
   - **About Me:** Personal summary in a `<summary>` tag.
   - **Education:** Displayed as two separate education entries with images and details.

   **Location in HTML:**
   - About section (`<section id="about-education">`).

### 3. Experience Section
   - Details about work experience with bulleted points.

   **Location in HTML:**
   - Experience section (`<section id="experience">`).

### 4. Skills Section
   - Categorized skills with flexbox layout.

   **Location in HTML:**
   - Skills section (`<section id="skills">`).

### 5. Certifications Section
   - Displayed as an image gallery with links to certification URLs.

   **Location in HTML:**
   - Certifications section (`<section id="certifications">`).

### 6. Audio & Video Section
   - Video section with a positioning statement video.

   **Location in HTML:**
   - Audio & Video section (`<section class="audio_video">`).

### 7. Send Your Queries Section
   - Linked to an external form.

   **Location in HTML:**
   - Send your queries section (`<section id="Send_your_queries">`).

### 8. Contact Section
   - Contact details with links.

   **Location in HTML:**
   - Contact section (`<section id="contact">`).

### 9. Footer Section
   - Contains the copyright year and a link to scroll to the top.

   **Location in HTML:**
   - Footer section (`<footer>`).

## SASS Features

### 1. Variables
   - Utilized for primary and secondary colors.

   **Location in SASS:**
   - Variables section (`$primary-color`, `$secondary-color`).

### 2. Custom Properties
   - Used custom properties for background color and text color.

   **Location in SASS:**
   - Custom properties section (`--primary-bg`, `--text-color`).

### 3. Nesting
   - Used nesting for better organization, e.g., nested styles for `#Send_your_queries h2 a`.

   **Location in SASS:**
   - Nesting examples throughout the SASS file.

### 4. Interpolation
   - Interpolated variables, e.g., `color: #{$primary-color};`.

   **Location in SASS:**
   - Interpolation examples throughout the SASS file.

### 5. Placeholder Selectors
   - Placeholder selector `%list` used for common styling.

   **Location in SASS:**
   - Placeholder selector definition and usage in `.list`.

### 6. Mixins
   - Defined a mixin for setting background and text color.

   **Location in SASS:**
   - Mixin definition (`@mixin set-background`) and usage throughout the SASS file.

### 7. Functions
   - Created a function to calculate em values.

   **Location in SASS:**
   - Function definition (`@function calculate-em`) and usage in the `#contact` section.

### 8. Flexbox and Grid Layouts
   - Flexbox used in the Skills section and header icons.
   - Grid layout used for the header, about & education section, and video & audio section.

   **Location in SASS:**
   - Flexbox and Grid definitions (`%flex_info`, `%grid`, `.header-container`, `.about_education`, `.grid-container`).

### 9. Additional Styling
   - Box shadow, hover effects, and other styling techniques applied.

   **Location in SASS:**
   - Various locations throughout the SASS file.


