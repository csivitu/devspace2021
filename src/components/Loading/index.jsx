import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../loadinglottie/loadinglottie.json';
// import loading from '../../img/loading/loading.gif';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center black-bg">
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default Loading;
