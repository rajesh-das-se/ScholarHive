import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Page404 = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AlertCircle size={80} className="text-red-500 mb-6" />
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2 text-gray-700">Oops! The page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default Page404;
