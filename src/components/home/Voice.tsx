import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  description: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  imageSrc: string;
  logoSrc: string;
  buttonText?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  companyName,
  industry,
  employeeCount,
  imageSrc,
  logoSrc,
  buttonText = 'View More'
}) => {
  return (
    <div className="min-w-[300px] w-[350px] flex-shrink-0 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="relative h-52">
          <img 
            src={imageSrc} 
            alt={companyName} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(companyName)}`;
            }}
          />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
            <img 
              src={logoSrc} 
              alt={`${companyName}ロゴ`} 
              className="h-10 w-auto" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/200x80/ffffff/000000?text=${encodeURIComponent(companyName)}`;
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-800 font-bold text-lg mb-5">{title}</p>
          <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-primary-600 font-bold mb-2">{companyName} 様</p>
            <div className="flex flex-wrap text-sm text-gray-600">
              <div className="mr-4 mb-2">
                <span className="font-medium">業種：</span>{industry}
              </div>
              <div className="mb-2">
                <span className="font-medium">従業員数：</span>{employeeCount}
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-right">
            <button className="inline-flex items-center text-primary-600 hover:text-primary-700 border border-primary-600 rounded-full px-6 py-2">
              {buttonText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Voice: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(380); // カードの幅 + パディング
  const scrollTimeout = useRef<number | null>(null);

  // コンポーネントマウント時とウィンドウリサイズ時にカードの実際の幅を計算する
  useEffect(() => {
    const calculateCardWidth = () => {
      if (sliderRef.current && sliderRef.current.firstElementChild) {
        const firstCard = sliderRef.current.firstElementChild as HTMLElement;
        // 実際のカード幅を取得（カード自体の幅 + margin/padding）
        const actualWidth = firstCard.offsetWidth;
        setCardWidth(actualWidth);
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    
    return () => {
      window.removeEventListener('resize', calculateCardWidth);
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (activeIndex === 0) {
        // 最初の要素の場合、最後の要素にスクロール
        const newIndex = caseStudies.length - 1;
        setActiveIndex(newIndex);
        scrollToIndex(newIndex);
      } else {
        const newIndex = activeIndex - 1;
        setActiveIndex(newIndex);
        scrollToIndex(newIndex);
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current && caseStudies.length > 0) {
      if (activeIndex === caseStudies.length - 1) {
        // 最後の要素の場合、最初の要素にスクロール
        setActiveIndex(0);
        scrollToIndex(0);
      } else {
        const newIndex = activeIndex + 1;
        setActiveIndex(newIndex);
        scrollToIndex(newIndex);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const caseStudies = [
    {
      title: '他社の勤怠管理システムは複雑すぎて断念。サクッと勤怠の簡単さに期待し導入。',
      description: 'これまでのシステムが使いにくかったため、よりシンプルなシステムを探していました。サクッと勤怠はその名の通り、サクっと使えて直感的な操作で、ITに詳しくないスタッフでもすぐに使いこなせるようになりました。',
      companyName: '堤 動物病院',
      industry: '医療',
      employeeCount: '1～30名',
      imageSrc: '/images/case-study-1.jpg',
      logoSrc: '/images/logo-animal-hospital.png'
    },
    {
      title: '働き方改革がきっかけでシステム導入を検討。60代の私でもすぐに導入できた。',
      description: '働き方改革への対応で勤怠管理の厳格化が必要になり、システム導入を検討しました。簡単操作でスマホからも打刻できるサクッと勤怠は、現場のスタッフから高評価です。導入後は残業時間の管理も容易になりました。',
      companyName: '株式会社西光建設',
      industry: '建設業',
      employeeCount: '1～30名',
      imageSrc: '/images/case-study-2.jpg',
      logoSrc: '/images/logo-construction.png'
    },
    {
      title: '3店舗の管理が一元化され、業務効率が大幅に向上しました。',
      description: '複数店舗の勤怠状況を一括管理できるようになったことで、管理業務の時間が週10時間以上削減されました。スタッフのシフト管理も明確になり、人員配置の最適化にも役立っています。',
      companyName: '株式会社フードハウス',
      industry: '飲食業',
      employeeCount: '31～100名',
      imageSrc: '/images/case-study-3.jpg',
      logoSrc: '/images/logo-restaurant.png'
    },
    {
      title: 'リモートワーク導入に伴い、勤怠管理の見直しを実施。',
      description: 'コロナ禍でのリモートワーク導入時に勤怠管理の課題が浮上。サクッと勤怠はスマホからの打刻ができ、場所を選ばない働き方に対応できることが決め手でした。社員からも使いやすいと好評です。',
      companyName: '株式会社テクノソリューション',
      industry: 'IT・通信',
      employeeCount: '31～100名',
      imageSrc: '/images/case-study-4.jpg',
      logoSrc: '/images/logo-tech.png'
    },
    {
      title: '異なる雇用形態のスタッフを統一管理できるように。',
      description: '正社員、パート、アルバイトなど様々な雇用形態のスタッフがいる中で、個別の勤務ルールに対応した管理ができるようになりました。給与計算の正確性も向上し、月末の処理時間が半分以下になりました。',
      companyName: '合同会社グリーンライフ',
      industry: '小売業',
      employeeCount: '31～100名',
      imageSrc: '/images/case-study-5.jpg',
      logoSrc: '/images/logo-retail.png'
    }
  ];

  // スライダーのスクロールイベントを監視して現在のインデックスを更新
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      
      // 既存のタイムアウトをクリア
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // インデックスの更新
      if (newIndex >= 0 && newIndex < caseStudies.length && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
      
      // スクロール終了の検出（300ms後にスクロールが止まったと判断）
      scrollTimeout.current = window.setTimeout(() => {
        // スクロール終了時の処理
        const scrollPosition = sliderRef.current?.scrollLeft || 0;
        const maxScroll = (sliderRef.current?.scrollWidth || 0) - (sliderRef.current?.clientWidth || 0);
        
        // 最後まで到達した場合、最初に戻る
        if (Math.abs(scrollPosition - maxScroll) < 10 && scrollPosition > 0) {
          setTimeout(() => {
            setActiveIndex(0);
            scrollToIndex(0);
          }, 500);
        }
        
        // 最初に戻った場合（手動スクロールで）
        if (scrollPosition < 10 && activeIndex === caseStudies.length - 1) {
          setActiveIndex(0);
        }
      }, 300);
    }
  };

  return (
    <section id="voice" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-primary-600 mb-4">VOICE</h2>
          <div className="w-20 h-[1px] bg-primary-600 mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            導入事例
          </h3>
        </div>
        
        <div className="relative px-6">
          {/* スライダーコントロール */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollLeft}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="前の事例を表示"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
          </div>
          
          {/* スライダーコンテナ */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar gap-4 snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={handleScroll}
          >
            {caseStudies.map((study, index) => (
              <div key={index} className="snap-start" style={{ scrollSnapAlign: 'start' }}>
                <CaseStudy
                  title={study.title}
                  description={study.description}
                  companyName={study.companyName}
                  industry={study.industry}
                  employeeCount={study.employeeCount}
                  imageSrc={study.imageSrc}
                  logoSrc={study.logoSrc}
                />
              </div>
            ))}
          </div>
          
          {/* 右スライダーコントロール */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollRight}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="次の事例を表示"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>
          
          {/* インジケーター */}
          <div className="flex justify-center mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`h-2 w-2 mx-1 rounded-full ${
                  activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`事例 ${index + 1} を表示`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voice; 