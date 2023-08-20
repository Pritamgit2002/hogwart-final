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
      <div>
        <Link href="/wanted">
          Next Page
        </Link>
      </div>
    </div>
  );
};

export default hogwart3;
