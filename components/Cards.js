import Card from "./Card";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Cards({ lang }) {

  let cnt = 0;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    cnt = localStorage.getItem('count');
  }

  const movies = [];

  for (let i = 1; i <= cnt; i++) {
    const movie = JSON.parse(localStorage.getItem(i.toString()));
    if (movie.lang == lang)
      movies.push(movie);
  }

  const up = <svg xmlns="http://www.w3.org/2000/svg" className="relative h-4 w-4 -top-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>

  const down = <svg xmlns="http://www.w3.org/2000/svg" className="relative h-4 w-4 -bottom-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  const cards = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      }
    },
  }

  return (
    <motion.div
      layout
      variants={cards}
      initial="hidden"
      animate="show"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}

        className="flex justify-between mb-5 ">
        <div className="flex items-center cursor-pointer">
          <h1 className="inline mr-2 font-semibold">Title</h1>
          <span>{down}{up}</span>
        </div>

        <div className="flex items-center cursor-pointer">
          <h1 className="inline mr-2 font-semibold">Rating</h1>
          <span>{down}{up}</span>
        </div>
      </motion.div>

      {
        movies.map((movie) => (
          <motion.div
            layout
            variants={card}
            key={movie.title}
          >
            <Card key={movie.title} movie={movie} />
          </motion.div>
        ))
      }
    </motion.div>
  );

}