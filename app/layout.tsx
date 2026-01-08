import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://voltmaxpower.in'),
  title: {
    default: 'Voltmax Power Solution - Solar Power Plants & Electrical Works in Bettiah',
    template: '%s | Voltmax Power Solution'
  },
  description: 'Voltmax Power Solution in Bettiah specializes in Solar Power Plants, LT Panels, AC Works, and Electrical Works. Providing On-Grid, Off-Grid, and Hybrid Solar Systems in Bihar.',
  keywords: ['solar installation bettiah', 'voltmax power solution', 'solar panels bettiah', 'electrical works bihar', 'LT panels bettiah', 'solar power plants india', 'on-grid solar bettiah', 'off-grid solar bihar', 'hybrid solar systems'],
  authors: [{ name: 'Voltmax Power Solution' }],
  creator: 'Voltmax Power Solution',
  publisher: 'Voltmax Power Solution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://voltmaxpower.in',
    siteName: 'Voltmax Power Solution',
    title: 'Voltmax Power Solution - Solar & Electrical Experts in Bettiah',
    description: 'We design, install, and commission Solar Power Plants. Expertise in LT Panels, AC Works, and comprehensive Electrical Solutions.',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 800,
        alt: 'Voltmax Power Solution Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltmax Power Solution - Solar & Electrical Excellence',
    description: 'Expert solar power solutions and electrical works in Bettiah, Bihar. On-Grid, Off-Grid, and Hybrid Solar Systems.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://voltmaxpower.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Voltmax Power Solution",
    "description": "Expert Solar Power Solutions company in India. Designing, installing, and commissioning Solar Power Plants, LT Panels, AC Works, and Electrical Works.",
    "url": "https://voltmaxpower.in",
    "telephone": "+91-9258991589",
    "email": "voltmaxps@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No-196, Durgabagh Mandir Purav Gate, Near MJK College",
      "addressLocality": "Bettiah",
      "addressRegion": "Bihar",
      "postalCode": "845438",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8041",
      "longitude": "84.5024"
    },
    "sameAs": [
      "https://facebook.com/voltmaxpower",
      "https://instagram.com/voltmaxpower"
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#0f172a] text-[#F8FAFC] font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
