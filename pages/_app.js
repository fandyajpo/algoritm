import "../styles/globals.css";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useFollowPointer } from "lib/useFollow";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <AnimatePresence>
      {/* <motion.div
        ref={ref}
        className={
          "hidden md:hidden lg:block bg-gradient-to-tr from-violet-400 to-violet-600 w-8 h-8 rounded-full absolute z-50"
        }
        animate={{ x, y }}
      /> */}
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
