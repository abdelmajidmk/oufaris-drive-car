import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'initial' | 'logo' | 'text' | 'exit'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('logo'), 100);
    const timer2 = setTimeout(() => setPhase('text'), 600);
    const timer3 = setTimeout(() => setPhase('exit'), 2000);
    const timer4 = setTimeout(onComplete, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-dark transition-all duration-500 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl transition-transform duration-1000 ${
          phase !== 'initial' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo text */}
        <div className={`transition-all duration-700 ease-out ${
          phase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-center">
            <span className="text-gradient-gold">Ou Faris</span>
          </h1>
          <p className={`text-gold font-semibold tracking-[0.4em] uppercase text-lg md:text-xl text-center mt-3 transition-all duration-500 delay-200 ${
            phase === 'text' || phase === 'exit' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Drive Car
          </p>
        </div>

        {/* Tagline */}
        <p className={`text-primary-foreground/60 mt-6 text-sm tracking-wider transition-all duration-500 delay-300 ${
          phase === 'text' || phase === 'exit' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Location de Voitures Premium
        </p>

        {/* Loading dots */}
        <div className={`flex gap-2 mt-10 transition-opacity duration-500 ${
          phase === 'text' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
