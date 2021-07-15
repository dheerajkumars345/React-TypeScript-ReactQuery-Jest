import React from 'react';

import Header from './Header';

const index = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default index;
