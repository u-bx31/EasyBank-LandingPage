
const Hero = () => {
    return (
        <section id='hero ' className='bg-lgr'>
            <div className="container-fluid container-xxl p-0 c-hero ">
                <div className="d-flex flex-lg-row flex-column-reverse ">
                    <div className="text-section px-xl-5 mt-lg-5 pt-lg-5 p-3 mx-lg-5 mx-3 text-center text-lg-start ">
                        <h1 className='pt-lg-5'>Next generation digital banking</h1>
                        <p className='py-3'>
                            Take your financial life online. Your Easybank account will be a one-stop-shop for
                            spending, saving, budgeting, investing, and mush more.
                        </p>
                        <button className="req-btn mb-lg-1 mb-5">Request invite</button>

                    </div>
                    <div className="mockup-section">
                        <img src={require('../images/image-mockups.png')} className='c-img  ' alt="" />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;