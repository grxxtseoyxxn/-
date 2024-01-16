document.addEventListener('DOMContentLoaded', function() {
    // GitHub에서 이미지 URL을 가져오는 함수
    async function getImageUrl() {
        try {
            const response = await fetch('URL_이미지가_있는_웹페이지');
            const data = await response.json();
            return data.imageUrl;
        } catch (error) {
            console.error('에러 발생:', error);
            return null;
        }
    }

    // 이미지를 업데이트하는 함수
    async function updateImage() {
        const imageUrl = await getImageUrl();
        if (imageUrl) {
            document.getElementById('dynamicImage').src = imageUrl;
        }
    }

    // 초기에 이미지 업데이트
    updateImage();

    // 1분마다 이미지 업데이트
    setInterval(updateImage, 60000);
});
