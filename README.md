# Sounak Chakraborty - Portfolio (Persona 5 Edition)

A highly stylized, aggressive, and immersive portfolio website built with React 18, Tailwind CSS, and Framer Motion. The entire design system is heavily inspired by the UI/UX of **Persona 5**, featuring distinctive angular geometry, aggressive color blocking (Red/Black/White), staggering typography, and dynamic micro-interactions.

![React](https://img.shields.io/badge/React-18-red?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-black?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-red?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-5-black?style=for-the-badge&logo=vite)

## ✨ P5 Aesthetic Features

- **"Take Your Time" Boot Sequence** - Animated diagonal wipe loading screen with progress tracking
- **Dynamic Geometric UI** - Extensive use of `clip-path` and `transform: skewX()` for an aggressive, paper-cut look
- **All-Out Attack Transitions** - Full-viewport red/black diagonal wipes when navigating sections
- **Tactile Sound Design** - Integrated WebAudio API synthesizing custom UI sounds (clicks, menu snaps, heavy slams)
- **Cinematic Textures** - Global SVG film grain overlay and halftone patterns for a raw, printed manga feel
- **Custom Diamond Cursor** - Reactive cursor that morphs into P5 chevron arrows on hover and spawns halftone click ripples
- **Dossier Data Layouts** - Projects and skills presented as "Top Secret" intelligence files with classification stamps

## 🚀 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion |
| **Data Viz** | Recharts (Radar stats) |
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

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # P5 skewed navigation + mobile all-out attack menu
│   ├── Hero.jsx          # Wanted poster profile + giant typography slam
│   ├── About.jsx         # Intelligence report layout
│   ├── Skills.jsx        # Radar chart + classification badges
│   ├── Projects.jsx      # Expandable dossier cards
│   ├── Education.jsx     # Angular timeline cards
│   ├── Contact.jsx       # Secure channel links
│   ├── Footer.jsx        # Mission Accomplished banner
│   ├── CustomCursor.jsx  # Diamond cursor with click ripples
│   └── CallingCardText.jsx # Randomized letter rotation utility
├── utils/
│   ├── constants.js      # Single source of truth for all portfolio data
│   └── sounds.js         # WebAudio synth generators for UI sounds
├── App.jsx               # Main container + Parallax backgrounds + Loading screen
├── main.jsx              # React entry point
└── index.css             # Global P5 design system & keyframes
```

## 🎨 Customization

All personal data is centralized in `src/utils/constants.js`. To make this your own portfolio, simply edit that file:
- **`PERSONAL_INFO`**: Name, tagline, contact links, resume
- **`SKILLS`**: Arrays of skills mapped to categories
- **`PROJECTS`**: Array of project objects (supports tech stack tags and features)
- **`EDUCATION`**: Academic history

## 🌐 Deployment

This project is configured for seamless deployment on platforms like Netlify or Vercel.

**Vercel Quick Deploy:**
```bash
npm run build
npx vercel --prod
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Sounak Chakraborty**
- GitHub: [@krypton-arch](https://github.com/krypton-arch)
- LinkedIn: [sounak-chakraborty](https://www.linkedin.com/in/sounak-chakraborty)
- Portfolio: [sounakdev.netlify.app](https://sounakdev.netlify.app/)
