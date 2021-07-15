import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetList } from 'hooks/useGetList';
import withLoader from 'ui/components/loader/withLoader';
import ScrollPagination from 'utils/scrollPagination';
import { CardWrapper, CardHeader, CardHeading, CardBody } from 'ui/components/comments';

const RenderList = React.lazy(() => import('./RenderList'));

const RenderListWithLoader = withLoader(RenderList);

function Home(): ReactElement {
	const history = useHistory();

	const limit = 11;

	const { isLoading, fetchMore, canFetchMore, data } = useGetList(limit);

	const onListItemsClick = (id: string) => {
		history.push(`/post?postId=${id}`);
	};

	return (
		<div style={{ display: 'flex' }}>
			<CardWrapper>
				<CardHeader>
					<CardHeading data-testid="heading">Infinite Scrolling List</CardHeading>
				</CardHeader>

				<CardBody>
					<div
						style={{
							overflowY: 'auto',
						}}
					>
						<ScrollPagination callback={() => fetchMore()} isVisible={canFetchMore}>
							<RenderListWithLoader
								isLoading={isLoading}
								data={data?.flat()}
								onListItemsClick={onListItemsClick}
							/>
						</ScrollPagination>
					</div>
				</CardBody>
			</CardWrapper>
		</div>
	);
}

export default Home;
