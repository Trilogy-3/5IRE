
import LandingContent from './components/LandingContent';

export default function HomeLanding() {
  const buttonStyles = 'text-nowrap hover:bg-blue-400 hover:text-white max-w-max px-4 rounded-xl py-3 shadow-sm hover:shadow-blue-400 text-sm sm:text-lg';

  return (
    <div className="relative">
      <div className="h-[85vh] md:h-screen w-full ">
        <video
          src="/Landing.mp4"
          className="md:block h-full w-full object-cover hidden"
          autoPlay
          muted
          loop
        />

         <video
          src="/mobile.mp4"
          className="h-full w-full object-cover md:hidden block"
          autoPlay
          muted
          loop
        />

      </div>
      <LandingContent />
    </div>
  );
}
