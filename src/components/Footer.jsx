import Logo from '../images/logo';
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconYoutube from '../images/icon-youtube.svg';


const Footer = () => {
    return (
        <section className="bg-db">
            <div className="container-fluid container-xxl p-0">
                <div className="px-xl-5 px-0 pt-lg-5 p-3 mx-lg-5 mx-3 ">
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3  justify-content-lg-start justify-content-center text-md-start text-center">
                        <div className="col">
                            <div className="row row-cols-1 gy-md-5 gy-3 gx-0">
                                <div className="col"><Logo fill={'white'} /></div>
                                <div className="col">
                                    <div className="c-links ">
                                        <button><img src={iconFacebook} alt="" className='s-icon' /></button>
                                        <button><img src={iconYoutube} alt="" className='s-icon' /></button>
                                        <button><img src={iconTwitter} alt="" className='s-icon' /></button>
                                        <button><img src={iconPinterest} alt="" className='s-icon' /></button>
                                        <button><img src={iconInstagram} alt="" className='s-icon' /></button>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col ">
                            <div className="row row-cols-md-2 row-cols-1 g-md-3 c-links  ">
                                <div className="col d-flex flex-column">
                                    <button className='text-md-start text-center p-1 '>About us</button>
                                    <button className='text-md-start text-center p-1'>Contact</button>
                                    <button className='text-md-start text-center p-1'>Bolg</button>
                                </div>
                                <div className="col d-flex flex-column">
                                    <button className='text-md-start text-center p-1'>Careers</button>
                                    <button className='text-md-start text-center p-1'>Support</button>
                                    <button className='text-md-start text-center p-1'>Privacy Policy</button>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 text-lg-end text-center ">
                            <button className='req-btn mb-2'>Request invite</button>
                            <p className='pt-4'>© Easybank. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;