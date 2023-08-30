import React, { useState } from "react";
import style from "./Style.module.scss";
import { SuperMolot, Verdana } from "@/styles/fonts";
import Image from "next/image";
import LocIcon from '../../../public/assets/icons/Location_icon.png'
import InstaIcon from '../../../public/assets/icons/Instagram.png'
import Facebookicon from '../../../public/assets/icons/Facebook.png'
import AnimatedDiv from '../Animated/Index'

const ContactUs = () => {
  const [step, setstep] = useState(true);

  const handelClickContactus = () => {
    setstep(true);
  };
  
  const handelClickJoinUs = () => {
    setstep(false);
  };

  return (
    <div className={`${style.bg} `}>
      <AnimatedDiv>
      <div  style={{paddingTop:'12%'}} className=" `flex justify-center items-center px-20   py-24 ">
        <div
          className="mx-auto justify-center items-center  hidden md:block"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div className={`grid grid-cols-2 `}>
            <div
              onClick={handelClickContactus}
              className={`${style.titles} ${SuperMolot.className} flex justify-center items-centern`}
              style={
                step
                  ? {
                      borderBottom: "4px #66C1BF solid",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }
                  : {}
              }
            >
              Contact Us
            </div>
            <div
             onClick={handelClickJoinUs}
             className={`${style.titles} ${SuperMolot.className} flex justify-center items-centern`}
             style={
               !step
                 ? {
                     borderBottom: "4px #66C1BF solid",
                     borderBottomLeftRadius: "5px",
                     borderBottomRightRadius: "5px",
                   }
                 : {}
             }
            >
              Join Us
            </div>
          </div>
          <div className={`${!step?'hidden':''} justify-center align-center`}>
            <div className="grid grid-cols-2 my-24 mx-16 ">
              <div className="flex justify-center items-center ">
                <p className={`${style.contenttext} ${Verdana.className}`}>
                  Ready to take your corporate operations to the next level?
                  Contact us today to schedule a consultation with our experts
                </p>
              </div>
              <div className="flex justify-center items-center  ">
                <button
                  className={`${SuperMolot.className} font-semibold  text-xl py-2 px-4 ml-24`}
                  style={{ background: "#66C1BF", color: "white" }}
                  type="submit"
                >
                  Book A Meeting
                </button>
              </div>
            </div>
          </div>
          {/* join Us Start */}
          <div className={` ${step? 'hidden':''} justify-center align-center`}>
            <div className="grid grid-cols-2 my-24 mx-16">
              <div className="w-3/4">
                <p className={`${style.contenttext} ${Verdana.className}  `}>
                  Partner with{" "} <br />
                  <span
                    className={SuperMolot.className}
                    style={{ color: "#66C1BF",fontSize:"2rem" }}
                  >
                    Perfect Corporate <br />
                  </span>
                  Perfect Corporate and experience the power of cutting-edge
                  corporate solutions that will transform your business.
                </p>
              </div>
              
              <div className="joinUs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="border  p-2 w-full"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="border  p-2 w-full mt-2"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      className="border  p-2 w-full mt-2"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="border  p-2 w-full h-36"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center my-4 ">
                <button
                  className={`${SuperMolot.className} font-semibold py-4 px-16 text-xl w-full md:py-2 md:px-4`}
                  style={{ background: "#66C1BF", color: "white" }}
                  type="submit"
                >
                  Submit Your Response
                </button>
              </div>
              </div>
            </div>
          </div>
          {/* footer starts */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex gap-2">
               <Image src={LocIcon} alt="Perfect corporate logo.png" width={15} />
               <p className={`${SuperMolot.className} font-semibold`} style={{color:"#FFFFFF"}}>The quadrant beeston, nottingham, NG9 2NH</p>
            </div>
            <div className="flex gap-4 m-4">
              <p className={`${SuperMolot.className} font-semibold pt-1`} style={{color:"#FFFFFF"}}>Find us on</p>
               <Image src={InstaIcon} alt="Perfect corporate logo.png" width={35} />
               <Image src={Facebookicon} alt="Perfect corporate logo.png" width={35} />

            </div>
          </div>
     


        </div>

        
        {/* mobile divices code starts here   */}
        <div className="flex justify-center items-center md:hidden pt-24 " >
             <div className="mx-auto justify-center items-center" >
                 <div className={`${style.titles} ${SuperMolot.className} flex justify-start items-start pb-12 text-lg`} >
                    Contact Us
                </div>
                <div className="flex justify-center items-center p-4">
                <p className={`${style.contenttext} ${Verdana.className}`}>
                  Ready to take your corporate operations to the next level?
                  Contact us today to schedule a consultation with our experts
                </p>
              </div>
              <div className="flex justify-center items-center  ">
                <button
                  className={`${SuperMolot.className} font-semibold w-3/4 text-lg py-8 px-3 mt-4`}
                  style={{ background: "#66C1BF", color: "white", fontSize:"1.5rem" }}
                  type="submit"
                >
                  Book A Meeting
                </button>
              </div>
              <div
             
             className={`${style.titles} ${SuperMolot.className} flex justify-start items-start pt-12`}
             
            >
              Join Us
            </div>
            <div className="w-full pt-8">
                <p className={`${style.contenttext} ${Verdana.className}  `}>
                  Partner with{" "} <br />
                  <span
                    className={SuperMolot.className}
                    style={{ color: "#66C1BF",fontSize:"2.5rem" }}
                  >
                    Perfect Corporate <br />
                  </span>
                  Perfect Corporate and experience the power of cutting-edge
                  corporate solutions that will transform your business.
                </p>
              </div>
              <div className={ ` ${SuperMolot.className} grid grid-cols-1 pt-8 gap-4`}>
                  <div className="gap-4">
                    <input
                      type="text"
                      className="border  p-4 w-full text-lg placeholder-lg"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="border  p-4 w-full mt-4 text-lg placeholder-lg"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      className="border  p-4 w-full mt-4 text-lg placeholder-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="border  p-2 w-full h-36 text-lg placeholder-2lg"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center my-4 ">
                <button
                  className={`${SuperMolot.className} font-semibold py-4 px-16 text-xl w-full md:py-2 md:px-4`}
                  style={{ background: "#66C1BF", color: "white" }}
                  type="submit"
                >
                  Submit Your Response
                </button>
              </div>
              <div className="flex flex-col justify-center items-center pt-8 ">
            <div className="flex gap-2">
               <Image src={LocIcon} alt="Perfect corporate logo.png" width={15} />
               <p className={`${SuperMolot.className} font-semibold text-xl`} style={{color:"#FFFFFF"}}>The quadrant beeston, nottingham, NG9 2NH</p>
            </div>
            <div className="flex gap-4 m-4">
              <p className={`${SuperMolot.className} font-semibold text-xl pt-4`} style={{color:"#FFFFFF"}}>Find us on</p>
               <Image src={InstaIcon} alt="Perfect corporate logo.png" width={35} />
               <Image src={Facebookicon} alt="Perfect corporate logo.png" width={35} />

            </div>
          </div>
             </div>
           </div>
      </div>
      </AnimatedDiv>
    </div>
  );
};

export default ContactUs;
