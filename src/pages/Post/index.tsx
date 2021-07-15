import React, { ReactElement } from 'react';

import { useGetListDetails } from 'hooks/useGetListDetails';
import { useGetComments } from 'hooks/useGetComments';
import { getUrlParams } from 'utils/getUrlParams';
import Loader from 'ui/components/loader';
import CommentsComponent from 'ui/components/comments';

function Post(): ReactElement {
	const postId: string = getUrlParams(window.location, 'postId')!;
	const { isLoading, data } = useGetListDetails(postId);
	const { isLoading: isLoadingComments, data: commentsData } = useGetComments(postId);

	return (
		<>
			{isLoading || isLoadingComments ? (
				<Loader />
			) : (
				<div style={{ display: 'flex' }}>
					<CommentsComponent
						id={data && data.id}
						userId={data && data.userId}
						title={data && data.title}
						body={data && data.body}
						commentsData={commentsData && commentsData}
					/>
				</div>
			)}
		</>
	);
}

export default Post;
