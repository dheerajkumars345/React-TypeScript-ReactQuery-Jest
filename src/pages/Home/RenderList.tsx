import React from 'react';
import styled from 'styled-components';

import { TResult, TResultObj } from 'hooks/useGetList';

const StyledH4 = styled.h4`
	&:hover {
		color: #3f51b5;
		cursor: pointer;
	}
`;

type RenderListProps = {
	data: TResult;
	onListItemsClick: (id: number) => void;
};

const RenderList = ({ data, onListItemsClick }: RenderListProps) => {
	return (
		<ul>
			{data &&
				data.map(({ id, title }: TResultObj) => (
					<StyledH4 key={id} onClick={() => onListItemsClick(id)}>
						{title}
					</StyledH4>
				))}
		</ul>
	);
};

export default RenderList;
