import { useState } from 'react';
import { X } from 'lucide-react';
import { FaLine } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="container py-5 flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="サクッと勤怠" className="h-12" />
            </a>
          </div>

          {/* PCナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#features" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
              課題と解決
            </a>
            <a 
              href="#feature-benefits" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
              導入メリット
            </a>
            {/* <a 
              href="#voice" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
              導入事例
            </a> */}
            <a 
              href="#functions" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
              機能一覧
            </a>
            <a 
              href="#price" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
              料金プラン
            </a>
            <a 
              href="#faq" 
              className="font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm tracking-wide"
              onClick={handleSmoothScroll}
            >
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
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                課題と解決
              </a>
              <a 
                href="#feature-benefits" 
                className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                導入メリット
              </a>
              <a 
                href="#voice" 
                className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                導入事例
              </a>
              <a 
                href="#functions" 
                className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                機能一覧
              </a>
              <a 
                href="#price" 
                className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                料金プラン
              </a>
              <a 
                href="#faq" 
                className="font-semibold text-gray-800 hover:text-primary-600 transition-colors px-2 py-1.5 text-base"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
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

      {/* LINE無料カウンセリングボタン - 右側に固定表示 */}
      <div className="fixed right-0 bottom-24 z-50">
        <a 
          href="https://lin.ee/gOTEXulG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <div className="bg-[#06c755] hover:bg-[#05b54c] text-white rounded-l-[10px] flex items-center shadow-lg transition-all duration-300">
            <div className="py-5 px-4 border-r border-white/20 flex items-center justify-center">
              <FaLine size={24} />
            </div>
            <div className="py-3 px-5 text-center text-sm font-medium whitespace-nowrap tracking-wide">
              LINE<br />無料<br />カウンセリング
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Header; 