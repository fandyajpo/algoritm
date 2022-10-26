import { motion } from "framer-motion";

export default function Multiplatform() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col md:flex-col lg:flex-col pt-16 pb-12  md:pt-16 md:px-24 lg:px-64 gap-x-20 items-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-4 lg:gap-0 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4 px-4">
          <motion.div
            layoutId="multiplatform"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.2 }}
            className="w-72 h-14 bg-green-500 rounded-full flex justify-center items-center text-2xl font-bold text-white"
          >
            Multi Platform ?
          </motion.div>
          <hr />
          <p className="text-blue-200 text-6xl font-bold">
            Python adalah bahasa pemrograman multi-platform yang bersifat free
            dan open-source, dan dapat digunakan untuk mengembangkan aplikasi
            aplikasi desktop maupun web.
          </p>
          <hr />
          <div className="flex flex-row justify-center items-center">
            <svg
              width="250"
              height="250"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2C3 1.46957 3.21071 0.960859 3.58579 0.585786C3.96086 0.210714 4.46957 0 5 0L11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13 14.5304 12.7893 15.0391 12.4142 15.4142C12.0391 15.7893 11.5304 16 11 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V2ZM9 13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14C8.26522 14 8.51957 13.8946 8.70711 13.7071C8.89464 13.5196 9 13.2652 9 13Z"
                fill="white"
              />
            </svg>
            <svg
              width="250"
              height="250"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.25 2H5.75C3.875 2 2 3.875 2 5.75V47.938C2 49.813 3.875 51.688 5.75 51.688H24.5V55.438C24.5 58.042 21.122 59.188 17 59.188V62H47V59.187C42.877 59.187 39.5 58.041 39.5 55.437V51.687H58.25C60.125 51.687 62 49.812 62 47.937V5.75C62 3.875 60.125 2 58.25 2ZM60 47.938C60 48.707 59.018 49.688 58.25 49.688H5.75C4.981 49.688 4 48.707 4 47.938V44.188H60V47.938Z"
                fill="white"
              />
              <path
                d="M32 48.876C32.5181 48.876 32.938 48.456 32.938 47.938C32.938 47.42 32.5181 47 32 47C31.482 47 31.062 47.42 31.062 47.938C31.062 48.456 31.482 48.876 32 48.876Z"
                fill="black"
              />
            </svg>
            <svg
              width="250"
              height="250"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 4H2V20H22V4ZM4 9H14.5V12.5H4V9ZM4 14.5H14.5V18H4V14.5ZM20 18H16.5V9H20V18Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
