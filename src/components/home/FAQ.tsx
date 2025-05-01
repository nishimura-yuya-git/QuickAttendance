import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-[#f0f7ff] py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xl font-bold text-[#0072ef] mb-4">FAQ</h2>
            <div className="w-20 h-[1px] bg-[#0072ef] mx-auto mb-12"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              よくあるご質問
            </h3>
          </div>
          
          <div className="space-y-10">
            {/* 質問1 */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-bold text-[#0072ef] mb-4">
                Q. システム導入に必要な初期費用はいくらですか？
              </h4>
              <p className="text-gray-700 pl-6">
                初期費用は50,000円（税別）です。このなかにシステムの初期設定費用、アカウント発行、基本的な操作研修が含まれています。
              </p>
            </div>
            
            {/* 質問2 */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-bold text-[#0072ef] mb-4">
                Q. 最低契約期間はありますか？
              </h4>
              <p className="text-gray-700 pl-6">
                最低契約期間は3ヶ月となっています。3ヶ月以降は1ヶ月単位でのご契約が可能で、解約のお申し出がない場合は自動更新されます。
              </p>
            </div>
            
            {/* 質問3 */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-bold text-[#0072ef] mb-4">
                Q. 導入後のサポート体制はどうなっていますか？
              </h4>
              <p className="text-gray-700 pl-6">
                メールおよび電話サポートを平日9:00〜18:00で提供しています。また、導入後3ヶ月間は週1回のオンライン相談会にご参加いただけます。ご不明点や操作方法など、専任スタッフが丁寧に対応いたします。
              </p>
            </div>
            
            {/* 質問4 */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-bold text-[#0072ef] mb-4">
                Q. 既存システムからのデータ移行は可能ですか？
              </h4>
              <p className="text-gray-700 pl-6">
                CSVまたはExcel形式でのデータ移行に対応しています。データ量や複雑さによっては別途移行費用が発生する場合があります。詳細は導入前のヒアリングでご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 