import React from 'react';

import classNames from 'classnames/bind';
import styles from 'scss/components/hire';
import Button from 'react-bootstrap/lib/Button';

const cx = classNames.bind(styles);

var Alert = require('react-bootstrap').Alert;

/*
* Note: This is kept as a container-level component,
*  i.e. We should keep this as the container that does the data-fetching
*  and dispatching of actions if you decide to have any sub-components.
*/
const Hire = props => {
	return(

		<div className={cx('hire__container')}>

			<div class="row">

				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

					<div class="col-md-12">

						<h2 id="need-a-web-developer%3F-hire-me%21">
							Need a web developer for your app or website? Hire me!
						</h2>


						<p>
							I am a full-stack web developer with a strong overall grasp of front-end and back-end development.
						</p>


						<p>
							I can take your idea and build it from the ground up. This includes everything from
							server creation and management, PHP/Mongo backend and API endpoints, HTML5/CSS/Javascript
							front-end, complete testing suite, build systems and deployment process.
						</p>


						<p>
							I am available for short-term and long-term contract projects.
						</p>


						<p>To quickly get in touch with me, email me at <a href="mailto:desak29@icloud.com">desak29@icloud.com</a>.</p>


						<h3 id="php-%2F-mysql-backend-development">
							PHP / MySQL Backend Development and MongoDB
						</h3>


						<p>
							I have extensive experience with PHP. I am familiar with multiple frameworks with my
							go-to being the <a href="https://github.com/angular-fullstack/generator-angular-fullstack">Yeoman generator for AngularJS</a>. I also utilize the  Hack/HHVM with Symfony showcased in my portfolio.
						</p>


						<p>
							Here is a list of my projects that I have  been working on  <a href="https://github.com/desak29?tab=repositories">free, open source projects</a> and <a href="https://github.com/elitekode?tab=repositories">here</a>. My mobile app is made with alot of custom tools that provide the user insights into the stocks they love.
				</p>




				<h3 id="puppet-%2F-server-management-%2F-devops">
					Debugging / Server Management / Devops
				</h3>


				<p>
					I have deep experience in deploying servers with Firebase, SequelPro, AWS, EC2, Mongo, and SQLite.
				</p>


				<p>
					While bringing the product between all of its stages in a fast and continous pipeline to keep downtime across updates minimal.
				</p>


				<h3 id="build-lifecycle-%2F-continuous-delivery-%2F-continuous-integration">
					Build Lifecycle / Continuous Delivery / Continuous Integration
				</h3>


				<p>I have experience setting up and managing servers through GUI's including
					<a href="http://3t.io/mongochef/"> MongoChef</a>, and
					<a href="http://www.sequelpro.com/"> Sequel Pro
					</a>.
</p>
<p>
					 As well as being comfortable setting up development environments using <a href="https://www.vagrantup.com/">Vagrant </a>.
				</p>
				<p>
						I can create a complete lifecycle that takes developer code and automates everything
						from injecting dependencies too running basic unit/behavioral tests, checking code quality via software testing,
						setting up dependencies, backing up current deployment and deploying new and stable release.
						Some of the examples of the technologies utilized in this are node, bower, karma, and grunt/gulp.
					</p>


					<h3 id="html5-%2F-css-%2F-javascript">
						HTML5;Jade;ECMA Script 6 <strong>/</strong> CSS;SCSS <strong>/</strong> Javascript;
					</h3>


					<p>
						I have created usable interfaces to display
						complex data and can create the Javascript or PHP to help power those interfaces. I have experience creating a CMS system via <a href="https://www.drupal.org/home">
						drupal</a> or a<a href="https://github.com/elitekode/sixflagsclone">custom
						</a>CMS platform.
					</p>


					<p>
						Being a full-stack developer, I can join a Mongo or PHP backend to a usable and friendly
						front-end interface and experience. For mobile applications, I can develop a working application in Ionic.					</p>

					<h2 id="call-me%2C-maybe%3F">
						<a href="mailto:desak29@gmail.com">Contact me</a>
					</h2>


					<p>
						If you are interested in hiring me, you can contact me by one of the following methods:
					</p>


					<ul>

						<li>
							Email - <a href="mailto:desak29@icloud.com">desak29@icloud.com</a>
					</li>

					<li>
						LinkedIn - <a href="www.linkedin.com/in/kochand">KochanD</a>
				</li>

			</ul>


			<p>
				I will answer almost immediately!
			</p>

		</div>

	</div>

</div>


<hr />

</div>



);
};

export default Hire;
