import React, { useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleMouseEnter = () => {
        if (!isFlipped) {
            setIsFlipped(true);
        }
    };

    const handleMouseLeave = () => {
        if (isFlipped) {
            setIsFlipped(false);
        }
    };

    const handleTap = (id) => {
        if (isFlipped) {
            setIsFlipped(false);
            setTimeout(() => {
                window.location.href = `/event/${id}`;
            }, 600); 
        } else {
            window.location.href = `/event/${id}`;
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={handleMouseEnter}
            onHoverEnd={handleMouseLeave}
            onTap={() => handleTap(event.id)}
            transition={{duration: 0.6}}
            className='grid place-content-center'
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
                <motion.img
                    src={event.img_front}
                    alt='event'
                    className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover'
                />
                <motion.img
                    src={event.img_back}
                    alt='event'
                    className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover'
                />
            </ReactCardFlip>
        </motion.div>
    );
};

export default EventCard;
