import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Home from 'pages/Home';

let container: any = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
	const mockIntersectionObserver = jest.fn();
	mockIntersectionObserver.mockReturnValue({
		observe: () => null,
		unobserve: () => null,
		disconnect: () => null,
	});
	window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders Home Component', () => {
	act(() => {
		render(<Home />, container);
	});

	expect(container.querySelector("[data-testid='heading']")).toHaveTextContent(
		'Infinite Scrolling List'
	);
});
