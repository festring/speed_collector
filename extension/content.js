// let Id;
// chrome.storage.sync.get(['extensionId'], function (result) {
//     const extensionId = result.extensionId || 'ID가 없습니다.';
//     console.log(extensionId);
//     Id = extensionId;
//   });

let count = 0;

// 이전 값 저장 변수
let prevValue = convertTimeToSeconds(getCurrentTime());
// 페이지 내의 ytp-time-current 요소의 값을 초 단위로 변환하는 함수
function convertTimeToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':');
    return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
}

// 현재 페이지 내의 ytp-time-current 요소의 값을 가져오는 함수
function getCurrentTime() {
    const currentTimeElement = document.querySelector('.ytp-time-current');
    return currentTimeElement ? currentTimeElement.textContent.trim() : '0:00';
}

// 주기적으로 실행되는 함수
function checkTime() {
    // 현재 값 가져오기
    const currentTime = convertTimeToSeconds(getCurrentTime());

    // 이전 값과 비교하여 조건 확인
    if (currentTime < prevValue - 1 || currentTime > prevValue + 5) {
        count++;
        console.log(`Count: ${count}`);
    }

    // 이전 값 갱신
    prevValue = currentTime;
}



function loadScript(src, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    console.log('스크립트 로드 완료');
    document.body.appendChild(script);
}

// jQuery를 로드한 후에 Firebase 스크립트들을 순차적으로 로드
loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', function() {
    loadScript('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js', function() {
        loadScript('https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js', function() {
            // 모든 스크립트가 로드된 후에 실행될 코드
            console.log('모든 스크립트가 로드되었습니다.');
            firebase.initializeApp(firebaseConfig);

            var database = firebase.database();
        });
    });
});


const firebaseConfig = {
    apiKey: "AIzaSyADSMNsXqR9791fyFQZWskiM4mL9Vn5V9Y",
    authDomain: "videospeed-ff7bd.firebaseapp.com",
    databaseURL: "https://videospeed-ff7bd-default-rtdb.firebaseio.com",
    projectId: "videospeed-ff7bd",
    storageBucket: "videospeed-ff7bd.appspot.com",
    messagingSenderId: "975121058544",
    appId: "1:975121058544:web:8b533a51803eab1c1e9035",
    measurementId: "G-JF599PGRHT"
};


//const userId = Id;
function uploadDataToFirebase(data) {
    chrome.storage.sync.get(['extensionId'], function (result) {
        const extensionId = result.extensionId || 'ID가 없습니다.';
        // Firebase 데이터베이스 경로 설정
        const currentDateTime = new Date().toLocaleString();

        // 점(.)을 모두 제거
        const modifiedDateTime = currentDateTime.replace(/\./g, '');
        const databaseRef = firebase.database().ref(extensionId + '/' + modifiedDateTime + '/');


        // 데이터베이스에 데이터 업로드
        databaseRef.set(data)
            .then(() => {
                console.log('데이터가 성공적으로 업로드되었습니다.');
            })
            .catch((error) => {
                console.error('데이터 업로드 중 오류 발생:', error);
            });
        
      });

}


function get_api(url_id) {
 //   var script = document.createElement('script');
 //       script.type = 'text/javascript';

   //     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    //    document.body.appendChild(script);

    var playlist = url_id;
    $(document).ready(function () {
        $.get(
            "https://www.googleapis.com/youtube/v3/videos", {
                part: 'snippet',
                maxResults: 1, 
                id: playlist,
                key: 'AIzaSyCpY2gpHm3KZuS2pLQXjmZRMNHUF0cjrjA'
            },
            function (data) {
                var item = data.items[0];
                //console.log(item);
                vTitle = item.snippet.title;
                vTh = item.snippet.channelTitle;
                vCa = item.snippet.categoryId;
                output =  [vTitle  ,vTh  ,vCa];
                console.log(output);
                })
            }
        );
}

