'use client'

import { useState } from 'react'

function useRem(): number[] {
  const [clientWidth, setClientWidth] = useState(100)

  var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 1920) {
        setClientWidth(100)
      }
      else {
        setClientWidth(100 * (clientWidth / 1920))
      }
    };
  if (!document.addEventListener) return [clientWidth];
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);

  return [clientWidth]
}

export default useRem