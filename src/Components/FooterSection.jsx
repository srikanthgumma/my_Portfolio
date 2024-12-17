import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="px-6 sm:px-10 md:px-16 py-6 bg-gray-100 dark:bg-gray-800 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration:5, ease: 'easeInOut', repeat: Infinity,
        repeatType: 'loop', }}
    >
      <p className="dark:text-white text-black">
        © 2022 Srikanth Gummadi | Frontend Developer | UI Designer | Designed by @Srikanth Gummadi
      </p>
    </motion.footer>
  );
};

export default Footer;
