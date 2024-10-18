"use client";
import React from "react";
import Image from "next/image";
import { LiaPlusSolid } from "react-icons/lia";
import { FadeUpAnimation } from "../../app/lib/aos/Animation";

const AboutCard = ({
  item,
  direction = "ltr",
}: {
  item: any;
  direction?: "rtl" | "ltr";
}) => {
  FadeUpAnimation();
  const { area, title, description, image } = item;
  return (
    <div
      className={`md:flex gap-12 items-center w-full relative pb-20  md:even:flex-row-reverse`}
      dir={direction}>
      <div className="relative w-full h-80 md:h-[28rem] flex-auto">
        <Image
          src={image}
          alt="pic"
          fill={true}
          className="w-full h-full object-contain over object-center"
          unoptimized
          data-aos="zoom-in-up"
          data-aos-duration="600"
        />
      </div>
      <div className="mt-6 md:mt-0 space-y-3 w-full">
        <h1 className="uppercase flex items-center gap-2">
          <LiaPlusSolid className="text-themeColor" />
          {area}
        </h1>
        <h1 className="text-4xl ">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;