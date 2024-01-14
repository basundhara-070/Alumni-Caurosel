// import { useContext } from "react";
// import {LevelContext} from '../context/LevelContext';
const Sidebar = () => {
  // const data= useContext(LevelContext);
  // console.log(data)
  return (
      <div className=" h-full p-1 ">
        <div className=" flex flex-col h-full justify-evenly items-center font-[Archivo] text-8xl font-extrabold [-webkit-text-stroke:2px_#ffffff80] text-transparent m-1">
          <div className="rotate-90 ">P</div>
          <div className="rotate-90 ">R</div>
          <div className="rotate-90 ">O</div>
          <div className="rotate-90 ">J</div>
          <div className="rotate-90 ">E</div>
          <div className="rotate-90 ">C</div>
          <div className="rotate-90 ">T</div>
          <div className="rotate-90 ">S</div>
        
        </div>
         
      </div>
  );
};

export default Sidebar;
