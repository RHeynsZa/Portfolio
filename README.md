# Ruan Heyns - Portfolio

A modern, minimal portfolio website showcasing my work as a Full Stack Developer.

## Features

- **Modern Design**: Clean, professional layout built with Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form with validation
- **Performance**: Fast loading with optimized assets
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **Frontend**: Angular 13 with TypeScript
- **Styling**: Tailwind CSS for modern, utility-first styling
- **Forms**: Reactive Forms with validation
- **Build Tool**: Angular CLI

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Building for Production

Run the build command to create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── components/
│   │       ├── header/       # Navigation header
│   │       ├── hero/         # Landing section
│   │       ├── about/        # About me section
│   │       ├── contact/      # Contact form
│   │       └── footer/       # Footer section
│   ├── app.component.*       # Root component
│   └── app.module.ts         # Root module
├── assets/                   # Static assets
└── styles.scss              # Global styles
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in the components
2. Modify the color scheme in `tailwind.config.js`
3. Replace the contact email and social links
4. Add your own projects and experience

## License

This project is open source and available under the MIT License.
