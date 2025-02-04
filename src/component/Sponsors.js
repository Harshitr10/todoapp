import React from "react";
import Line from "../assests/images/Line 1.png";
import Devfolio from "../assests/images/Devfolio.png";
import Polygon from "../assests/images/polygon1.png";
import Solana from "../assests/images/Solana1.png";
import Replit1 from "../assests/images/replit1.png";
import Replit2 from "../assests/images/replit2.png";
import filecoin from "../assests/images/Filecoin.png";
import Echo from "../assests/images/echo3D.png";
import taskade from "../assests/images/taskade.png";
import Foss from "../assests/images/Fosscu.png";
import GMC from "../assests/images/GMC.png";
import Threeway from "../assests/images/Threeway.png";
import Greedygame from "../assests/images/Greedygame.svg";
import shastra from "../assests/images/shastra.png";
import xyz from "../assests/images/xyz.svg";
import ProgammingP from "../assests/images/PPLogo.png";
import TPH from "../assests/images/TPH.png";
import ST from "../assests/images/ST.png";
import verbwire from "../assests/images/VerbwireBlack_largest.png";
import Shiva from "../assests/images/shiva.jpg";
import QA from "../assests/images/Quillaudits.png";
import RollSing from "../assests/images/rollSingh.png";

const Sponsors = () => {
  return (
    <div className="bg-newcolor" id="sponsor">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
          SPONSORS
        </h1>
      </div>
      <div className="flex pt-10 pb-10 justify-around max-[415px]:py-3">
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden "
        /> */}
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5 ">
          GOLD
        </h1>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className=" flex  flex-wrap justify-center pt-10   max-[415px]:pt-5 ">
        <a href="https://devfolio.co/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-2 mt-5 max-[520px]:px-16 "
          >
            <div className="flex space-x-2">
              <div className="max-[390px]:w-10">
                <img src={Devfolio} />
              </div>
              <h1 className="text-4xl font-bold Sponsors pt-1 text-white max-[415px]:text-3xl  ">
                Devfolio
              </h1>
            </div>
          </button>
        </a>

        <a href="https://polygon.technology/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 mt-5  max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Polygon} className="w-56" />
              </div>
            </div>
          </button>
        </a>

        <a href="https://greedygame.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 mt-5  max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Greedygame} className="w-56 h-14" />
              </div>
            </div>
          </button>
        </a>

      </div>
      <div className=" flex  flex-wrap justify-center  pb-10  max-[415px]:pb-5 ">

      <a href="https://www.verbwire.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 mt-5 max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={verbwire} className="w-56 h-14" />
              </div>
            </div>
          </button>
        </a>
        <a href="https://renaissance.programmingpathshala.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-24 py-6 max-[390px]:px-12 max-[780px]:px-20 max-[520px]:px-16 mr-2 mt-5 "
          >
            <div className="flex space-x-2">
              <div>
                <img
                  src={ProgammingP}
                  className="w-52 h-10 max-[627px]:w-56 "
                />
              </div>
            </div>
          </button>
        </a>
        <a href="" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-24 py-1 max-[520px]:px-20 max-[390px]:px-16 mr-3 mt-5 "
          >
            <div className="flex space-x-2">
              <div>
                <img
                  src={RollSing}
                  className="w-44 h-20  "
                />
              </div>
            </div>
          </button>
        </a>
        </div>
      <div className="flex pt-10 pb-10 justify-evenly max-[415px]:py-3">
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5">
          SILVER
        </h1>
      </div>
      <div className="flex  flex-wrap justify-center pt-10 max-[415px]:pt-5 ">
        <a href="https://solana.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-5 py-4 mr-3 mt-5 max-[391px]:px-1"
          >
            <div className="flex space-x-1">
              <img src={Solana} />
            </div>
          </button>
        </a>

        <a href="https://replit.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-28 py-6 ml-3 mr-6 mt-5 max-[390px]:px-24"
          >
            <div className="flex space-x-1">
              <div>
                <img src={Replit1} />
              </div>
              <h1 className="text-2xl Sponsors pt-1 text-white ">replit</h1>
              <div>
                <img src={Replit2} />
              </div>
            </div>
          </button>
        </a>

        <a href="https://filecoin.io/" target="_blank">
          <button
            type="button"
            className="bg-[#273339]  rounded-lg  px-24 py-5 mr-2 mt-5 max-[415px]:pb-5 max-[390px]:px-20"
          >
            <div className="flex space-x-2">
              <div className="">
                <img src={filecoin} />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex justify-center max-[415px]:mb-10 pb-10">
        <a href="https://www.sudanstech.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339]  rounded-lg  px-24 py-5 mr-2 mt-5 max-[415px]:pb-5 max-[390px]:px-12 max-[390px]:my-5"
          >
            <div className="flex space-x-2">
              <div className="">
                <img src={ST} className="w-40 h-[6rem] max-[390px]:w-52" />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-11 pb-10 justify-evenly max-[415px]:py-3">
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5">
          BRONZE{" "}
        </h1>
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-5  max-[415px]:py-5">
        <a href="https://www.echo3d.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-16 py-6 max-[390px]:px-12 mr-3 mt-5 "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Echo} className="w-52 h-10 max-[627px]:h-10 " />
              </div>
            </div>
          </button>
        </a>

        <a href="https://www.taskade.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-5 px-20 mr-2 mt-5 max-[390px]:px-16"
          >
            <div className="flex space-x-2">
              <div>
                <img src={taskade} className="w-44 h-12 " />
              </div>
            </div>
          </button>
        </a>
        <a href="https://gen.xyz/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-1 px-20 mr-2 mt-5 max-[390px]:px-16"
          >
            <div className="flex space-x-2">
              <div>
                <img src={xyz} className="w-44 h-20" />
              </div>
            </div>
          </button>
        </a>
        <a href="https://shastraos.org/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-1 px-20 mr-2 mt-5 max-[390px]:px-16"
          >
            <div className="flex space-x-2">
              <div>
                <img src={shastra} className="w-44 h-20" />
              </div>
            </div>
          </button>
        </a>
