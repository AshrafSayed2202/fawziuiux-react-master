import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useScroll, useTransform } from 'framer-motion';
import './HomeStyle.css'
import './normalize.css'
import Nav from '../components/Nav'
import Cursor from '../components/Cursor'
import CursorProvider, { useCursor } from '../components/CursorProvider'
import AboutTitle from '../components/AboutTitle'
import figure from '../assets/figure.png'
import skillsFigure from '../assets/skills-figure.png'
import wave1 from '../assets/wave1.svg'
import SkillItem from '../components/SkillItem';

import Figma from '../assets/logos/Figma.png'
import Sketch from '../assets/logos/Sketch.png'
import AdobeXD from '../assets/logos/AdobeXD.png'
import AdobeIllustrator from '../assets/logos/AdobeIllustrator.png'
import CounterOne from '../assets/counter-one.png'
import CounterTwo from '../assets/counter-two.png'
import CounterThree from '../assets/counter-three.png'


import one from '../assets/certficates/one.png'
import two from '../assets/certficates/two.png'
import three from '../assets/certficates/three.png'
import four from '../assets/certficates/four.png'
import PortfolioCard from '../components/PortfolioCard';


import ClientComment from '../components/ClientComment';
import clientOne from '../assets/clients/1.png';
import clientTwo from '../assets/clients/2.png';
import clientThree from '../assets/clients/3.png';
import clientFour from '../assets/clients/4.png';
import clientFive from '../assets/clients/5.png';

import PricingCard from '../components/PricingCard';

import HireMe from '../assets/HireMe.png'
import HireFigure from '../assets/HireFigure.png'

import wave2 from '../assets/wave2.svg'
import wave3 from '../assets/wave3.svg'

import SectionHeader from '../components/SectionHeader';

