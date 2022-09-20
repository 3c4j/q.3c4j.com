import React from 'react';
import {Content} from "./Content";

export const Latest = () => (
    <>
        <header className="bg-white relative z-40 w-full h-8 px-12 flex justify-between items-center">
            <div className="w-full lg:w-auto">
                <a href=""
                   className="mt-2 font-serif text-2xl block text-center text-black text-lg no-underline hover:text-gray-600">
                    每日一问 / Daily Question
                </a>
            </div>
        </header>
        <div className="lg:h-screen -mt-24 lg:pt-24 w-full flex flex-wrap px-2">
            <Content />
        </div>
    </>
);
