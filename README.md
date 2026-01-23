# Alpha Zeta USC Website

A modern, responsive website for Alpha Zeta, USC's professional business fraternity. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (headings) + Outfit (body) via `next/font`
- **Images**: `next/image` with Unsplash placeholders

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alphazeta
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
alphazeta/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── recruitment/
│   ├── careers/
│   └── members/
├── components/
│   ├── navigation/         # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── recruitment/        # Recruitment page sections
│   ├── members/            # Members page sections
│   └── ui/                 # Reusable UI components
├── data/                   # JSON data files
│   ├── members.json
│   ├── events.json
│   ├── testimonials.json
│   ├── faq.json
│   ├── companies.json
│   ├── values.json
│   └── photos.json
├── types/                  # TypeScript interfaces
└── public/images/          # Static images (add your own)
```

## Pages

- **Home** (`/`): Hero, About, Company Carousel, Values, Executive Board, Photo Grid, CTA
- **About** (`/about`): Extended about content with values and team
- **Recruitment** (`/recruitment`): Rush timeline, testimonials, FAQ, application CTA
- **Careers** (`/careers`): AZ Groups, career resources, company placements
- **Members** (`/members`): Executive board, active members, alumni spotlight

## Customization

### Adding Members

Edit `data/members.json`:
```json
{
  "id": "unique-id",
  "name": "Full Name",
  "role": "Position (for exec)",
  "major": "Major",
  "photo": "/images/members/name.jpg",
  "linkedin": "https://linkedin.com/in/username",
  "pledgeClass": "Fall 2024",
  "isExec": true,
  "isAlumni": false
}
```

### Adding Events

Edit `data/events.json`:
```json
{
  "id": "unique-id",
  "name": "Event Name",
  "date": "January 15, 2026",
  "time": "7:00 PM",
  "location": "Location",
  "description": "Event description..."
}
```

### Colors

Customize colors in `app/globals.css` under `@theme`:
```css
@theme {
  --color-primary: #0a0a0a;
  --color-accent: #3b82f6;
  /* ... */
}
```

## Replacing Placeholder Images

1. Add your images to `public/images/`
2. Update the corresponding JSON files with the new paths
3. For member photos: use 400x400px square images
4. For company logos: use 200x80px images
5. For photo grid: use various sizes based on the `size` field

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private - Alpha Zeta USC
