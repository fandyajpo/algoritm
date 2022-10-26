import { motion } from "framer-motion";

export default function DataType() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="runpy"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Run my program
          </motion.div>
          <hr />
          <p className="text-blue-200 text-6xl font-bold">
            Disini saya pake python3
          </p>
          <p className="text-blue-200 text-6xl font-bold">
            Jadi untuk run programnya dengan cara ketik di terminal seperti ini
          </p>
          <div className="bg-black p-9 w-fit text-7xl  text-green-500">
            <code className="animate-pulse">python3 nama_file.py</code>
          </div>
        </div>
      </div>
    </div>
  );
}
