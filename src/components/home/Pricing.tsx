import React from 'react';
import { Plus } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="price" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-[#0072ef] mb-4">PRICE</h2>
          <div className="w-20 h-[1px] bg-[#0072ef] mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            料金
          </h3>
          
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-lg text-gray-700 mb-2">
              ご利用人数に応じた費用でシンプルな料金体系をご用意しています。
            </p>
            <p className="text-lg text-gray-700">
              オプションなどの追加費用はなく、はじめから全ての機能をご利用いただけます。
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-16">
          {/* 初期費用 */}
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="border border-[#0072ef] rounded-lg p-8 text-center shadow-sm">
              <div className="bg-gray-100 rounded-full inline-block px-8 py-2 mb-6">
                <span className="font-medium text-gray-700">初期費用</span>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-[#0072ef] font-bold text-4xl mb-2">
                  ５万円
                </div>
                <div className="text-gray-600 text-lg">
                  （税込）
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <Plus size={48} className="text-gray-400" />
          </div>
          
          {/* 月額費用 */}
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="border border-[#0072ef] rounded-lg p-8 text-center shadow-sm">
              <div className="bg-gray-100 rounded-full inline-block px-8 py-2 mb-6">
                <span className="font-medium text-gray-700">月額費用</span>
              </div>
              
              <div className="text-center">
                <div className="text-gray-700 font-medium mb-2">ご利用人数に応じて</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">1〜10人</span>
                    <span className="text-[#0072ef] font-bold">10,000円（税込）</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">11〜30人</span>
                    <span className="text-[#0072ef] font-bold">30,000円（税込）</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">31〜50人</span>
                    <span className="text-[#0072ef] font-bold">50,000円（税込）</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">51人以上</span>
                    <span className="text-[#0072ef] font-bold">100,000円（税込）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 