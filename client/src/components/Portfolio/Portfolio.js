import React from 'react';
import * as S from './Portfolio.styles';

export const Portfolio = () => {
	return (
		<S.Grid>
			<S.Full variants={S.portfolioVariants} whileHover="hover" whileTap="tap">
				<h3>Portfolio Title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio animi
					cumque, iste accusamus nisi nobis corporis autem at suscipit reprehenderit
					ipsam, necessitatibus earum exercitationem. Similique optio fuga commodi
					tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores et
					consequatur voluptatibus, ab sit facilis? Quos libero est, voluptas vitae modi
					asperiores, laboriosam pariatur et itaque, numquam nam hic omnis.
				</p>
			</S.Full>
			<S.LeftHalf variants={S.portfolioVariants} whileHover="hover" whileTap="tap">
				<h3>Portfolio Title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio animi
					cumque, iste accusamus nisi nobis corporis autem at suscipit reprehenderit
					ipsam, necessitatibus earum exercitationem. Similique optio fuga commodi
					tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores et
					consequatur voluptatibus, ab sit facilis? Quos libero est, voluptas vitae modi
					asperiores, laboriosam pariatur et itaque, numquam nam hic omnis.
				</p>
			</S.LeftHalf>
			<S.RightHalf variants={S.portfolioVariants} whileHover="hover" whileTap="tap">
				<h3>Portfolio Title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio animi
					cumque, iste accusamus nisi nobis corporis autem at suscipit reprehenderit
					ipsam, necessitatibus earum exercitationem. Similique optio fuga commodi
					tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores et
					consequatur voluptatibus, ab sit facilis? Quos libero est, voluptas vitae modi
					asperiores, laboriosam pariatur et itaque, numquam nam hic omnis.
				</p>
			</S.RightHalf>
			<S.Small variants={S.portfolioVariants} whileHover="hover" whileTap="tap">
				<h3>Portfolio Title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio animi
					cumque, iste accusamus nisi nobis corporis autem at suscipit reprehenderit
					ipsam, necessitatibus earum exercitationem. Similique optio fuga commodi
					tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores et
					consequatur voluptatibus, ab sit facilis? Quos libero est, voluptas vitae modi
					asperiores, laboriosam pariatur et itaque, numquam nam hic omnis.
				</p>
			</S.Small>
			<S.Wide variants={S.portfolioVariants} whileHover="hover" whileTap="tap">
				<h3>Portfolio Title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio animi
					cumque, iste accusamus nisi nobis corporis autem at suscipit reprehenderit
					ipsam, necessitatibus earum exercitationem. Similique optio fuga commodi
					tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores et
					consequatur voluptatibus, ab sit facilis? Quos libero est, voluptas vitae modi
					asperiores, laboriosam pariatur et itaque, numquam nam hic omnis.
				</p>
			</S.Wide>
		</S.Grid>
	);
};

export default Portfolio;
