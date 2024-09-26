import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off your next purchase
      </p>
      <p className="text-gray-400 mt-3">
        Be the first to know about our exclusive offers, new arrivals, and
        latest trends. Sign up for our newsletter and receive a 20% discount!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="text-white text-xs bg-black  px-10 py-4 rounded"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
