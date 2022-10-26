import Link from "next/link";
import { Python } from "public/svg";
import { motion } from "framer-motion";
export default function Start() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col gap-y-24 justify-center items-center overflow-hidden relative">
      <motion.div layoutId="python" className="w-52 h-52">
        <Python />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href={"kenalankuy"}>
          <a className="bg-cyan-700 px-6 py-3 md:px-8 md:py-4 drop-shadow-md text-base md:text-3xl font-bold text-white rounded-full">
            Get Started
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
