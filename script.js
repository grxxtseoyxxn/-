document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('dynamicImage');

    function updateImage() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();

        let imageUrl;

        // 월, 수, 금, 일
        if (currentDay === 1 || currentDay === 3 || currentDay === 5 || currentDay === 0) {
            if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 29) {
                imageUrl = 'wake_up.jpg.png';
            } else if (currentHour === 8 && currentMinute >= 30 && currentMinute <= 59) {
                imageUrl = 'study_1.jpg.png';
            } else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 14) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 10 && currentMinute >= 15 && currentHour === 11 && currentMinute <= 59) {
                imageUrl = 'study_2.jpg.png';
            } else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
                imageUrl = 'meal.jpg.png';
            } else if (currentHour === 13 && currentMinute >= 0 && currentHour === 14 && currentMinute <= 29) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 14 && currentMinute >= 30 && currentHour === 14 && currentMinute <= 44) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 14 && currentMinute >= 45 && currentHour === 16 && currentMinute <= 14) {
                imageUrl = 'study_3.jpg.png';
            } else if (currentHour === 16 && currentMinute >= 15 && currentHour === 16 && currentMinute <= 29) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 16 && currentMinute >= 30 && currentHour === 18 && currentMinute <= 59) {
                imageUrl = 'study_4.jpg.png';
            } else if (currentHour === 18 && currentMinute >= 0 && currentHour === 18 && currentMinute <= 59) {
                imageUrl = 'meal.jpg.png';
            } else if (currentHour === 19 && currentMinute >= 0 && currentHour === 20 && currentMinute <= 29) {
                imageUrl = 'study_5.jpg.png';
            } else if (currentHour === 20 && currentMinute >= 30 && currentHour === 20 && currentMinute <= 44) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 20 && currentMinute >= 45 && currentHour === 22 && currentMinute <= 59) {
                imageUrl = 'study_6.jpg.png';
            } else {
                imageUrl = 'sleep.jpg.png';
            }
        }
        // 화, 목
        else if (currentDay === 2 || currentDay === 4) {
            if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 29) {
                imageUrl = 'wake_up.jpg.png';
            } else if (currentHour === 8 && currentMinute >= 30 && currentMinute <= 59) {
                imageUrl = 'study_1.jpg.png';
            } else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 14) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 10 && currentMinute >= 15 && currentHour === 11 && currentMinute <= 59) {
                imageUrl = 'study_2.jpg.png';
            } else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
                imageUrl = 'meal.jpg.png';
            } else if (currentHour === 13 && currentMinute >= 0 && currentHour === 14 && currentMinute <= 29) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 14 && currentMinute >= 30 && currentHour === 14 && currentMinute <= 44) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 14 && currentMinute >= 45 && currentHour === 16 && currentMinute <= 14) {
                imageUrl = 'study_3.jpg.png';
            } else if (currentHour === 16 && currentMinute >= 15 && currentHour === 16 && currentMinute <= 29) {
                imageUrl = 'rest_time.jpg.png';
            } else if (currentHour === 16 && currentMinute >= 30 && currentHour === 18 && currentMinute <= 59) {
                imageUrl = 'study_4.jpg.png';
            } else if (currentHour === 18 && currentMinute >= 0 && currentHour === 18 && currentMinute <= 59) {
                imageUrl = 'swim.jpg.png';
            } else {
                imageUrl = 'sleep.jpg.png';
            }
        }
        // 토
        else if (currentDay === 6) {
            imageUrl = 'rest_time.jpg.png';
        }
        imageElement.src = imageUrl;
    }

    // 초기에 이미지 업데이트
    updateImage();

    // 1분마다 이미지 업데이트
    setInterval(updateImage, 60000);
});
