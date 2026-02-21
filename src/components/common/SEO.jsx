import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, schema }) => {
    const siteTitle = "Cybersphere | Cybersecurity Club Adani University";
    const defaultDescription = "Cybersphere is the official cybersecurity club of Adani University, Ahmedabad. We foster a community of security enthusiasts and ethical hackers.";
    const defaultKeywords = "cybersecurity, club, adani university, hacking, network security, ethical hacking, Ahmedabad, Gujarat, security researchers, CTF india, Gandhinagar, Bopal, Vastrapur, Satellite Ahmedabad, Gota, Chandkheda, Prahlad Nagar, GIFT City";
    const siteUrl = "https://cybersphere.club";
    const defaultImage = "/logonew.png";

    const finalTitle = title ? `${title} | Cybersphere` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    // Base Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cybersphere",
        "alternateName": "Cybersphere AU",
        "url": siteUrl,
        "logo": `${siteUrl}${defaultImage}`,
        "sameAs": [
            "https://www.linkedin.com/company/cybersphere-au/",
            "https://github.com/cybersphere-au"
        ]
    };

    // Regional Postal Codes for Ahmedabad and Gandhinagar
    const regionalPostalCodes = [
        "380001", "380015", "380051", "380054", "380058", "382443", "382424", "382421", // Ahmedabad
        "382010", "382007", "382016", "382024", "382355", "382421" // Gandhinagar & Surrounds
    ];

    // Local Business / Educational Organization Schema for Geo-targeting
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Cybersphere | Cybersecurity Club",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "addressCountry": "IN",
            "postalCode": "382421",
            "streetAddress": "Adani University, Shantigram"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.1887",
            "longitude": "72.5401"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Ahmedabad",
                "sameAs": "https://en.wikipedia.org/wiki/Ahmedabad"
            },
            {
                "@type": "City",
                "name": "Gandhinagar",
                "sameAs": "https://en.wikipedia.org/wiki/Gandhinagar"
            },
            ...regionalPostalCodes.map(code => ({
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "postalCode": code,
                    "addressCountry": "IN"
                }
            }))
        ],
        "url": siteUrl,
        "parentOrganization": {
            "@type": "CollegeOrUniversity",
            "name": "Adani University"
        }
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={finalUrl} />

            {/* Geo-targeting Meta Tags (Critical for local/regional search) */}
            <meta name="geo.region" content="IN-GJ" />
            <meta name="geo.placename" content="Ahmedabad" />
            <meta name="geo.position" content="23.1887;72.5401" />
            <meta name="ICBM" content="23.1887, 72.5401" />

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

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
