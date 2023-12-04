// background.js

// 확장 프로그램이 처음 설치될 때 실행되는 이벤트 리스너
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') {
      // 랜덤 ID 생성
      const randomId = generateRandomId();
  
      // 생성된 ID를 저장
      chrome.storage.sync.set({ extensionId: randomId }, function () {
        console.log('Extension ID saved:', randomId);
      });
    }
  });
  
  // 랜덤 ID를 생성하는 함수
  function generateRandomId() {
    return Math.random().toString(36).substr(2, 10);
  }
  