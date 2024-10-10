import HeaderText from '../HeaderText';
import { RiFileSettingsFill as Document } from 'react-icons/ri';
import Link from 'next/link';
import Button5ire from '@/app/atoms/Button5ire';

export default function LandingContent() {
  const buttonStyles = 'text-nowrap max-w-max px-4 py-3 rounded-xl shadow-sm text-sm sm:text-lg';

  return (
    <div className="relative md:absolute md:inset-0 flex flex-col justify-center h-full w-full">
      <div className="lg:pl-36 flex flex-col gap-6 w-full px-4 items-center justify-center sm:items-start md:mt-32">
         
        <Button5ire href={'https://x.com/5ireChain/status/1824126062189744641'} value={'$5IRE is now on mainnet!'} cssMain={'border border-[#57CC55] text-[#57CC55] -mt-4'} />
        <h1 className="font-semibold text-3xl sm:text-6xl capitalize">Blockchain</h1>
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center text-3xl md:text-5xl">
          <span className="text-blue-600">Meets</span>
          <HeaderText />
        </div>
        
        <p className="max-w-[500px] text-slate-400 md:text-lg leading-5 mt-2 text-center sm:text-start">
          World’s first hybrid Layer 1 with sustainability at its core. Empowering developers to build dApps that merge blockchain with real-world impact.
        </p>
        
        <div className="flex items-center gap-4 mt-2">
          <Link href="" className={`${buttonStyles} bg-blue-500 text-blue-950 font-semibold hover:bg-blue-400 hover:text-white`}>
            Start Building
          </Link>
          <Link href="" className={`${buttonStyles} flex items-center gap-2 bg-boxColor text-blue-400 font-semibold hover:bg-blue-400 hover:text-white`}>
            <Document className="text-white text-xl" />
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
