// 要怎樣讓贊助的按鈕滑到某個位置就消失，是這次研究最久的地方，本來想用 z-index 去蓋，但因為 HTML 結構的關係雖然蓋過去背景還是會顯示，最後用 js 去處理

const bottomSponserBtn = document.querySelector('#bottomSponserBtn');
const hideSponserBtnSection = document.querySelector('#hideSponserBtnSection');

window.addEventListener("scroll", function(){  
   const st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st < hideSponserBtnSection.offsetTop-360){
        bottomSponserBtn.style.display = "inline-block";
   } else {
        bottomSponserBtn.style.display = "none";
   }
}, false);