export const getUrlParams = (location: Location, key: string) => {
	const urlParams = new URLSearchParams(location.search);
	if (urlParams.keys()) {
		return urlParams.get(key);
	}
};
