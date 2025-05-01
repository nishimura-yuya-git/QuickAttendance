import React from 'react';
import { CheckCircle, Clock, FileText, DollarSign, Users } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-primary-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: <Clock size={24} />,
      title: '業務効率の向上',
      description: '手作業での勤怠管理にかかる時間を大幅に削減。人事・労務担当者の業務効率が向上します。',
    },
    {
      icon: <FileText size={24} />,
      title: '正確な労働時間管理',
      description: '打刻データをもとに正確な労働時間を自動計算。残業時間や休憩時間も適切に管理できます。',
    },
    {
      icon: <CheckCircle size={24} />,
      title: '法令順守のサポート',
      description: '働き方改革関連法に完全対応。年次有給休暇の5日取得義務化や時間外労働の上限規制にも対応します。',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'コスト削減',
      description: '紙のシフト表や出勤簿が不要になり、印刷コストや保管スペースを削減できます。',
    },
    {
      icon: <Users size={24} />,
      title: '従業員満足度の向上',
      description: 'シフト確認や休暇申請がいつでもどこでも可能に。スマホから簡単に操作できるので従業員の満足度も向上します。',
    },
  ];

  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">導入メリット</h2>
            <p className="section-subtitle">
              サクッと勤怠を導入することで、さまざまな業務課題を解決します
            </p>
            
            <div className="space-y-8 mt-8">
              {benefitsList.map((benefit, index) => (
                <Benefit
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4 relative z-10">
                <h3 className="text-xl font-bold text-primary-600 mb-4">導入事例</h3>
                <div className="mb-4 pb-4 border-b">
                  <p className="italic text-gray-600 mb-2">
                    「従来は紙のシフト表を使用していましたが、サクッと勤怠を導入後、シフト管理の時間が週あたり約5時間削減されました。スタッフからの評判も良く、シフト確認のためにわざわざ店舗に来る必要がなくなりました。」
                  </p>
                  <p className="text-gray-800 font-semibold">
                    小売業 店長 (従業員50名規模)
                  </p>
                </div>
                <div>
                  <p className="italic text-gray-600 mb-2">
                    「複数の勤務形態を持つ従業員が多い当社では、勤怠管理が大きな課題でした。サクッと勤怠導入後は、従業員ごとの細かな設定が可能になり、給与計算との連携もスムーズになりました。」
                  </p>
                  <p className="text-gray-800 font-semibold">
                    IT企業 人事部長 (従業員120名規模)
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-full h-full bg-primary-100 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 