import React from "react";
import FastDeliveryIcon from "@/public/svgs/fast-delivery-icon.svg";
import CustomerServiceIcon from "@/public/svgs/customer-service-icon.svg";
import MoneyBackIcon from "@/public/svgs/money-back-icon.svg";

const Services = () => {
  return (
    <section className="mx-auto max-w-[943px] mt-[140px] grid grid-cols-3 gap-x-[88px]">
      <div className="flex text-text2 justify-center items-center flex-col">
        <FastDeliveryIcon width={80} height={80} />
        <h1 className="text-[20px] font-semibold mt-6">
          FREE AND FAST DELIVERY
        </h1>
        <p className="text-[14px] font-normal mt-2">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="flex text-text2 justify-center items-center flex-col">
        <CustomerServiceIcon width={80} height={80} />
        <h1 className="text-[20px] font-semibold mt-6">
          24/7 CUSTOMER SERVICE
        </h1>
        <p className="text-[14px] font-normal mt-2">
          Friendly 24/7 customer support
        </p>
      </div>{" "}
      <div className="flex justify-center text-text2 items-center flex-col">
        <MoneyBackIcon width={80} height={80} />
        <h1 className="text-[20px] font-semibold mt-6">MONEY BACK GUARANTEE</h1>
        <p className="text-[14px] font-normal mt-2">
          We reurn money within 30 days
        </p>
      </div>
    </section>
  );
};

export default Services;
