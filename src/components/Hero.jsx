import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-sm text-neutral-700 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-red-500" />
          <span>Modern, interactive landing pages</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl"
        >
          Elevate your brand with a minimalist, dynamic experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 md:text-lg"
        >
          Seamless 3D interactions meet clean design. Engage visitors with responsive visuals and lightning-fast performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-800"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
