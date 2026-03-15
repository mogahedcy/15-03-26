import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'اتصل بنا | ديار جدة العالمية',
    description: 'تواصل مع ديار جدة العالمية لطلب تركيب مظلات، سواتر، برجولات متطورة. اطلب استشارة مجانية وعرض سعر الآن.',
    alternates: {
        canonical: 'https://deyarsu.com/contact',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
