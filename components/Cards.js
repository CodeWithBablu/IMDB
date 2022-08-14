import Card from "./Card";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Cards({ lang }) {

  function getMovies() {
    let cnt = 0;
    var movies = [];

    if (typeof window !== 'undefined') {
      // Perform localStorage action
      cnt = localStorage.getItem('count');
    }

    for (let i = 1; i <= cnt; i++) {
      const movie = JSON.parse(localStorage.getItem(i.toString()));
      if (movie.lang == lang)
        movies.push(movie);
    }

    return movies;
  }

  const [langMovies, setLangMovies] = useState(getMovies());
  const [titleAsc, setTitleAsc] = useState(false);
  const [rateAsc, setRateAsc] = useState(true);


  function sortThem(value) {

    switch (value) {
      case 0:
        setLangMovies(langMovies.sort((a, b) => (a.rate > b.rate ? 1 : -1)));
        setRateAsc(false);
        break;
      case 1:
        setLangMovies(langMovies.sort((a, b) => (a.rate < b.rate ? 1 : -1)));
        setRateAsc(true);
        break;
      case 3:
        setLangMovies(langMovies.sort((a, b) => ((a.title)[0] < (b.title)[0] ? 1 : -1)));
        setTitleAsc(false);
        break;
      case 4:
        setLangMovies(langMovies.sort((a, b) => ((a.title)[0] > (b.title)[0] ? 1 : -1)));
        setTitleAsc(true);
        break;
      default:
        setLangMovies(langMovies);
        break;

    }
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

      className=" max-h-[700px] overflow-scroll"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}

        className="flex justify-between mb-5 ">
        <div onClick={() => { sortThem(titleAsc == true ? 3 : 4) }} className="flex items-center cursor-pointer">
          <h1 className="inline mr-2 font-semibold">Title</h1>
          <span>{down}{up}</span>
        </div>

        <div onClick={() => { sortThem(rateAsc == true ? 0 : 1) }} className="flex items-center cursor-pointer">
          <h1 className="inline mr-2 font-semibold">Rating</h1>
          <span>{down}{up}</span>
        </div>
      </motion.div>

      {
        langMovies.map((movie) => (
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