import Icononline from '../images/icon-online.svg'
import IconOnboarding from '../images/icon-onboarding.svg'
import IconBudgrting from '../images/icon-budgeting.svg'
import IconApi from '../images/icon-api.svg'

const Offre = () => {
    return (
        <section id='offre' className='bg-grB'>
            <div className="container-fluid container-xxl p-0 ">
                <div className="c-offres px-xl-5 px-0  pt-lg-5 p-3 mx-lg-5 mx-3 text-center text-lg-start">
                    <div className="row pt-5 pb-5">
                        <div className="col-lg-7 col ">
                            <h1>Why choose Easybank?</h1>
                            <p className='pt-3'>We leverage Open Banking to turn your bank account into your financial hub. Control
                                your finances like never before.
                            </p>
                        </div>
                        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mx-auto pt-5">
                            <div className="col pt-lg-0 pt-2">
                                <img src={Icononline} alt="" />
                                <div className="txt pt-lg-5 pt-3 ">
                                    <h3>Online Banking</h3>
                                    <p className='pt-lg-4 pt-3'>Our modern web and mobile applications allow you to keep track of your finances
                                        wherever you are in the world.</p>
                                </div>
                            </div>
                            <div className="col pt-lg-0 pt-2">
                                <img src={IconBudgrting} alt="" />
                                <div className="txt pt-lg-5 pt-3 ">
                                    <h3>Simple Budgeting</h3>
                                    <p className='pt-lg-4 pt-3'>See exactly where your money goes each month. Receive notifications when you’re
                                        close to hitting your limits.
                                        .</p>
                                </div>
                            </div>
                            <div className="col pt-lg-0 pt-2">
                                <img src={IconOnboarding} alt="" />
                                <div className="txt pt-lg-5 pt-3 ">
                                    <h3>Fast Onboarding</h3>
                                    <p className='pt-lg-4 pt-3'>We don’t do branches. Open your account in minutes online and start taking control
                                        of your finances right away.</p>
                                </div>
                            </div>
                            <div className="col pt-lg-0 pt-2">
                                <img src={IconApi} alt="" />
                                <div className="txt pt-lg-5 pt-3 ">
                                    <h3>Open API</h3>
                                    <p className='pt-lg-4 pt-3'>Manage your savings, investments, pension, and much more from one account. Tracking
                                        your money has never been easier</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}

export default Offre;