import { Metadata } from 'next';
import PanelClient from './PanelClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'هناجر وساندوتش بانل جدة | Sandwich Panel Folders Jeddah | ديار جدة',
    description: 'متخصصون في توريد وتركيب ساندوتش بانل وهناجر في جدة. Experts in supplying and installing Sandwich Panels, hangars, and warehouses in Jeddah.',
    keywords: ['ساندوتش بانل', 'هناجر', 'مستودعات', 'غرف معزولة', 'عزل ساندوتش', 'Sandwich Panel Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/panel',
    },
    openGraph: {
        title: 'غرف ساندوتش بانل وهناجر | Sandwich Panels & Hangars',
        description: 'عزل حراري ومائي فائق للساندوتش بانل. Excellent thermal and water insulation for hangars and panel rooms at competitive prices.',
        url: 'https://deyarsu.com/services/panel',
        images: [
            {
                url: '/images/sandwich-panel/sandwich-panel-1.jpg',
                width: 1200,
                height: 630,
                alt: 'غرف ساندوتش بانل وهناجر جدة'
            },
            {
                url: '/images/sandwich-panel/sandwich-panel-2.webp',
                width: 1200,
                height: 630,
                alt: 'غرف ساندوتش بانل وهناجر جدة 2'
            },
            {
                url: '/images/sandwich-panel/hangar-sandwich.webp',
                width: 1200,
                height: 630,
                alt: 'غرف ساندوتش بانل وهناجر جدة 3'
            },
            {
                url: '/images/sandwich-panel/sandwich-small.webp',
                width: 1200,
                height: 630,
                alt: 'غرف ساندوتش بانل وهناجر جدة 4'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function PanelPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'ساندوتش بانل', item: '/services/panel' },
                ]}
            />
            <ServiceJsonLd
                name="هناجر وساندوتش بانل جدة"
                description="متخصصون في توريد وتركيب ساندوتش بانل وهناجر في جدة بجودة عالية وعزل فائق."
                url="https://deyarsu.com/services/panel"
                image={[
                    '/images/sandwich-panel/sandwich-panel-1.jpg',
                    '/images/sandwich-panel/sandwich-panel-2.webp',
                    '/images/sandwich-panel/hangar-sandwich.webp',
                    '/images/sandwich-panel/sandwich-small.webp'
                ]}
            />
            <PanelClient />
        </>
    );
}
