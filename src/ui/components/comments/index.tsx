import React from 'react';
import styled from 'styled-components';

import { TResult } from 'hooks/useGetComments';

export const CardWrapper = styled.div`
	overflow: hidden;
	padding: 0 0 32px;
	margin: 48px auto 0;
	width: 900px;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
`;

export const CardHeader = styled.header`
	padding-top: 32px;
	padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: #3f51b5;
`;

export const CardBody = styled.div`
	padding-right: 32px;
	padding-left: 32px;
	text-align: center;
`;

const CardInput = styled.input`
	padding: 7px 0;
	width: 100%;
	font-family: inherit;
	font-size: 14px;
	border-top: 0;
	border-right: 0;
	border-bottom: 1px solid #ddd;
	border-left: 0;
	transition: border-bottom-color 0.25s ease-in;

	&:focus {
		border-bottom-color: #e5195f;
		outline: 0;
	}
`;

const StyledH2 = styled.h2`
	font-size: 1.2rem;
	list-style: circle;
	&:hover {
		color: #848484;
	}
`;

type CommentsProps = {
	id?: number;
	userId?: number;
	title?: string;
	body?: string;
	commentsData?: TResult;
};

const CommentsComponent = ({ id, userId, title, body, commentsData }: CommentsProps) => (
	<CardWrapper>
		<CardHeader>
			<CardHeading>Post Details</CardHeading>
		</CardHeader>

		<CardBody>
			<StyledH2>userId : {userId}</StyledH2>
			<StyledH2>id : {id}</StyledH2>
			<StyledH2>title : {title}</StyledH2>
			<StyledH2>body : {body}</StyledH2>

			<CardInput />
			<CardHeader>
				<CardHeading>Comments</CardHeading>
			</CardHeader>
			{commentsData &&
				commentsData.map((comment) => (
					<>
						<StyledH2>name : {comment.name}</StyledH2>
						<StyledH2>email : {comment.email}</StyledH2>
						<StyledH2>comment : {comment.body}</StyledH2>
						<CardInput />
					</>
				))}
		</CardBody>
	</CardWrapper>
);
export default CommentsComponent;
