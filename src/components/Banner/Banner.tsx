"use client"
import React, { useState } from 'react';
import {
     ArrowRight,
     Sparkles,
     Play,
     ChefHat,
     Globe,
     Award,
     Clock,
     Flame,
     Utensils,
     Star,
     Copy,
     Check,
     Code2,
     Eye,
     BookOpen
} from 'lucide-react';

// ==========================================
// 1. REUSABLE HERO BANNER COMPONENT
// ==========================================
interface HeroBannerProps {
     onExploreClick?: () => void;
     onWatchVideoClick?: () => void;
}

export function Banner({ onExploreClick, onWatchVideoClick }: HeroBannerProps) {
     return (
          <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-zinc-100">
               {/* Subtle Background Grid & Light Ambient Glow */}
               <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f3_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f3_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"
               />

               {/* Ambient Radial Soft Gradient Accent */}
               <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-[22rem] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent blur-[120px] rounded-full pointer-events-none"
               />

               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                         {/* Micro-Badge */}
                         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all duration-300 cursor-default group mb-8">
                              <span className="flex h-2 w-2 relative">
                                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                   <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-wide flex items-center gap-2">
                                   <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                                   <span>Over 10,000+ Culinary Creations</span>
                                   <span className="text-zinc-300 font-light">|</span>
                                   <span className="text-zinc-500 font-normal">Powered by TheMealDB API</span>
                              </span>
                         </div>

                         {/* Luxury Editorial Headline */}
                         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
                              Master the Art of Cookery <br className="hidden sm:block" />
                              With <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-amber-800 to-zinc-900">Precision & Elegance</span>
                         </h1>

                         {/* Subtitle */}
                         <p className="text-base sm:text-xl text-zinc-600 font-normal max-w-2xl leading-relaxed mb-10">
                              Discover thousands of handpicked global recipes, verified ingredient ratios, and step-by-step masterclasses curated for passionate home chefs.
                         </p>

                         {/* CTA Group */}
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
                              {/* Primary Action Button */}
                              <button
                                   onClick={onExploreClick}
                                   className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950 text-white font-medium text-sm sm:text-base tracking-wide shadow-xl shadow-zinc-950/10 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
                              >
                                   <span>Explore Recipes</span>
                                   <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                              </button>

                              {/* Secondary Action Button */}
                              <button
                                   onClick={onWatchVideoClick}
                                   className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-zinc-800 font-medium text-sm sm:text-base tracking-wide border border-zinc-200 shadow-xs hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-950 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
                              >
                                   <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                                        <Play className="w-3 h-3 text-zinc-700 fill-zinc-700 group-hover:text-amber-700 group-hover:fill-amber-700 transition-colors" />
                                   </div>
                                   <span>Watch Video Tour</span>
                              </button>
                         </div>

                         {/* Elegant Divider */}
                         <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12" />

                         {/* Micro Stats Grid */}
                         <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">

                              {/* Stat 1 */}
                              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs hover:bg-zinc-50 transition-colors">
                                   <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                                        <Globe className="w-4 h-4 text-amber-600" />
                                        <span className="text-xl sm:text-2xl font-bold tracking-tight">50+</span>
                                   </div>
                                   <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Cuisines</span>
                              </div>

                              {/* Stat 2 */}
                              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs hover:bg-zinc-50 transition-colors">
                                   <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                                        <Utensils className="w-4 h-4 text-amber-600" />
                                        <span className="text-xl sm:text-2xl font-bold tracking-tight">10k+</span>
                                   </div>
                                   <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Meals</span>
                              </div>

                              {/* Stat 3 */}
                              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs hover:bg-zinc-50 transition-colors">
                                   <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                                        <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                                        <span className="text-xl sm:text-2xl font-bold tracking-tight">4.9/5</span>
                                   </div>
                                   <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">User Rating</span>
                              </div>

                              {/* Stat 4 */}
                              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs hover:bg-zinc-50 transition-colors">
                                   <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                                        <Award className="w-4 h-4 text-amber-600" />
                                        <span className="text-xl sm:text-2xl font-bold tracking-tight">100%</span>
                                   </div>
                                   <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Free API</span>
                              </div>

                         </div>

                    </div>
               </div>
          </section>
     );
}

