import Image from "next/image";

export default function Card({ movie }) {

  const star = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
  </svg>

  return (
    <div className="flex items-center bg-black p-4 text-white shadow-lg shadow-sky-400 mb-4 
      rounded-lg">

      <div className="flex w-full">
        <div>
          <Image
            src="/images/BulletTrain.jpg"
            width="70"
            height="90"
            alt="" />
        </div>
        <div className=" w-full px-3">
          <h1 className=" text-md font-bold">{movie.title}</h1>
          <h2 className="ml-2 text-gray-300">{movie.description}</h2>
        </div>
      </div>
      <div className="flex items-center pr-2 text-cyan-400">
        {star}{movie.rate}
      </div>

    </div>
  );
}

/*

<div className=" shadow-lg shadow-indigo-400 bg-gray-500 mb-3 p-4 rounded-lg">
      <div className="flex justify-between">
        <div className="flex w-4/5 mb-3">
          <Image
            src="/images/BulletTrain.jpg"
            width="90"
            height="72"
            alt="" />
          <div className="px-4 w-3/5 ">
            <h1>{movie.title}</h1>
            <h2>{movie.description}</h2>
          </div>
        </div>

        <div className="flex w-1/5 items-center">
          {movie.rate}{star}
        </div>
      </div>
    </div>
    */