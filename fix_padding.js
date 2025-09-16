// 모든 활동 카드의 패딩과 마진을 통일하는 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // 모든 p-4를 p-2로 변경
    const p4Divs = document.querySelectorAll('div[class*="p-4"]');
    p4Divs.forEach(div => {
        div.className = div.className.replace('p-4', 'p-2');
    });
    
    // 모든 mb-2를 mb-1로 변경
    const mb2Images = document.querySelectorAll('img[class*="mb-2"]');
    mb2Images.forEach(img => {
        img.className = img.className.replace('mb-2', 'mb-1');
    });
    
    // 모든 text-sm을 text-base로 변경
    const textSmSpans = document.querySelectorAll('span[class*="text-sm"]');
    textSmSpans.forEach(span => {
        span.className = span.className.replace('text-sm', 'text-base');
    });
});