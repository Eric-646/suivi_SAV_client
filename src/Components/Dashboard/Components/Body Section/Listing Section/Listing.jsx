import React from "react";
import "./listing.css";

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import img from "../../../Assets/img(1).jpg";

const Listing = () => {
  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Annual vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Coffe Plant</h3>
        </div>
        
         <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>

      </div>

     <div className="sellers flex">
      <div className="topSellers">
        <div className="heading flex">
          <h3>Top Sellers</h3>
          <button className="btn flex">
            See All <BsArrowRightShort className="icon" />
          </button>
        </div>

        
      </div>
      </div> 
    </div>
  );
};

export default Listing;