import formWP from '../assets/formwp.png'
import closeForm from '../assets/subtract.png'
import rocketForm from '../assets/light.png'
import verified from '../assets/verified.png'
function FormPopup(props) {
    const [submitting, setSubmitting] = React.useState(false);
    const [succeeded, setSucceeded] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://dashboard.fawziuiux.com/api/contact", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setSucceeded(true);
                setErrors({});
            } else {
                const errorData = await response.json();
                setErrors(errorData.errors || {});
            }
        } catch (error) {
            setErrors({ form: error.message });
        } finally {
            setSubmitting(false);
        }
    };

    const validateInputs = (e) => {
        e.preventDefault();
        const fields = ['first-name', 'last-name', 'email', 'phone', 'message'];
        let allValid = true;

        fields.forEach((field) => {
            const input = document.getElementById(field);
            if (input.value.length === 0) {
                input.classList.add('wrong-input');
                input.focus();
                allValid = false;
            } else {
                input.classList.remove('wrong-input');
                input.classList.add('right-input');
            }
        });

        if (allValid) {
            handleSubmit(e);
        }
    };

    const onInput = (e) => {
        if (e.target.value.length > 0) {
            e.target.classList.remove('wrong-input');
            e.target.classList.add('right-input');
        } else {
            e.target.classList.add('wrong-input');
            e.target.classList.remove('right-input');
        }
    };

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
        document.body.style.userSelect = "none";
    };

    const enableScroll = () => {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        document.body.style.userSelect = "auto";
    };

    React.useEffect(() => {
        disableScroll();
        return () => enableScroll();
    }, []);

    if (succeeded) {
        return (
            <div style={{ cursor: 'pointer' }} className='form-container' onClick={() => { enableScroll(); props.toggleForm(); }}>
                <motion.img
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    whileInView={{ opacity: 1 }}
                    src={formWP} alt='formWP' id='contact-form-wp' draggable='false' />
                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className='contact-form thank-message'>
                    <img src={verified} alt='verified' />
                    <h1>Thank you for reaching out!</h1>
                    <h3>We appreciate your interest and will be in touch with you soon.</h3>
                </motion.div>
            </div>
        );
    }

    return (
        <div className='form-container'>
            <motion.img
                initial={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1 }}
                src={formWP} alt='formWP' id='contact-form-wp' draggable='false' />
            <motion.form
                initial={{ y: -500, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="contact-form" onSubmit={validateInputs}
            >
                <img src={closeForm} alt='close-form' className='close-form' onClick={() => { enableScroll(); props.toggleForm(); }} />
                <h1>Let's connect</h1>
                <h3>Get in Touch with Us and Let Our Combined Creativity Shine.</h3>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="personal">
                    <div className="input-field">
                        <input type="text" name="first_name" placeholder='First Name' id='first-name' onInput={onInput} />
                        {errors['first-name'] && <div className="error">{errors['first-name']}</div>}
                    </div>
                    <div className="input-field">
                        <input type="text" name="last_name" placeholder='Last Name' id='last-name' onInput={onInput} />
                        {errors['last-name'] && <div className="error">{errors['last-name']}</div>}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    whileInView={{ y: 0, opacity: 1 }}>
                    <div className="input-field">
                        <input type="email" name="email" placeholder='Email' id='email' onInput={onInput} />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    whileInView={{ y: 0, opacity: 1 }}>
                    <div className="input-field">
                        <input type="text" name="phone" placeholder='Phone Number' id='phone' onInput={onInput} />
                        {errors.phone && <div className="error">{errors.phone}</div>}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 2.2 }}
                    whileInView={{ y: 0, opacity: 1 }}>
                    <div className="input-field">
                        <textarea type="text" name="message" rows="5" cols="50" placeholder='Message' id='message' onInput={onInput} />
                        {errors.message && <div className="error">{errors.message}</div>}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 2.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    <div className="submit">
                        <button disabled={submitting} type='submit'><img src={rocketForm} alt='rocket-form' className='plane-first' /> Send it to craft the Magic <img src={rocketForm} alt='rocket-form' className='plane-second' /></button>
                        {errors.form && <div className="error">{errors.form}</div>}
                    </div>
                </motion.div>
            </motion.form>
        </div>
    );
}
function HeroSection() {
    const NameSection = React.useRef()
    const FigureRef = React.useRef()
    const { scrollYProgress } = useScroll({
        target: FigureRef,
        offset: ['0 0', '1 1']
    })
    const zIndexProgres = useTransform(scrollYProgress, [0, 1], [-1, 4])
    React.useEffect(() => {
        NameSection.current.childNodes[0].animate({
            top: '0px',
            opacity: 1
        }, { duration: 1000, delay: 1000, fill: "forwards" })
        NameSection.current.childNodes[1].animate({
            bottom: '0px',
            opacity: 1
        }, { duration: 1000, delay: 1000, fill: "forwards" })
    }, [])
    const { setCursorSize } = useCursor()
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    const GenerateName = (props) => {
        let letters = props.name.split('')
        let spans = []
        letters.forEach(e => {
            spans.push(<span className='name-letter' key={e}>{e}</span>)
        });
        let singleData = {
            translateProgres: []
        }
        switch (props.name) {
            case 'Fáwzi':
                singleData['translateProgres'] = ['-250px 0px', '0px 0px']
                break;
            case 'Sayéd':
                singleData['translateProgres'] = ['250px 0px', '0px 0px']
                break;
            default:
                break;
        }
        const translateProgres = useTransform(scrollYProgress, [0, 1], singleData.translateProgres)
        return (
            <motion.div style={{ translate: translateProgres }} className='name-letters'>
                {spans}
            </motion.div>
        )
    }
    const windowHeight = window.innerHeight
    return (
        <div className='hero-section' id='Home' style={{ height: windowHeight + 'px' }}>
            <div className='name-container' ref={NameSection}>
                <motion.span style={{ zIndex: zIndexProgres }} className='first-name' onMouseEnter={(e) => { changeCursorSize('100px') }} onMouseLeave={(e) => { changeCursorSize('0px') }} ><GenerateName name='Fáwzi' /></motion.span>
                <motion.span style={{ zIndex: zIndexProgres }} className='second-name' onMouseEnter={(e) => { changeCursorSize('100px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}><GenerateName name='Sayéd' /></motion.span>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className='figure-container'>
                <img src={wave1} alt='wave1' className='wave' />
                <img src={figure} alt='figure' className='figure' />
            </motion.div>
            <div ref={FigureRef} className='figure-stand'></div>
        </div>
    )
}
function AboutSection() {
    const { setCursorSize } = useCursor()
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    const ref = React.useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '0 0.5']
    })
    const translateProgres1 = useTransform(scrollYProgress, [0, 1], ['-200px', '0px'])
    const translateProgres2 = useTransform(scrollYProgress, [0, 1], ['-200px', '0px'])
    const translateProgres3 = useTransform(scrollYProgress, [0, 1], ['100px', '0px'])
    return (
        <div className='about-section'>
            <AboutTitle name='Ui/Ux' />
            <AboutTitle name='Designer' />
            <AboutTitle name='+' />
            <AboutTitle name='Creative' />
            <AboutTitle name='Product' />
            <AboutTitle name='Lead' />
            <motion.div className='about-text' ref={ref} style={{ opacity: scrollYProgress, translateY: translateProgres1 }} id='About'>
                <motion.p className='greeting' style={{ translateX: translateProgres2, transition: '0.2s' }}>I'm Fawzi Sayed</motion.p>
                <motion.p style={{ translateX: translateProgres2, transition: '0.3s' }} className='about-block'>A Ui/Ux designer and product designer. Passionate about crafting unforgettable experiences and providing companies with innovative, user-centric solutions for nearly a decade.</motion.p><br />
                <motion.p style={{ translateX: translateProgres2, transition: '0.4s' }} className='about-block'>Collaborating with global brands and agencies, I specialize in designing and developing websites and applications that prioritize interaction, motion, and visual engagement.</motion.p><br />
                <motion.p style={{ translateX: translateProgres2, transition: '0.5s' }} className='about-block'>My work has been on converting complex issues into straightforward, user-friendly solutions that were accessible to everyone.</motion.p><br />
                <motion.p style={{ translateY: translateProgres3, }} className='get-in' onMouseEnter={(e) => { changeCursorSize('60px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}>Get in touch <FontAwesomeIcon className='contact-icon' icon="fa-solid fa-arrow-right" /></motion.p>
            </motion.div>
        </div >
    )
}
function SkillsAndEducation(props) {
    const [switchState, setSwitchState] = React.useState(false);
    const firstGroupRef = React.useRef(null)
    const secondGroupRef = React.useRef(null)
    React.useEffect(() => {
        if (switchState) {
            firstGroupRef.current.className = 'skills-group active';
            secondGroupRef.current.className = 'skills-group';
            setTimeout(() => {
                firstGroupRef.current.style.display = 'flex'
                secondGroupRef.current.style.display = 'none'
            }, 300);
        } else {
            secondGroupRef.current.className = 'skills-group active';
            firstGroupRef.current.className = 'skills-group';
            setTimeout(() => {
                secondGroupRef.current.style.display = 'flex'
                firstGroupRef.current.style.display = 'none'
            }, 300);
        }
    }, [switchState])
    function figureSwitchHover(data) {
        document.querySelectorAll('.figure-switch-btn').forEach((e) => {
            e.classList.remove('active')
            if (e.childNodes[0].data === data) {
                e.classList.add('active')
            }
        })
    }
    return (
        <div className='skills-container' id='Skills'>
            <div className='section-header-container'>
                <SectionHeader header='Skills & Education' sub="For those who know what they're looking for.." />
                <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" value={switchState} onChange={() => { setSwitchState(!switchState) }} />
                <label className="react-switch-label" htmlFor={`react-switch-new`}>
                    <p className='label-switch-text'>Skills</p>
                    <span className="react-switch-button" />
                    <p className='label-switch-text'>Education</p>
                </label>
            </div>
            <div className='skills-designer-text'>
                <span>DESIG</span>
                <span>NER</span>
            </div>
            <div className='table-container'>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='skills-figure'>
                    <img src={skillsFigure} alt='skills-figure' className='skills-figure-img' />
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        whileInView={{ opacity: 1 }}
                        className="react-switch-label figure-switch">
                        <p className='label-switch-text figure-switch-btn active' onMouseEnter={() => { figureSwitchHover("Portfolio") }} onClick={() => { document.getElementById('Portfolio').scrollIntoView() }}>Portfolio<FontAwesomeIcon className='figure-switch-icon' icon="fa-solid fa-arrow-right" /></p>
                        <p className='label-switch-text figure-switch-btn' onMouseEnter={() => { figureSwitchHover("Hire me") }} onClick={() => { props.toggleForm() }}>Hire me<FontAwesomeIcon className='figure-switch-icon' icon="fa-solid fa-arrow-right" /></p>
                    </motion.div>
                </motion.div>
                <div className='skills-text-section'>
                    <div className='skills-educations-container'>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className='skills-group' ref={firstGroupRef} >
                            <SkillItem textClass='education-text' nameClass='education-name' name='Advanced User Experience Design' sub='Udacity 2022' certficate={one} link='https://www.udacity.com/certificate/MKKTDJA5' />
                            <SkillItem textClass='education-text' nameClass='education-name' name='User Experience Nanodegree' sub='Udacity 2022' certficate={two} link='https://www.udacity.com/certificate/MKKTDJA5' />
                            <SkillItem textClass='education-text' nameClass='education-name' name='UX Design Fundamentals' sub='Mhara-Tech 2022' certficate={three} link='https://maharatech.gov.eg/mod/customcert/view.php?id=9542&downloadown=1' />
                            <SkillItem textClass='education-text' nameClass='education-name' name='Google UX Design Professional' sub='Coursera 2023' certficate={four} link='https://coursera.org/verify/WBGJ86PNSBKQ' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className='skills-group' ref={secondGroupRef} >
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='FIGMA' sub='01' icon={Figma} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='SKETCH' sub='02' icon={Sketch} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='ADOBE XD' sub='03' icon={AdobeXD} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='ADOBE ILLUSTRATOR' sub='04' icon={AdobeIllustrator} />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='counters-container'>
                        <img src={CounterOne} alt={CounterOne} />
                        <img src={CounterTwo} alt={CounterTwo} />
                        <img src={CounterThree} alt={CounterThree} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
function PortfolioSection(props) {
    const { portfolio } = props
    return (
        <div className='portfolio-container' id='Portfolio'>
            <div className='section-header-container'>
                <SectionHeader header='Portfolio & Projects' sub='Latest projects' />
            </div>
            <div className='portfolio-cards-container'>
                <PortfolioCard gridArea='1 / 1 / 2 / 2' delay={1.0} projectName={portfolio[0].title} link={portfolio[0].url} projectImage={portfolio[0].image_path} />
                <PortfolioCard gridArea='2 / 1 / 3 / 2' delay={1.3} projectName={portfolio[1].title} link={portfolio[1].url} projectImage={portfolio[1].image_path} />
                <PortfolioCard gridArea='3 / 1 / 4 / 2' delay={0.3} projectName={portfolio[2].title} link={portfolio[2].url} projectImage={portfolio[2].image_path} />
                <PortfolioCard gridArea='3 / 2 / 4 / 3' delay={1.4} projectName={portfolio[3].title} link={portfolio[3].url} projectImage={portfolio[3].image_path} />
                <PortfolioCard gridArea='3 / 3 / 4 / 5' delay={0.9} projectName={portfolio[4].title} link={portfolio[4].url} projectImage={portfolio[4].image_path} />
                <PortfolioCard gridArea='1 / 2 / 3 / 4' delay={0.5} projectName={portfolio[5].title} link={portfolio[5].url} projectImage={portfolio[5].image_path} />
                <PortfolioCard gridArea='1 / 4 / 3 / 5' delay={0.7} projectName={portfolio[6].title} link={portfolio[6].url} projectImage={portfolio[6].image_path} />
            </div>
        </div>
    )
}
function ClientsComments() {
    React.useEffect(() => {
        const comments = document.querySelector('.comments-container')
        const commentsContainers = [...comments.children]
        // // 
        commentsContainers.slice(0, 6).reverse().forEach(comment => {
            const htmlString = comment.outerHTML;
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const htmlObject = doc.body.firstChild;
            comments.insertAdjacentElement("afterbegin", htmlObject);
        })
        // // 
        commentsContainers.slice(0, 6).forEach(comment => {
            const htmlString = comment.outerHTML;
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const htmlObject = doc.body.firstChild;
            comments.insertAdjacentElement("beforeend", htmlObject);
        })
        let isDragging = false, startX, startScrollLeft;
        const dragStart = (e) => {
            isDragging = true;
            // 
            startX = e.pageX
            startScrollLeft = comments.scrollLeft;
            // 
            comments.classList.add('dragging')
        }
        const dragging = (e) => {
            if (!isDragging) return;
            comments.scrollLeft = startScrollLeft - (e.pageX - startX)
        }
        const dragStop = () => {
            isDragging = false;
            // 
            comments.classList.remove('dragging')
            // 
            refreshActiveComment()
        }
        const infiniteScroll = () => {
            if (comments.scrollLeft === 0) {
                comments.classList.add('no-trans')
                comments.scrollLeft = comments.scrollWidth - (2 * comments.offsetWidth)
                comments.classList.remove('no-trans')
            } else if (Math.ceil(comments.scrollLeft) === comments.scrollWidth - comments.offsetWidth) {
                comments.classList.add('no-trans')
                comments.scrollLeft = comments.offsetWidth
                comments.classList.remove('no-trans')
            }
        }
        comments.addEventListener('mousedown', dragStart)
        comments.addEventListener('mousemove', dragging)
        comments.addEventListener('mouseup', dragStop)
        comments.addEventListener('scroll', infiniteScroll)
        comments.addEventListener('touchend', () => { setTimeout(() => { refreshActiveComment() }, 700); })
        const refreshActiveComment = () => {
            document.querySelectorAll('.client-comment').forEach(e => {
                e.classList.remove('active')
                function inRange(x, min, max) {
                    return x >= min && x <= max;
                }
                function isElementCentered(element) {
                    const rect = element.getBoundingClientRect();
                    const windowCenter = window.innerWidth / 2;
                    return inRange(Math.trunc(rect.left + (rect.width / 2)), Math.trunc(windowCenter - 10), Math.trunc(windowCenter + 10));
                }
                if (isElementCentered(e)) {
                    e.classList.add('active')
                }
            })
        }
        refreshActiveComment()
    }, [])
    return (
        <>
            <img src={wave2} alt='wave2' className='wave2' />
            <div className='clients-container' id='Testimonial'>
                <div className='section-header-container'>
                    <SectionHeader header='What Clients Say' sub='Testimonials' />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='comments-container'>
                    <ClientComment personImage={clientOne} personName='Aziz Ben Naif' personTitle='CEO, AZ IT' comment='Working with Fawzi was an exceptional experience! His understanding of project details was outstanding, and the results exceeded our expectations. I highly recommend him to anyone looking for engaging and effective design solutions' />
                    <ClientComment personImage={clientTwo} personName='Charlotte Kelly' personTitle='Manager, TechGropse' comment='Fawzi is the best at what he does! His designs are clean, innovative, and user-friendly. He truly added value to our mobile app and received praise from all users.' />
                    <ClientComment personImage={clientThree} personName='Ibrahim Elhassan' personTitle='CEO, One Solution' comment='Fawzi has a unique eye for design and consistently turns ideas into creative realities. His professionalism and prompt responses made working with him a real pleasure.' />
                    <ClientComment personImage={clientFour} personName='Saghar Behjati' personTitle='Ui/Ux Designer' comment='I am impressed by Fawzi’s passion and his attention to detail. Every project we collaborate on turns out better than I could have ever expected. I can’t wait for our future projects.' />
                    <ClientComment personImage={clientFive} personName='Matt Bauman' personTitle='Manger, Numero' comment='Finding a designer who genuinely listens and understands your vision is outstanding. The delivered designs were exceptional, and the willingness to adapt and tweak ensured our complete satisfaction. Highly recommended for anyone seeking a distinguished design experience.' />
                </motion.div>
            </div>
            <img src={wave3} alt='wave3' className='wave3' />
        </>

    )
}
function PricingSection(props) {
    const { pricing } = props
    const [switchState, setSwitchState] = React.useState(false);
    const firstGroupRef = React.useRef(null)
    const secondGroupRef = React.useRef(null)
    React.useEffect(() => {
        if (switchState) {
            firstGroupRef.current.className = 'pricing-group active';
            secondGroupRef.current.className = 'pricing-group';
            setTimeout(() => {
                firstGroupRef.current.style.display = 'flex'
                secondGroupRef.current.style.display = 'none'
            }, 300);
        } else {
            secondGroupRef.current.className = 'pricing-group active';
            firstGroupRef.current.className = 'pricing-group';
            setTimeout(() => {
                secondGroupRef.current.style.display = 'flex'
                firstGroupRef.current.style.display = 'none'
            }, 300);
        }
    }, [switchState])
    return (
        <div className='pricing-container' id='Services'>
            <div className='section-header-container'>
                <SectionHeader header='Pricing' sub='Advantage' />
                <input className="react-switch-checkbox" id={`pricing-switch`} type="checkbox" value={switchState} onChange={() => { setSwitchState(!switchState) }} />
                <label className="react-switch-label" htmlFor={`pricing-switch`}>
                    <p className='label-switch-text'>Hourly</p>
                    <span className="react-switch-button pricing" />
                    <p className='label-switch-text'>Monthly</p>
                </label>
            </div>
            <div className='pricing-group' ref={secondGroupRef} >
                <PricingCard toggleForm={props.toggleForm} priceType='hourly' plan='Basic' head='Basic Plan' sub1='' sub2='/Hourly' sub3={`billed daily as $${pricing[0].periodically}`} price={pricing[0].price} delay={0.3} />
                <PricingCard toggleForm={props.toggleForm} priceType='hourly' plan='Standard' head='Standard Plan' sub1='Most Popular' sub2='/Hourly' sub3={`billed daily as $${pricing[1].periodically}`} price={pricing[1].price} delay={0.6} />
                <PricingCard toggleForm={props.toggleForm} priceType='hourly' plan='Pro' head='Pro Plan' sub1='Limited Edits' sub2='/Hourly' sub3={`billed daily as $${pricing[2].periodically}`} price={pricing[2].price} delay={0.9} />
                <PricingCard toggleForm={props.toggleForm} priceType='hourly' plan='Unlimited' head='Unlimited Plan' sub1='Unlimited Edits' sub2='/Hourly' sub3={`billed daily as $${pricing[3].periodically}`} price={pricing[3].price} delay={1.2} />
            </div>
            <div className='pricing-group' ref={firstGroupRef} >
                <PricingCard toggleForm={props.toggleForm} isFree='yes' priceType='monthly' plan='Basic' head='Not Sure?' sub1='' sub2='/No Time' sub3={`billed daily as $${pricing[4].periodically}`} price={pricing[4].price} delay={0.3} />
                <PricingCard toggleForm={props.toggleForm} isFree='no' priceType='monthly' plan='Standard' head='Part Time' sub1='Small Agencies' sub2='/Monthly' sub3={`billed daily as $${pricing[5].periodically}`} price={pricing[5].price} delay={0.6} />
                <PricingCard toggleForm={props.toggleForm} isFree='no' priceType='monthly' plan='Pro' head='Full Time' sub1='Medium companies' sub2='/Monthly' sub3={`billed daily as $${pricing[6].periodically}`} price={pricing[6].price} delay={0.9} />
                <PricingCard toggleForm={props.toggleForm} isFree='no' priceType='monthly' plan='Unlimited' head='Team Lead' sub1='International' sub2='/Monthly' sub3={`billed daily as $${pricing[7].periodically}`} price={pricing[7].price} delay={1.2} />
            </div>
        </div>
    )
}
function HireMeSection(props) {
    return (
        <div className='hire-container' id='Contact'>
            <img className='hire-cover' src={HireMe} alt='Hire Me' />
            <motion.img
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className='hire-figure' src={HireFigure} alt='Hire Figure' />
            <motion.div
                initial={{ opacity: 0, x: -200, y: '-70%' }}
                whileInView={{ opacity: 1, x: '20%', y: '-70%' }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='hire-text'>
                <h2>Have a Project?</h2>
                <h1>let's work together</h1>
                <span onClick={() => { props.toggleForm() }}>get in touch<span></span></span>
            </motion.div>
        </div>
    )
}
function FooterSection(props) {
    const { setCursorSize } = useCursor()
    return (
        <footer className='footer-container'>
            <div className='footer-text'>
                <div><h1 onMouseEnter={() => { setCursorSize('70px') }} onMouseLeave={() => { setCursorSize('0px') }}>fawzi ui ux</h1></div>
                <div>
                    <h2>fast links</h2>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Testimonial">Testimonial</a></li>
                        <li><a href="#Services">Pricing</a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h2>contact us</h2>
                    <p><FontAwesomeIcon icon="fa-regular fa-file-pdf" /><a href={props.contact.cv} target='_blanc'>View CV</a></p>
                    <p><FontAwesomeIcon icon="fa-solid fa-phone" /><a href={`https://wa.me/${props.contact.phone}`} target='_blanc'>{props.contact.phone}</a></p>
                    <p><FontAwesomeIcon icon="fa-regular fa-envelope" /><a href={`mailto:${props.contact.email}`}>{props.contact.email}</a></p>
                </div>
                <div className='footer-socials'>
                    <h2>Socials</h2>
                    <a href={props.contact.instagram} target='_blanc'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href={props.contact.linkedin} target='_blanc'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                    <a href={props.contact.behance} target='_blanc'><FontAwesomeIcon icon="fa-brands fa-behance" /></a>
                    <a href={props.contact.dribbble} target='_blanc'><FontAwesomeIcon icon="fa-brands fa-dribbble" /></a>
                </div>
            </div>
            <div className='copyright'>
                <p>Fawzi ui ux© 2024.All Rights Reserved</p>
                <p>Developed by: <a href='https://www.linkedin.com/in/ashraf-sayed22/' target='_blanc'>Ashraf Sayed</a></p>
            </div>
        </footer>
    )
}
function Home() {
    const [formShow, setFormShow] = React.useState(false)
    function toggleForm() {
        setFormShow(!formShow)
    }
    const [contact, setContact] = React.useState([]);
    const [pricing, setPricing] = React.useState([]);
    const [portfolio, setPortfolio] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [errors, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const contactResponse = fetch('https://dashboard.fawziuiux.com/api/data');
                const pricingResponse = fetch('https://dashboard.fawziuiux.com/api/pricing');
                const portfolioResponse = fetch('https://dashboard.fawziuiux.com/api/portfolio');
                const [contactResult, pricingResult, portfolioResult] = await Promise.all([
                    contactResponse, pricingResponse, portfolioResponse
                ]);
                if (!contactResult.ok || !pricingResult.ok || !portfolioResult.ok) {
                    throw new Error('Failed to fetch data from one or more APIs');
                }
                const contactData = await contactResult.json();
                const pricingData = await pricingResult.json();
                const portfolioData = await portfolioResult.json();
                setContact(contactData);
                setPricing(pricingData);
                setPortfolio(portfolioData);
            } catch (error) {
                setError(error.message);
                console.log(errors);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [errors]);
    if (loading) return <span className='loader'></span>;
    return (
        <CursorProvider>
            <Cursor />
            <div className='home-load'>
                {formShow ? <FormPopup toggleForm={toggleForm} /> : null}
                <Nav toggleForm={toggleForm} contact={contact.data} />
                <HeroSection />
                <AboutSection />
                <SkillsAndEducation toggleForm={toggleForm} />
                <PortfolioSection portfolio={portfolio.data} />
                <ClientsComments />
                <PricingSection toggleForm={toggleForm} pricing={pricing.data} />
                <HireMeSection toggleForm={toggleForm} />
                <FooterSection contact={contact.data} />
            </div>
        </CursorProvider>
    )
}
export default Home