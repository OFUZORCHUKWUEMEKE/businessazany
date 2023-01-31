import React from 'react';

const FindSites = () => {
    return (
        <div>
            <div className="m-auto w-[95%] md:w-[85%] bg-[#fff9fd] my-10 px-5">
                <div className="md:flex space-y-5 md:space-y-0 gap-10 md:h-[ 637px] m-auto md:w-[80%] pt-24 items-center">
                    <div className="img hidden md:block w-[100%] pt-25">
                        <img src="/images/iphone (2).png" alt="" className='' />
                       
                    </div>
                    <div className="space-y-3 flex justify-center md:block flex-col">
                        <h1 className="font-bold text-2xl text-center md:text-left">Lorem Ipsum Dolor Sit <br/> Amet. Aut Distinctio</h1>
                        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum adipisci ab voluptate atque provident nam, accusamus libi.</p>
                        <button className="primary-button w-3/5 mx-auto bg-[#1b7cfc]">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindSites;