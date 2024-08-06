"use client";
import { motion } from "framer-motion";
const Course = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition:{ delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
        >
            <div className="container mx-auto">
                <h1>curso</h1>
            </div>

        </motion.div>
    )
}

export default Course;