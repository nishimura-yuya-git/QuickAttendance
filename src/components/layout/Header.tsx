import { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container py-5 flex items-center justify-between">
        {/* ロゴ */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="サクッと勤怠" className="h-12" />
          </a>
        </div>

        {/* PCナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            課題と解決
          </a>
          <a href="#feature-benefits" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            導入メリット
          </a>
          <a href="#voice" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            導入事例
          </a>
          <a href="#functions" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            機能一覧
          </a>
          <a href="#price" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            料金プラン
          </a>
          <a href="#faq" className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide">
            よくある質問
          </a>
          {/* <a 
            href="https://welfare-attendance.vercel.app/shift" 
            className="bg-primary-600 hover:bg-primary-700 text-white py-2.5 px-6 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md text-sm tracking-wide"
            target="_blank" 
            rel="noopener noreferrer"
          >
            お問い合わせ
          </a> */}
        </nav>

        {/* モバイルメニューボタン - スマホ表示のみ */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none group p-3.5 rounded-full border border-gray-200 hover:border-primary-600 hover:shadow-sm transition-all duration-300 bg-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
            style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isMenuOpen ? (
              <X size={18} className="text-primary-600" />
            ) : (
              <div className="w-5 h-5 flex flex-col items-center justify-center gap-[5px] group-hover:gap-1 transition-all duration-300">
                <span className="w-4 h-[1px] bg-gray-700 group-hover:bg-primary-600 rounded-full block group-hover:w-5 transition-all duration-300"></span>
                <span className="w-5 h-[1px] bg-gray-700 group-hover:bg-primary-600 rounded-full block transition-all duration-300"></span>
                <span className="w-4 h-[1px] bg-gray-700 group-hover:bg-primary-600 rounded-full block group-hover:w-3.5 transition-all duration-300"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="container py-5 flex flex-col space-y-5">
            <a 
              href="#features" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              課題と解決
            </a>
            <a 
              href="#feature-benefits" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              導入メリット
            </a>
            <a 
              href="#voice" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </a>
            <a 
              href="#functions" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              機能一覧
            </a>
            <a 
              href="#price" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              料金プラン
            </a>
            <a 
              href="#faq" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </a>
            {/* <a 
              href="https://welfare-attendance.vercel.app/shift" 
              className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-5 rounded-lg font-bold transition-all duration-300 text-center shadow-sm"
              target="_blank" 
              rel="noopener noreferrer"
            >
              お問い合わせ
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 