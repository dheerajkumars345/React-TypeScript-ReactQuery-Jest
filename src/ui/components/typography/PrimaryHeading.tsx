import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const PrimaryHeading = styled(Typography)`
	color: #442b48;
	font-size: 2rem;
	text-transform: uppercase;
	text-align: center;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	&:hover {
		color: #848484;
	}
`;

const index = ({ children }: any) => {
	return <PrimaryHeading variant="h1">{children}</PrimaryHeading>;
};

export default index;
