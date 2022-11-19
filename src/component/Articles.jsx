import image1 from '../images/image-confetti.jpg'
import image2 from '../images/image-currency.jpg'
import image3 from '../images/image-restaurant.jpg'
import image4 from '../images/image-plane.jpg'

const Articles = () => {
    return (
        <section id='offre' className='bg-lgr'>
            <div className="container-fluid container-xxl p-0 ">
                <div className="c-articles px-xl-5 px-0 pt-lg-5 p-3 mx-lg-5 mx-3  text-lg-start">
                    <h1 className="pt-4 text-center text-lg-start">Latest Articles</h1>
                    <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 g-3  pt-5 pb-5">
                        <div className="col pt-lg-0 pt-2">
                            <div className="bg-white h-100">
                                <img src={image2} alt="" className='c-img rounded-top' />
                                <div className="txt pt-4 px-4 pb-3">
                                    <p className='pt-lg-2 pt-3'>By Claire Robinson</p>
                                    <button className='p-0 text-start'><h5>Receive money in any currency with no fees</h5></button>
                                    <p >
                                        The world is getting smaller and we’re becoming more mobile. So why should you be
                                        forced to only receive money in a single …
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col pt-lg-0 pt-2">
                            <div className="bg-white h-100">
                                <img src={image3} alt="" className='c-img rounded-top' />
                                <div className="txt pt-4 px-4 pb-3">
                                    <p className='pt-lg-2 pt-3'>By Wilson Hutton</p>
                                    <button className='p-0 text-start'><h5>Treat yourself without worrying about money</h5></button>
                                    <p >
                                        Our simple budgeting feature allows you to separate out your spending and set
                                        realistic limits each month. That means you …
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col pt-lg-0 pt-2">
                            <div className="bg-white h-100">
                                <img src={image4} alt="" className='c-img rounded-top' />
                                <div className="txt pt-4 px-4 pb-3">
                                    <p className='pt-lg-2 pt-3'>By Wilson Hutton</p>
                                    <button className='p-0 text-start'><h5>Take your Easybank card wherever you go</h5></button>
                                    <p >
                                        We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                        while you’re abroad. We’ll even show you …
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col pt-lg-0 pt-2">
                            <div className="bg-white h-100">
                                <img src={image1} alt="" className='c-img rounded-top' />
                                <div className="txt pt-4 px-4 pb-3">
                                    <p className='pt-lg-2 pt-3'>By Claire Robinson</p>
                                    <button className='p-0 text-start'><h5>Our invite-only Beta accounts are now live!</h5></button>
                                    <p >
                                        After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                        It’s easy to request an invite through the site ...
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Articles;