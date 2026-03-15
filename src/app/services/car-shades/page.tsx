import { Metadata } from 'next';
import CarShadesClient from './CarShadesClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
    title: 'تركيب مظلات سيارات جدة | Car Shades Jeddah | ديار جدة',
    description: 'متخصصون في تركيب مظلات السيارات في جدة بتصاميم عصرية ومظلات مواقف السيارات بضمان شامل.',
    keywords: ['مظلات سيارات', 'مظلات سيارات جدة', 'تركيب مظلات سيارات', 'مظلات مواقف', 'مظلات سيارات قماش', 'Car Shades Jeddah'],
    alternates: {
        canonical: 'https://deyarsu.com/services/car-shades',
    },
    openGraph: {
        title: 'تركيب مظلات سيارات جدة | ديار جدة',
        description: 'متخصصون في تركيب مظلات السيارات في جدة بتصاميم عصرية وضمان شامل. أفضل المظلات لحماية سيارتك.',
        url: 'https://deyarsu.com/services/car-shades',
        images: [
            {
                url: '/images/car-shades/car-shades-jeddah.jpg',
                width: 1200,
                height: 630,
                alt: 'مظلات سيارات في جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function CarShadesPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'الرئيسية', item: '/' },
                    { name: 'خدماتنا', item: '/#services' },
                    { name: 'مظلات سيارات', item: '/services/car-shades' },
                ]}
            />
            <ServiceJsonLd
                name="تركيب مظلات سيارات جدة"
                description="متخصصون في تركيب مظلات السيارات في جدة بتصاميم عصرية وضمان 10 سنوات."
                url="https://deyarsu.com/services/car-shades"
                image={[
                    '/images/car-shades/car-shades-jeddah.jpg',
                    '/images/car-shades/car-shades-jeddah-1.jpg',
                    '/images/car-shades/car-shades-jeddah-2.jpg',
                    '/images/car-shades/car-shades-jeddah-3.jpg',
                    '/images/car-shades/car-shades-jeddah-4.jpg'
                ]}
            />
            <CarShadesClient />
        </>
    );
}
