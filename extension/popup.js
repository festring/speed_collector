// popup.js

// 저장된 ID를 가져와서 팝업 HTML에 표시
chrome.storage.sync.get(['extensionId'], function (result) {
    const extensionId = result.extensionId || 'ID가 없습니다.';
    document.getElementById('extensionId').textContent = "참가자님의 ID: "+extensionId;
  });
  
