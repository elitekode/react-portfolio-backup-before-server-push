import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/blog';


const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Blog = props => {
	return(
 			<div className={cx('blog__container')}>
				<h1 className={cx('blog__title')}>Kochan Desai </h1>
 				<div className={cx('blog_subContainer')}>
 					<a href="/articles"><h1>React = faster development</h1></a>
 					<p> A quick dive on how to get started with react. Learn to build faster and more dynamically<br/>While building your application you can learn how to better create components within your app.  </p>
 				</div>
 				<hr />

 				<div className={cx('blog_subContainer')}>
 						<a href="/articles1"><h1>Hack with hhvm the fastest transpiling there is?</h1></a>
 					<p>With code being compilled to machine code php is at one of its highest and fastest points that it ever has been.<br/>Hack is pretty much a strict typed version of php that has async features built in.</p>
 				</div>
				<hr />
 				<div className={cx('blog_subContainer')}>
 						<a href="/articles2"><h1>Digging deeper with redux. Working with states before hand.</h1></a>
 					<p> Redux shows your next states properties before they even get constructor their state.</p>
 				</div>
 				<hr />

 				<div className={cx('blog_subContainer')}>
 						<a href="/articles"><h1>Angle Your basics</h1></a>
 					<p> How to make a front-end go from what you see on a mom and dads coffee shop to ohh wow did facebook make this?.</p>
 				</div>
 				<hr />

					<div className={cx('blog_subContainer')}>
	 						<a href="/articles"><h1>Git Help</h1></a>
	 					<p> Some basic how to do things with git to help refresh or teach you how.</p>
	 				</div>
	 				<hr />

						<div className={cx('blog_subContainer')}>
		 						<a href="/articles"><h1>Python GUI/wxPython
								</h1></a>
		 					<p>Automate basic computing tasks with python GUI and machine learning</p>
		 				</div>
		 				<hr />

							<div className={cx('blog_subContainer')}>
									<a href="/articles"><h1>WebGL rendering</h1></a>
								<p>Use WebGl to render your container leading to faster rendering process across your app.</p>
							</div>
							<hr />
 			</div>
		);
};

export default Blog;
