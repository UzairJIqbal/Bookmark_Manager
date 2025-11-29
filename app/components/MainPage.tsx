/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import { CardInfo } from "@/app/lib/utils";
import { Card } from "@/app/types";

function MainPage() {
  const [cards, setCards] = useState<Card[]>(CardInfo);
  const handleSorting = () => {
    const sortedCards = [...cards].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    setCards(sortedCards);
  };
  return (
    <main className="h-full w-full px-0 -mt-2 sm:px-6 md:px-0 md:mt-2 lg:px-0 lg:-mt-4 xl:-mt-7 md:flex md:flex-col md:justify-center md:items-center lg:justify-between lg:mr-[210px] xl:mr-[350px] lg:w-full">
      <section className="flex flex-row justify-between items-center m-auto sm:flex-row sm:items-center sm:justify-between h-auto py-4 md:flex md:justify-between md:items-center md:w-[90vw] lg:w-full lg:items-center lg:text-center w-full">
        <h1 className="text-[20px] font-bold mb-0 sm:mb-0 md:text-[25px] lg:text-[20px] md:-ml-[18px] text-slate-800">
          All bookmarks
        </h1>
        <button
          onClick={handleSorting}
          className="flex items-center text-center justify-center gap-1 ml-auto border border-slate-200 bg-white px-3 py-1.5 rounded-[7px] cursor-pointer w-auto md:w-[100px] hover:bg-slate-50 transition-colors"
        >
          <img
            src="assets/sorting.png"
            alt="Sort"
            className="h-4 w-4 lg:h-4 lg:w-4"
          />
          <span className="text-sm md:text-sm lg:text-[12px] font-medium text-slate-700">
            Sort by
          </span>
        </button>
      </section>
      <section className="h-auto overflow-y-visible pr-0 md:overflow-x-hidden lg:-ml-[30px] lg:-mr-[30px] w-full pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col w-full mx-auto shrink-0
              lg:w-auto lg:flex
              "
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center w-[85%]">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="h-[45px] w-[45px] sm:h-12 sm:w-12 md:h-12 md:w-12 rounded-xl p-2 border border-slate-200 lg:h-[45px] lg:w-[45px] xl:h-12 xl:w-12 2xl:h-12 2xl:w-12 mt-0 object-contain"
                  />
                  <div className="overflow-hidden">
                    <h2 className="w-full text-lg font-bold lg:text-[18px] xl:text-lg md:text-[20px] text-slate-800 truncate">
                      {card.title}
                    </h2>
                    <p className="text-sm text-slate-500 lg:text-[13px] xl:text-sm md:text-[15px] truncate">
                      {card.url}
                    </p>
                  </div>
                </div>
                <button className="p-1 hover:bg-slate-100 rounded">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/94a3b8/menu-2.png"
                    alt="menu"
                    className="h-6 w-6"
                  />
                </button>
              </div>

              <hr className="border-slate-200 mb-4" />

              <p className="text-sm text-slate-600 mb-4 lg:text-[13px] xl:text-sm md:text-[12px] leading-relaxed">
                Improve your front-end coding skills by building real projects.
                Solve real-world HTML, CSS and JavaScript challenges whilst
                working to professional designs.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {card.descPoints.map((word, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-600 text-xs font-medium rounded px-2 py-1 lg:text-[12px] xl:text-xs md:text-[12px]"
                  >
                    {word}
                  </span>
                ))}
              </div>

              <hr className="border-slate-200 mb-4" />

              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center text-sm lg:gap-2 xl:gap-4 text-slate-500">
                  <div className="flex items-center gap-1 lg:text-[12px] md:text-[12px]">
                    <img
                      src="assets/visible.png"
                      className="h-4 w-4 lg:h-3 lg:w-3 md:h-3.5 md:w-3.5"
                    />
                    {card.views}
                  </div>
                  <div className="flex items-center gap-1 lg:text-[12px] md:text-[12px]">
                    <img
                      src="assets/clock.png"
                      alt="day"
                      className="h-4 w-4 lg:h-3 lg:w-3 md:h-3.5 md:w-3.5"
                    />
                    {card.day}
                  </div>
                  <div className="flex items-center gap-1 lg:text-[12px] md:text-[12px]">
                    <img
                      src="assets/calendar.png"
                      alt="date"
                      className="h-4 w-4 lg:h-3 lg:w-3 md:h-3.5 md:w-3.5"
                    />
                    {card.date}
                  </div>
                </div>
                <img
                  src="assets/push-pin.png"
                  alt="pin"
                  className="h-4 w-4 lg:h-4 lg:w-4 xl:h-4 xl:w-4 xl:block lg:block opacity-60 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainPage;
