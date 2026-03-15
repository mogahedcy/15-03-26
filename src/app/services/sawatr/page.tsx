import { Metadata } from 'next';
import SawatrClient from './SawatrClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تركيب سواتر جدة | Privacy Screens & Fences Jeddah | ديار جدة',
    description: 'تركيب جميع أنواع السواتر في جدة للخصوصية. Expert in installing privacy screens and fences (Sawatr) in Jeddah for villas and schools.',
    keywords: ['سواتر', 'تركيب سواتر', 'سواتر قماش', 'سواتر حديد', 'سواتر بلاستيك', 'Sawatr Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/sawatr',
    },
    openGraph: {
        title: 'تركيب سواتر بجدة | Privacy Screens in Jeddah',
        description: 'سواتر لتوفير الخصوصية والأمان. High-quality privacy screens and fences installation with competitive prices.',
        url: 'https://deyarsu.com/services/sawatr',
        images: [
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-2.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 2'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-3.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 3'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-4.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 4'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-5.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 5'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-6.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 6'
            },
            {
                url: '/images/swater/sawatr-privacy-screen-jeddah-7.jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة 7'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function SawatrPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'سواتر', item: '/services/sawatr' },
                ]}
            />
            <ServiceJsonLd
                name="تركيب سواتر جدة"
                description="تركيب جميع أنواع السواتر في جدة للخصوصية والأمان بتصاميم عصرية وضمان."
                url="https://deyarsu.com/services/sawatr"
                image={[
                    '/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-2.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-3.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-4.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-5.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-6.jpg',
                    '/images/swater/sawatr-privacy-screen-jeddah-7.jpg'
                ]}
            />
            <SawatrClient />
        </>
    );
}