// ==========================================
// 2. MAIN DEMO APPLICATION & CODE VIEWER
// ==========================================
export default function App() {
     const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
     const [copied, setCopied] = useState(false);
     const [toastMessage, setToastMessage] = useState<string | null>(null);

     const triggerToast = (msg: string) => {
          setToastMessage(msg);
          setTimeout(() => setToastMessage(null), 3000);
     };

     const codeSnippet = `'use client';

import React from 'react';
import { ArrowRight, Sparkles, Play, Globe, Utensils, Star, Award } from 'lucide-react';

interface HeroBannerProps {
  onExploreClick?: () => void;
  onWatchVideoClick?: () => void;
}

export function HeroBanner({ onExploreClick, onWatchVideoClick }: HeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-zinc-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f3_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f3_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Ambient Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-[22rem] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Micro Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all duration-300 cursor-default group mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              <span>Over 10,000+ Culinary Creations</span>
              <span className="text-zinc-300 font-light">|</span>
              <span className="text-zinc-500 font-normal">Powered by TheMealDB API</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
            Master the Art of Cookery <br className="hidden sm:block" />
            With <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-amber-800 to-zinc-900">Precision & Elegance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-600 font-normal max-w-2xl leading-relaxed mb-10">
            Discover thousands of handpicked global recipes, verified ingredient ratios, and step-by-step masterclasses curated for passionate home chefs.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button 
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950 text-white font-medium text-sm sm:text-base tracking-wide shadow-xl shadow-zinc-950/10 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Explore Recipes</span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>

            <button 
              onClick={onWatchVideoClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-zinc-800 font-medium text-sm sm:text-base tracking-wide border border-zinc-200 shadow-xs hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-950 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <Play className="w-3 h-3 text-zinc-700 fill-zinc-700 group-hover:text-amber-700 group-hover:fill-amber-700 transition-colors" />
              </div>
              <span>Watch Video Tour</span>
            </button>
          </div>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12" />

          {/* Stats Bar */}
          <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                <Globe className="w-4 h-4 text-amber-600" />
                <span className="text-xl sm:text-2xl font-bold tracking-tight">50+</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Cuisines</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                <Utensils className="w-4 h-4 text-amber-600" />
                <span className="text-xl sm:text-2xl font-bold tracking-tight">10k+</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Meals</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span className="text-xl sm:text-2xl font-bold tracking-tight">4.9/5</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">User Rating</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50/60 border border-zinc-100/80 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 mb-1 text-zinc-900 font-semibold">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-xl sm:text-2xl font-bold tracking-tight">100%</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Free API</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}`;

     const copyToClipboard = () => {
          navigator.clipboard.writeText(codeSnippet);
          setCopied(true);
          triggerToast('Component code copied to clipboard!');
          setTimeout(() => setCopied(false), 2000);
     };

     return (
          <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
               {/* Top Header Controls */}
               <header className="bg-white border-b border-zinc-200 sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-bold text-sm">
                                   <ChefHat className="w-5 h-5 text-amber-400" />
                              </div>
                              <div>
                                   <h1 className="font-semibold text-sm text-zinc-900 leading-tight">MealDB Modern Banner</h1>
                                   <p className="text-xs text-zinc-500">Next.js + TS + Tailwind CSS</p>
                              </div>
                         </div>

                         <div className="flex items-center gap-2 bg-zinc-100 p-1 rounded-lg border border-zinc-200">
                              <button
                                   onClick={() => setActiveTab('preview')}
                                   className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'preview'
                                             ? 'bg-white text-zinc-900 shadow-xs'
                                             : 'text-zinc-600 hover:text-zinc-900'
                                        }`}
                              >
                                   <Eye className="w-3.5 h-3.5" />
                                   <span>Live Preview</span>
                              </button>
                              <button
                                   onClick={() => setActiveTab('code')}
                                   className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'code'
                                             ? 'bg-white text-zinc-900 shadow-xs'
                                             : 'text-zinc-600 hover:text-zinc-900'
                                        }`}
                              >
                                   <Code2 className="w-3.5 h-3.5" />
                                   <span>Next.js Code</span>
                              </button>
                         </div>
                    </div>
               </header>

               {/* Main Container */}
               <main className="flex-1 flex flex-col">
                    {activeTab === 'preview' ? (
                         <div className="flex-1">
                              <Banner
                                   onExploreClick={() => triggerToast('Redirecting to Recipe Explorer...')}
                                   onWatchVideoClick={() => triggerToast('Opening Masterclass Video...')}
                              />

                              {/* Interactive Showcase Details Section */}
                              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-xs">
                                             <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 mb-4">
                                                  <Sparkles className="w-5 h-5" />
                                             </div>
                                             <h3 className="font-semibold text-zinc-900 text-base mb-2">Pure White Modern Aesthetic</h3>
                                             <p className="text-sm text-zinc-600 leading-relaxed">
                                                  Designed with a high-contrast typography hierarchy, subtle backdrop grid, and zero clutter to maintain focus on cooking content.
                                             </p>
                                        </div>

                                        <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-xs">
                                             <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-800 mb-4">
                                                  <BookOpen className="w-5 h-5" />
                                             </div>
                                             <h3 className="font-semibold text-zinc-900 text-base mb-2">Next.js App Router Ready</h3>
                                             <p className="text-sm text-zinc-600 leading-relaxed">
                                                  Written as a React Server/Client Component with clean TypeScript interfaces, ready to drop into <code className="text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono">app/page.tsx</code>.
                                             </p>
                                        </div>

                                        <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-xs">
                                             <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-700 mb-4">
                                                  <Flame className="w-5 h-5" />
                                             </div>
                                             <h3 className="font-semibold text-zinc-900 text-base mb-2">Micro-Interactions</h3>
                                             <p className="text-sm text-zinc-600 leading-relaxed">
                                                  Features sleek hover states, subtle glowing badges, and responsive stats elements that adapt flawlessly to mobile viewports.
                                             </p>
                                        </div>
                                   </div>
                              </section>
                         </div>
                    ) : (
                         <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
                              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                                   <div className="px-5 py-4 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                             <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                             <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                             <span className="ml-2 text-xs font-mono text-zinc-400">components/HeroBanner.tsx</span>
                                        </div>
                                        <button
                                             onClick={copyToClipboard}
                                             className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
                                        >
                                             {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                                             <span>{copied ? 'Copied' : 'Copy Code'}</span>
                                        </button>
                                   </div>
                                   <div className="p-6 overflow-x-auto max-h-[600px] text-xs font-mono text-zinc-300 leading-relaxed">
                                        <pre><code>{codeSnippet}</code></pre>
                                   </div>
                              </div>
                         </div>
                    )}
               </main>

               {/* Floating Toast */}
               {toastMessage && (
                    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-950 text-white text-xs sm:text-sm font-medium shadow-2xl border border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-200">
                         <Sparkles className="w-4 h-4 text-amber-400" />
                         <span>{toastMessage}</span>
                    </div>
               )}
          </div>
     );
}