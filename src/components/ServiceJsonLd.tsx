import React from 'react';

interface ServiceJsonLdProps {
    name: string;
    description: string;
    url: string;
    image: string | string[];
}

export default function ServiceJsonLd({ name, description, url, image }: ServiceJsonLdProps) {
    const imagesArray = Array.isArray(image) ? image : [image];
    const imageProp = imagesArray.map(img => `https://deyarsu.com${img}`);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: name,
                description: description,
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'ديار جدة العالمية',
                    image: 'https://deyarsu.com/favicon.svg',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'جدة طريق المكرونة العزيزية',
                        addressLocality: 'Jeddah',
                        addressRegion: 'Makkah Region',
                        addressCountry: 'SA'
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 21.5478028,
                        longitude: 39.1948712
                    },
                    hasMap: 'https://maps.app.goo.gl/tMuvMhkuprFe62NGA?g_st=ic'
                },
                url: url,
                image: imageProp.length === 1 ? imageProp[0] : imageProp,
                areaServed: {
                    '@type': 'City',
                    name: 'Jeddah'
                }
            },
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url: url,
                name: name,
                description: description,
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    '@id': `${url}#primaryimage`,
                    url: imageProp[0] 
                },
                image: imageProp
            },
            {
                '@type': 'ImageGallery',
                '@id': `${url}#imagegallery`,
                name: `معرض صور - ${name}`,
                description: `مجموعة من صور أعمالنا لـ ${name}`,
                image: imageProp
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
