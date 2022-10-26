import { motion } from "framer-motion";

export default function DataType() {
  return (
    <div className="bg-gray-800 w-full overflow-y-scroll h-screen flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="datatype"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Data type cuy
          </motion.div>
          <hr />
          <p className="text-blue-200 text-6xl font-bold">
            Disetiap bahasa pemrograman pasti ada yang namanya data type,
            berikut ini adalah data type yang sering kali di temui saat
            memprogram.
          </p>
          <div>
            <div className="flex flex-row text-7xl items-center">
              <div className=" p-9 w-fit text-7xl  text-green-500">
                <code className="animate-pulse">"Sunday"</code>
              </div>
              <p className="text-white">String</p>
            </div>
            <p className="text-3xl text-orange-500">
              Tipe data string adalah tipe data yang nilainya adalah text.
            </p>
          </div>
          <hr />
          <div>
            <div className="flex flex-row text-7xl items-center">
              <div className=" p-9 w-fit text-7xl  text-green-500">
                <code className="animate-pulse">986</code>
              </div>
              <p className="text-white">Integer</p>
            </div>
            <p className="text-3xl text-orange-500">
              Tipe data integer atau number adalah tipe data yang nilainya
              adalah nomor.
            </p>
          </div>
          <hr />
          <div>
            <div className="flex flex-row text-7xl items-center">
              <div className=" p-9 w-fit text-7xl  text-green-500">
                <code className="animate-pulse">True</code>
              </div>
              <p className="text-white">Boolean</p>
            </div>
            <p className="text-3xl text-orange-500">
              Tipe data boolean hanya memiliki nilai benar atau salah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
