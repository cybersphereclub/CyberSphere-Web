import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, schema }) => {
    const siteTitle = "Cybersphere | Cybersecurity Club Adani University";
    const defaultDescription = "Cybersphere is the official cybersecurity club of Adani University, dedicated to fostering a community of security enthusiasts.";
    const defaultImage = "/logo.png";
    const siteUrl = "https://cybersphere.club";

    const finalTitle = title ? `${title} | Cybersphere` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || "cybersecurity, club, adani university, hacking, network security, ethical hacking"} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content="Cybersphere" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* Structured Data (JSON-LD) for GEO */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
