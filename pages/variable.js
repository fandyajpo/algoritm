import { motion } from "framer-motion";
import Image from "next/image";
import Mutable from "public/pythonmutable.png";
import Mutable2 from "public/pythonmutable2.png";

export default function Variable() {
  return (
    <div className="bg-gray-800 w-full overflow-y-scroll h-screen flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-8 px-4">
          <motion.div
            layoutId="variable"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Variable
          </motion.div>
          <hr />
          <p className="text-blue-200 text-6xl font-bold">
            Variabel merupakan tempat penyimpanan data yang bersifat{" "}
            <span className="text-extrabold text-orange-500">mutable</span>
          </p>
          <div>
            <p className="text-orange-500 text-6xl font-bold">
              - Apa tuh mutable dek?
            </p>
            <p className="text-white text-6xl font-bold">
              mutable disini artinya variable di python dapat berubah ubah atau
              di ubah nilainya, sebenarnya bukan hanya di python, ada di hampir
              semua bahasa pemrograman seperti
              <code className="bg-black text-yellow-500">JS</code>
            </p>
          </div>
          <div>
            <button>
              <p className="text-orange-500 text-6xl font-bold">
                - Contoh mutable variable
              </p>
            </button>
          </div>
          <div className="flex flex-row gap-x-4">
            <Image src={Mutable} />
            <Image src={Mutable2} />
          </div>
          <div>
            <button>
              <p className="text-orange-500 text-6xl font-bold">
                - Cara penulisan variable di python?
              </p>
            </button>
          </div>
          <div className="bg-black p-9 w-fit text-7xl  text-green-500">
            <code className="animate-pulse">variable_name = value</code>
          </div>
          <div className="bg-black p-9 w-fit text-7xl  text-green-500">
            <code className="animate-pulse">x = "Sunday"</code>
          </div>
        </div>
      </div>
    </div>
  );
}
