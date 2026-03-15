'use client';

import React from 'react';
import Image from 'next/image';
import { BsGeoAltFill, BsTelephoneFill, BsWhatsapp, BsClockFill, BsEnvelopeFill } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();
    const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-slate-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contactPageTitle' as any)}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        {t('contactHeroSubtitle' as any)}
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6">{t('contactFormTitle' as any)}</h2>
                        
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 animate-bounce">✓</div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('success' as any) || 'تم الإرسال بنجاح'}</h3>
                                <p className="text-slate-600 mb-8">{t('successDesc' as any) || 'شكراً لتواصلك معنا، سنقوم بالرد عليك خلال أقرب وقت ممكن.'}</p>
                                <button onClick={() => setStatus('idle')} className="text-brand-primary font-bold hover:underline">إرسال رسالة أخرى</button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldName' as any)}</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldPhone' as any)}</label>
                                        <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" dir="ltr" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldSubject' as any)}</label>
                                        <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white">
                                            <option value="">{t('selectService' as any)}</option>
                                            <option value="car-shades">{t('optCarShades' as any)}</option>
                                            <option value="pergolas">{t('optPergolas' as any)}</option>
                                            <option value="tents">{t('optTents' as any)}</option>
                                            <option value="sawatr">{t('optSawatr' as any)}</option>
                                            <option value="panel">{t('optPanel' as any)}</option>
                                            <option value="other">{t('optOther' as any)}</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('fieldMessage' as any)}</label>
                                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={status === 'sending'}
                                    className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                                        status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-primary text-white hover:bg-brand-accent'
                                    }`}
                                >
                                    {status === 'sending' ? 'جاري الإرسال...' : t('btnSend' as any)}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent flex items-start gap-4">
                                <div className="p-3 bg-brand-surface rounded-full text-brand-primary text-xl">
                                    <BsTelephoneFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('callNow' as any)}</h4>
                                    <p className="text-slate-600 dir-ltr text-right">0553719009</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4">
                                <div className="p-3 bg-green-50 rounded-full text-green-600 text-xl">
                                    <BsWhatsapp />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">WhatsApp</h4>
                                    <p className="text-slate-600 dir-ltr text-right">0553719009</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                                    <BsClockFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('workingHoursTitle' as any)}</h4>
                                    <p className="text-slate-600 text-sm">{t('workingHoursDesc' as any)}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-full text-red-600 text-xl">
                                    <BsGeoAltFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('contactInfoTitle' as any)}</h4>
                                    <p className="text-slate-600 text-sm">{t('location' as any) || 'Jeddah, Saudi Arabia'}</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500 flex items-start gap-4">
                                <div className="p-3 bg-yellow-50 rounded-full text-yellow-600 text-xl">
                                    <BsEnvelopeFill />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">{t('email' as any) || 'البريد الإلكتروني'}</h4>
                                    <p className="text-slate-600 text-sm">ksaaldeyar@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg h-[400px] overflow-hidden relative">
                            <iframe
                                src="https://maps.google.com/maps?q=21.5478028,39.1948712&amp;hl=ar&amp;z=15&amp;output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
