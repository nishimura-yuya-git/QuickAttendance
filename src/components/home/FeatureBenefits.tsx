import React from 'react';

const BenefitItem: React.FC<{
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}> = ({ number, title, description, imageSrc }) => {
  // 改行がある場合は分割して表示
  const titleLines = title.split('\n');
  const descriptionLines = description.split('\n');
  
  // 表示順序を交互にする
  const isEven = parseInt(number) % 2 === 0;
  
  return (
    <div className={`mb-24 last:mb-0 flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
      <div className="w-full md:w-1/2 relative">
        <div className={`z-10 relative ${isEven ? 'text-right' : 'text-left'}`}>
          <div className="inline-block bg-primary-600 text-white rounded-lg px-4 py-2 mb-4 font-bold">
            POINT {number}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
          <div className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 relative z-10">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-auto rounded"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/ffffff/e2e8f0?text=Benefit+Feature";
              }}
            />
            
          </div>
            
          {/* 装飾的な背景要素 - 01と03で表示 */}
          {(number === '01' || number === '03') && (
            <div className="absolute top-4 right-4 w-full h-full bg-primary-100 rounded-lg -z-0"></div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureBenefits: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: '本当に必要な機能\nだけをシンプルに',
      description: '複雑な多機能システムとは違い、福祉記録に本当に必要な機能だけを厳選。\n余計な機能に惑わされず、職員が混乱することなく日々の記録に集中できます。',
      imageSrc: '/images/benefit-image-1.png',
    },
    {
      number: '02',
      title: '福祉事業所向け\n低コスト導入プラン',
      description: 'サクッと勤怠は利用者定員に応じた明確な料金体系です。\n追加オプション費用はなく、初めから全ての機能をご利用いただけるため、予算計画が立てやすくなっています。',
      imageSrc: '/images/benefit-image-2.png',
    },
    {
      number: '03',
      title: '福祉施設職員でも\n迷わず使いこなせる',
      description: '福祉現場で本当に必要な機能を厳選して搭載しているため、「複雑すぎて使いこなせない」という課題がありません。\nITスキルに自信がない職員でも直感的に操作できる優しい設計です。',
      imageSrc: '/images/benefit-image-3.png',
    }
  ];

  return (
    <section id="feature-benefits" className="py-24 bg-[#effdff]">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-primary-600 mb-4">BENEFIT</h2>
          <div className="w-20 h-[1px] bg-primary-600 mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            その福祉業務の悩み、<br />
            <span className="text-primary-600">サクッと勤怠</span>で解決できます！
          </h3>
        </div>
        
        <div>
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits; 