import React, { FC, useState, useEffect, useRef, ReactNode } from 'react';

type Props = {
	children: ReactNode;
	callback: () => void;
	isVisible: boolean | undefined;
	loader?: string | ReactNode;
	config?: {
		threshold?: number;
		root?: null;
		rootMargin?: string;
	};
};

const configObserver = { threshold: 0.6, root: null, rootMargin: '0%' };

const ScrollPagination: FC<Props> = ({
	children,
	callback,
	isVisible = false,
	loader = 'Loading...',
	config,
}: Props) => {
	const threshold = config?.threshold ?? configObserver.threshold;
	const root = config?.root ?? configObserver.root;
	const rootMargin = config?.rootMargin ?? configObserver.rootMargin;

	const [element, setElement] = useState<HTMLDivElement | null>(null);
	const [isCallback, setIsCallback] = useState(false);
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setIsCallback(entry.isIntersecting);
				});
			},
			{ threshold, root, rootMargin }
		)
	);

	useEffect(() => {
		if (isCallback) callback();
		return () => {
			setIsCallback(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCallback]);

	useEffect(() => {
		const currentElement = element;
		const currentObserver = observer.current;
		if (currentElement) currentObserver.observe(currentElement);
		return () => {
			if (currentElement) currentObserver.unobserve(currentElement);
		};
	}, [element]);

	return (
		<>
			{children}
			{isVisible && (
				<div
					style={{
						margin: '30px 0px',
						textAlign: 'center',
						fontSize: '16px',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							flex: '0 0 100%',
						}}
						ref={setElement}
					></div>
					<div style={{ color: '#3f51b5' }}>{loader}</div>
				</div>
			)}
		</>
	);
};

export default ScrollPagination;
