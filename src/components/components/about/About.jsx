import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="flex bg-gray-800 w-full justify-center items-center lg:py-10 md:py-8 sm:py-4 py-3">
      <div className="max-w-6xl sm:flex justify-evenly items-center w-full sm:gap-10 gap-0 md:px-0 px-3">
        <motion.div
          className="md:w-full shadow-sm  rounded-md"
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1 className="sm:font-bold font-semibold lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl text-4xl pb-1 mb-5 sm:mt-0 mt-4 italic">
            <span className="border-b-4 border-[#005BBB] pb-0 pe-3">αᑲⱺυ𝗍</span><span
            className='text-[#005BBB]'> ꭑ𝖾</span>
          </h1>
          <p className="text-lg leading-relaxed">
            I am a passionate professional dedicated to staying up-to-date with the latest industry trends and developments. With a keen eye for detail and a commitment to delivering exceptional work, I continuously strive to enhance my skills and knowledge to provide valuable insights and solutions.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            In my role, I leverage my expertise to help clients navigate the ever-evolving landscape of the industry, ensuring they stay ahead of the curve. My ability to adapt to changing needs and my dedication to providing personalized service have earned me a reputation for excellence.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;