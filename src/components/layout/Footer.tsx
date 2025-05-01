import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // ページトップへスクロールする関数
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    // 先にスクロール処理を行う
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 次にナビゲーション処理
    navigate(path);
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <div className="mb-6">
              <img src="/logo.png" alt="サクッと勤怠" className="h-12" />
              <p className="text-sm text-gray-600 mt-2">一番シンプルで簡単な勤怠管理システム</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gray-800 font-medium mb-4">メニュー</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>課題と解決</a></li>
                  <li><a href="#feature-benefits" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>導入メリット</a></li>
                  <li><a href="#voice" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>導入事例</a></li>
                  <li><a href="#functions" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>機能一覧</a></li>
                  <li><a href="#price" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>料金プラン</a></li>
                  <li><a href="#faq" className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>よくある質問</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-800 font-medium mb-4">法的情報</h4>
                <ul className="space-y-2">
                  <li><a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>プライバシーポリシー</a></li>
                  <li><a href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')} className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>利用規約</a></li>
                  <li><a href="/commercial-transactions" onClick={(e) => handleLinkClick(e, '/commercial-transactions')} className="text-gray-600 hover:text-primary-600 text-sm flex items-center"><span className="mr-2">›</span>特定商取引法に基づく表記</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6 md:mb-0">
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} サクッと勤怠 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 