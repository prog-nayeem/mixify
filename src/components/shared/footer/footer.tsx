import React from "react";
import SendIcon from "@/public/svgs/send-icon.svg";
import qrCode from "@/public/images/qr-code.png";
import googlePlayStoreLogo from "@/public/images/google-play-store-logo.png";
import appstoreLogo from "@/public/images/appstore-logo.png";
import Image from "next/image";
import FacebookIcon from "@/public/svgs/facebook-icon.svg";
import TwitterIcon from "@/public/svgs/twitter-icon.svg";
import InstagramIcon from "@/public/svgs/instagram-icon.svg";
import LinkedinIcon from "@/public/svgs/linkedin-icon.svg";
import CopyriteIcon from "@/public/svgs/copyright-icon.svg";

const Footer = () => {
  return (
    <section className="h-[440px] mt-[140px] bg-bg2 text-text ">
      <div className="max-w-screen-xl flex items-start space-x-[87px] mx-auto pt-20">
        <div className="max-w-[217px]">
          <h1 className="text-2xl font-bold inline-block tracking-[1.4px] leading-normal">
            Mixify
          </h1>
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-medium inline-block tracking-wider">
              Subscribe
            </h2>
            <p className="text-[16px] mt-2 font-normal">
              Get 10% off your first order
            </p>
            <div className="flex justify-between items-center h-[48px] w-[217px] space-x-2 rounded-[4px] border-[1.5px] border-text px-[10px]">
              <input
                placeholder="Enter your email"
                className="border-none bg-transparent w-[150px] placeholder:text-[16px] outline-none placeholder:font-normal placeholder:text-text placeholder:text-opacity-40"
              />
              <SendIcon className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="max-w-[175px]">
          <h1 className="text-xl font-medium inline-block leading-normal">
            Support
          </h1>
          <div className="mt-6 ">
            <ul className=" [&>*]:text-[16px] mt-2 font-normal space-y-4">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>support@mixify.com</li>
              <li>+88016-2261-6345</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[123px]">
          <h1 className="text-xl font-medium inline-block leading-normal">
            Account
          </h1>
          <div className="mt-6 ">
            <ul className="text-[16px] [&>*]:cursor-pointer mt-2 font-normal space-y-4">
              <li className="hover:text-gray-200">My Account</li>
              <li className="hover:text-gray-200">Login / Register</li>
              <li className="hover:text-gray-200">Cart</li>
              <li className="hover:text-gray-200">Wishlist</li>
              <li className="hover:text-gray-200">Shop</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[109px]">
          <h1 className="text-xl font-medium inline-block leading-normal">
            Quick Link
          </h1>
          <div className="mt-6 ">
            <ul className="text-[16px]  [&>*]:cursor-pointer  mt-2 font-normal space-y-4">
              <li className="hover:text-gray-200">Privacy Policy</li>
              <li className="hover:text-gray-200">Terms Of Use</li>
              <li className="hover:text-gray-200">FAQ</li>
              <li className="hover:text-gray-200">Contact</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[198px]">
          <h1 className="text-xl font-medium inline-block leading-normal">
            Download App
          </h1>
          <div className="mt-6 ">
            <p className="text-[12px] opacity-70 font-medium">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center mt-2 space-x-2">
              <Image
                className="w-[76px] h-[76px] object-contain"
                src={qrCode}
                alt="QR-Code"
              />
              <div className="space-y-2">
                <Image
                  className="w-[104px] h-[30px] object-fill cursor-pointer"
                  src={googlePlayStoreLogo}
                  alt="Google Play Store Logo"
                />
                <Image
                  className="w-[104px] h-[34px] object-fill cursor-pointer"
                  src={appstoreLogo}
                  alt="App Store Logo"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-6">
              <FacebookIcon className="w-[24px] h-[24px] cursor-pointer" />
              <TwitterIcon className="w-[24px] h-[24px] cursor-pointer" />
              <InstagramIcon className="w-[24px] h-[24px] cursor-pointer" />
              <LinkedinIcon className="w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="flex space-x-2 opacity-30 items-center">
          <CopyriteIcon className="w-5 h-5 " />
          <p className="text-[16px] font-normal ">
            Copyright Mixify 2024. All right reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
