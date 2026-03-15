import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'مظلات وسواتر ديار جدة العالمية | تركيب برجولات وهناجر',
  description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
  alternates: {
    canonical: 'https://deyarsu.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        '@id': 'https://deyarsu.com/#video',
        name: 'أعمال مؤسسة ديار جدة العالمية للمظلات والسواتر',
        description: 'مقطع فيديو يستعرض جودة أعمالنا وتصاميمنا المميزة في مجال تركيب المظلات، السواتر، البرجولات، وبيوت الشعر في جدة.',
        thumbnailUrl: [
          'https://deyarsu.com/images/car-shades/car-shades-jeddah.jpg'
        ],
        uploadDate: '2025-01-01T08:00:00+03:00',
        duration: 'PT0M8S',
        contentUrl: 'https://deyarsu.com/hero-video.mp4',
        embedUrl: 'https://deyarsu.com',
        publisher: {
          '@type': 'Organization',
          name: 'ديار جدة العالمية',
          logo: {
            '@type': 'ImageObject',
            url: 'https://deyarsu.com/favicon.svg'
          }
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://deyarsu.com/#webpage',
        url: 'https://deyarsu.com/',
        name: 'مظلات وسواتر ديار جدة العالمية | تركيب برجولات وهناجر',
        description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة.',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          '@id': 'https://deyarsu.com/#primaryimage',
          url: 'https://deyarsu.com/images/car-shades/car-shades-jeddah.jpg'
        },
        image: [
          'https://deyarsu.com/images/car-shades/car-shades-jeddah.jpg',
          'https://deyarsu.com/images/pergolas/pergola-session-jeddah-1.jpg',
          'https://deyarsu.com/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
          'https://deyarsu.com/images/tents/royal-tents-jeddah-1.jpg',
          'https://deyarsu.com/images/sandwich-panel/sandwich-panel-1.jpg',
          'https://deyarsu.com/images/landscaping/garden-landscaping-jeddah.webp'
        ]
      },
      {
        '@type': 'ImageGallery',
        '@id': 'https://deyarsu.com/#imagegallery',
        name: 'معرض صور أعمال ديار جدة للمظلات والسواتر',
        description: 'مجموعة من صور أعمالنا في تركيب المظلات والسواتر والبرجولات بجدة',
        image: [
          'https://deyarsu.com/images/car-shades/car-shades-jeddah.jpg',
          'https://deyarsu.com/images/pergolas/pergola-session-jeddah-1.jpg',
          'https://deyarsu.com/images/swater/sawatr-privacy-screen-jeddah-1.jpg',
          'https://deyarsu.com/images/tents/royal-tents-jeddah-1.jpg',
          'https://deyarsu.com/images/sandwich-panel/sandwich-panel-1.jpg',
          'https://deyarsu.com/images/landscaping/garden-landscaping-jeddah.webp'
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
