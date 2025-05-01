import React from 'react';
import { Link } from 'react-router-dom';

const CommercialTransactions: React.FC = () => {
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
                  <span className="ml-1 text-gray-500 md:ml-2">特定商取引法に基づく表記</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">特定商取引法に基づく表記</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <table className="min-w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50 w-1/3">事業者名</th>
                    <td className="py-3 px-4">株式会社サクッと勤怠</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">代表者名</th>
                    <td className="py-3 px-4">山田 太郎</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">所在地</th>
                    <td className="py-3 px-4">〒100-0001<br />東京都千代田区千代田1-1<br />千代田ビル10階</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">電話番号</th>
                    <td className="py-3 px-4">03-1234-5678（平日 10:00〜17:00）</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">メールアドレス</th>
                    <td className="py-3 px-4">info@sakutto-kintai.jp</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">URL</th>
                    <td className="py-3 px-4">https://sakutto-kintai.jp</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">商品の名称</th>
                    <td className="py-3 px-4">勤怠管理システム「サクッと勤怠」</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">販売価格</th>
                    <td className="py-3 px-4">
                      <p className="mb-2">【初期費用】<br />50,000円（税込）</p>
                      <p>【月額費用】<br />
                      ・1〜10名：10,000円（税込）<br />
                      ・11〜30名：30,000円（税込）<br />
                      ・31〜50名：50,000円（税込）<br />
                      ・51名以上：100,000円（税込）
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">商品代金以外の必要料金</th>
                    <td className="py-3 px-4">なし</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">支払方法</th>
                    <td className="py-3 px-4">クレジットカード決済、銀行振込</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">支払時期</th>
                    <td className="py-3 px-4">
                      <p className="mb-2">【初期費用】<br />契約時一括払い</p>
                      <p>【月額費用】<br />毎月1日～末日までの利用分を当月末日締めとし、翌月10日までにお支払いいただきます。</p>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">引渡時期</th>
                    <td className="py-3 px-4">お申込み完了後、3営業日以内にアカウント情報をお送りします。</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">契約期間</th>
                    <td className="py-3 px-4">1ヶ月単位の自動更新</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">返品・キャンセルについて</th>
                    <td className="py-3 px-4">システムの性質上、申込後のキャンセル・返金はお受けできません。</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-gray-50">解約条件</th>
                    <td className="py-3 px-4">解約希望月の前月末日までに、管理画面から解約申請を行っていただくか、メールにてご連絡ください。</td>
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

export default CommercialTransactions; 