</div>
      <div className="flex justify-center flex-wrap max-[415px]:mb-10 pb-10">
      <a href="https://audits.quillhash.com/smart-contract-audit" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg px-16 py-3 mb-5 mr-2  max-[390px]:px-14 "
          >
            <div className="flex space-x-2 ">
              <div className="">
                <img src={QA} className="h-16 w-48" />
              </div>
            </div>
          </button>
        </a>
      <a href="https://www.theproduct.house/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-24 py-1   mr-3   max-[390px]:px-20"
          >
            <div className="flex space-x-2">
              <div>
                <img src={TPH} className="h-20" />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-around max-[415px]:py-3">
        <center>
          <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5 ">
            COMMUNITY PARTNER
          </h1>
        </center>
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5 ">
        <a href="https://fosscu.org/" target="_blank">
          <button
            type="button"
            className="bg-[#273339]  rounded-lg py-7 px-24 mr-2 mt-5 max-[520px]:px-20 max-[415px]:px-16"
          >
            <div className="flex ">
              <div className="">
                <img src={Foss} className="" />
              </div>
            </div>
          </button>
        </a>

        <a href="https://www.threeway.studio/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 mt-5  max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Threeway} className="w-56" />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-around mt-5 max-[415px]:py-3">
        <center>
          <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5 ">
            CERTIFICATE SPONSOR
          </h1>
        </center>
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5 ">
        <a href="https://givemycertificate.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-3 mt-5 max-[520px]:px-16 "
          >
            <div className="flex space-x-2">
              <div className="max-[390px]:w-28">
                <img src={GMC} className="h-36" />
              </div>
            </div>
          </button>
        </a>
      </div>

      <div className="flex pt-10 pb-10 justify-around mt-5 max-[415px]:py-3">
        <center>
          <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5 ">
            SUPPORTED BY
          </h1>
        </center>
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10 mb-5 max-[415px]:py-5 ">
        <a href="https://www.jetbrains.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-3 mt-5 max-[520px]:px-16 "
          >
            <div className="flex space-x-2">
              <div className="max-[390px]:w-28">
                <img
                  src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg?_gl=1*nu4nvt*_ga*MTY1NzQ4MzY4LjE2Nzk3NzcxMTA.*_ga_9J976DJZ68*MTY3OTc3NzExMC4xLjEuMTY3OTc3NzE1Ny41Ny4wLjA.&_ga=2.255325071.629200012.1679777110-165748368.1679777110"
                  className="h-36"
                />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-around mt-5 max-[415px]:py-3">
        <center>
          <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:ml-1 ">
            MEDIA PARTNER
          </h1>
        </center>
      </div>
      <div className=" flex  flex-wrap justify-center py-10 mb-1  max-[415px]:py-5 ">

      <a href="https://www.youtube.com/@youthoobershiva" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-10 py-3 mr-3  max-[415px]:px-6  max-[415px]:ml-3"
          >
            <div className="flex space-x-2">
              <div className="w-14  max-[416px]:w-12">
                <img src={Shiva} className="rounded-full" />
              </div>
              <h1 className="text-2xl font-bold Sponsors pt-5 text-white max-[415px]:text-2xl bg-center ">
                Shiva Agrahari
              </h1>
            </div>
          </button>8
        </a>
        </div>
    </div>
  );
};

export default Sponsors;
