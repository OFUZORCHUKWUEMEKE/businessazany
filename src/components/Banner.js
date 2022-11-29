import React from 'react';
import Card from '../components/Card';
import Cards from '../components/Card';


const Banner = () => {
    return (
        <div className='bg-[#F9FCFF]'>
            <div className="py-10 m-auto w-[85%]">
                <h1 className="font-bold text-center text-3xl mb-8">Blog post</h1>
                <div className="md:flex items-center gap-5 space-y-5 md:space-y-0">
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default Banner;