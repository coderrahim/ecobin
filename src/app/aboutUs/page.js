import Image from "next/image";
import React from "react";
import aboutUsImage from "@/assests/about.jpg";
import bin from "@/assests/bin.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto h-90">
      <h1 className="text-5xl my-10 font-bold">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-1 lg:pr-60">
          <h1 className="text-4xl font-semibold py-2 md:py-4 lg:py-6">
            Providing A Regular Trash Collection On A Scheduled Time Or Call In
            Service.
          </h1>
          <p className="lg:py-6">
            We have already made huge investments in all kinds of energy and
            plastic recycling from waste infrastructure and carbon collections,
            leading to reduction in nation carbon emissions since 2016.
          </p>
          <p className="opacity-50">
            We also offer reliable and low cost waste collection services that
            meet all your general waste collections requirements.
          </p>
          <div className="md:my-10">
            <p className="text-sm">Construction Waste</p>
            <div className="bg-gray-200 h-4 w-full rounded-full my-4">
              <div className="bg-green-500 w-5/6 h-full rounded-full"></div>
            </div>
            <p className="text-sm">Manufacturing Waste</p>
            <div className="bg-gray-200 h-4 w-full rounded-full my-4">
              <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
            </div>
            <p className="text-sm">Retail Waste</p>
            <div className="bg-gray-200 h-4 w-full rounded-full my-4">
              <div className="bg-green-500 w-2/3 h-full rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            className="rounded-2xl"
            src={aboutUsImage}
            layout="responsive"
            width={1920}
            height={1080}
            alt="about us image"
          />
          <div className="hidden lg:block absolute bottom-5 -left-28 ">
            <Image
              className="rounded-2xl "
              src={bin}
              width={200}
              height={200}
              alt="bin image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
