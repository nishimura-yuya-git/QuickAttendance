import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface FunctionModalProps {
  title: string;
  description: string;
  benefits: string[];
  isOpen: boolean;
  onClose: () => void;
  isAdditional?: boolean;
}

const FunctionModal: React.FC<FunctionModalProps> = ({
  title,
  description,
  benefits,
  isOpen,
  onClose,
  isAdditional = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              {isAdditional && (
                <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full ml-2">
                  オプション機能（別途費用）
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-4">{description}</p>

            {benefits.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  主なメリット
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FunctionItemProps {
  title: string;
  onClick: () => void;
  isAdditional?: boolean;
}

const FunctionItem: React.FC<FunctionItemProps> = ({ 
  title, 
  onClick, 
  isAdditional = false 
}) => {
  return (
    <div
      className={`${isAdditional ? 'bg-white/90 border-yellow-200' : 'bg-white border-gray-100'} rounded-lg shadow-sm border p-4 flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer`}
      onClick={onClick}
    >
      <div>
        <span className="font-medium text-gray-800">{title}</span>
        {isAdditional && (
          <span className="block text-xs text-yellow-600 mt-1">オプション</span>
        )}
      </div>
      <div className="w-6 h-6 rounded-full flex items-center justify-center border border-primary-600 text-primary-600">
        <ArrowUpRight size={14} />
      </div>
    </div>
  );
};

const Functions: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null);
  const [isAdditionalFunction, setIsAdditionalFunction] = useState<boolean>(false);

  const basicFunctionsData = [
    {
      title: "シフト管理",
      description:
        "従業員のシフトを簡単に作成・管理できます。シフトの重複や人員不足を自動でチェックし、効率的なシフト作成をサポートします。",
      benefits: [
        "ドラッグ＆ドロップで簡単にシフト作成",
        "シフトの自動チェック機能で人員配置ミスを防止",
        "従業員へのシフト通知機能",
        "月間・週間・日別の表示切替で見やすく管理",
      ],
    },
    {
      title: "勤怠管理",
      description:
        "従業員の出退勤記録を正確に管理します。PCやスマホからの打刻に対応し、労働時間の自動計算で管理業務を効率化します。",
      benefits: [
        "複数デバイスからの打刻に対応",
        "勤務時間の自動集計",
        "残業時間の自動計算とアラート機能",
        "月次レポートの自動生成",
      ],
    },
    {
      title: "スタッフ登録",
      description:
        "従業員情報を一元管理します。基本情報から勤務条件、スキルまで必要な情報を簡単に登録・更新できます。",
      benefits: [
        "従業員情報の一括管理",
        "権限レベルの設定機能",
        "各種証明書の有効期限管理",
        "従業員ごとの勤務ルール設定",
      ],
    }
  ];

  const additionalFunctionsData = [
    {
      title: "各種申請・承認",
      description:
        "休暇や残業などの申請・承認フローをデジタル化します。紙の申請書が不要になり、承認状況をリアルタイムで確認できます。",
      benefits: [
        "申請から承認までをオンライン化",
        "承認状況のステータス管理",
        "過去の申請履歴を簡単に検索",
        "複数の承認者を設定可能",
      ],
    },
    {
      title: "有給休暇管理",
      description:
        "従業員の有給休暇を自動で管理します。付与日、残日数、取得状況をシステムで一元管理し、法令遵守をサポートします。",
      benefits: [
        "有給休暇の自動付与管理",
        "従業員ごとの残日数表示",
        "有給取得率のレポート作成",
        "年5日取得義務の管理支援",
      ],
    },
    {
      title: "日報作成",
      description:
        "日々の業務記録を簡単に作成・共有できます。テンプレート機能で記入をサポートし、業務の可視化を実現します。",
      benefits: [
        "カスタマイズ可能なテンプレート",
        "写真やファイルの添付機能",
        "過去の日報の検索・閲覧",
        "上長へのレポート共有機能",
      ],
    },
    {
      title: "残業時間管理",
      description:
        "残業時間を自動で集計・分析します。部署ごと、個人ごとの残業状況を把握し、働き方改革の推進をサポートします。",
      benefits: [
        "残業時間の自動計算・集計",
        "残業アラート機能",
        "複数の残業区分の管理",
        "グラフによる可視化",
      ],
    },
    {
      title: "打刻忘れ防止",
      description:
        "出退勤の打刻忘れを防止するリマインダー機能を提供します。勤怠記録の精度向上と管理者の負担軽減に貢献します。",
      benefits: [
        "勤務時間に基づいた打刻リマインド",
        "未打刻者への通知機能",
        "管理者向けの未打刻レポート",
        "打刻修正申請の簡素化",
      ],
    },
    {
      title: "36協定対応",
      description:
        "36協定の遵守状況を自動でチェックします。上限時間の管理や特別条項の適用状況を可視化し、労務リスクを低減します。",
      benefits: [
        "36協定の上限時間自動チェック",
        "特別条項の適用回数管理",
        "違反リスクの事前アラート",
        "協定遵守状況のレポート作成",
      ],
    },
    {
      title: "給与計算ソフト連携",
      description:
        "主要な給与計算ソフトとのデータ連携が可能です。勤怠データを自動で連携し、二重入力を防止します。",
      benefits: [
        "給与計算の効率化",
        "手入力ミスの防止",
        "データ転送の自動化",
        "様々な給与ソフトに対応",
      ],
    },
    {
      title: "シフト申請・作成",
      description:
        "従業員からのシフト希望を収集し、最適なシフト作成をサポートします。希望と実際の勤務のミスマッチを減らし、働きやすい環境づくりに貢献します。",
      benefits: [
        "従業員のシフト希望収集",
        "希望を考慮した自動シフト作成",
        "シフト調整の効率化",
        "シフト希望と実績の分析",
      ],
    },
    {
      title: "AIチャットボット（労務周り）",
      description:
        "労務関連の質問に24時間対応するAIチャットボットを提供します。従業員からのよくある質問に自動で回答し、管理者の負担を軽減します。",
      benefits: [
        "24時間365日の問い合わせ対応",
        "FAQ自動回答による業務効率化",
        "継続的な学習による回答精度向上",
        "問い合わせ内容の分析機能",
      ],
    },
  ];

  const closeModal = () => {
    setSelectedFunction(null);
    setIsAdditionalFunction(false);
  };

  const openBasicModal = (index: number) => {
    setSelectedFunction(index);
    setIsAdditionalFunction(false);
  };

  const openAdditionalModal = (index: number) => {
    setSelectedFunction(index);
    setIsAdditionalFunction(true);
  };

  return (
    <section
      id="functions"
      className="py-24 bg-gradient-to-r from-blue-400 to-blue-700"
    >
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-white mb-4">FUNCTION</h2>
          <div className="w-20 h-[1px] bg-white mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            サクッと勤怠の機能一覧
          </h3>
        </div>

        {/* 基本機能 */}
        <h4 className="text-xl font-bold text-white mb-6">基本機能</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {basicFunctionsData.map((func, index) => (
            <FunctionItem
              key={index}
              title={func.title}
              onClick={() => openBasicModal(index)}
            />
          ))}
        </div>

        {/* 追加機能 */}
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold text-white mb-2">オプション機能（別途費用）</h4>
          <p className="text-white/80 mb-6">以下の機能は追加オプションとして、別途費用が発生します。基本プランに必要な機能を追加することで、さらに業務効率化を図ることができます。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {additionalFunctionsData.map((func, index) => (
              <FunctionItem
                key={index}
                title={func.title}
                onClick={() => openAdditionalModal(index)}
                isAdditional={true}
              />
            ))}
          </div>
        </div>

        {selectedFunction !== null && (
          <FunctionModal
            title={isAdditionalFunction 
              ? additionalFunctionsData[selectedFunction].title 
              : basicFunctionsData[selectedFunction].title}
            description={isAdditionalFunction 
              ? additionalFunctionsData[selectedFunction].description 
              : basicFunctionsData[selectedFunction].description}
            benefits={isAdditionalFunction 
              ? additionalFunctionsData[selectedFunction].benefits 
              : basicFunctionsData[selectedFunction].benefits}
            isOpen={selectedFunction !== null}
            onClose={closeModal}
            isAdditional={isAdditionalFunction}
          />
        )}
      </div>
    </section>
  );
};

export default Functions;
