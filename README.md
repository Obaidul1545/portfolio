# Obaidul Islam - Modern React Portfolio

A fully responsive, modern portfolio website built with React, Vite, Tailwind CSS, shadcn UI, Lenis smooth scrolling, GSAP animations, and Framer Motion.

## 🚀 Live Demo

- **Development**: http://localhost:5174/
- **Production Build**: Ready for deployment

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Smooth Animations**: GSAP and Framer Motion for engaging interactions
- **Smooth Scrolling**: Lenis for buttery smooth scroll experience
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Component Library**: shadcn UI components for consistent design
- **Dynamic Routing**: React Router for project detail pages
- **Glass Morphism**: Modern glass panel effects throughout
- **Professional Sections**: Hero, About, Skills, Education, Projects, Contact

## 📁 Project Structure

```
src/
├── assets/           # Images and icons
├── components/       # Reusable UI components
│   └── ui/          # shadcn UI components
├── sections/        # Main page sections
├── pages/           # Route pages
├── data/            # Static data files
├── utils/           # Utility functions
├── lib/             # Library configurations
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Dependencies

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Component variants
- **clsx** - Conditional classes
- **tailwind-merge** - Merge Tailwind classes

### Animations
- **Framer Motion** - React animation library
- **GSAP** - Professional animation library
- **Lenis** - Smooth scrolling

### Icons
- **Lucide React** - Beautiful icon library

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and can be easily customized:

```javascript
colors: {
  "primary-blue": "#3b82f6",
  "primary-glow": "#60a5fa", 
  "secondary-purple": "#8b5cf6",
  "background-dark": "#0B0E14",
  "background-card": "#151B26",
  "text-main": "#E2E8F0",
  "text-muted": "#94A3B8"
}
```

### Content
Update the data files in `src/data/`:
- `skills.js` - Technical skills and categories
- `projects.js` - Portfolio projects with details
- `experience.js` - Education information

### Images
Replace placeholder images in the components with your own:
- Hero section profile image (`public/Obaidul.png`)
- Project screenshots
- Favicon files in `public/` folder

## 🔧 Key Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- Animated entrance and hover effects
- Max-width container for consistent layout

### Hero Section
- Professional introduction with call-to-action buttons
- Animated profile image with floating icons
- Status indicator and social links

### Skills Section
- Categorized technical skills
- Interactive hover effects
- Animated skill tags

### Projects Section
- Grid layout with project cards
- Hover animations and overlays
- Dynamic routing to project details

### Contact Section
- Contact form with validation
- Contact information cards (Email, Phone, Location)
- Smooth animations

## 🎭 Animations

The portfolio uses multiple animation libraries:

- **GSAP**: Complex timeline animations, scroll triggers
- **Framer Motion**: Component animations, page transitions
- **CSS Transitions**: Hover effects, smooth state changes
- **Lenis**: Smooth scrolling throughout the site

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your repository for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`

### Other Platforms
- **AWS S3**: Upload build files to S3 bucket
- **Firebase Hosting**: Use Firebase CLI
- **Surge.sh**: Simple static hosting

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags in index.html
- Accessible navigation
- Optimized images
- Fast loading times

## ✅ Production Ready

- ✅ Build successful with no errors
- ✅ All components working properly
- ✅ Responsive design tested
- ✅ Animations optimized
- ✅ Code quality checked
- ✅ Performance optimized

## 📞 Contact Information

- **Email**: mdobaidulislam128@gmail.com
- **Phone**: +880 1306 373611
- **Location**: Dhaka, Bangladesh

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Obaidul Islam using React, Vite, and modern web technologies.