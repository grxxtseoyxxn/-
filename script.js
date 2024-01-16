document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.querySelector('img');

    function updateImage() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
        const currentHour = currentDate.getHours();

        // 월요일 7시에 첫 번째 이미지, 그 외에는 두 번째 이미지
        const imageUrl = (currentDay === 1 && currentHour === 7) ?
            'monday_image.jpg' :
            'other_days_image.jpg';

        imageElement.src = imageUrl;
    }

    // 초기에 이미지 업데이트
    updateImage();

    // 1분마다 이미지 업데이트
    setInterval(updateImage, 60000);
});

