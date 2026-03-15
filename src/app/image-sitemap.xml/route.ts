import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://deyarsu.com';

    // مسارات الصور وأسمائها كما هي، مع ربطها بروابط الصفحات التابعة لها.
    const imageGroups = [
        {
            loc: '/services/car-shades',
            images: [
                '/images/car-shades/car-shades-jeddah-1.jpg',
                '/images/car-shades/car-shades-jeddah-2.jpg',
                '/images/car-shades/car-shades-jeddah-3.jpg',
                '/images/car-shades/car-shades-jeddah-4.jpg',
                '/images/car-shades/car-shades-jeddah.jpg',
            ]
        },
        {
            loc: '/services/tents',
            images: [
                '/images/tents/royal-tents-jeddah-1.jpg',
                '/images/tents/royal-tents-jeddah-2.jpg',
                '/images/tents/royal-tents-jeddah-3.jpg',
                '/images/tents/royal-tents-jeddah-4.jpg',
                '/images/tents/tents-hair-house-jeddah-1.jpg',
                '/images/tents/tents-hair-house-jeddah-2.jpg',
                '/images/tents/tents-hair-house-jeddah-3.jpg',
            ]
        },
        {
            loc: '/services/landscaping',
            images: [
                '/images/landscaping/garden-landscaping-jeddah.webp',
                '/images/landscaping/stone-pathway-garden-jeddah.webp',
                '/images/landscaping/waterfall-garden-design-jeddah.webp',
            ]
        },
        {
            loc: '/services/pergolas',
            images: [
                '/images/pergolas/pergola-session-jeddah-1.jpg',
                '/images/pergolas/pergola-session-jeddah-2.jpg',
                '/images/pergolas/pergola-session-jeddah-3.jpg',
                '/images/pergolas/pergola-session-jeddah-4.jpg',
                '/images/pergolas/pergola-session-jeddah-5.jpg',
                '/images/pergolas/pergola-session-jeddah-6.jpg',
                '/images/pergolas/pergola-session-jeddah-7.jpg',
            ]
        },
        {
            loc: '/services/qarmid',
            images: [
                '/images/qrmeed/qarmid-1.jpg',
                '/images/qrmeed/qarmid-2.jpg',
                '/images/qrmeed/qarmid-3.jpg',
            ]
        },
        {
            loc: '/services/panel',
            images: [
                '/images/sandwich-panel/hangar-sandwich.webp',
                '/images/sandwich-panel/sandwich-panel-1.jpg',
                '/images/sandwich-panel/sandwich-panel-2.webp',
                '/images/sandwich-panel/sandwich-small.webp',
            ]
        },
        {
            loc: '/services/sawatr',
            images: [
                '/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-2.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-3.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-4.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-5.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-6.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-7.jpg',
            ]
        },
        {
            loc: '/services/restoration',
            images: [
                '/images/trmim/restoration-exterior.webp',
                '/images/trmim/restoration-hero.webp',
                '/images/trmim/restoration-interior.webp',
            ]
        }
    ];

    // Create XML format
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    imageGroups.forEach((group) => {
        if (group.images.length === 0) return;

        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${group.loc}</loc>\n`;

        group.images.forEach((img) => {
            // Encode the URL correctly as it contains Arabic characters and spaces
            let encodedImgUrl = img.split('/').map(segment => encodeURIComponent(segment)).join('/');

            // Extract a title from the file name
            const fileName = img.split('/').pop() || '';
            const title = fileName.replace(/\.[^/.]+$/, "").replace(/[0-9()\-]/g, " ").trim() || "صورة " + group.loc.split('/').pop();

            xml += `    <image:image>\n`;
            xml += `      <image:loc>${baseUrl}${encodedImgUrl}</image:loc>\n`;
            xml += `      <image:title>${title}</image:title>\n`;
            xml += `    </image:image>\n`;
        });

        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
