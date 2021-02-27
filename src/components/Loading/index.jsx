import React from 'react';
import loading from '../../img/loading/loading.gif';

const Loading = () => {
	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center black-bg">
			<img src={loading} alt="LOADING..."/>
		</div>
	)
};

export default Loading;
