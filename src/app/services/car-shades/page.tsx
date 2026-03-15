import { Metadata } from 'next';
import CarShadesClient from './CarShadesClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
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
