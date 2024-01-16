document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('dynamicImage');

    function updateImage() {
        const currentDate = new Date();
        const koreanDateString = currentDate.toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
        console.log('현재 한국 시간: ', koreanDateString);

        const currentDay = currentDate.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        
        let imageUrl;

        // 월, 수, 금, 일요일에 다른 이미지 표시
        if ([1, 3, 5, 0].includes(currentDay)) {
            // 오전 7시부터 오전 8시 30분까지
            if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 30) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/wake_up.jpg.png';
            }
            // 오전 8시 30분부터 오전 10시까지
            else if (currentHour === 8 && currentMinute >= 30 && currentHour <= 59) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_1.jpg.png';
            }
            // 오전 10시부터 오전 10시 15분까지            
            else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오전 10시 15분부터 오후 12시까지
            else if (currentHour === 10 && (currentMinute >= 15 && currentHour < 12)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_2.jpg.png';
            }
            // 오후 12시부터 오후 1시까지
            else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/meal.jpg.png';
            }
            // 오후 1시부터 오후 2시 30분까지
            else if (currentHour === 13 && currentMinute >= 0 && currentMinute <= 30) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_3.jpg.png';
            }
            // 오후 2시 30분부터 오후 2시 45분까지            
            else if (currentHour === 14 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 2시 45분부터 오후 4시 15분까지            
            else if ((currentHour === 14 && currentMinute >= 45) || (currentHour === 15 && currentMinute <= 15)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_4.jpg.png';
            }
            // 오후 4시 15분부터 오후 4시 30분까지            
            else if (currentHour === 16 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 4시 30분부터 오후 6시까지            
            else if ((currentHour === 16 && currentMinute >= 30) || (currentHour > 16 && currentHour < 18)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_5.jpg.png';
            }
            // 오후 6시부터 오후 7시까지
            else if (currentHour === 18 && currentMinute >= 0 && currentMinute <= 59) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/meal.jpg.png';
            }
            // 오후 7시부터 오후 8시 30분까지
            else if (currentHour === 19 && currentMinute >= 0 && currentMinute <= 30) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_6.jpg.png';
            }
            // 오후 8시 30분부터 오후 8시 45분까지
            else if (currentHour === 20 && currentMinute >= 30 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 8시 45분부터 오후 10시까지
            else if ((currentHour === 20 && currentMinute >= 45) || (currentHour === 21)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_7.jpg.png';
            }
            // 오후 10시부터 다음날 오전 7시까지
            else if ((currentHour >= 22) || (currentHour >= 0 && currentHour < 7)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/sleep.jpg.png';
            }  
            else {
                imageUrl = 'https://github.com/github.com/grxxtseoyxxn/notion/raw/main/sleep_image.jpg'; // 기본 이미지
            }
        } else if ([2, 4].includes(currentDay)) { // 화, 목요일에 다른 이미지 표시
            // 오전 7시부터 오전 8시 30분까지
            if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 30) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/wake_up.jpg.png';
            }
            // 오전 8시 30분부터 오전 10시까지
            else if (currentHour === 8 && currentMinute >= 30 && currentHour <= 59) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_1.jpg.png';
            }
            // 오전 10시부터 오전 10시 15분까지            
            else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오전 10시 15분부터 오후 12시까지
            else if (currentHour === 10 && (currentMinute >= 15 && currentHour < 12)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_2.jpg.png';
            }
            // 오후 12시부터 오후 1시까지
            else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/meal.jpg.png';
            }
            // 오후 1시부터 오후 2시 30분까지            
            else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 2시 30분부터 오후 2시 45분까지            
            else if (currentHour === 14 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 2시 45분부터 오후 4시 15분까지            
            else if ((currentHour === 14 && currentMinute >= 45) || (currentHour === 15 && currentMinute <= 15)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_4.jpg.png?timestamp=${new Date().getTime()';
            }
            // 오후 4시 15분부터 오후 4시 30분까지            
            else if (currentHour === 16 && currentMinute >= 0 && currentMinute <= 15) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
            }
            // 오후 4시 30분부터 오후 6시까지            
            else if ((currentHour === 16 && currentMinute >= 30) || (currentHour > 16 && currentHour < 18)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/study_5.jpg.png';
            }
            // 오후 6시부터 오후 8시까지            
            else if (currentHour >= 18 && currentHour < 20) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/siwm.jpg.png';
            }
            // 오후 8시부터 오전 7시까지            
            else if ((currentHour >= 20) || (currentHour >= 0 && currentHour < 7)) {
                imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/siwm.jpg.png';
            }
        } else if (currentDay === 6) { // 토요일에는 항상 rest time 이미지 표시
            imageUrl = 'https://github.com/github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
        }
        // imageUrl이 정의되지 않은 경우 기본 이미지로 설정
        if (!imageUrl) {
            imageUrl = 'https://github.com/grxxtseoyxxn/notion/raw/main/rest_time.jpg.png';
        }
        imageElement.src = imageUrl;
    }

    // 초기에 이미지 업데이트
    updateImage();

    // 1분마다 이미지 업데이트
    setInterval(updateImage, 60000);
});
