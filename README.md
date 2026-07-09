# Sounak Chakraborty - Portfolio

A modern, responsive portfolio website built with React 18, Tailwind CSS, and Framer Motion featuring stunning animated backgrounds and smooth interactions.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-teal) ![Vite](https://img.shields.io/badge/Vite-5-purple)

## ✨ Features

- **Animated Backgrounds** - Liquid Ether WebGL shader animations
- **Pill Navigation** - Smooth GSAP-animated navigation bar
- **Typewriter Effect** - Animated name reveal on hero section
- **Scroll Animations** - Framer Motion powered reveal effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Elegant black & white color scheme
- **Project Showcase** - Interactive cards with animated counters
- **Timeline Education** - Scroll-triggered education timeline
- **Contact Section** - Direct links with hover animations

## 🚀 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion, GSAP |
| **Graphics** | OGL (WebGL) |
| **Build Tool** | Vite 5 |
| **Icons** | Lucide React |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/krypton-arch/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Pill navigation bar
│   ├── Hero.jsx        # Landing section with Liquid Ether bg
│   ├── About.jsx       # Bio and skills grid
│   ├── Projects.jsx    # Project showcase cards
│   ├── Education.jsx   # Timeline education section
│   ├── Contact.jsx     # Contact information
│   ├── Footer.jsx      # Footer with links
│   ├── PillNav.jsx     # Animated pill navigation
│   └── LiquidEther.jsx # WebGL background animation
├── utils/
│   ├── constants.js    # Personal info, projects, education
│   └── animations.js   # Framer Motion variants
├── App.jsx             # Main app with error boundary
├── main.jsx            # React entry point
└── index.css           # Global styles & Tailwind
```

## 🎨 Customization

### Personal Information
Edit `src/utils/constants.js` to update:
- Name, tagline, contact info
- Skills and categories
- Projects with descriptions
- Education timeline

### Colors
Modify `src/index.css` for the color scheme. Current theme uses a minimal black & white palette with subtle gradients.

### Background Animation
Customize the Liquid Ether background in `Hero.jsx`:
```jsx
<LiquidEther
  speed={0.4}           // Animation speed
  colors={['#1a1a2e', '#0d0d0d', '#111111']}
/>
```

## 🌐 Deployment

### Netlify
1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import from Git"
4. Connect your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

### Vercel
```bash
npm run build
npx vercel --prod
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Sounak Chakraborty**
- GitHub: [@krypton-arch](https://github.com/krypton-arch)
- LinkedIn: [sounakc](https://www.linkedin.com/in/sounakc/)
- Email: sounakchakraborty371@gmail.com
