import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2  bg-[#ffe7ba] mobile:flex-col mobile:items-start ">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px] font-bold">RAVI-Ecommerce</h1>
        <p><strong>
          It is an online platform that allows users to browse, select, and
          purchase a wide variety of products and services from the comfort of
          their homes or any location with internet access.
          </strong></p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined className="text-[#8a4af3]" />
          <p className="pl-3 font-bold">Kathmandu</p>
        </div>
        <div className="flex m-3 font-bold">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <p className="pl-3">+9779815847435</p>
        </div>
        <div className="flex m-3 font-bold">
          <EmailOutlined className="text-[#8a4af3]" />
          <p className="pl-3">ravidigital24hrs@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
