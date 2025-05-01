import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-800 py-16">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            お力になれることはありますか？
          </h2>
          <p className="text-white text-lg mb-10">
            サービスのご質問、導入のご相談など、お気軽にお問い合わせください。
          </p>
          
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full text-lg transition-colors"
            >
              ご相談・お問い合わせ
            </a>
            <a 
              href="#download" 
              className="bg-transparent text-white border border-white hover:bg-blue-700 font-medium py-3 px-8 rounded-full text-lg transition-colors"
            >
              資料ダウンロード
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTA; 