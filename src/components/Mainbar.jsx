import Left from "../assets/Left.svg";
import Right from "../assets/Right.svg";
// import Ss from "../assets/ss.png";

import { useContext, useEffect, useState } from "react";
import { Projects } from "../context/context";
import { builder } from "../context/context";

const Mainbar = () => {
  const project = useContext(Projects);
  project.sort((a, b) => a.id - b.id);
  // console.log(project);
  const [page, setPage] = useState(project["0"].id);

  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    const left = document.querySelector("#leftClick");
    // console.log(left);

    left.addEventListener("click", () => {
      if (page > 0) {
        setPage(page - 1);
      }
    });
  }, [page]);
  useEffect(() => {
    const right = document.querySelector("#rightClick");
    // console.log(right);

    const clickHandler = () => {
      if (page < project.length - 1) {
        setPage(page + 1);
      }
    };
    right.addEventListener("click", clickHandler);
  }, [page]);
  // console.log(urlFor(project[`${page}`].image).width(400).url());

  return (
    <div className="relative h-full w-full  flex flex-col items-center justify-center p-2 ">
      <div className=" w-full h-[39rem] flex justify-center border">
        <img
          src={urlFor(project[`${page}`].image).width(800).url()}
          alt=""
          className=" h-full w-auto object-center object-contain"
        />
      </div>
      <div className=" w-full h-[10%] text-center uppercase font-[Archivo] font-bold text-2xl flex items-end justify-center">
        {project[`${page}`].title}
      </div>
      <div className=" w-full h-[10%] flex items-start justify-center px-32 text-center overflow-scroll text-sm">
        {project[`${page}`].description}{" "}
      </div>
      <div className=" w-full h-[10%] flex items-center justify-center">
        <div className="  m-5 text-4xl font-bold ">
          {" "}
          {page + 1}/{project.length}{" "}
        </div>
        <div className=" w-2/3 border-2"></div>
        <img src={Left} alt="" id="leftClick" className="-mr-5" />
        <img src={Right} alt="" id="rightClick" className=" -mr-0" />
      </div>
    </div>
  );
};

export default Mainbar;
