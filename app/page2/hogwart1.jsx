import React from "react";
import Image from "next/image";
import "./font.css";

const Hogwart1 = () => {
  return (
    <div className="">
      <div className=" bg--500">
        <div className="pt-8 justify-center items-center w-auto">
          <div className="flex items-center justify-between bg-[#CDB090] border-[2.2px] border-[black] w-[146.5vw]  md:w-auto md:ml-4 lg:ml-0">
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

        <div className=" ml-auto mr-auto w-[100%] items-center justify-center inline-block align-middle">
          <div className=" md:h-36 w-auto pl-44 md:pl-5 lg:pl-px md:pl-auto md:w-auto flex items-center align-middle justify-around bg-green-300  gap-10 ">
            {/* <div> */}

            
              <Image
                src="/assets/hallowin.png"
                alt="hallowin"
                width={300}
                height={120}
                className="hidden md:block scale-125 h-12 lg:h-auto lg:scale-100 p-1"
              />
              <Image
                src="/assets/hallowin.png"
                alt="hallowin"
                width={300}
                height={120}
                className="scale-125 lg:scale-100  hidden lg:block p-1"
              />
                <Image
                    src="/assets/train.png"
                    alt="hallowin"
                    width={300}
                    height={120}
                    className="scale-125 h-[60px] lg:h-auto  lg:scale-100 lg:pt-2 p-1"
                  />
              <Image
                src="/assets/hallowin.png"
                alt="hallowin"
                width={300}
                height={120}
                className="scale-125 h-12 lg:h-auto lg:scale-100 p-1"
              />

              <Image
                src="/assets/add.png"
                alt="hallowin"
                width={280}
                height={120}
                className="scale-125 h-12 lg:h-auto lg:scale-100 p-1 "
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hogwart1;
