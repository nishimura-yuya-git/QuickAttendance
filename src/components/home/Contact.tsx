import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-subtitle">
            サービスについてのご質問や資料請求は、こちらからお問い合わせください
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">メール</h3>
            <p className="text-gray-600 mb-4">営業時間: 平日 9:00-18:00</p>
            <a href="mailto:info@sakutto-kintai.jp" className="text-primary-500 hover:underline">
              info@sakutto-kintai.jp
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">電話</h3>
            <p className="text-gray-600 mb-4">営業時間: 平日 10:00-17:00</p>
            <a href="tel:0312345678" className="text-primary-500 hover:underline">
              03-1234-5678
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">チャット</h3>
            <p className="text-gray-600 mb-4">営業時間: 平日 9:00-18:00</p>
            <button className="text-primary-500 hover:underline">
              チャットを開始
            </button>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">お問い合わせフォーム</h3>
          <form className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-gray-700">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="inquiry" className="block mb-2 font-medium text-gray-700">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="inquiry"
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-gray-700">
                  <a href="#" className="text-primary-500 hover:underline">プライバシーポリシー</a>に同意します
                </label>
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-8 py-3"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 