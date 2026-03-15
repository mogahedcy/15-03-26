import { Metadata } from 'next';
import RestorationClient from './RestorationClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'مقاول ترميم وتشطيب جدة | Building Restoration Jeddah | ديار جدة',
    description: 'خدمات ترميم وصيانة المباني بجدة. Expert building restoration, interior/exterior finishing, and cracking repair services in Jeddah.',
    keywords: ['ترميم', 'تشطيب', 'مقاول ترميم', 'صيانة مباني', 'ترميم فلل', 'Restoration Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/restoration',
    },
    openGraph: {
        title: 'ترميم وتشطيب وصيانة جدة | Building Restoration in Jeddah',
        description: 'مقاول معتمد للترميم والتشطيب. Certified contractor for building maintenance and restoration with premium quality.',
        url: 'https://deyarsu.com/services/restoration',
        images: [
            {
                url: '/images/trmim/restoration-hero.webp',
                width: 1200,
                height: 630,
                alt: 'ترميم مباني جدة'
            },
            {
                url: '/images/trmim/restoration-exterior.webp',
                width: 1200,
                height: 630,
                alt: 'ترميم واجهات مباني جدة'
            },
            {
                url: '/images/trmim/restoration-interior.webp',
                width: 1200,
                height: 630,
                alt: 'ترميم داخلي مباني جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function RestorationPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'ترميم وتشطيب', item: '/services/restoration' },
                ]}
            />
            <ServiceJsonLd
                name="مقاول ترميم وتشطيب جدة"
                description="خدمات ترميم وصيانة المباني بجدة بأيدي خبراء متخصصين وتشطيبات راقية."
                url="https://deyarsu.com/services/restoration"
                image={[
                    '/images/trmim/restoration-hero.webp',
                    '/images/trmim/restoration-exterior.webp',
                    '/images/trmim/restoration-interior.webp'
                ]}
            />
            <RestorationClient />
        </>
    );
}
