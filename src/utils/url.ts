export const API = {
	FETCH_LIST: () => `${process.env.REACT_APP_API_URL + '/posts'}`,
	FETCH_LIST_DETAIL: (postId: string) => `${process.env.REACT_APP_API_URL + `/posts/${postId}`}`,
	FETCH_COMMENTS: (postId: string) =>
		`${process.env.REACT_APP_API_URL + `/posts/${postId}/comments`}`,
};
