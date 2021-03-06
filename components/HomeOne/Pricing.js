import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Pricing extends React.Component {
    render() {
        return (
            <section id="pricing" className="pricing-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>Pricing Table</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-md-12 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-price-package"> 
                                    <div className="price-header">
                                        <h3>Standard</h3>
                                        <h4 className="price-value">
                                            <sup className="text-bottom">$</sup>
                                            <span className="text-large">33</span>
                                            <span className="duration">/ Per Month</span>
                                        </h4>
                                    </div>

                                    <ul className="price-list"> 
                                        <li>UI / UX Design</li>
                                        <li>Web Design</li>
                                        <li>App Design</li>
                                        <li className="disabled">Web Developement</li>
                                        <li className="disabled">Wordpress Theme</li>
                                        <li className="disabled">24 / 7 Support</li>
                                    </ul>
                                    
                                    <div className="price-footer">
                                        <a href="#" className="purchase-btn">Purchase</a>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-12 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-price-package personal-price-package"> 
                                    <div className="price-header">
                                        <h3>Personal</h3>
                                        <h4 className="price-value">
                                            <sup className="text-bottom">$</sup>
                                            <span className="text-large">69</span>
                                            <span className="duration">/Per Month</span>
                                        </h4>
                                    </div>

                                    <ul className="price-list"> 
                                        <li>UI / UX Design</li>
                                        <li>Web Design</li>
                                        <li>App Design</li>
                                        <li>Web Developement</li>
                                        <li className="disabled">Wordpress Theme</li>
                                        <li className="disabled">24 / 7 Support</li>
                                    </ul>
                                    
                                    <div className="price-footer">
                                        <a href="#" className="purchase-btn">Purchase</a>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-12 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-price-package"> 
                                    <div className="price-header">
                                        <h3>Business</h3>
                                        <h4 className="price-value">
                                            <sup>$</sup>
                                            <span className="text-large">99</span>
                                            <span className="duration">/Per Month</span>
                                        </h4>
                                    </div>

                                    <ul className="price-list"> 
                                        <li>UI / UX Design</li>
                                        <li>Web Design</li>
                                        <li>App Design</li>
                                        <li>Web Developement</li>
                                        <li>Wordpress Theme</li>
                                        <li>24 / 7 Support</li>
                                    </ul>
                                    
                                    <div className="price-footer">
                                        <a href="#" className="purchase-btn">Purchase</a>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
