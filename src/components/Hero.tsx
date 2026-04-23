import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/adfee325-32e7-4d15-b27e-a3fea11e5128/files/d7d116c5-984b-4576-b966-c8ec57ebc472.jpg"
          alt="Производство краски"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Производство и фасовка с 2008 года</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          КРАСКА<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400">
            ЖИВЁТ
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Точное смешение, профессиональная фасовка, сочные цвета — для любого объёма и задачи
        </p>
        <button className="mt-10 border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Узнать условия
        </button>
      </div>
    </div>
  );
}