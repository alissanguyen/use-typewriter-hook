import * as React from 'react';
import { Helmet } from "react-helmet-async";

interface Props {

}

const SEOHead: React.FC<Props> = ({ }) => {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>useTypewriter Hook - React Typewriter Effect Library | Documentation</title>
            <meta name="description" content="A flexible React hook for creating beautiful typewriter effects. Features loop support, custom cursors, backspace effects, and more. Complete documentation with live examples." />
            <meta name="keywords" content="react, hook, typewriter, typing effect, animation, javascript, typescript, react hooks, ui animation, text animation" />
            <meta name="author" content="Alissa Nguyen @ai_alissa" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="useTypewriter Hook - React Typewriter Effect Library" />
            <meta property="og:description" content="A flexible React hook for creating beautiful typewriter effects with loop support, custom cursors, and backspace effects." />
            <meta property="og:image" content="https://imgur.com/eLCGEyy.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="useTypewriter Hook - React Typewriter Effect Library Documentation" />
            <meta property="og:url" content="https://usetypewriter.com/" />
            <meta property="og:site_name" content="useTypewriter Hook Documentation" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="useTypewriter Hook - React Typewriter Effect Library" />
            <meta name="twitter:description" content="A flexible React hook for creating beautiful typewriter effects with loop support, custom cursors, and backspace effects." />
            <meta name="twitter:image" content="https://imgur.com/eLCGEyy.png" />
            <meta name="twitter:image:alt" content="useTypewriter Hook - React Typewriter Effect Library Documentation" />

            {/* Viewport and Mobile */}
            <meta name="theme-color" content="#2563eb" />
            <meta name="msapplication-TileColor" content="#2563eb" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://usetypewriter.com/" />

            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </Helmet>
    )
}

export default SEOHead