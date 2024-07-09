/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full relative"
                    >
                        <img src="/images/matrix.gif" alt="Animation" className="h-full w-full object-cover" />
                    </motion.div>
                )
            })}
        </>
    )
};

export default Stairs;