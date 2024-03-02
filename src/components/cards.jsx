import React, { useEffect, useMemo, useContext, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { builder } from '../context/context';
import { Alumni } from "../context/context";

const Cards = () => {
  const alumniData = useContext(Alumni);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: slidesToShow 
    };
  }, [slidesToShow]);

  function getSlidesToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 900) {
      return 4;
    } else if (screenWidth >= 650) {
      return 3;
    }
      else if (screenWidth >= 500) {
        return 2;
      
    } else {
      return 1;
    }
  }

  useEffect(() => {
    function handleResize() {
      const newSlidesToShow = getSlidesToShow();
      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slidesToShow]);

  return (
    // <div style={{ width: '82vw', marginLeft: '12vw' }}>
    //   <div style={{ marginTop: '2vw' }}>
    //     <Slider {...settings}>
    //       {alumniData.map((alumniInfo, index) => (
    //         <div key={index} style={{ display: 'flex', justifyContent: 'space evenly', position: 'relative' }}>
    //           <div style={{ marginLeft: '1.8vw', width: '17.375vw', height: '23.875vw', borderRadius: '0.9375vw', backgroundColor: '#6e6e6e', position: 'relative' }}>

    //             <div style={{ width: '16.1875vw', left: '0.625vw', top: '0.5vw', height: '22.875vw', borderRadius: '0.9375vw', border: '2px solid white', position: 'absolute' }} />
    //             <div style={{ width: '11.125vw', left: '3.45vw', top: '2.325vw', height: '11.125vw', borderRadius: '6.0625vw', backgroundImage: `url(${builder.image(alumniInfo.image).url()})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute' }} />
    //             <div style={{ width: '12vw', left: '2.9875vw', top: '1.875vw', height: '12vw', borderRadius: '6vw', border: '2px solid white', position: 'absolute' }} />
    //             <div style={{ fontFamily: 'Archivo-Bold, Helvetica', width: '18.0625vw', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', letterSpacing: '0', fontSize: '1vw', top: '14.625vw', color: 'white', height: '2vw', fontWeight: 'bold', lineHeight: 'normal', position: 'absolute' }}>
    //               {alumniInfo.name}
    //             </div>

    //             <div style={{ fontFamily: 'Archivo-Medium, Helvetica', marginLeft: '2vw', width: '14.0625vw', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0', fontSize: '0.8vw', top: '16.5vw', textAlign: 'center', color: 'white', height: '2vw', fontWeight: 'normal', lineHeight: 'normal', position: 'absolute' }}>
    //               {alumniInfo.occupation}
    //             </div>
    //             <div style={{ fontFamily: 'Archivo-Medium, Helvetica', marginLeft: '2vw', width: '14.0625vw', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0', fontSize: '0.8vw', top: '18.7vw', textAlign: 'center', color: 'white', height: '2vw', fontWeight: 'normal', lineHeight: 'normal', position: 'absolute' }}>
    //               {alumniInfo.testimonial}
    //             </div>

    //             <p style={{ fontFamily: 'Archivo-Regular, Helvetica', width: '5.5625vw', left: '5.9375vw', letterSpacing: '0', fontSize: '0.6875vw', top: '21.3vw', color: 'white', height: '3.25vw', fontWeight: 'normal', textAlign: 'center', lineHeight: 'normal', textDecoration: 'underline', position: 'absolute' }}>
    //               <a href={alumniInfo.linkedin} style={{ color: 'white', fontSize: '1vw' }} target="_blank">LinkedIn</a>
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
    <div className='w-[82vw] ml-[11vw] font-[Archivo-Bold, Helvetica] text-white max-[1000px]:ml-[13vw] max-[900px]:w-[75vw]  max-[768px]:w-[74vw] max-[768px]:ml-[14vw]  max-[650px]:w-[65vw] max-[650px]:ml-[17vw] max-[600px]:w-[60vw] max-[600px]:ml-[17vw] max-[500px]:w-[60vw] max-[500px]:ml-[17vw] '>
      <Slider {...settings} className=''>
      {alumniData.map((alumniInfo, index) => (
    <div key={index} className=' w-[80vw] h-[28vw] mt-[3vw] max-[900px]:h-[35vw]  max-[768px]:h-[35vw] max-[650px]:h-[38vw]  max-[500px]:h-[63vw]'>
 <div className='ml-[1.8vw] w-[17.375vw] h-[25vw] rounded-[1vw] bg-[#6e6e6e] relative border-2 border-white flex flex-col justify-center items-center max-[900px]:w-[22vw] max-[900px]:h-[30vw]  max-[768px]:w-[22vw]  max-[768px]:h-[35vw] max-[650px]:w-[29vw] max-[650px]:h-[38vw] max-[500px]:w-[57vw] max-[500px]:h-[63vw]'>
 <div className='border-2 border-white p-[0.3vw] rounded-[50%] '>
    <div className='w-[11vw] h-[11vw] rounded-[50%] ml-auto max-[768px]:h-[13vw] max-[768px]:w-[13vw] max-[500px]:h-[23vw] max-[500px]:w-[23vw] ' style={{backgroundImage: `url(${builder.image(alumniInfo.image).url()})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
    </div>
    <div className='text-[1vw] mt-[0.7vw] uppercase max-[900px]:text-[1.5vw] max-[650px]:text-[1.8vw] max-[500px]:text-[3.8vw]'>
                  {alumniInfo.name}
    </div>
    <div className='text-center mx-[0.7vw] text-[0.8vw] max-[900px]:text-[1.2vw] max-[650px]:text-[1.5vw] max-[500px]:text-[3vw]' >
        {alumniInfo.occupation}
    </div>
    <div className='text-center mx-[0.7vw]  text-[0.8vw]  max-[900px]:text-[1.2vw] max-[768px]:text-[1.3vw] max-[650px]:text-[1.5vw] max-[500px]:text-[3vw]' >
        {alumniInfo.testimonial}
    </div>
    <div className='mt-[1vw]    '>
      <a href={alumniInfo.linkedin} className=' border-[1px] py-[0.2vw] px-[0.8vw]  rounded-[6px] text-white text-[1vw] max-[900px]:text-[1.5vw] max-[650px]:text-[1.8vw] max-[500px]:text-[3.8vw] hover:text-[#6e6e6e] hover:bg-[white] '>LinkedIn</a>
    </div>
 </div>
    </div>

      ))}
      </Slider>

    </div>
  );
}



export default Cards;
