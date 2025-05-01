import React from 'react';
import { Link } from 'react-router-dom';

const Company: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="サクッと勤怠" className="h-10" />
          </Link>
        </div>
        
        <div className="mb-4">
          <Link to="/" className="text-primary-600 hover:text-primary-700 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            トップページに戻る
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">運営会社</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <table className="min-w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50 w-1/3">会社名</th>
                    <td className="py-3 px-4">株式会社サクッと勤怠</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">設立</th>
                    <td className="py-3 px-4">2020年4月1日</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">代表取締役</th>
                    <td className="py-3 px-4">山田 太郎</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">資本金</th>
                    <td className="py-3 px-4">1,000万円</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">所在地</th>
                    <td className="py-3 px-4">〒106-0032<br />東京都港区六本木1-1-1 六本木ヒルズ森タワー</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">事業内容</th>
                    <td className="py-3 px-4">
                      <ul className="list-disc pl-5 mb-0">
                        <li>勤怠管理システム「サクッと勤怠」の開発・運営</li>
                        <li>業務効率化ソリューションの提供</li>
                        <li>クラウドサービスの開発・運営</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">従業員数</th>
                    <td className="py-3 px-4">35名（2023年4月現在）</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">電話番号</th>
                    <td className="py-3 px-4">03-1234-5678</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">メールアドレス</th>
                    <td className="py-3 px-4">info@sakutto-kintai.co.jp</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mt-8 mb-4">企業理念</h2>
              <p className="mb-4">
                私たちは、「働くすべての人の時間を大切に」を企業理念に掲げ、シンプルで使いやすい勤怠管理システムを提供することで、企業の業務効率化と働く人々の生産性向上をサポートします。
              </p>
              <p className="mb-4">
                複雑な勤怠管理業務を簡素化し、企業と従業員の双方にとって価値のある時間の使い方を実現することが、私たちの使命です。テクノロジーの力で、人々がより創造的な仕事に集中できる環境づくりに貢献します。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mt-8 mb-4">沿革</h2>
              <table className="min-w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50 w-1/3">2020年4月</th>
                    <td className="py-3 px-4">株式会社サクッと勤怠 設立</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2020年9月</th>
                    <td className="py-3 px-4">勤怠管理システム「サクッと勤怠」βバージョンリリース</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2021年1月</th>
                    <td className="py-3 px-4">「サクッと勤怠」正式版リリース</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2021年7月</th>
                    <td className="py-3 px-4">シリーズAラウンドにて3億円の資金調達</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2022年2月</th>
                    <td className="py-3 px-4">導入企業数100社突破</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2022年10月</th>
                    <td className="py-3 px-4">スマートフォンアプリ版リリース</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">2023年3月</th>
                    <td className="py-3 px-4">導入企業数300社突破</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company; 