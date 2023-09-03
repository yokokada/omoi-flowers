import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';  // 忘れずにインポートしてください
import ClickHistory from './ClickHistory';  // ClickHistoryをインポート

const AnimationComponent = () => {
// ーーーーーー最初の状態をuseStateで定義ーーーーーーーーーーーーーーーーーーーー
    const [image, setImage] = useState('0.png');
    const [count, setCount] = useState(0);
    const [clickHistory, setClickHistory] = useState([]);
    const [lastClicked, setLastClicked] = useState(null);
    const [countdown, setCountdown] = useState(0);  // カウントダウンの状態
    const [showModal, setShowModal] = useState(false);  // モーダルの状態

// ーーーーーーuseEffect関連コードーーーーーーーーーーーーーーーーーーーーーーー
// ローカルストレージからの最後のクリック時刻の読み込みのための useEffect
    useEffect(() => {
        const savedTime = localStorage.getItem('lastClickedTime');
        if (savedTime) {
            const then = new Date(savedTime);
            const now = new Date();
            const diff = now - then;
            if (diff < 60 * 1000) { 
                setCountdown(60 - Math.floor(diff / 1000)); // 残りの秒数をセット
            }
            setLastClicked(new Date(savedTime)); // ここで lastClicked を復元
        }
    }, []);
// ローカルストレージからのクリック数の読み込みのための useEffect
    useEffect(() => {
        const savedCount = localStorage.getItem('clickCount');
        if (savedCount) {
            setCount(Number(savedCount));  // 保存されたクリック数を読み込む
        }
    }, []);

// 保存された画像の情報を読み込むためのuseEffect
    useEffect(() => {
        const savedImage = localStorage.getItem('currentImage');
        if (savedImage) {
            setImage(savedImage);  
        }
    }, []);

// 保存されたクリック履歴を読み込むための useEffect
    useEffect(() => {
        const savedHistory = localStorage.getItem('clickHistory');
        if (savedHistory) {
            setClickHistory(JSON.parse(savedHistory));  
        }
    }, []);

// カウントダウンのための useEffect
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [countdown]);

// ーーーーーーークリック時の処理ーーーーーーーーーーーーーーーーーーー
const handleClick = () => {
    const now = new Date();

    if (lastClicked && (now - lastClicked) < 60 * 1000) {
        // 前回のクリックから60秒以内の場合はモーダルを表示
        setShowModal(true);
        return;
    }

    if (count === 250) {
        setCount(0);
        setImage('0.png');
        localStorage.setItem('clickCount', '0'); 
        localStorage.setItem('currentImage', '0.png');
        return;
    }

    const newCount = count + 1;
    const clickTime = now.toLocaleString();

    setClickHistory(prevHistory => {
        const updatedHistory = [...prevHistory, { count: newCount, time: clickTime }];
        localStorage.setItem('clickHistory', JSON.stringify(updatedHistory)); 
        return updatedHistory;
    });

    setLastClicked(now);
    localStorage.setItem('lastClickedTime', now.toString()); 

    setCountdown(60);

    setCount(newCount);
    localStorage.setItem('clickCount', newCount.toString());

    setImage(prevImage => {
        const newImage = `${newCount}.png`;
        localStorage.setItem('currentImage', newImage);
        return newImage;
    });

    console.log("AnimationComponent is rendering");
};


// ーーーーーーーーーここから下が実際の表示内容ーーーーーーーーーーーー
    return (
        <div className='omoi-flowers'>
            <div className='countdown'>
            {countdown > 0 && <p> {countdown}</p>}
            </div>
            <div className='base_flowers'>
            <img src={`images/${image}`} alt="base_flowers" width={250} />
            </div>
            <button onClick={handleClick}>omo<br/>ってるよ！</button>
            <p>クリック数: {count}</p>
            
            <ClickHistory history={clickHistory} />
            <CustomModal isOpen={showModal} onClose={() => setShowModal(false)}>
                <p>1分間に1回しかクリックできません！</p>
            </CustomModal>
        </div>
    );
};

export default AnimationComponent;
