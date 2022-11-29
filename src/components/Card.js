import React from 'react';
import { Link } from 'react-router-dom';
const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3  space-y-5 md:space-y-0">
                    <Link to = "/blog" className="space-y-2 rounded-xl bg-white cursor-pointer text-justify">
                        <div className="blog1 rounded-t-2xl"></div>
                        <div className="p-3 space-y-2">
                            <h1 className="text-md font-bold">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium solu</h1>
                            <p className="pb-8">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium soluta et saepe assumenda sed optio accusantium non minus </p>
                        </div>
                    </Link>
                    <Link to = "/blog" className="space-y-2 rounded-xl bg-white cursor-pointer text-justify">
                        <div className="blog2 rounded-t-2xl"></div>
                        <div className="p-3 space-y-2">
                            <h1 className="text-md font-bold">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium solu</h1>
                            <p className="pb-8">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium soluta et saepe assumenda sed optio accusantium non minus </p>
                        </div>
                    </Link>
                    <Link to = "/blog" className="space-y-2 rounded-xl bg-white cursor-pointer text-justify">
                        <div className="blog3 rounded-t-2xl"></div>
                        <div className="p-3 space-y-2">
                            <h1 className="text-md font-bold">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium solu</h1>
                            <p className="pb-8">Lorem ipsum dolor sit amet. Vel nostrum impedit et laudantium soluta et saepe assumenda sed optio accusantium non minus </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;