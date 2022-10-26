import Image from "next/image";
import BapakPython from "public/bapakpython.jpg";
import { motion } from "framer-motion";

export default function ApaPython() {
  return (
    <div className="bg-gray-800 w-full h-screen overflow-y-scroll flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="apapython"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Apa itu Python?
          </motion.div>

          <div className="w-full flex flex-row items-center gap-x-8">
            <div className="w-72 h-72 flex flex-row items-center">
              <Image src={BapakPython} />
            </div>
            <p className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Guido van Rossum
            </p>
          </div>
          <hr />
          <p className="text-violet-500 text-6xl font-bold">
            <span className="text-white bg-yellow-600 p-2 rounded-full">
              Python
            </span>{" "}
            adalah bahasa pemrograman yang digunakan untuk menciptakan aplikasi,
            perintah komputer, dan melakukan analisis data.
          </p>

          <p className="text-violet-200 text-6xl font-bold">
            Python bisa digunakan untuk membuat program apa saja dan
            menyelesaikan berbagai permasalahan. Selain itu, Python juga dinilai
            mudah untuk dipelajari. Namun, jangan salah, Python termasuk bahasa
            pemrograman tingkat tinggi. Mulai dari profesi back-end
            developer,sampai data scientist, Python benar-benar menjadi pilihan
            favorite
          </p>
          <p className="text-yellow-500 text-6xl font-bold">
            Selain python, masih banyak lagi bahasa pemrograman lainnya seperti{" "}
            Typescript
          </p>
        </div>
      </div>
    </div>
  );
}
