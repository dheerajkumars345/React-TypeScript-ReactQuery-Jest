import { useQuery, QueryResult } from 'react-query';

import { API } from 'utils/url';
import { GET_LIST_DETAIL } from 'utils/queryKeys';

export type TResult = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type TError = {};

async function fetchListDetails(postId: string): Promise<TResult> {
	const response = await fetch(API.FETCH_LIST_DETAIL(postId), {
		method: 'GET',
	});
	return response.json();
}

function useGetListDetails(postId: string): QueryResult<TResult, TError> {
	return useQuery([GET_LIST_DETAIL, postId], async () => await fetchListDetails(postId), {
		refetchOnWindowFocus: false,
	});
}

export { useGetListDetails };
