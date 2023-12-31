'use client'
import { motion } from "framer-motion"
import { skillsData } from "../../lib/data"

export const Skills = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40  scroll-mt-28"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        id='skills'
        >
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">Skills</h2>
            <ul className="flex flex-wrap justify-center text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <li className="bg-white border border-black-[0.1] rounded-xl px-5 py-3 hover:bg-gray-100 m-[0.2rem] hover:default" key={index}>
                            {skill}
                        </li>
                    ))
                }
            </ul>


        </motion.section>
    )
}