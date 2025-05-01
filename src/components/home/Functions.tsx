import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface FunctionModalProps {
  title: string;
  description: string;
  benefits: string[];
  isOpen: boolean;
  onClose: () => void;
}

const FunctionModal: React.FC<FunctionModalProps> = ({
  title,
  description,
  benefits,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
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
}

const FunctionItem: React.FC<FunctionItemProps> = ({ title, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <span className="font-medium text-gray-800">{title}</span>
      <div className="w-6 h-6 rounded-full flex items-center justify-center border border-primary-600 text-primary-600">
        <ArrowUpRight size={14} />
      </div>
    </div>
  );
};

const Functions: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null);

  const functionsData = [
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

  const closeModal = () => {
    setSelectedFunction(null);
  };

  const openModal = (index: number) => {
    setSelectedFunction(index);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {functionsData.map((func, index) => (
            <FunctionItem
              key={index}
              title={func.title}
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        {selectedFunction !== null && (
          <FunctionModal
            title={functionsData[selectedFunction].title}
            description={functionsData[selectedFunction].description}
            benefits={functionsData[selectedFunction].benefits}
            isOpen={selectedFunction !== null}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Functions;
