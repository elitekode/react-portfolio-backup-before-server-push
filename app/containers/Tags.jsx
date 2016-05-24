import React from 'react';

import classNames from 'classnames/bind';
import styles from 'scss/components/tags';
import kychat from 'images/kychat.png';
import kychat1 from 'images/kychat1.png';
import kychat2 from 'images/slack1.png';
import musicVoiceImage from 'images/musicVoice.png';
import musicVoiceDesktop from 'images/musicShare.png';
import tekrect from 'images/tekrect1.png';
import tekrecta from 'images/tekrect2.png';
import tekrectb from 'images/tekrect3.png';
import kytea from 'images/kytea.png';
import kytea1 from 'images/kytea1.png';
import kytea2 from 'images/kytea2.png';
import gui from 'images/gui.png';
import gui1 from 'images/gui1.png';
import gui2 from 'images/gui2.png';
import gui3 from 'images/gui3.png';
import mygrub1 from 'images/mygrub1.png';
import mygrub2 from 'images/mygrub2.png';
import mygrub3 from 'images/mygrub3.png';
import stocks1 from 'images/stock1.png';
import stocks2 from 'images/stock2.png';
import stocks3 from 'images/stock3.png';
import stocks4 from 'images/stocks4.png';
//second image needs to be 1075 in height


const cx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

//  <iframe className={cx('tags__iframe1')}  src="https://www.youtube.com/embed/2JsEvXz81bo" frameborder="0" allowfullscreen></iframe>
//  <iframe className={cx('tags__iframe1')} src="https://headwars.herokuapp.com/#/home"></iframe>
//  <iframe className={cx('tags__iframe1')} src="https://pro-leet-peeps.herokuapp.com/#/"></iframe>
// <iframe className={cx('tags__iframe2')} src="https://www.youtube.com/embed/bozduJLKLaA?list=PLUhsZjhcVEa8r2bXlY1rw7BgIoepOZaAK" frameborder="0" allowfullscreen></iframe>

