import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query-devtools';

import GlobalStyles from 'ui/styles/globalStyles';
import theme from 'ui/styles/theme';
import Layout from 'ui/components/layout';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'router';

const App = (): ReactElement => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
		<ToastContainer draggable={false} />
		<BrowserRouter>
			<Layout>
				<AppRouter />
			</Layout>
		</BrowserRouter>
	</ThemeProvider>
);
export default App;
