import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let { asPath } = useRouter();
  console.log({ asPath });

  return (
    <div className="p-8">
      <header className="space-x-4 border-b">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </header>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
