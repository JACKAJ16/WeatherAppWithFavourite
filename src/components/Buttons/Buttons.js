import React from 'react';
import Refresh from './Refresh/Refresh';
import Delete from './Delete/Delete';
import './Buttons.css';

const Buttons = ({ info, setRefresh, refresh }) => (
		<div>
			<Refresh setRefresh={setRefresh} refresh={refresh} />
			<Delete info={info} />
		</div>
	);

export default Buttons;