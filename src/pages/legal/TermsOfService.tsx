import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
                  <span className="ml-1 text-gray-500 md:ml-2">利用規約</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">利用規約</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              この利用規約（以下「本規約」といいます）は、株式会社サクッと勤怠（以下「当社」といいます）が提供する勤怠管理サービス「サクッと勤怠」（以下「本サービス」といいます）の利用条件を定めるものです。本サービスの利用者（以下「ユーザー」といいます）は、本規約に同意した上で本サービスを利用するものとします。
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">第1条（適用）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
              <li className="mb-2">当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
              <li>本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めがない限り、個別規定の規定が優先されるものとします。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第2条（利用登録）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
              <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                <ol className="list-decimal pl-6 mt-2">
                  <li className="mb-2">利用登録の申請に際して虚偽の事項を届け出た場合</li>
                  <li className="mb-2">本規約に違反したことがある者からの申請である場合</li>
                  <li className="mb-2">その他、当社が利用登録を相当でないと判断した場合</li>
                </ol>
              </li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
              <li className="mb-2">ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
              <li>ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第4条（利用料金および支払方法）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。</li>
              <li>ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6%の割合による遅延損害金を支払うものとします。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第5条（禁止事項）</h2>
            <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">法令または公序良俗に違反する行為</li>
              <li className="mb-2">犯罪行為に関連する行為</li>
              <li className="mb-2">本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
              <li className="mb-2">当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li className="mb-2">本サービスによって得られた情報を商業的に利用する行為</li>
              <li className="mb-2">当社のサービスの運営を妨害するおそれのある行為</li>
              <li className="mb-2">不正アクセスをし、またはこれを試みる行為</li>
              <li className="mb-2">他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li className="mb-2">不正な目的を持って本サービスを利用する行為</li>
              <li className="mb-2">本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li className="mb-2">他のユーザーに成りすます行為</li>
              <li className="mb-2">当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li className="mb-2">面識のない異性との出会いを目的とした行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第6条（本サービスの提供の停止等）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ol className="list-decimal pl-6 mt-2">
                  <li className="mb-2">本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li className="mb-2">地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li className="mb-2">コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ol>
              </li>
              <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第7条（利用制限および登録抹消）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                <ol className="list-decimal pl-6 mt-2">
                  <li className="mb-2">本規約のいずれかの条項に違反した場合</li>
                  <li className="mb-2">登録事項に虚偽の事実があることが判明した場合</li>
                  <li className="mb-2">料金等の支払債務の不履行があった場合</li>
                  <li className="mb-2">当社からの連絡に対し、一定期間返答がない場合</li>
                  <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                  <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                </ol>
              </li>
              <li>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第8条（退会）</h2>
            <p className="mb-4">ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">第9条（保証の否認および免責事項）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
              <li className="mb-2">当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
              <li>前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。</li>
              <li>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第10条（サービス内容の変更等）</h2>
            <p className="mb-4">当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">第11条（利用規約の変更）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</li>
            </ol>

            <h2 className="text-xl font-bold mt-8 mb-4">第12条（個人情報の取扱い）</h2>
            <p className="mb-4">当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">第13条（通知または連絡）</h2>
            <p className="mb-4">ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">第14条（権利義務の譲渡の禁止）</h2>
            <p className="mb-4">ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">第15条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>

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

export default TermsOfService; 