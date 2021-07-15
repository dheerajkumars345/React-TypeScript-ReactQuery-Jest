import React from 'react';

import { CircularProgress } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

const Index = () => {
	return (
		<Backdrop open>
			<CircularProgress color="secondary" size={60} />
		</Backdrop>
	);
};

export default Index;
