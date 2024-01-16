document.addEventListener('DOMContentLoaded', function() {
    // GitHub에서 이미지 URL을 가져오는 함수
    async function getImageUrl() {
        try {
            const response = await fetch('https://images.beta.cosmos.so/6b66af99-9aca-4502-9fde-bbb6a330bf56?format=jpeg');
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
