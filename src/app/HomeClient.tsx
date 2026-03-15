'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import ServiceSection from '@/components/sections/ServiceSection';
import DotNavigation from '@/components/DotNavigation';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function HomeClient() {
    const { t } = useLanguage();

    const servicesData = [
        {
            id: 'car-shades',
            theme: 'protection',
            title: t('carShadesTitle'),
            desc: t('carShadesDesc'),
            bgImage: '/images/car-shades/car-shades-jeddah.jpg',
            feature: t('carShadesFeature'),
            gallery: [
                '/images/car-shades/car-shades-jeddah-1.jpg',
                '/images/car-shades/car-shades-jeddah-2.jpg',
                '/images/car-shades/car-shades-jeddah-3.jpg',
                '/images/car-shades/car-shades-jeddah-4.jpg',
            ],
            link: '/services/car-shades'
        },
        {
            id: 'pergolas',
            theme: 'relaxation',
            title: t('pergolasTitle'),
            desc: t('pergolasDesc'),
            bgImage: '/images/pergolas/pergola-session-jeddah-1.jpg',
            feature: t('pergolasFeature'),
            gallery: [
                '/images/pergolas/pergola-session-jeddah-2.jpg',
                '/images/pergolas/pergola-session-jeddah-3.jpg',
                '/images/pergolas/pergola-session-jeddah-5.jpg',
            ],
            link: '/services/pergolas'
        },
        {
            id: 'tents',
            theme: 'luxury',
            title: t('tentsTitle'),
            desc: t('tentsDesc'),
            bgImage: '/images/tents/royal-tents-jeddah-1.jpg',
            feature: t('tentsFeature'),
            gallery: [
                '/images/tents/royal-tents-jeddah-2.jpg',
                '/images/tents/royal-tents-jeddah-3.jpg',
                '/images/tents/royal-tents-jeddah-4.jpg',
            ],
            link: '/services/tents'
        },
        {
            id: 'sawatr',
            theme: 'privacy',
            title: t('sawatrTitle'),
            desc: t('sawatrDesc'),
            bgImage: '/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
            feature: t('sawatrFeature'),
            gallery: [
                '/images/swater/sawatr-privacy-screen-jeddah-2.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-4.jpg',
                '/images/swater/sawatr-privacy-screen-jeddah-5.jpg',
            ],
            link: '/services/sawatr'
        },
        {
            id: 'panel',
            theme: 'insulation',
            title: t('panelTitle'),
            desc: t('panelDesc'),
            bgImage: '/images/sandwich-panel/sandwich-panel-1.jpg',
            feature: t('panelFeature'),
            gallery: [
                '/images/sandwich-panel/hangar-sandwich.webp',
                '/images/sandwich-panel/sandwich-panel-2.webp',
                '/images/sandwich-panel/sandwich-small.webp',
            ],
            link: '/services/panel'
        },
        {
            id: 'landscaping',
            theme: 'nature',
            title: t('landscapingTitle'),
            desc: t('landscapingDesc'),
            bgImage: '/images/landscaping/garden-landscaping-jeddah.webp',
            feature: t('landscapingFeature'),
            gallery: [
                '/images/landscaping/garden-landscaping-jeddah.webp',
                '/images/landscaping/waterfall-garden-design-jeddah.webp',
                '/images/landscaping/stone-pathway-garden-jeddah.webp',
            ],
            link: '/services/landscaping'
        },
        {
            id: 'hair-houses',
            theme: 'tradition',
            title: t('hairHousesTitle'),
            desc: t('hairHousesDesc'),
            bgImage: '/images/tents/royal-tents-jeddah-3.jpg',
            feature: t('hairHousesFeature'),
            gallery: [
                '/images/tents/royal-tents-jeddah-1.jpg',
                '/images/tents/royal-tents-jeddah-2.jpg',
            ],
            link: '/services/tents'
        },
        {
            id: 'restoration',
            theme: 'renewal',
            title: t('restorationTitle'),
            desc: t('restorationDesc'),
            bgImage: '/images/trmim/restoration-hero.webp',
            feature: t('restorationFeature'),
            gallery: [
                '/images/trmim/restoration-interior.webp',
                '/images/trmim/restoration-exterior.webp',
            ],
            link: '/services/restoration'
        },
        {
            id: 'qarmid',
            theme: 'classic',
            title: t('qarmidTitle'),
            desc: t('qarmidDesc'),
            bgImage: '/images/qrmeed/qarmid-1.jpg',
            feature: t('qarmidFeature'),
            gallery: [
                '/images/qrmeed/qarmid-2.jpg',
                '/images/qrmeed/qarmid-3.jpg',
            ],
            link: '/services/qarmid'
        },
    ];

    return (
        <div className="relative">
            <DotNavigation />

            <Hero />

            {/* About Section - Fixes broken navbar link */}
            <section id="about" className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                         <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">{t('aboutTitle' as any)}</h2>
                         <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {t('aboutDesc' as any)}
                         </p>
                         <ul className="space-y-4">
                            {[t('aboutFeat1' as any), t('aboutFeat2' as any), t('aboutFeat3' as any)].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                                    <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary text-xs">✓</span>
                                    {feat}
                                </li>
                            ))}
                         </ul>
                    </div>
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                         <Image 
                            src="/images/tents/royal-tents-jeddah-1.jpg" 
                            alt="About Diyar Jeddah" 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                         />
                         <div className="absolute inset-0 bg-brand-primary/20" />
                    </div>
                </div>
            </section>

            <div id="services">
                {servicesData.map((service) => (
                    <ServiceSection key={service.id} {...service} />
                ))}
            </div>

            {/* Contact / Map Placeholder */}
            <section id="contact" className="h-screen bg-slate-900 flex items-center justify-center text-white snap-start relative">
                <div className="text-center z-10">
                    <h2 className="text-4xl font-bold mb-4">{t('contactTitle')}</h2>
                    <p className="text-xl opacity-70">{t('location')}</p>
                </div>
                {/* Optional: Add a subtle footer or copyright at the bottom absolute */}
                <div className="absolute bottom-4 w-full text-center text-white/20 text-sm">
                    © 2026 Diyar Jeddah International. All rights reserved.
                </div>
            </section>
        </div>
    );
}
