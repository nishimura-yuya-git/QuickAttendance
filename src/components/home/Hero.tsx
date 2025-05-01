import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* 背景画像 - スマホ表示時にシンプル化 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/office-interior.jpg" 
          alt="福祉施設環境" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/70 z-10"></div>
      </div>
      
      {/* 右上の三角形で斜めにカットされた青いエリア - モバイル対応改善 */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-r from-primary-600 to-primary-500 clip-diagonal z-20"></div>
      
      <div className="container relative z-30 h-full py-20 md:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full mt-20 md:mt-40">
          {/* 左側のコンテンツエリア */}
          <div className="text-gray-800 relative px-4 md:px-0">
            {/* 福祉特化の見出し - モバイル表示時の位置調整 */}
            <div className="absolute -top-12 md:-top-16 left-0 md:-left-2 transform rotate-[-5deg] z-40">
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-5 py-2 md:px-6 md:py-2.5 font-bold text-sm md:text-base shadow-lg border-2 border-white badge-pulse">
                福祉特化
              </span>
            </div>

            {/* テキストコンテンツ - すべて黒文字 */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-6 md:mb-10 text-gray-900">
                一番シンプルで簡単な
                <span className="block h-2 md:h-3"></span>
                <span className="text-primary-600">勤怠管理</span>システム
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-900 leading-relaxed">
                「サクッと勤怠」は、定員5～100名規模の福祉施設様向けに
                特化したシフト管理・勤怠管理システムです。
                <span className="block h-3"></span>
                福祉事業所の皆様が抱える記録管理と事務作業の課題を
                効率的に解決できます。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 border-2 border-primary-600 text-primary-600 py-3 px-8 md:py-4 md:px-12 rounded-full font-bold flex items-center justify-center shadow-lg transition-all duration-300"
              >
                お問い合わせ
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* スマホ表示時のモックアップ画像 */}
          <div className="flex justify-center items-center mt-8 lg:mt-0 lg:hidden">
            <div className="relative w-full max-w-xs">
              <div className="relative mx-auto">
                <img 
                  src="/images/mobile-mockup.png" 
                  alt="モバイルアプリ" 
                  className="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x600/ffffff/e0e0e0";
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右側のPC・タブレット向けモックアップ画像 */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-xl">
              {/* デスクトップ画面 */}
              <div className="relative z-10">
                <img 
                  src="/images/desktop-mockup.png" 
                  alt="デスクトップ画面" 
                  className="w-full h-auto rounded-lg shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/1000x700/ffffff/e0e0e0";
                  }}
                />
              </div>
              
              {/* モバイルアプリのモックアップ */}
              <div className="absolute bottom-0 -left-10 w-1/3 z-20">
                <img 
                  src="/images/mobile-mockup.png" 
                  alt="モバイルアプリ" 
                  className="w-full h-auto rounded-lg shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x600/ffffff/e0e0e0";
                  }}
                />
              </div>
              
              {/* 2つ目のモバイルアプリモックアップ */}
              <div className="absolute bottom-5 left-[15%] w-1/3 z-30">
                <img 
                  src="/images/mobile-mockup2.png" 
                  alt="モバイルアプリ2" 
                  className="w-full h-auto rounded-lg shadow-xl"
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