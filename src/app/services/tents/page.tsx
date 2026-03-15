import { Metadata } from 'next';
import TentsClient from './TentsClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تركيب خيام وبيوت شعر جدة | Tents & Hair Houses Jeddah | ديار جدة',
    description: 'تصميم وتركيب خيام وبيوت شعر ملكية في جدة. Custom design and installation of traditional & modern luxury tents in Jeddah.',
    keywords: ['خيام', 'بيوت شعر', 'تفصيل خيام', 'خيام ملكية', 'بيوت شعر ملكية', 'Tents Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/tents',
    },
    openGraph: {
        title: 'بيوت شعر وخيام جدة | Traditional Tents Jeddah',
        description: 'تركيب خيام ملكية مقاومة للحرارة. High-quality execution of custom tents and traditional Arabic seating areas.',
        url: 'https://deyarsu.com/services/tents',
        images: [
            {
                url: '/images/tents/tents-hair-house-jeddah-1.jpg',
                width: 1200,
                height: 630,
                alt: 'بيوت شعر وخيام جدة'
            },
            {
                url: '/images/tents/tents-hair-house-jeddah-2.jpg',
                width: 1200,
                height: 630,
                alt: 'بيوت شعر وخيام جدة 2'
            },
            {
                url: '/images/tents/tents-hair-house-jeddah-3.jpg',
                width: 1200,
                height: 630,
                alt: 'بيوت شعر وخيام جدة 3'
            },
            {
                url: '/images/tents/royal-tents-jeddah-1.jpg',
                width: 1200,
                height: 630,
                alt: 'خيام ملكية جدة'
            },
            {
                url: '/images/tents/royal-tents-jeddah-2.jpg',
                width: 1200,
                height: 630,
                alt: 'خيام ملكية جدة 2'
            },
            {
                url: '/images/tents/royal-tents-jeddah-3.jpg',
                width: 1200,
                height: 630,
                alt: 'خيام ملكية جدة 3'
            },
            {
                url: '/images/tents/royal-tents-jeddah-4.jpg',
                width: 1200,
                height: 630,
                alt: 'خيام ملكية جدة 4'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function TentsPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'خيام وبيوت شعر', item: '/services/tents' },
                ]}
            />
            <ServiceJsonLd
                name="تركيب خيام وبيوت شعر جدة"
                description="تصميم وتركيب خيام وبيوت شعر ملكية في جدة بجودة عالية وتصاميم تراثية وعصرية."
                url="https://deyarsu.com/services/tents"
                image={[
                    '/images/tents/tents-hair-house-jeddah-1.jpg',
                    '/images/tents/tents-hair-house-jeddah-2.jpg',
                    '/images/tents/tents-hair-house-jeddah-3.jpg',
                    '/images/tents/royal-tents-jeddah-1.jpg',
                    '/images/tents/royal-tents-jeddah-2.jpg',
                    '/images/tents/royal-tents-jeddah-3.jpg',
                    '/images/tents/royal-tents-jeddah-4.jpg'
                ]}
            />
            <TentsClient />
        </>
    );
}
