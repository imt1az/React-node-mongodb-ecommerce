import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { WavesButton } from './tools';
const Carrousel = ({items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true
      };
    //   console.log(items ? items:'')
//       const generateSlides = ()=>(
//         items ?
//             items.map((item,i)=>{
//             return <div key={i}>
//             <div className="bg-cover h-screen"
//                 style={{
//                     background:`url(${item.img})`,
//                     backgroundRepeat:'no-repeat',
                    
                   
                    
//                 }}
//             >
//                 <div className="featured_action">
//                     <div className="tag title">{item.lineOne}</div>
//                     <div className="tag low_title">{item.lineTwo}</div>
//                     <div>
//                         BUTTON

//                     </div>
//                 </div>
//             </div>
//         </div>
// })
//         :null
//       )
       
    return (
        <Slider {...settings}>
                {items.map((item,i)=>(
                    <div key={i} className="">
                       <div className='bg-cover bg-center bg-fixed md:min-h-screen h-[40vh] relative'  style={{backgroundImage:`url(${item.img})`}}>
                       <div className="md:block hidden absolute top-[45%] left-[8%]">
                            <div className="tag title bg-[#82828287] text-white px-[20px] py-0  uppercase text-7xl font-bold table">{item.lineOne}</div>
                            <div className="tag low_title bg-[#82828287] text-white px-[20px] py-0 uppercase text-[50px] font-[300] mt-3 ">{item.lineTwo}</div>
                            <div>
                               <WavesButton
                               type="default"
                               title={item.lineTitle}
                               linkTo={item.linkTo}
                               style={{
                                margin:'10px 0 0 0 '
                               }}
                               />

                            </div>
                        </div>
                       </div>
                    </div>
                ))}
        </Slider>
    );
};

export default Carrousel;