import React from "react";

const BodyContent = () => {
  const contents = [
    {
      id: 1,
      title: "Enjoy on your TV.",
      text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      id: 2,
      title: "Stream on your device.",
      text: "Stream on your laptop, tablet, or mobile device.",
    },
    {
      id: 3,
      title: "Download your favorite shows.",
      text: "Download your favorite shows and movies for offline viewing.",
    },
    {
      id: 4,
      title: "Watch instantly or download for later.",
      text: "Watch instantly or download for later.",
    },
  ];
  return (
    <div>
      <h1 className="text-white text-2xl font-bold ml-16 mt-6">
        More reasons to join
      </h1>
      <div className="grid grid-cols-2 ml-10  space-evenly mt-4 ">
        {contents.map((content) => {
          return (
            <div
              className="text-white m-6 p-4 bg-red-600 rounded-2xl h-35"
              key={content.id}
            >
              <h2 className="text-xl font-bold mb-2 ">{content.title}</h2>
              <div>
                <p className="text-gray-300">{content.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyContent;
