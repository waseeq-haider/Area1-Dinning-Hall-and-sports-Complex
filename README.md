# 🏛️ Area 1: Dining Hall & Sports Complex

<div align="center">

![Musafir Retreats](https://img.shields.io/badge/Musafir-Retreats-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

**A modern, interactive landing page showcasing the dining and sports facilities at Musafir Retreats & Camps**

[Live Demo](#) • [Documentation](#features) • [Report Bug](#)

</div>

---

## 📸 Screenshots

<div align="center">

### Full Page Preview
![Area 1 - Dining Hall & Sports Complex](https://i.ibb.co/m5CCyXD2/area1.png)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🖼️ **Interactive Galleries** - Beautiful image showcases with lightbox functionality
- 🗺️ **3D Floor Plans** - Interactive 3D visualization of facility layouts
- 📍 **Location Maps** - Integrated mapping for easy navigation
- 🎯 **Site Map** - Interactive site map showing all 7 areas
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- ♿ **Accessible** - WCAG compliant with semantic HTML

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
<br>Vite
</td>
<td align="center" width="96">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" width="48" height="48" alt="Three.js" />
<br>Three.js
</td>
</tr>
</table>

### Core Technologies

- **[React 18.3](https://react.dev/)** - UI component library
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4](https://vitejs.dev/)** - Next-generation build tool
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - 3D graphics with Three.js
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

> 💡 **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) for easy Node.js version management

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to the project directory**
   ```bash
   cd Area1-Dinning-Hall-and-sports-Complex
   ```

3. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080` to see the application running! 🎉

---

## 📂 Project Structure

```
Area1-Dinning-Hall-and-sports-Complex/
├── public/                 # Static assets
│   ├── assets/            # Images and media files
│   └── favicon.png        # Site favicon
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features showcase
│   │   ├── ImageGallery.tsx
│   │   ├── FloorPlan.tsx # 3D floor plan
│   │   ├── SiteMap.tsx   # Interactive site map
│   │   └── Footer.tsx    # Footer component
│   ├── pages/            # Page components
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `http://localhost:8080` |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist/` directory.

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

### Supported Platforms

- ✅ Cloudflare Pages
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting service

---

## 🎯 Key Components

### Hero Section
Eye-catching hero with dynamic background and call-to-action buttons

### Features Showcase
Highlights key amenities and facilities with icons and descriptions

### Image Gallery
Interactive gallery with categorized images and lightbox view

### 3D Floor Plan
Interactive 3D visualization built with React Three Fiber

### Site Map
Interactive map showing all 7 areas of Musafir Retreats

### Location Map
Integrated mapping for geographical context

---

## 🎨 Design System

- **Color Palette**: Earth tones with green accents
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth, performant transitions
- **Accessibility**: WCAG 2.1 Level AA compliant

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url_here
```

### Customization

- **Colors**: Edit `tailwind.config.ts`
- **Components**: Modify files in `src/components/`
- **Assets**: Add images to `public/assets/`

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is part of Musafir Retreats & Camps.

---

## 👨‍💻 Developer

**Waseeq Haider**

---

<div align="center">

**[⬆ Back to Top](#-area-1-dining-hall--sports-complex)**

Made with ❤️ for Musafir Retreats & Camps

</div>
