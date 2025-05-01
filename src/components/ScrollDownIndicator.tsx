import React, { useState, useEffect } from 'react';

interface ScrollDownIndicatorProps {
  scrollToId?: string;
  className?: string;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ 
  scrollToId = 'features',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // スクロール位置に応じて表示・非表示を制御
  useEffect(() => {
    const handleScroll = () => {
      // 画面の20%以上スクロールしたら非表示
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed bottom-14 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center cursor-pointer transition-all duration-500 md:hidden ${className} ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={handleClick}
      aria-label="下にスクロール"
    >
      <div className="flex flex-col items-center">
        {/* 外側の円 */}
        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2">
          {/* 2つの矢印を重ねて表示 */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* 1つ目の矢印（薄い青） */}
            <svg 
              className="absolute w-6 h-6 text-blue-300 animate-chevron-up"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
            
            {/* 2つ目の矢印（濃い青） */}
            <svg 
              className="absolute w-6 h-6 text-primary-600 animate-chevron-down" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// アニメーション用スタイルをTailwind configに追加する必要があります
// tailwind.config.jsに以下を追加:
// extend: {
//   keyframes: {
//     'chevron-up': {
//       '0%, 100%': { transform: 'translateY(-4px)' },
//       '50%': { transform: 'translateY(0)' }
//     },
//     'chevron-down': {
//       '0%, 100%': { transform: 'translateY(0)' },
//       '50%': { transform: 'translateY(4px)' }
//     },
//   },
//   animation: {
//     'chevron-up': 'chevron-up 1.5s ease-in-out infinite',
//     'chevron-down': 'chevron-down 1.5s ease-in-out infinite',
//   },
// }

export default ScrollDownIndicator; 