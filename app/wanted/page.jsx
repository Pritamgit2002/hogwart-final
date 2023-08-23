import Image from "next/image";
import React from "react";
import { GiDeathSkull, GiSnakeSpiral } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

import "./wanted.css";

const Wanted = () => {
  return (
    <div className=" flex-col inline-block align-middle w-auto m-auto justify-center">

        {/* paper heading */}


        <div className="  pt-8 justify-center items-center w-auto">
          <div className="flex items-center justify-between bg-[#CDB090] border-[2.2px] border-[black] w-auto  md:w-auto md:ml-4 lg:ml-0">
            <div className=" px-6 ">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={115}
                height={20}
                className="p-2"
              />
            </div>

            <div className=" font-serif text-[30px] md:text-[85px] text-center pb-4  head1-font tracking-widest text-black font-medium">
              DAILY PROPHET
              <div className="text-[12px] mt-[-22px] pt-5 head2-font font-bold text-center mx-[15.7px] md:mx-0">
                THE CODER WORLDS BIGGEST PROPAGANDA AND HOT TAKES
              </div>
            </div>

            <div className="">
              <Image
                src="/assets/logo2.png"
                alt="logo"
                width={155}
                height={20}
                className=" p-2"
              />
            </div>
          </div>
        </div>


      <div className="m-16 lg:m-40 p-2 border-[22px] border-black flex flex-col items-center justify-center bg-[#a98865]  bg-col ">
        <div>
          <Image src="/assets/death.png" alt="death" width={250} height={50}/>
        </div>
        <div className="text-[90px] md:text-[128px] text-center font-serif font-extrabold w-[800px] main_font ">
          HAVE YOU SEEN THIS WIZARD ?
        </div>
        <video
          autoPlay
          loop
          muted
          src="/assets/dumb_vid.mp4"
          alt="logo"
          width={900}
          height={120}
          className=" h-auto w-auto sepia object-fill drop-shadow-2xl p-3"
        />

        <div className="text-2xl md:text-auto bg-black my-10 text-center w-auto uppercase p-4 font-semibold text-[#a98865] box_font tracking-wider">
          <div>apporach with extreme caution !!!</div>
          <div className="flex pt-1 items-center justify-between ">
            <GiDeathSkull className="text-[60px] p-1" />

            <div className="uppercase text-center font-semibold text-[#a98865] ">
              Do not attempt to use magic against this man!!!
            </div>
            <GiDeathSkull className="text-[60px] text-[#a98865] p-1" />
          </div>
        </div>

        <div className="flex justify-center items-center p-auto bg--700">
          <div>
            <Image src="/assets/snake.png" alt="snake" width={260} height={60} />
          </div>
          <div>
            <div className="text-center text-2xl py-1 font-serif flec-col font-medium">
              Any information leading to the arrest of this
            </div>



            <div className="flex items-center justify-center gap-6 p-auto">
            <AiFillStar className="text-5xl text-yellow-400 "/>
            <div className="text-center text-4xl font-serif capitalize font-semibold ">
              man shall be duly rewarded
            </div>
            <AiFillStar className="text-5xl text-yellow-400"/>
            </div>



            <div className="text-center font-semibold text-3xl pt-4 pb-10 font-serif capitalize">
              Notify immediately by OWL the Ministry of Magic
            </div>
          </div>
            <div>
              <Image
                src="/assets/snake.png"
                alt="snake"
                width={260}
                height={260}
              />
        </div>
        </div>
      </div>


      {/* <div className="flex gap-2 h-auto justify-center
       bg-emerald-500 p-2">
        <div className="bg-pink-300 h-auto w-[600px] p-5">
          <span className="font-bold text-4xl pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt praesentium porro dolores rem impedit modi ex, velit quibusdam, totam expedita nam! Ullam, optio adipisci mollitia accusantium fugiat nobis voluptatum, vero suscipit maxime accusamus recusandae earum laborum blanditiis aliquid fugit maiores provident iure exercitationem atque. Recusandae corrupti sapiente nihil facere omnis id nisi doloremque, illum tempora.
        </div>
        <div className="bg-pink-300 h-auto p-5 w-[600px]">
        <span className="font-bold text-4xl pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium quod ad qui sit quisquam eius necessitatibus excepturi fuga iste maiores rerum nihil, accusamus nam consequuntur autem aliquid dolor nihil, omnis, saepe placeat tempore! Vero ex aut, voluptatibus ad ipsam aliquam! Distinctio dicta qui laudantium ratione deleniti, architecto soluta fugit numquam. dolores rem impedit modi ex, velit quibusdam, totam expedita nam!
        </div>
      </div> */}
    </div>
  );
};

export default Wanted;
