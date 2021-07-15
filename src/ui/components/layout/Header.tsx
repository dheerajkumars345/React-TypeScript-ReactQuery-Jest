import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const MenuButton = styled(IconButton)`
	margin-right: 16px;
`;

const AppName = styled(Typography)`
	flex-grow: 1;
`;

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<MenuButton edge="start" color="inherit" aria-label="menu"></MenuButton>
				<AppName variant="h6">React + TypeScript + React Query + Hooks</AppName>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
