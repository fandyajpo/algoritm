import { motion } from "framer-motion";
import Image from "next/image";
import IfElse from "public/ifelse.png";
import IfElse2 from "public/ifelse2.png";
import IfElse3 from "public/ifelse3.png";
import Whoname from "public/whoname.png";
export default function Ifelse() {
  return (
    <div className="bg-gray-800 overflow-y-scroll w-full h-screen flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-8 px-4">
          <motion.div
            layoutId="ifelse"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Condition If - else
          </motion.div>
          <hr />
          <p className="text-blue-200 text-6xl font-bold">
            - is the data integer or string?
          </p>
          <div className="flex flex-col gap-y-2 w-fit">
            <div className="w-fit flex items-center justify-center gap-x-4">
              <Image src={IfElse} />
              <div className="text-4xl text-white">Sama</div>
              <Image src={IfElse2} />
            </div>
            <Image src={IfElse3} />
          </div>
          <p className="text-3xl text-orange-200 font-bold">
            Ini merupakan kondisi yang menentukan apa yang ada di nilai X, alur
            programmnya itu membuat variable x, input nilai x, lalu membuat
            kondisi menggunakan if else
          </p>
          <p className="text-3xl text-blue-200 font-bold">
            {"type()"} adalah fungsi dari python yang dapat diisi nilai seperti
            variable ataupun langsung memasukan nilai seperti huruf dan nomor
          </p>
          <p className="text-blue-200 text-6xl font-bold">- whos your name?</p>
          <div className="w-fit">
            <Image src={Whoname} />
          </div>
          <p className="text-3xl text-orange-200 font-bold">
            Program diatas itu merupakan program input nama, dan mendeteksi nama
            berdasarkan yang sudah ada di kondisi if else
          </p>
        </div>
      </div>
    </div>
  );
}
