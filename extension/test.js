
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


// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 데이터를 출력할 영역 선택
const dataDisplay = document.getElementById('dataDisplay');

// 데이터 가져오기 및 출력
//const databaseRef = firebase.database().ref('312923444');
chrome.storage.sync.get(['extensionId'], function (result) {
  const extensionId = result.extensionId || 'ID가 없습니다.';
  const databaseRef = firebase.database().ref(extensionId);
  databaseRef.once('value')
  .then((snapshot) => {
      // 전체 데이터 가져오기
      const allData = snapshot.val();

      // 중복 값을 제거하고 순서 유지
      const uniqueValuesArray = Array.from(new Set(Object.values(allData).map(arr => arr[0])));
      const reversedArray = uniqueValuesArray.slice().reverse();
      // 데이터를 출력할 HTML 생성
      let htmlOutput = '<ul>';
      reversedArray.forEach((value) => {
          // HTML에 데이터 및 삭제 버튼 출력
          htmlOutput += `
              <li>
                  <span class="data-value">
                  ${value}
                  </span>
                  <button class="read-button" >X</button>
                  <br><br><br>
              </li>
          `;
      });
      htmlOutput += '</ul>';

      // 중복 제거 후의 유일한 값들을 화면에 출력
      dataDisplay.innerHTML = htmlOutput;
  })
  .catch((error) => {
      //console.error('데이터를 가져오는 중 오류 발생:', error);
  });
});



function deleteDataByValue(valueToDelete) {
    const databaseRef = firebase.database().ref();
    chrome.storage.sync.get(['extensionId'], function (result) {
      const extensionId = result.extensionId || 'ID가 없습니다.';
      // 해당 데이터 찾기
      databaseRef.orderByChild("312923444").once("value")
      .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
              const parentKey = childSnapshot.key;
              const childData = childSnapshot.val();

              // "아이묭 메리골드" 값을 가진 배열 찾기
              const updatedData = {};
              Object.keys(childData).forEach((timeKey) => {
                  const dataArray = childData[timeKey];
                  if (dataArray[0] !== valueToDelete) {
                      updatedData[timeKey] = dataArray;
                  }
              });

              // 찾은 데이터 업데이트
              firebase.database().ref().child(parentKey).set(updatedData)
                  .then(() => {
                      console.log(`데이터가 성공적으로 업데이트되었습니다. (Key: ${parentKey})`);
                      location.reload();
                  })
                  .catch((error) => {
                      console.error('데이터 업데이트 중 오류 발생:', error);
                  });
          });
      })
      .catch((error) => {
          console.error('데이터 검색 중 오류 발생:', error);
      });
      });
}

function readData(button) {
      var spanElement = button.previousElementSibling;
      if (spanElement && spanElement.classList.contains('data-value')) {
        var dataValue = spanElement.textContent.trim();
        console.log("Data Value: " + dataValue);
        deleteDataByValue(dataValue);
      }
    }

    // Callback function to handle mutations
    function handleMutations(mutationsList, observer) {
      mutationsList.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(addedNode) {
          if (addedNode.nodeType === 1 && addedNode.tagName === 'UL') {
            var buttons = addedNode.querySelectorAll('button');
            buttons.forEach(function(button) {
              button.addEventListener('click', function() {
                readData(this);
              });
            });
          }
        });
      });
    }

    // Create a MutationObserver with the callback
    var observer = new MutationObserver(handleMutations);

    // Target the UL element or any other parent element that will contain new UL elements
    var targetNode = document.body;

    // Configure the observer to watch for changes in child elements
    var config = { childList: true, subtree: true };

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);