import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our brand, where we believe in delivering the best
            quality products that meet your everyday needs. Our team is
            committed to offering an exceptional shopping experience for every
            customer, ensuring both value and satisfaction.
          </p>
          <p>
            From our carefully curated collections to the seamless online
            shopping process, we aim to provide you with a wide range of
            products that cater to your tastes and preferences. We value your
            trust and continuously strive to exceed your expectations.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is simple: to offer premium quality products while
            maintaining an unparalleled level of customer service. We are driven
            by a passion for excellence and a desire to help you find exactly
            what you're looking for.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in the quality of our products, ensuring that every
            item meets our strict standards. Our dedication to quality means you
            can shop with confidence, knowing that we prioritize durability,
            design, and functionality.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shopping with us is simple and convenient. From an easy-to-navigate
            website to fast and reliable shipping, we make the process as smooth
            as possible, so you can focus on enjoying your purchase.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our customer service team is here to assist you every step of the
            way. Whether you need help with product selection, placing an order,
            or handling returns, we are dedicated to providing quick and
            effective solutions.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
