import Image from '@/app/atoms/Image';
import LearnMoreBtn from '@/app/atoms/LearnMoreBtn';
import React from 'react';

export default function BoxCard({ imgSrc, title, desc, href }) {
  return (
    <div className="bg-[#1a0b2e] border border-slate-800 px-8 pt-8 pb-4 rounded-3xl flex flex-col">
      <div className="transform transition-transform duration-500 ease-in-out hover:scale-110 py-3 flex-grow mb-3">
        <Image parentCss="h-50 w-full" imgSrc={imgSrc} imgCss="scale-[1.25]" />
        <h2 className="text-xl font-semibold  -mt-20 sm:-mt-10 lg:-mt-32 text-center">{title}</h2>
        <p className="text-slate-600 font-semibold text-[15px] leading-4 text-center mt-2">{desc}</p>
          </div>
      <LearnMoreBtn href={href}/>
          
    </div>
  );
}
