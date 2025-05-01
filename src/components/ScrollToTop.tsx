import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ページ遷移時に最上部にスクロールするコンポーネント
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // レイアウト計算前（DOMの変更前）に実行されるため、
  // 見た目上一瞬でもスクロールが起きる前にスクロール位置をリセットできる
  useLayoutEffect(() => {
    // 同期的に実行（レンダリング前）
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // 念のためuseEffect内でも実行（ブラウザ互換性のため）
  useEffect(() => {
    // 同期的に実行
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // イベントループの最初にも実行
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop; 