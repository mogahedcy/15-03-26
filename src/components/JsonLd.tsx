export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ديار جدة العالمية',
        image: [
            'https://deyarsu.com/images/car-shades/car-shades-jeddah.jpg',
            'https://deyarsu.com/images/pergolas/pergola-session-jeddah-1.jpg',
            'https://deyarsu.com/images/tents/tents-hair-house-jeddah-1.jpg',
            'https://deyarsu.com/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
            'https://deyarsu.com/images/sandwich-panel/sandwich-panel-1.jpg',
            'https://deyarsu.com/images/landscaping/garden-landscaping-jeddah.webp',
            'https://deyarsu.com/images/qrmeed/qarmid-1.jpg',
            'https://deyarsu.com/images/trmim/restoration-hero.webp'
        ],
        '@id': 'https://deyarsu.com',
        url: 'https://deyarsu.com',
        telephone: '+966553719009',
        priceRange: '$$',
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
        hasMap: 'https://maps.app.goo.gl/tMuvMhkuprFe62NGA?g_st=ic',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        },
        sameAs: [
            'https://www.instagram.com/aldiyarglobal'
        ],
        description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات ديار جدة',
            itemListElement: [
                {
                    '@type': 'Service',
                    name: 'مظلات',
                    url: 'https://deyarsu.com/services/car-shades',
                    description: 'تركيب مظلات سيارات ومظلات حدائق بأفضل الخامات.'
                },
                {
                    '@type': 'Service',
                    name: 'برجولات',
                    url: 'https://deyarsu.com/services/pergolas',
                    description: 'برجولات خشبية وحديد للحدائق والأسطح.'
                },
                {
                    '@type': 'Service',
                    name: 'بيوت شعر',
                    url: 'https://deyarsu.com/services/tents',
                    description: 'تفصيل وتركيب بيوت شعر ملكية وخيام.'
                },
                {
                    '@type': 'Service',
                    name: 'سواتر',
                    url: 'https://deyarsu.com/services/sawatr',
                    description: 'سواتر حديد وقماش لزيادة الخصوصية والأمان.'
                },
                {
                    '@type': 'Service',
                    name: 'هناجر',
                    url: 'https://deyarsu.com/services/panel',
                    description: 'إنشاء هناجر ومستودعات وساندوتش بانل.'
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
