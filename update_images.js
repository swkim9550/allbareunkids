// 이미지 크기를 업데이트하는 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // 모든 activity-image 클래스를 가진 이미지 찾기
    const images = document.querySelectorAll('.activity-image');
    
    images.forEach(img => {
        // 기존 클래스에서 w-24 h-24를 w-32 h-32로 변경
        img.className = img.className.replace('w-24 h-24', 'w-32 h-32');
        img.className = img.className.replace('mb-2', 'mb-3');
        
        // 이미지를 image-glow div로 감싸기
        if (!img.parentElement.classList.contains('image-glow')) {
            const glowDiv = document.createElement('div');
            glowDiv.className = 'image-glow';
            img.parentNode.insertBefore(glowDiv, img);
            glowDiv.appendChild(img);
        }
    });
    
    // 모든 텍스트를 font-bold로 변경
    const spans = document.querySelectorAll('.activity-card span');
    spans.forEach(span => {
        span.className = span.className.replace('font-medium', 'font-bold');
    });
});