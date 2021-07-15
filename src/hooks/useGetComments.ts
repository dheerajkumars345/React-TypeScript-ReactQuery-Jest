import { useQuery, QueryResult } from 'react-query';

import { API } from 'utils/url';
import { GET_COMMENTS } from 'utils/queryKeys';

export type TResultObj = {
	body: string;
	email: string;
	id: number;
	name: string;
	postId: number;
};

export type TResult = Array<TResultObj>;

export type TError = {};

async function fetchComments(postId: string): Promise<TResult> {
	const response = await fetch(API.FETCH_COMMENTS(postId), {
		method: 'GET',
	});
	return response.json();
}

function useGetComments(postId: string): QueryResult<TResult, TError> {
	return useQuery([GET_COMMENTS, postId], async () => await fetchComments(postId), {
		refetchOnWindowFocus: false,
	});
}

export { useGetComments };
