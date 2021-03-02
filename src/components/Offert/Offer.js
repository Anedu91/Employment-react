import React from "react";
import BrandImage from "./brand.png";
import { MdPeople, MdAlarm, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

function Offer(props) {
  return (
    <div className="rounded shadow-customCard p-5">
      <div className="flex items-center mb-4">
        <img src={BrandImage} className="max-w-full mr-5" alt="company logo" />
        <div className="">
          <h4 className="text-base font-bold">{props.data.companyName}</h4>
          <p className="text-sm">
            By: <span>{props.data.companyPerson}</span>
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="text-lg font-bold mb-3">{props.data.positionName}</h3>
        <p className="text-base">{props.data.description}</p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-3">
          <div className="flex">
            <span>{props.data.vacants} persons</span>
          </div>
          <div className="flex">
            <span>{props.data.typeContract}</span>
          </div>
          <div className="flex">
            <span>{props.data.area[0]}</span>
          </div>
          <div className="flex">
            <span>{props.data.workType}</span>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t-2 py-3">
        <Link
          to={`/${props.id}/submition`}
          className="w-full block text-center bg-primary-200 text-white py-2 font-bold hover:bg-primary-100 hover:text-black"
        >
          Join
        </Link>
      </div>
    </div>
  );
}

export default Offer;
