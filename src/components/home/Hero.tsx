import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen pt-[120px]">
      {/* 背景画像 - スマホ表示時にシンプル化 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/office-interior.jpg" 
          alt="福祉施設環境" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-white/70 z-10"></div>
      </div>
      
      {/* 右上の三角形で斜めにカットされた青いエリア - モバイル対応改善 */}
      <div className="absolute top-0 right-0 w-dvw md:w-1/2 h-[100%] md:h-full bg-gradient-to-r from-primary-400 to-primary-200 clip-diagonal z-20"></div>
      
      <div className="container relative z-30 h-full py-20 md:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full mt-4 md:mt-24">
          {/* 左側のコンテンツエリア */}
          <div className="text-gray-800 relative px-4 md:px-0">
            {/* 福祉特化の見出し - モバイル表示時の位置調整 */}
            <div className="absolute -top-16 md:-top-20 left-0 md:-left-2 transform rotate-[-5deg] z-40">
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-5 py-2 md:px-6 md:py-2.5 font-bold text-sm md:text-base shadow-lg border-2 border-white badge-pulse">
                現場の声から生まれた
              </span>
            </div>

            {/* テキストコンテンツ - すべて黒文字 */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-6 md:mb-10 text-gray-900">
                福祉施設の職員が
                <span className="block h-4 md:h-4"></span>
                本当に求めていた
                <span className="block h-2 md:h-6"></span>
                <span className="bg-primary-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md">勤怠管理</span>システム
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-900 leading-relaxed">
                「サクッと勤怠」は、福祉現場で働く職員の声をもとに開発した<span className="hidden md:inline"><br /></span>
                定員5～100名規模の福祉施設向け勤怠管理システムです。
                <span className="block h-3"></span>
                現場のニーズを理解した設計で、記録管理と事務作業の<span className="hidden md:inline"><br /></span>
                課題を効率的に解決します。
                <span className="block h-3"></span>
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-400 opacity-80 -z-10"></span>
                  <span className="text-sm md:text-xl font-semibold relative z-10">
                    福祉施設経験者が導入からサポートまで担当。
                  </span>
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#features" 
                className="bg-white hover:bg-gray-100 border-2 border-primary-600 text-primary-600 py-3 px-8 md:py-4 md:px-12 rounded-full font-bold flex items-center justify-center shadow-lg transition-all duration-300"
                onClick={handleSmoothScroll}
              >
                さらに見る
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* スマホ表示時のモックアップ画像 - PCと同じような表示に変更 */}
          <div className="flex justify-center items-center mt-8 lg:mt-0 lg:hidden">
            <div className="relative w-full max-w-full px-4">
              {/* デスクトップ画面 */}
              <div className="relative z-10">
                <img 
                  src="/images/personal-computer-attendance.png" 
                  alt="デスクトップ画面" 
                  className="w-full h-auto scale-150"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/1000x700/ffffff/e0e0e0";
                  }}
                />
              </div>
              
              {/* モバイルアプリのモックアップ */}
              <div className="absolute -bottom-10 -left-20 w-72 z-20">
                <img 
                  src="/images/smart-phone-attendance.png" 
                  alt="モバイルアプリ" 
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x600/ffffff/e0e0e0";
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* 右側のPC・タブレット向けモックアップ画像 */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-full">
              {/* デスクトップ画面 */}
              <div className="relative z-10 bottom-16 left-16">
                <img 
                  src="/images/personal-computer-attendance.png" 
                  alt="デスクトップ画面" 
                  className="w-full h-auto scale-[1.7]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/1000x700/ffffff/e0e0e0";
                  }}
                />
              </div>
              
              {/* モバイルアプリのモックアップ - 1つだけ表示 */}
              <div className="absolute -bottom-28 -left-64 w-full z-20">
                <img 
                  src="/images/smart-phone-attendance.png" 
                  alt="モバイルアプリ" 
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x600/ffffff/e0e0e0";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 