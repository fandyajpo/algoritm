import { Python } from "public/svg";
import { motion } from "framer-motion";
import Link from "next/link";
export default function PengertianPython() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col md:flex-col lg:flex-col-reverse pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full px-4 md:px-0 md:w-full lg:w-2/4 h-full flex flex-col gap-y-4 items-center justify-center"
      >
        <div className="flex flex-row gap-x-2 items-center">
          <p className="text-9xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-blue-500">
            .py
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="apapython"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-blue-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"apapython"}>
              <a>Apa itu Python?</a>
            </Link>
          </motion.div>
          <motion.div
            layoutId="multiplatform"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -70 }}
            transition={{ delay: 0.5 }}
            className="w-72 h-14 bg-blue-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"multiplatform"}>
              <a>Multi Platform?</a>
            </Link>
          </motion.div>
          <motion.div
            layoutId="datatype"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ delay: 0.8 }}
            className="w-72 h-14 bg-blue-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"datatype"}>
              <a>Data type cuy</a>
            </Link>
          </motion.div>
        </div>
        <motion.div
          layoutId="python"
          className="w-44 h-44 md:w-96 md:h-96 absolute hidden md:hidden lg:block md:absolute lg:relative top-4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ delay: 0.1 }}
        >
          <Python />
        </motion.div>
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="variable"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ delay: 1 }}
            className="w-72 h-14 bg-yellow-300 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"variable"}>
              <a>Variable = ???</a>
            </Link>
          </motion.div>
          <motion.div
            layoutId="ifelse"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 70 }}
            transition={{ delay: 1.3 }}
            className="w-72 h-14 bg-yellow-300 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"ifelse"}>
              <a> Condition If - else</a>
            </Link>
          </motion.div>
          <motion.div
            layoutId="runpy"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 20 }}
            transition={{ delay: 1.5 }}
            className="w-72 h-14 bg-orange-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            <Link href={"runpython"}>
              <a>Run my python</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
