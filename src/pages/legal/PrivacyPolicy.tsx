import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  // プライバシーポリシーのセクション
  const policyData = [
    {
      title: '基本方針',
      content: '株式会社Lean Stack（以下「当社」）は、個人情報の重要性を認識し、適切な管理、保護に努めます。当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守します。'
    },
    {
      title: '収集する個人情報の範囲',
      content: [
        '氏名',
        '会社名',
        'メールアドレス',
        '住所',
        'その他、サービス提供に必要な情報'
      ]
    },
    {
      title: '個人情報の利用目的',
      content: [
        'サービスの提供、運営、維持',
        'お問い合わせへの対応',
        'サービスの改善、新サービスの開発',
        'キャンペーン、アンケートの実施',
      ]
    },
    {
      title: '個人情報の第三者提供',
      content: '当社は、法令に基づく場合を除き、本人の同意を得ることなく個人情報を第三者に提供することはありません。'
    },
    {
      title: '個人情報の安全管理',
      content: '当社は、個人情報の漏洩、滅失又は毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。'
    },
    {
      title: '開示請求等の手続き',
      content: '本人から個人情報の開示、訂正、削除等の請求があった場合、当社は合理的な期間内に対応いたします。'
    },
    {
      title: 'お問い合わせ窓口',
      content: [
        '個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：',
        '株式会社Lean Stack',
        '住所：大阪府大阪市中央区徳井町2丁目2-13 3F',
        'メール：info@leanstack-buzz.com'
      ]
    },
    {
      title: 'プライバシーポリシーの変更',
      content: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="サクッと勤怠" className="h-10" />
          </Link>
        </div>
        
        <div className="mb-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  ホーム
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-gray-500 md:ml-2">プライバシーポリシー</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">プライバシーポリシー</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            {policyData.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold mt-8 mb-4">{section.title}</h2>
                {typeof section.content === 'string' ? (
                  <p className="mb-4">{section.content}</p>
                ) : (
                  <ul className="list-disc pl-6 mb-6">
                    {section.content.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-10 text-right">
              <p>以上</p>
              <p>制定日：2025年5月1日</p>
              <p>株式会社Lean Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 