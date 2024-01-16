document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('dynamicImage');

    function getCurrentImage() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
        const currentHour = currentDate.getHours();

        // 월요일 7시에 첫 번째 이미지, 그 외에는 두 번째 이미지
        if (currentDay === 1 && currentHour === 7) {
            return 'https://images.beta.cosmos.so/6b66af99-9aca-4502-9fde-bbb6a330bf56?format=jpeg';
        } else {
            return 'https://images.beta.cosmos.so/f83f1dca-8f87-4e29-8aaf-195dbdde2c7e?format=jpeg';
        }
    }

    function updateImage() {
        const imageUrl = getCurrentImage();
        imageElement.src = imageUrl;
    }

    // 초기에 이미지 업데이트
    updateImage();

    // 1분마다 이미지 업데이트
    setInterval(updateImage, 60000);
});

