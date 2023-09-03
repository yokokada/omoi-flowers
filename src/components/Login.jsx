import React, { useEffect } from 'react';
import firebase from './FirebaseClient';
import * as firebaseui from 'firebaseui';

const Login = () => {
    useEffect(() => {
        // FirebaseUI config
        const uiConfig = {
            signInSuccessUrl: '/', // ログイン後にリダイレクトするURL
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        };

        // FirebaseUIのインスタンス初期化
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

        // FirebaseUIウィジェットの開始
        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <div id="firebaseui-auth-container"></div>
        </div>
    );
};

export default Login;
