// firebaseをインポート
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
    const config = {
        // vercelの環境変数から取得
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
        projectId: "omoi-flowers",
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID 
    };
    firebase.initializeApp(config);
    
}

export default firebase;
