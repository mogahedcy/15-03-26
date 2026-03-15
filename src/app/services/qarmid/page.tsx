import { Metadata } from 'next';
import QarmidClient from './QarmidClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تركيب قرميد بجدة | Brick & Rooftop Tiles Jeddah | ديار جدة',
    description: 'مقاول تركيب قرميد في جدة للأسقف. Specialist in installing roof tiles for roofs and facades in Jeddah with heat & water resistance.',
    keywords: ['قرميد', 'تركيب قرميد', 'قرميد اسطح', 'قرميد معدني', 'Qarmid Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/qarmid',
    },
    openGraph: {
        title: 'تركيب قرميد في جدة | Qarmid installation Jeddah',
        description: 'أفضل خدمات تركيب القرميد والمظلات. Professional and durable roof tile installation services in Jeddah.',
        url: 'https://deyarsu.com/services/qarmid',
        images: [
            {
                url: '/images/qrmeed/qarmid-1.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب قرميد جدة'
            },
            {
                url: '/images/qrmeed/qarmid-2.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب قرميد جدة 2'
            },
            {
                url: '/images/qrmeed/qarmid-3.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب قرميد جدة 3'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function QarmidPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'قرميد', item: '/services/qarmid' },
                ]}
            />
            <ServiceJsonLd
                name="تركيب قرميد بجدة"
                description="مقاول تركيب قرميد في جدة للأسقف والمظلات بجودة عالية ومقاومة للحرارة والماء."
                url="https://deyarsu.com/services/qarmid"
                image={[
                    '/images/qrmeed/qarmid-1.jpg',
                    '/images/qrmeed/qarmid-2.jpg',
                    '/images/qrmeed/qarmid-3.jpg'
                ]}
            />
            <QarmidClient />
        </>
    );
}
