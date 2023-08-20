import React from "react";
// import Image from "next/image";
// import { AiOutlineMenu } from "react-icons/ai";
import Hogwart1 from "./page2/hogwart1";
import Hogwart2 from "./page2/hogwart2";
import Hogwart3 from "./page2/hogwart3";
import Wanted from "./wanted/page";
const page = () => {
  return (
    <div >
        <Hogwart1 className=""/>
        <Hogwart2 className=""/>
        <Hogwart3 />
        {/* <Wanted/> */}
    </div>
  );
};

export default page;
