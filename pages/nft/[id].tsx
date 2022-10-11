import React from "react";

type Props = {};

function NFTDropPage({}: Props) {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              src="/images/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
              alt="BAYC"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">CRYPTO Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of CRYPTO Apes who live and breathe React!
            </h2>
          </div>
        </div>
      </div>
      {/* Right */}
      {/* Header */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight  sm:w-80">
            The{" "}
            <span className="font-extrabold underline uppercase decoration-pink-600/50">
              ultimate
            </span>{" "}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />
        {/* Content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            src="/images/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Hellfire Coding club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="h-16 w-full bg-red-600 text-white rounded-full mt-10  font-bold">
          Mint NFT (0.01ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
