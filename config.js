// 環境設定：測試版與正式版只有這個檔案和 manifest.webmanifest 不同
var CONFIG = {
  env: 'dev', // 'dev' 時標題旁顯示 TEST
  appName: 'WHONEXT DEV', // iPhone 主畫面的名稱，與 manifest 的 short_name 相同

  // 測試版 GAS 的 /exec 網址
  api: 'https://script.google.com/macros/s/AKfycbwHGtpWl660Jf_YkABDARKGhjcCyGN2kC-9_t988E4uhcsHgxbjbuP-EnFmGQID2_8yRw/exec',

  // Firebase 主控台（whonext-bc-dev）→ 專案設定 → 一般 → 你的應用程式 → firebaseConfig
  firebase: {
    apiKey: 'AIzaSyCbeAI6wx4Jylfps2JHbttQRXh86xpoHp8',
    authDomain: 'whonext-bc-dev.firebaseapp.com',
    projectId: 'whonext-bc-dev',
    storageBucket: 'whonext-bc-dev.firebasestorage.app',
    messagingSenderId: '870804466450',
    appId: '1:870804466450:web:8d8cf1b5bda360a1f521cb'
  },

  // Firebase 主控台 → 專案設定 → Cloud Messaging → 網路推播憑證 → 金鑰組（公鑰）
  vapidKey: ''
};
