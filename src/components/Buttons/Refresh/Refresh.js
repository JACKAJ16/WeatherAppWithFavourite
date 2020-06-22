import React from 'react';

const Refresh = ({ setRefresh, refresh }) => {

	//Refresh button method
	const handleRefresh = () => {
		setRefresh(!refresh)
		console.log('refreshed!')
	}

	return (
		<div>
			<button className="button" onClick={handleRefresh}>Refresh</button>
		</div>
	);
};

export default Refresh;