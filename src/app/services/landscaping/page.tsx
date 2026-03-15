import { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تنسيق حدائق جدة | Landscaping Jeddah | ديار جدة',
    description: 'شركة تنسيق وتصميم حدائق في جدة. Best Landscaping, artificial grass, waterfalls, and garden design in Jeddah.',
    keywords: ['تنسيق حدائق', 'لاندسكيب', 'تصميم حدائق', 'عشب صناعي', 'شلالات حدائق', 'Landscaping Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/landscaping',
    },
    openGraph: {
        title: 'تنسيق وتصميم حدائق جدة | Landscaping in Jeddah',
        description: 'تنسيق حدائق بأحدث التصاميم. Professional landscaping and garden design services in Jeddah.',
        url: 'https://deyarsu.com/services/landscaping',
        images: [
            {
                url: '/images/landscaping/garden-landscaping-jeddah.webp',
                width: 1200,
                height: 630,
                alt: 'تنسيق حدائق جدة'
            },
            {
                url: '/images/landscaping/stone-pathway-garden-jeddah.webp',
                width: 1200,
                height: 630,
                alt: 'ممرات حجرية لحدائق جدة'
            },
            {
                url: '/images/landscaping/waterfall-garden-design-jeddah.webp',
                width: 1200,
                height: 630,
                alt: 'تصميم شلالات حدائق جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function LandscapingPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'تنسيق حدائق', item: '/services/landscaping' },
                ]}
            />
            <ServiceJsonLd
                name="تنسيق حدائق جدة"
                description="شركة تنسيق وتصميم حدائق في جدة بأحدث التصاميم والشلالات والعشب الصناعي."
                url="https://deyarsu.com/services/landscaping"
                image={[
                    '/images/landscaping/garden-landscaping-jeddah.webp',
                    '/images/landscaping/stone-pathway-garden-jeddah.webp',
                    '/images/landscaping/waterfall-garden-design-jeddah.webp'
                ]}
            />
            <LandscapingClient />
        </>
    );
}