const Tags = props => {

    return (
        <div className={cx('tags')}>
            <div className={cx('tags__container')}>

                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="http://kychat.firebaseapp.com"><h1>KySlack</h1></a>
                        <div className={cx('tags__headerSub')}>Slack Messenger Clone</div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="https://github.com/desak29/app1"><img className={cx('tags__iframe')}
                                                                           src={kychat}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="http://kychat.firebaseapp.com"><img className={cx('tags__iframe')}
                                                                         src={kychat1}></img></a>
                        </div>

                    </div>

                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p>KYchat is a messaging platform that allows users to direct message and to create
                                channels, while also viewing whether other users are online. </p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Angular-factories;controllers;directives</li>
                                <li>FireBase</li>
                                <li>HTML5</li>
                                <li>WebSockets</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <a href="http://www.tekrect.herokuapp.com"><img className={cx('tags__iframe')}
                                                                        src={kychat2}></img></a>
                    </div>
                </div>
                <br />
                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="https://github.com/desak29/app1"><h1>KYstocks</h1></a>
                        <div className={cx('tags__headerSub')}>Hybrid Ionic: Stock Portfolio App</div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="https://on-my-route.herokuapp.com/#/views/landing"><img
                                className={cx('tags__iframe')}
                                src={stocks2}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="htdtps://on-my-route.herokuapp.com/#/views/landing"><img
                                className={cx('tags__iframe')}
                                src={stocks3}></img></a>
                        </div>
                        


                    </div>

                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p>This is an Ionic app project that lets individuals create there own stock portfolio. They
                                can search stocks using the Yahoo API, add stocks, remove stocks, view news for the
                                stock, and take notes on their stocks.</p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Ionic Hybrid Framework</li>
                                <li>Angular</li>
                                <li>Firebase asynchronous DB</li>
                                <li>Node6</li>
                            </ul>
                        </div>
                        <a href="http://www.tekrect.herokuapp.com"><img className={cx('tags__iframe')}
                                                                        src={stocks1}></img></a>
                    </div>
                </div>


                <br />

                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="http://www.tekrect.herokuapp.com"><h1>TekRect</h1></a>
                        <div className={cx('tags__headerSub')}>Mean Stack E-Commerce Website: Bringing Technology at
                            Source Costs Directly to the Customer
                        </div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="http://www.tekrect.herokuapp.com"><img className={cx('tags__iframe')}
                                                                            src={tekrectb}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="http://www.tekrect.herokuapp.com"><img className={cx('tags__iframe')}
                                                                            src={tekrecta}></img></a>
                        </div>


                    </div>

                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p>With simple design, TekRect has all the features an ecommerce website needs including an
                                admin login and a stripe check-out system. The website is user friendly with mobile
                                responsiveness</p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Angular</li>
                                <li>Express</li>
                                <li>MongoDB/Mongoose</li>
                                <li>Heroku</li>
                                <li>Bootstrap/UI</li>
                                <li>Facebook/Google auth integration</li>
                            </ul>
                        </div>
                        <a href="http://www.tekrect.herokuapp.com"><img className={cx('tags__iframe')}
                                                                        src={tekrect}></img></a>
                    </div>
                </div>
                <br />

                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="https://kytea.herokuapp.com/"><h1>KYTEA</h1></a>
                        <div className={cx('tags__headerSub')}>Unique MEAN stack E-commerce website that has
                            registration for delivery of a product as its model
                        </div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="https://kytea.herokuapp.com/"><img className={cx('tags__iframe')}
                                                                        src={kytea}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="https://kytea.herokuapp.com/"><img className={cx('tags__iframe')}
                                                                        src={kytea1}></img></a>
                        </div>
                    </div>
                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p> KyTea allows users to learn about organic tea. The app also allows individuals to
                                subscribe to our delivery tea service based on their consumption </p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Angular v1.6(front-end routing)</li>
                                <li>Express(back-end routing)</li>
                                <li>Sass</li>
                                <li>Node.js</li>
                                <li>Stripe</li>
                                <li>Facebook/Google login API</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <a href="https://kytea.herokuapp.com"><img className={cx('tags__iframe')}
                                                                   src={kytea2}></img></a>
                    </div>
                </div>
                <br />

                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="https://github.com/rbunch-dc/karma-yogisg"><h1>MyGrub</h1></a>
                        <div className={cx('tags__headerSub')}>MyGrub, SCRUM project, Food Recipe Finder</div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="https://github.com/rbunch-dc/karma-yogis"><img className={cx('tags__iframe')}
                                                                                    src={mygrub1}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="https://github.com/rbunch-dc/karma-yogis"><img className={cx('tags__iframe')}
                                                                                    src={mygrub2}></img></a>
                        </div>


                    </div>

                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p>MyGrub uses the Yummly api and a Mongo back-end providing users with an web application
                                that suggests recipes based on food within their kitchen</p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Angular</li>
                                <li>JQuery</li>
                                <li>Mongo</li>
                                <li>Node.js</li>
                                <li>Pair Coding</li>
                                <li>SCRUM</li>

                            </ul>
                        </div>
                        <a href="https://github.com/rbunch-dc/karma-yogis"><img className={cx('tags__iframe')} src={mygrub3}></img></a>
                    </div>
                </div>

                <br />

                <br />

                <div className={cx('tags_subContainer')}>
                    <div className={cx('tags__header')}>
                        <a href="https://ipython.org"><h1>Python GUI</h1></a>
                        <div className={cx('tags__headerSub')}>Analysis of PIMA tribe in order to determine diabetes
                            risk factors
                        </div>
                    </div>

                    <div className={cx('tags_row')}>

                        <div className={cx('tags_blocks')}>
                            <a href="https://http://jupyter.org"><img className={cx('tags__iframe')}
                                                                      src={gui}></img></a>
                        </div>

                        <div className={cx('tags_blocks')}>
                            <a href="https://http://jupyter.org"><img className={cx('tags__iframe')}
                                                                      src={gui1}></img></a>
                        </div>
                    </div>
                    <div className={cx('tags_blockBottom')}>
                        <div className={cx('tags_info')}>
                            <h3>About the Project</h3>
                            <p>Using statistics from PIMA indian study and observed machine learning algorithms </p>
                            <h4>Made using</h4>
                            <ul>
                                <li>Python3.5</li>
                                <li><a href="http://scikit-learn.org/stable/"> Sci-kit</a></li>
                                <li>Jupyter(I-Python)</li>
                            </ul>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Pima_people"><img className={cx('tags__iframe')}
                                                                                 src={gui3}></img></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tags;
