import { Metadata } from 'next';
import PergolasClient from './PergolasClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تركيب برجولات جدة | Pergolas & Gazebos Jeddah | ديار جدة',
    description: 'تصميم وتركيب البرجولات الخشبية والحديدية للحدائق في جدة. Add beauty to your garden with wooden & iron pergolas and outdoor seating in Jeddah.',
    keywords: ['برجولات', 'جلسات خارجية', 'برجولات خشبية', 'برجولات حدائق', 'تصميم حدائق', 'Pergolas Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/pergolas',
    },
    openGraph: {
        title: 'برجولات وجلسات خارجية جدة | Outdoor Pergolas Jeddah',
        description: 'أفضل البرجولات بجدة لجلسات راقية. Premium designs for pergolas and outdoor relaxation areas with excellent shading.',
        url: 'https://deyarsu.com/services/pergolas',
        images: [
            {
                url: '/images/pergolas/pergola-session-jeddah-1.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 1'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-2.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 2'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-3.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 3'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-4.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 4'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-5.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 5'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-6.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 6'
            },
            {
                url: '/images/pergolas/pergola-session-jeddah-7.jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة 7'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function PergolasPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'برجولات', item: '/services/pergolas' },
                ]}
            />
            <ServiceJsonLd
                name="تركيب برجولات جدة"
                description="تصميم وتركيب البرجولات الخشبية والحديدية للحدائق في جدة بجودة عالية."
                url="https://deyarsu.com/services/pergolas"
                image={[
                    '/images/pergolas/pergola-session-jeddah-1.jpg',
                    '/images/pergolas/pergola-session-jeddah-2.jpg',
                    '/images/pergolas/pergola-session-jeddah-3.jpg',
                    '/images/pergolas/pergola-session-jeddah-4.jpg',
                    '/images/pergolas/pergola-session-jeddah-5.jpg',
                    '/images/pergolas/pergola-session-jeddah-6.jpg',
                    '/images/pergolas/pergola-session-jeddah-7.jpg'
                ]}
            />
            <PergolasClient />
        </>
    );
}
