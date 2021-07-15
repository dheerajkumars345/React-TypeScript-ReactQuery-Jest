import React from 'react';

import { CircularProgress } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

const withLoader = (Component: any) => ({ isLoading, ...props }: any) => {
	if (!isLoading) return <Component {...props} />;
	return (
		<Backdrop open>
			<CircularProgress color="secondary" size={60} />
		</Backdrop>
	);
};

export default withLoader;
