import { InfiniteQueryResult, useInfiniteQuery } from 'react-query';

import { API } from 'utils/url';
import { GET_LIST } from 'utils/queryKeys';

export type TResultObj = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type TResult = Array<TResultObj>;

export type TError = {};

export async function fetchList(key: string, limit?: number, page = 1): Promise<TResult> {
	const LIMIT = 11;

	let url = `${API.FETCH_LIST()}?_limit=${LIMIT}`;
	if (limit) url = `${API.FETCH_LIST()}?_limit=${limit}`;
	if (page) url = `${url}&_start=${page}`;

	const response = await fetch(url, {
		method: 'GET',
	});
	return response.json();
}

function useGetList(limit?: number): InfiniteQueryResult<TResult> {
	return useInfiniteQuery([GET_LIST, limit], fetchList, {
		getFetchMore: (items, page) => {
			const morePagesExist = limit === items?.length;
			if (!morePagesExist) return false;
			return page.length + 1;
		},
		refetchOnWindowFocus: false,
	});
}

export { useGetList };
