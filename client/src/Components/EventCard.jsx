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
            className='w-full'
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
                <motion.img
                    src={event.img_front}
                    alt='event'
                    className='w-full object-contain'
                />
                <motion.img
                    src={event.img_back}
                    alt='event'
                    className='w-full object-contain'
                />
            </ReactCardFlip>
        </motion.div>
    );
};

export default EventCard;
