import Link from "next/link";
import { Play, Python } from "public/svg";
import { motion } from "framer-motion";
import Image from "next/future/image";
import Kucing from "public/kucing.jpeg";
const ourDb = [
  {
    name: "Jun Pasek",
    initial: "J",
    status: "Ju Juan",
    image: Kucing,
  },
  {
    name: "Dwija",
    initial: "D",
    status: "Happy meal!",
    image: Kucing,
  },
  {
    name: "Fandy ",
    initial: "F",
    status: "Front end Dev",
    image: Kucing,
  },
];

export default function Perkenalan() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col md:flex-col lg:flex-row pt-16  md:pt-16 lg:pt-0 md:px-24 lg:px-64 gap-x-20 items-center relative">
      <motion.div
        layoutId="python"
        className="w-44 h-44 md:w-96 md:h-96 relative"
      >
        <Link href={"topic"}>
          <a className="absolute bg-white w-14 h-14 top-4 right-4 rounded-full flex items-center justify-center">
            <Play className={`w-8 h-8`} />
          </a>
        </Link>
        <Python />
      </motion.div>

      <div className="w-full px-4 md:px-0 md:w-full lg:w-2/4 h-full flex flex-col gap-y-4 items-center justify-center">
        {ourDb.map(({ name, initial, status }) => {
          return (
            <motion.div
              className="group bg-blue-300 w-full h-24 md:h-44 rounded-3xl flex items-center overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 md:w-28 md:h-28 group-hover:mx-0 group-hover:rounded-none rounded-full mx-4 md:mx-6 bg-blue-500 flex items-center text-white justify-center font-bold text-base md:text-3xl group-hover:w-full group-hover:h-full duration-1000">
                {initial}
              </div>
              <div className="group-hover:w-0 group-hover:opacity-0 duration-1000">
                <p className="text-base md:text-3xl font-bold text-blue-900">
                  {name}
                </p>
                <p className="text-gray-800">{status}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
