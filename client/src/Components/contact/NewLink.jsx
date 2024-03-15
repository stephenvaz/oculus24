import React from "react";
import {
    SiAdobe,
    SiApple,
    SiFacebook,
    SiGoogle,
    SiLinkedin,
    SiShopify,
    SiSoundcloud,
    SiSpotify,
    SiTiktok,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';

export const NewLink = () => {
    return (
        <div className="px-4 py-12">
            <ClipPathLinks />
        </div>
    );
};

const ClipPathLinks = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center">
            <div className="grid grid-cols-1 md:w-1/2 w-full divide-y divide-white border border-white z-[1001]">
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30157.16831844859!2d72.836115!3d19.123178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1710524261737!5m2!1sen!2sin'
                    className='w-full h-full'
                    style={{ borderRadius: '4px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="divide-y divide-white border border-white">
                <div className="grid grid-cols-1 divide-x divide-white text-white">
                    <TextBox Icon={SiGoogle} text={'Location'} href="https://www.google.com/maps?ll=19.123178,72.836115&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=1596119649840934506" />
                    {/* <TextBox Icon={SiShopify} text={'Prathamesh Paradkar'} href="#" /> */}
                </div>
                <div className="grid grid-cols-3 divide-x divide-white text-white">
                    <LinkBox Icon={InstagramIcon} text={'o.c.u.l.u.s_s.p.i.t'} href="#" />
                    <LinkBox Icon={LinkedInIcon} text={'Oculus S.P.I.T.'} href="#" />
                    <LinkBox Icon={XIcon} text={'OculusSeesAll'} href="#" />
                </div>
                <div className="grid grid-cols-1 divide-x divide-white text-white">
                    <TextBox Icon={SiGoogle} text={'Email us at:'} href="#" />
                    {/* <TextBox Icon={SiShopify} text={'Nishant Chandeliya'} href="#" /> */}
                </div>
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, text, href }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e) => {
        const box = e.target.getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: "left",
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: "right",
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: "top",
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: "bottom",
        };

        const sortedProximity = [
            proximityToLeft,
            proximityToRight,
            proximityToTop,
            proximityToBottom,
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    const handleMouseEnter = (e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    return (
        <a
            // href={href}
            onMouseEnter={(e) => {
                handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
            className="cursor-pointer relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
            onClick={() => {
                if (text === 'o.c.u.l.u.s_s.p.i.t') {
                    window.open("https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/", "_blank");
                }
                else if (text === 'Oculus S.P.I.T.') {
                    window.open("https://www.linkedin.com/company/oculusseesall/", "_blank");
                }
                else {
                    window.open("https://twitter.com/oculusseesall?s=11&t=31V3U_6dN4dxqr_7A3vyaA", "_blank");
                }
                }
            }
        >
            {text === 'OculusSeesAll' ? (<Icon className="!text-2xl sm:!text-4xl lg:!text-[38px]" />) : (<Icon className="!text-2xl sm:!text-4xl lg:!text-5xl" />)}

            <div
                ref={scope}
                style={{
                    clipPath: BOTTOM_RIGHT_CLIP,
                }}
                className="absolute inset-0 grid place-content-center bg-purple-900 text-white"
            >
                {/* <Icon className="text-xl sm:text-3xl md:text-4xl" /> */}
                <div className="w-full flex flex-col items-center gap-2">
                    {/* <Icon className="!text-2xl sm:!text-4xl lg:!text-5xl" /> */}
                    <span>
                        {text}
                    </span>
                </div>
            </div>
        </a>
    );
};

const TextBox = ({ Icon, text, href }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e) => {
        const box = e.target.getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: "left",
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: "right",
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: "top",
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: "bottom",
        };

        const sortedProximity = [
            proximityToLeft,
            proximityToRight,
            proximityToTop,
            proximityToBottom,
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    const handleMouseEnter = (e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    return (
        <a
            // href={href}
            onMouseEnter={(e) => {
                handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
            onClick={() => {
                if (text === 'Location') {
                    window.open(href, "_blank");
                }
                else {
                    // send email
                    window.location.href = `mailto:oculus_thefest@spit.ac.in`
                }
            }}
            className="cursor-pointer relative grid h-20 w-full text-center font-semibold place-content-center sm:h-28 md:h-36"
        >
            {/* <Icon className="text-xl sm:text-3xl lg:text-4xl" /> */}
            <div className="w-full flex flex-col items-center sm:gap-2">
                <span className={`text-2xl x2s:text-lg x1s:text-base font-bold ${text === 'Location' ? ' flex items-center gap-1' : ''}`}>
                   {/* {text === 'Location' && <PlaceIcon sx={{ fontSize: "30px" }} />}  */}
                   {text}
                </span>
                <span className={`x2s:text-sm x1s:text-xs ${text === 'Location' ? "px-2" : ""}`}>
                    {text !== 'Location' ? "oculus_thefest@spit.ac.in" : "Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058"}
                </span>
            </div>

            <div
                ref={scope}
                style={{
                    clipPath: BOTTOM_RIGHT_CLIP,
                }}
                className="absolute inset-0 grid place-content-center bg-purple-900 text-white"
            >
                {/* <Icon className="text-xl sm:text-3xl md:text-4xl" /> */}
                <div className="w-full flex flex-col items-center gap-2">
                    <span  className={`text-2xl x2s:text-lg x1s:text-base`}>
                        {text}
                    </span>
                    <span className="px-2 x2s:text-sm x1s:text-xs" >
                        {text !== 'Location' ? "oculus_thefest@spit.ac.in" : "Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058"}
                    </span>
                </div>
            </div>
        </a>
    );
};