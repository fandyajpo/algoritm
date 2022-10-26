import Link from "next/link";
import { Python } from "public/svg";
import { motion } from "framer-motion";
export default function Perkenalan() {
  return (
    <div className="bg-white w-full h-screen flex flex-col md:flex-row pt-16 md:pt-0 md:px-64 justify-between items-center overflow-hidden relative">
      <motion.div layoutId="python" className="w-44 h-44 md:w-96 md:h-96">
        <Python />
      </motion.div>
    </div>
  );
}
