import { motion } from "framer-motion";

const containerVariants = {
    hidden : {opacity : 0},
    visible : {
        opacity :1,
        transition :{
            duration :1,
            staggerChildren : .4,
        }
    }
}

const elementsVariants = {
    hidden : {
        opacity : 0,
    },
    visible :{
        opacity : 1,
        transition :{
            duration : 1.5,
        }
    }
}



const Hero = () => {
    return (
        <section id='hero ' className='bg-lgr'>
            <div className="container-fluid container-xxl p-0 c-hero ">
                <div className="d-flex flex-lg-row flex-column-reverse " >
                    <motion.div className="text-section px-xl-5 mt-lg-5 pt-lg-5 p-3 mx-lg-5 mx-3 text-center text-lg-start " variants={containerVariants} initial="hidden"  animate="visible">
                        <motion.h1 variants={elementsVariants} className='pt-lg-5'>Next generation digital banking</motion.h1>
                        <motion.p variants={elementsVariants} className='py-3'>
                            Take your financial life online. Your Easybank account will be a one-stop-shop for
                            spending, saving, budgeting, investing, and mush more.
                        </motion.p>
                        <button className="req-btn mb-lg-1 mb-5">Request invite</button>

                    </motion.div>
                    <div className="mockup-section" >
                        <motion.img src={require('../images/image-mockups.png')} className='c-img  ' alt="" initial={{opacity : 0}} animate={{opacity :1}} transition={{duration:2}} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;