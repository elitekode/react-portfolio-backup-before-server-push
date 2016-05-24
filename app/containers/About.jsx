import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = props => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('about__header')}>About Myself!</h1>
      <div className={cx('about__description')}>
          <p>     I am a Georgia-based web and mobile developer with a strong focus on MEAN, IONIC, and the React/HACK/HHVM stack.
              I have a fascination with all parts of code. If you are looking for an experienced developer to create a new application,
              write new features into an existing application, or help you make your application better by creating tests or refactoring code
              then we should get in touch, please contact me!
                 In the past three months, I have been immersed in the technology world in Digital Crafts coding bootcamp . During the camp, we have done multiple
              use NodeJS, JQuery, AngularJs, and SQL. This versatility in my coding skill set is what I know is my greatest asset. I view any
              language as utilizable with hardwork and application. Thanks for visiting my site!

          </p>
      </div>
        <div className={cx('about__contribute')}>
            <p>Contact me at desak29@icloud.com</p>
            </div>
    </div>
  );
};

export default About;
