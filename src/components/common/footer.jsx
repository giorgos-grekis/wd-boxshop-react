import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Custom Component
import Carousel from '../features/carousel';

//Import Data
import DemoData from '../../mock-data/data.json';

//Import Settings
import { owlSetting4 } from '../../utils/settings';

function Footer () {
    return (
        <footer className="footer">
            {/* <div className="instagram-box">
                <div className="instagram-follow">
                    <div className="container">
                        <i className="fab fa-instagram"></i>
                        <div className="brand">
                            <h3>Follow Us on Instagram</h3>
                            <p>@portoecommerce</p>
                        </div>
                    </div>
                </div>
                <Carousel addClass="instagram-carousel text-center" settings={ owlSetting4 }>
                    {
                        DemoData.instagram.map( ( item, index ) => (
                            <figure className="media" key={ "Instagram" + index }>
                                <LazyLoadImage
                                    alt="instagram"
                                    src={ `${process.env.PUBLIC_URL}/${item}` }
                                    threshold={ 100 }
                                    effect="blur"
                                />
                            </figure>
                        ) )
                    }
                </Carousel>
            </div> */}

            <div className="footer-top border-top border-dark">
                <div className="container">
                    <div className="newsletter-widget">
                        <i className="icon-envolope"></i>

                        <div className="newsletter-info">
                            <h3>Μείνετε ενημερωμένοι για Νέες προσφορές</h3>
                            <p>Λάβετε τα τελευταία νέα μας & τις προσφορές μας</p>
                        </div>

                        <form action="#" method="get">
                            <div className="submit-wrapper">
                                <label htmlFor="q" style={{display: 'none'}}>Select Category</label>
                                <input type="search" className="form-control" name="q" id="q" placeholder="Enter Your E-mail Address..." required />
                                <button className="btn" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>

                    <div className="social-icons">
                        <Link to="/facebook" className="social-icon" target="_blank" title="Facebook social-icon"><i className="icon-facebook"></i></Link>
                        <Link to="/twitter" className="social-icon " target="_blank" title="Twitter social-icon"><i className="icon-twitter"></i></Link>
                        <Link to="/linkedin" className="social-icon " target="_blank" title="Linkedin social-icon"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="row row-sm justify-content-between">
                        <div className="col-md-6 col-lg-3">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo-white.png` } className="footer-img-white img-fluid" alt="footer-logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                            <div className="social-link">
                                <h3 className="link-title mb-1 mb-lg-0">ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ</h3>
                                <Link to="#">1-888-123-456</Link>
                            </div>
                        </div>


                        {/* <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Account</h3>
                                <div className="widget-content row row-sm">
                                    <ul className="col-xl-6">
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/dashboard/account` }>My Account</Link></li>
                                        <li><Link to="#">Track Your Order</Link></li>
                                        <li><Link to="#">Payment Methods</Link></li>
                                        <li><Link to="#">Shipping Guide</Link></li>
                                    </ul>
                                    <ul className="col-xl-6">
                                        <li><Link to="#">FAQs</Link></li>
                                        <li><Link to="#">Product Support</Link></li>
                                        <li><Link to="#">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">About</h3>
                                <div className="widget-content row row-sm">
                                    <ul className="col-xl-6">
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About Porto</Link></li>
                                        <li><Link to="#">Our Guarantees</Link></li>
                                        <li><Link to="#">Terms And Conditions</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                    <ul className="col-xl-6">
                                        <li><Link to="#">Return Policy</Link></li>
                                        <li><Link to="#">Intellectual Property Claims</Link></li>
                                        <li><Link to="#">Site Map</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
{/* 
                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Features</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><Link to="#">Powerful Admin Panel</Link></li>
                                        <li><Link to="#">Mobile & Retina Optimized</Link></li>
                                        <li><Link to="#">Super Fast Magento Theme</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-md-12 col-lg-5">

                            <div className="row text-left">

                                <div className="col-md-12 col-lg-4">
                                    <div className="widget">
                                        <h3 className="widget-title">Χρήσιμα Links</h3>
                                            <ul>
                                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/dashboard/account` }>Όροι & προϋποθέσεις</Link></li>
                                                <li><Link to="/metafores">Μεταφορές</Link></li>
                                                <li><Link to="/epistrofes">Επιστροφές</Link></li>
                                                <li><Link to="/tropoi-plhromhw">Τρόποι Πληρωμής</Link></li>
                                            </ul>                    
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-4">
                                    <div className="widget">
                                        <h3 className="widget-title">Ο Λογαριασμός μου</h3>
                                            <ul>
                                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Εγγραφή</Link></li>
                                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/login/` }>Είσοδος σε λογαριασμό</Link></li>
                                            </ul>                    
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-4">
                                    <div className="widget">
                                        <h3 className="widget-title">Επικοινωνία</h3>
                                            <ul>
                                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>Η εταιρεία</Link></li>
                                                <li><Link to="#">Επικοινωνία</Link></li>
                                            </ul>                    
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="footer-bottom container">
                <p>boxshop.gr © {new Date().getFullYear()}. All Rights Reserved. Created by <a href="https://webdimension.gr/" target="_blank">webdimension</a> </p>
            </div>
        </footer>
    )
}

export default React.memo( Footer );