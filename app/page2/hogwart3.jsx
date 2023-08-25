import React from "react";
import "./font.css";
import Link from "next/link";
import wanted from "../wanted/page";


const hogwart3 = () => {
  return (
    <div>
      <div className="page5 gap-7 text-[80px] hidden md:block md:w-auto">
        <h1>He-Who-Must-Not-Be-Named-</h1>
        <h1>He-Who-Must-Not-Be-Named-</h1>
        <h1>He-Who-Must-Not-Be-Named-</h1>
        {/* <h1>Let's create something together</h1> */}
      </div>
      <div className="flex items-center justify-center w-auto">
        <Link href="/wanted">
          <div className="text-white bg-yellow-800 p-4 text-xl font-medium  text-center rounded-3xl mb-6">
            Next Page
          </div>
        </Link>
      </div>
    </div>
  );
};

export default hogwart3;
