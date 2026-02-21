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

    // 1. Organization Schema
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

    // 2. EducationalOrganization / LocalBusiness Schema
    const regionalPostalCodes = [
        "380001", "380015", "380051", "380054", "380058", "382443", "382424", "382421",
        "382010", "382007", "382016", "382024", "382355"
    ];

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
            { "@type": "City", "name": "Ahmedabad", "sameAs": "https://en.wikipedia.org/wiki/Ahmedabad" },
            { "@type": "City", "name": "Gandhinagar", "sameAs": "https://en.wikipedia.org/wiki/Gandhinagar" },
            ...regionalPostalCodes.map(code => ({
                "@type": "Place",
                "address": { "@type": "PostalAddress", "postalCode": code, "addressCountry": "IN" }
            }))
        ],
        "url": siteUrl,
        "parentOrganization": {
            "@type": "CollegeOrUniversity",
            "name": "Adani University"
        }
    };

    // 3. WebSite Schema (Enables Sitelinks Searchbox)
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cybersphere",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // 4. BreadcrumbList Schema
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            url && url !== "/" && {
                "@type": "ListItem",
                "position": 2,
                "name": title || url.replace('/', '').toUpperCase(),
                "item": `${siteUrl}${url}`
            }
        ].filter(Boolean)
    };

    // 5. SiteNavigationElement Schema
    const navigationSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": siteUrl },
            { "@type": "SiteNavigationElement", "position": 2, "name": "Events", "url": `${siteUrl}/events` },
            { "@type": "SiteNavigationElement", "position": 3, "name": "Gallery", "url": `${siteUrl}/gallery` },
            { "@type": "SiteNavigationElement", "position": 4, "name": "News", "url": `${siteUrl}/news` },
            { "@type": "SiteNavigationElement", "position": 5, "name": "The Team", "url": `${siteUrl}/members` },
            { "@type": "SiteNavigationElement", "position": 6, "name": "About", "url": `${siteUrl}/about` }
        ]
    };

    return (
        <Helmet>
            {/* SEO & Search Engine Dominance Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Cybersphere | Ahmedabad" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={finalUrl} />

            {/* Geo-targeting */}
            <meta name="geo.region" content="IN-GJ" />
            <meta name="geo.placename" content="Ahmedabad" />
            <meta name="geo.position" content="23.1887;72.5401" />
            <meta name="ICBM" content="23.1887, 72.5401" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content="Cybersphere" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* Advanced Structured Data Injections */}
            <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
            <script type="application/ld+json">{JSON.stringify(navigationSchema)}</script>
            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
};

export default SEO;
