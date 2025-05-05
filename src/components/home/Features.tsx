import React from 'react';
import { Check } from 'lucide-react';

interface ProblemCardProps {
  title: string;
  points: string[];
}

interface ProblemProps {
  title: string;
  points: string[];
  imageSize?: {
    width: string;
    height?: string;
  };
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, points }) => {
  // タイトルに改行が含まれている場合、行ごとに分けて表示
  const titleLines = title.split('\n');
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full">
      <h3 className="text-lg font-bold mb-5 text-center text-primary-600">
        {titleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < titleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      <div className="w-full h-0.5 bg-primary-500 mx-auto mb-7"></div>
      
      <ul className="space-y-5 w-full">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="text-primary-500 flex-shrink-0 mr-4 mt-1">
              <div className="w-5 h-5 rounded-full border border-primary-500 flex items-center justify-center">
                <Check size={12} />
              </div>
            </div>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Features: React.FC = () => {
  const problems: ProblemProps[] = [
    {
      title: '記録作成と集計に\n時間がかかる',
      points: [
        '手書きの介護記録やエクセルでの管理に時間を費やしている',
        '利用者ごとのサービス実績集計や請求処理の負担を軽減したい',
      ],
      imageSize: {
        width: 'w-28',
      }
    },
    {
      title: '福祉システム導入\nのハードル',
      points: [
        '専門システムの導入費用が高く、予算確保が難しい',
        'シンプルで使いやすい福祉向けシステムを探している',
      ],
      imageSize: {
        width: 'w-44',
      }
    },
    {
      title: '操作が複雑で\n使いこなせない',
      points: [
        '既存システムは機能が多すぎて職員が使いこなせていない',
        '介護職員の年齢層やITスキルに差があり運用に苦労している',
      ],
      imageSize: {
        width: 'w-48',
      }
    },
    {
      title: '法令遵守と記録管理',
      points: [
        '介護保険や障害福祉サービスの記録要件への対応が負担',
        '人員不足の中でも確実な記録管理体制を整えたい',
      ],
      imageSize: {
        width: 'w-36',
      }
    },
  ];

  return (
    <section id="features" className="pt-24 pb-36 bg-white relative">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-xl font-bold text-primary-600 mb-4">PROBLEM</h2>
          <div className="w-20 h-[1px] bg-primary-600 mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            <span className="text-primary-600">福祉事業所</span>でこんな課題抱えていませんか？
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="flex flex-col">
              <ProblemCard
                title={problem.title}
                points={problem.points}
              />
              <div className="flex justify-center mt-8">
                <img 
                  src={`/images/problem-person-${index + 1}.png`}
                  alt={problem.title}
                  className={`${problem.imageSize?.width || 'w-28'} ${problem.imageSize?.height || 'h-auto'}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/200x200/e2e8f0/64748b?text=' + encodeURIComponent(problem.title.split('が')[0]);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <img 
            src="/images/double-arrow-large.svg" 
            alt="下矢印" 
            className="w-36 h-36"
          />
        </div>
      </div>
      
      {/* PC用の放物線（既存） */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden hidden md:block" style={{ height: '200px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path 
            d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 V120 H0 V0 Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
      
      {/* スマホ用のより滑らかな放物線 - 中央に調整 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden md:hidden" style={{ height: '200px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path 
            d="M0,0 
               Q25,30 42,40 
               T100,0
               V100 H0 V0 Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default Features; 