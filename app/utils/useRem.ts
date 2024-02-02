
import { useState, useEffect } from 'react';

function useRem() {
  const [rem, setRem] = useState(100); // 初始化 rem 值  
  useEffect(() => {
    const handleResize = () => {
      setRem(window.innerWidth / 750); // 根据窗口宽度计算 rem 值  
    };
    window.addEventListener('resize', handleResize); // 添加窗口大小变化监听器  
    return () => {
      window.removeEventListener('resize', handleResize); // 移除监听器  
    };
  }, []); // 在组件卸载时清除监听器  
  return rem;
}

export default useRem