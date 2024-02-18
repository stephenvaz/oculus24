import React, { useState, useRef, useEffect } from "react";
import { useMotionValue, motion, useSpring, useTransform, useCycle } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../redux/uislice";
import { Sling as Hamburger } from 'hamburger-react';
import logo from '../assets/Full White.png';
import { useNavigate } from "react-router-dom";
import { setNavBar } from "../redux/uislice";
import Center from "../animated-components/Center";
import { RiLoginCircleLine } from "react-icons/ri";
import { auth, provider, db } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { getUser, setUser } from "../redux/userslice";
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';



export const NavBarv2 = () => {
    const [currPath, setCurrPath] = useState(window.location.pathname)
    const [currWidth, setCurrWidth] = useState(window.innerWidth)
    const navigate = useNavigate()
    const isNavBarOpen = useSelector(state => state.ui.isNavBarOpen)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        setCurrPath(window.location.pathname)
    }, [currPath, window.location.pathname])

    useEffect(() => {
        // console.log(currWidth)
        setCurrWidth(window.innerWidth)
    }, [currWidth, window.innerWidth])

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('user'))
        console.log("userget", user)
        if (user) {
            dispatch(setUser(user))
        }
    }, [])

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(setUser(user))
                console.log(user)
                // alert("Logged in successfully" + user.displayName)
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (!userDoc.exists()) {
                    await setDoc(userDocRef, {
                    name: user.displayName,
                    id: user.uid,
                    email: user.email,
                    transactions: [],
                    });
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <>
            <Center>
                <button
                    onClick={() => {
                        navigate('/')
                        dispatch(setNavBar(false))
                    }}
                    style={{
                        display: (currPath !== '/' || isNavBarOpen) ? "block" : "none",
                        zIndex: 1000
                    }}     
                className="fixed top-[-10px] left-4">
                    <img src={logo} alt="" className="w-48" />
                </button>
            </Center>
                <div className="fixed top-4 right-4 flex flex-row space-x-4 z-[2000]">
                    {!user ? (
                         <div className={`flex items-center bg-white bg-opacity-10 rounded-full ${currWidth > 400 ? "px-4" : "px-3"} hover:bg-opacity-25`}
                         onClick={handleLogin}
                     >
                         <RiLoginCircleLine className=""   size={currWidth < 768 ? 25 : 35} color="#C77DFF"/>
                     </div>
                    ) : (
                        <div className={`flex items-center bg-white bg-opacity-10 rounded-full ${currWidth > 400 ? "px-4" : "px-4"} hover:bg-opacity-25 text-white text-4xl`}
                            style={{
                                color: "#C77DFF"
                            }}
                            onClick={() => {
                                localStorage.clear()
                                dispatch(setUser(null))
                            }}
                        > 
                            {user.displayName.charAt(0)}
                        </div>
                       

                    )}
                   
                    <div className={` bg-white bg-opacity-10 rounded-full ${currWidth > 400 ? "p-2" : "p-0"} hover:bg-opacity-25`}>
                        <Hamburger rounded duration={0.5} size={currWidth < 768 ? 20 : 25} easing="ease-in" color="#C77DFF" toggled={isNavBarOpen} toggle={() => dispatch(toggleNavBar())} />
                    </div>
                </div>
            <motion.div
                style={{
                    display: isNavBarOpen ? "block" : "none",
                }}
                animate={{
                    width: isNavBarOpen ? "100%" : "0%",
                    display: isNavBarOpen ? "block" : "none",
                    opacity: isNavBarOpen ? 1 : 0,
                    left: isNavBarOpen ? "0px" : "100%",

                    transition: {
                        duration: 1,
                        type: "spring",
                        damping: 30,
                    },
                }}
                className="bg-neutral-950 p-4 md:p-8 sm:mt-8 md:mt-8 mt-12">
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -200,
                            // y: -200,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            // y: 0,
                        },
                    }}
                    transition={{
                        duration: 0.75,
                        delay: 0.2,
                        ease: 'easeIn',
                    }}
                    // initial="hidden"
                    // animate="visible"
                    // exit="hidden"
                    className="container mx-auto max-w-5xl">
                    <Link
                        heading="Events"
                        subheading="Learn what we do here"
                        imgSrc="/about.webp"
                        href="/events"
                    />
                    <Link
                        heading="Sponsors"
                        subheading="We work with great people"
                        imgSrc="/sponsors.webp"
                        href="/sponsors"
                    />
                    <Link
                        heading="Contact"
                        subheading="Get in touch with us"
                        imgSrc="/contact.webp"
                        href="/contact"
                    />
                    <Link
                        heading="Schedule"
                        subheading="See what's coming up"
                        imgSrc="/schedule.webp"
                        href="/schedule"
                    />
                    <Link
                        heading="Donations"
                        subheading="Donate for a good cause"
                        imgSrc="/donation.webp"
                        href="/donation"
                    />
                    <Link
                        heading="Login"
                        subheading="Get Started"
                        imgSrc="/login.webp"
                        href="/login"
                    />
                </motion.div>
            </motion.div>
        </>
    )


};

const Link = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            exit={{ opacity: 0 }}
            className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 text-white"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
                    {subheading}
                </span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};