import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
         {/* {console.log(Icons)} */}
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-cyan-500
        duration-300 "
        >
            <img src={icon.link} />
        </span>
      ))}
          {/* <ion-icon name="logo-facebook"></ion-icon> */}
    </div>
  );
};

export default SocialIcons;
