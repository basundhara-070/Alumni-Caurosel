import { BrowserRouter } from "react-router-dom";
import {Sidebar} from './components'
import Cards from "./components/cards";

import { useContext } from 'react';
import { LevelContext } from './context/context';

const App = () => {
  const level = useContext(LevelContext);
  console.log(level)
  return (
    <>
    <BrowserRouter>
      <div className="w-screen h-[100vh] bg-[#050816] flex " >
          <Cards/>
          <Sidebar />
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;

