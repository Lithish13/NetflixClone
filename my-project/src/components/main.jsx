import React from "react";
import BodyContent from "./bodyContent";
import FQA from "./FQA";
const Main = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_68ERF_oiDBt2rjacTmlozxrrvtZKrR_-vw&s",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/236x/5d/03/47/5d03473f34003d165ed1d14b6edb4382.jpg",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_QL75_UX480_.jpg",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/98/36/e4/9836e4e145b656371e550e1ba252a582.jpg",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/236x/d3/ac/5c/d3ac5c2e356117de58f141dbdd8e527f.jpg",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/6e/d8/86/6ed8865d6712fb9f41c14f11e553bdf3.jpg",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/originals/07/1c/4a/071c4aedcadb87f05fd1ef065cf773fd.jpg",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxE7tHf9YaXbLzRhkBBjPJgZH-4RWw_qQRzg&s",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1KoMqWP_Fe_I9Y-rDqAd0EZCr2Da6aFYHQ&s",
    },
    {
      id: 10,
      image:
        "https://data1.ibtimes.co.in/photo/en/full/31572/ananth-nag-bullet-prakash-vineesh-darshan-uday-petrol-prasanna-sadhu-kokila-appear-supporting.jpg?w=599",
    },
  ];
  return (
    <>
      <h1 className="text-white text-4xl font-bold ml-6 mt-6">Trending Now</h1>
      <div className="">
        <div className="flex  overflow-x-scroll overflow-y-hidden no-scrollbar mt-6 cursor-pointer mb-10 mr-6">
          {cards.map((card) => {
            return (
              <div
                className=" mt-8 ml-6 flex w-50 h-70 items-center"
                key={card.id}
              >
                <div className="z-50  text-6xl  text-white outline-none font-bold  ">
                  {card.id}
                </div>
                <div className="hover:scale-105 w-50 h-70 transition-all  duration-300 ease-in-out">
                  <img src={card.image} className=" h-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BodyContent />
      <FQA />
    </>
  );
};

export default Main;
