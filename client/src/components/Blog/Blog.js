import React from 'react';
import * as S from './Blog.styles';

export const Blog = () => {
	return (
		<S.Container>
			<S.Header>Blog</S.Header>
			<S.Blog>
				<S.BlogImageOne>
					<img src="https://via.placeholder.com/400x450" alt="" />
				</S.BlogImageOne>
				<S.BlogContentOne>
					<h3>S.Blog Title One</h3>
					<S.Timestamp>Dec 04, 2020</S.Timestamp>
					<S.Category>React</S.Category>
				</S.BlogContentOne>
				<S.BlogImageTwo>
					<img src="https://via.placeholder.com/400x450" alt="" />
				</S.BlogImageTwo>
				<S.BlogContentTwo>
					<h3>S.Blog Title Two</h3>
					<S.Timestamp>Dec 04, 2020</S.Timestamp>
					<S.Category>React</S.Category>
				</S.BlogContentTwo>
				<S.BlogImageThree>
					<img src="https://via.placeholder.com/400x450" alt="" />
				</S.BlogImageThree>
				<S.BlogContentThree>
					<h3>S.Blog Title This is a long title</h3>
					<S.Timestamp>Dec 04, 2020</S.Timestamp>
					<S.Category>React</S.Category>
				</S.BlogContentThree>
			</S.Blog>
		</S.Container>
	);
};

export default Blog;
