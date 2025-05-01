import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
            <p className="mb-6">
              株式会社サクッと勤怠（以下、「当社」といいます）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第1条（個人情報）</h2>
            <p className="mb-4">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第2条（個人情報の収集方法）</h2>
            <p className="mb-4">
              当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます）などから収集することがあります。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h2>
            <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">当社サービスの提供・運営のため</li>
              <li className="mb-2">ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li className="mb-2">ユーザーに対して、メールマガジンやご案内など、有益だと思われる情報を提供するため</li>
              <li className="mb-2">メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li className="mb-2">利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
              <li className="mb-2">ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
              <li className="mb-2">有料サービスにおいて、ユーザーに利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第4条（個人情報の第三者提供）</h2>
            <p className="mb-4">
              当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li className="mb-2">公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li className="mb-2">国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第5条（個人情報の開示）</h2>
            <p className="mb-4">
              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
              <li className="mb-2">当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>その他法令に違反することとなる場合</li>
            </ol>
            <p className="mb-4">
              前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第6条（個人情報の訂正および削除）</h2>
            <p className="mb-4">
              ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます）を請求することができます。
            </p>
            <p className="mb-4">
              当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
            </p>
            <p className="mb-4">
              当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第7条（プライバシーポリシーの変更）</h2>
            <p className="mb-4">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
            </p>
            <p className="mb-4">
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>

            <div className="mt-10 text-right">
              <p>以上</p>
              <p>制定日：2023年4月1日</p>
              <p>株式会社サクッと勤怠</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 