// URL 변화 감지 함수
function observeUrlChanges() {
    // 현재 URL 가져오기
    let currentUrl = window.location.href;

    // 정규 표현식을 사용하여 영상 ID 추출
    function extractVideoId(url) {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // URL이 변경될 때 실행되는 콜백 함수
    function handleUrlChange(mutationsList, observer) {
        const newUrl = window.location.href;

        // URL이 변경되었는지 확인
        if (currentUrl !== newUrl) {
            currentUrl = newUrl;
            
            // 변경된 URL에서 영상 ID 추출
            const videoId = extractVideoId(newUrl);

            // 영상 ID 출력
            if (videoId) {
                console.log('Video ID:', videoId);
                get_api(videoId);
            } else {
                console.log('Not a valid YouTube video URL.');
            }
        }
    }

    // MutationObserver 생성
    const observer = new MutationObserver(handleUrlChange);

    // body 요소 관찰 설정
    observer.observe(document.body, { subtree: true, childList: true });
}

// observeUrlChanges 함수 호출
observeUrlChanges();

// 설정 버튼을 클릭하는 함수
function clickSettingsButton() {
    var settingsButton = document.querySelector('.ytp-button.ytp-settings-button');

    // 설정 버튼이 존재하면 두 번 클릭 (0.1초의 지연 포함)
    if (settingsButton) {
        settingsButton.click();
        settingsButton.click();
    }
}

// URL 변화 감지 함수
function watchUrlChange() {
    // 이전 URL을 저장할 변수
    let previousUrl = window.location.href;

    // URL이 변경되었는지 확인
    setInterval(function() {
        // 현재 URL
        const currentUrl = window.location.href;

        // URL이 변경되었는지 확인하고, "https://www.youtube.com/watch"가 포함되어 있을 때만 처리
        if (currentUrl !== previousUrl && currentUrl.includes('https://www.youtube.com/watch')) {
            // URL이 변경된 경우
            console.log('YouTube 동영상 페이지 URL이 변경되었습니다.');
			console.log()
			// 초기 카운트 값
			count = 0;

			// 이전 값 저장 변수
			prevValue = convertTimeToSeconds(getCurrentTime());
			setInterval(checkTime, 1000);
            // 변경된 URL을 이전 URL로 업데이트
            previousUrl = currentUrl;

            // 여기에서 URL에 대한 특정 작업 수행
            //extractVideoInfo(currentUrl);
            clickSettingsButton();
            setTimeout(function() {
                const infoList = extractVideoInfo();
				result_plz=output.concat(infoList);
                console.log(result_plz);
                uploadDataToFirebase(result_plz);
            }, 800);
            
            
        }
    }, 1000);
}
function extractVideoInfo() {
	//현재시간
	const currentTime = new Date().toLocaleTimeString();
	//영상 길이
	const durationElement = document.querySelector('.ytp-time-duration');
	const durationText = durationElement ? durationElement.textContent : '';
	//영상 현재 시점
	const currentElement = document.querySelector('.ytp-time-current');
	const currentText = currentElement ? currentElement.textContent : '';
	const infoList = [currentTime, durationText, currentText,count];
	//배속정보
	var menuItems = document.querySelectorAll('.ytp-menuitem-content');
	var validValues = ['보통', '0.25', '0.5', '0.75', '1.25', '1.5','1.75', '2'];
	menuItems.forEach(function(item) {
		var itemContent_temp = item.textContent;
		if (validValues.includes(itemContent_temp)) {
			infoList.push(itemContent_temp);
			}
	});
	return infoList;
}

watchUrlChange();



function checkForClassChanges(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const targetElement = mutation.target;
        const classList = targetElement.classList;
  
        if (classList.contains('ytp-settings-shown')) {
          if (!targetElement.dataset.ytpSettingsShown) {
            //console.log("클래스에 ytp-settings-shown이 포함되어 있습니다.");
            targetElement.dataset.ytpSettingsShown = 'true'; 
          }
        } else {
          if (targetElement.dataset.ytpSettingsShown) {
            //console.log("클래스에 ytp-settings-shown이 제거되었습니다.");
            delete targetElement.dataset.ytpSettingsShown; 
              const videoInfo = extractVideoInfo();
                result_plz=output.concat(videoInfo);
                  console.log(result_plz);
                  uploadDataToFirebase(result_plz);

              }
          }
          }
      }
  }
    
  // MutationObserver를 생성하고 대상 엘리먼트를 선택
  const targetElement = document.body;
  const observerOptions = { attributes: true, subtree: true, attributeFilter: ['class'] };
  const mutationObserver = new MutationObserver(checkForClassChanges);
  
  // MutationObserver를 시작
  mutationObserver.observe(targetElement, observerOptions);


// 이벤트 리스너 함수
function handleKeyPress(event) {
    // 이벤트 객체에서 키 코드 가져오기
    const keyCode = event.keyCode || event.which;

    // 특정 키 코드에 대한 조건 확인
    if (event.shiftKey && keyCode === 190) {
        // Shift + . (period) 키가 눌렸을 때 실행할 코드
        console.log('Shift + . key pressed');
        // 여기에 원하는 동작을 추가하세요.
		const videoInfo = extractVideoInfo();
		result_plz=output.concat(videoInfo);
		  console.log(result_plz);
          uploadDataToFirebase(result_plz);

	  
    } else if (event.shiftKey && keyCode === 188) {
        // Shift + , (comma) 키가 눌렸을 때 실행할 코드
        console.log('Shift + , key pressed');
        // 여기에 원하는 동작을 추가하세요.
		const videoInfo = extractVideoInfo();
		result_plz=output.concat(videoInfo);
		  console.log(result_plz);
          uploadDataToFirebase(result_plz);

	  
	}
}

// 페이지 전체에 이벤트 리스너 등록
document.addEventListener('keydown', handleKeyPress);