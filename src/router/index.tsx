import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from 'ui/components/loader';
import Home from 'pages/Home';
import Post from 'pages/Post';

function AppRouter(): ReactElement {
	return (
		<Switch>
			<React.Suspense fallback={<Loader />}>
				<Route exact path="/posts">
					<Home />
				</Route>
				<Route exact path="/post">
					<Post />
				</Route>
				<Route>
					<Redirect to="/posts" />
				</Route>
			</React.Suspense>
		</Switch>
	);
}

export default AppRouter;
