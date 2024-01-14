import { BrowserRouter } from "react-router-dom";
import {Sidebar, Mainbar, EventDetail} from './components'

import { useContext } from 'react';
import { LevelContext } from './context/context';

const App = () => {
  const level = useContext(LevelContext);
  console.log(level)
  return (
    <>
    <BrowserRouter>
      <div className="w-screen h-full bg-[#050816] " >
        <div className="flex items-center justify-center">
          <Sidebar />
          <Mainbar />
        </div>
      </div>
      <div className="w-screen h-full bg-[#050816] flex items-center" >
          <EventDetail/>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;

