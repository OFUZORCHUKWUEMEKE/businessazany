import React,{useEffect, useRef} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { CgProfile } from 'react-icons/cg';
import PersonIcon from '@mui/icons-material/Person';

const Blog = () => {
    const mainRef = useRef()
    useEffect(()=>{
        mainRef.current.scrollIntoView({behavior:"smooth"})
    },[])
    return (
        <div ref={mainRef} className='overflow-hidden'>
            <div className="m-auto w-[85%] py-16">
                <div className="space-y-2">
                    <div className="flex items-center gap-1 text-sm">
                        <Link to="/"><p className="active:text-blue hover:text-blue text-blue">Home</p></Link>
                        <span className="">|</span>
                        <Link to="/"><p className="active:text-blue hover:text-blue">Post Title</p></Link>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl">Post Title</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-blue">Author</p>
                        <p className="text-blue">Category</p>
                        <p className="text-gray-500">a min ago</p>
                    </div>
                </div>
                <div className="">
                    <div className="blog-image pt-10">
                        <img src="/images/Bicycle.png" alt="" className="md:h-[70vh] rounded-md h-[50vh] bicycle object-cover w-full" />
                    </div>
                    <div className="blog-text">
                        <br /> <br />
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.</p> <br /> <br />
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.</p> <br /> <br />
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.</p> <br /> <br />
                        <hr className="border-[#6DE4EA] border-1" />
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-5">
                            <p className="">Share this</p>
                            <div className="flex items-center gap-2 text-gray-800 text-xl">
                                <Link to="/"> <FaFacebook className='bg-gray-300 p-1 text-gray-700 text-3xl rounded-full' /></Link>
                                <Link to="/"> <FaTwitter className='bg-gray-300 p-1 text-gray-700 text-3xl rounded-full' /></Link>
                                <Link to="/">  <FaInstagram className='bg-gray-300 p-1 text-gray-700 text-3xl rounded-full' /></Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link to="/"><p className="bg-gray-300 rounded-xl p-1 px-2">design</p></Link>
                            <Link to="/"><p className="bg-gray-300 rounded-xl p-1 px-2">web</p></Link>
                        </div>
                    </div>
                </div>
                <div className="blog-list md:flex items-center gap-5">
                    <div className="w-[100%] space-y-3">
                        <img src='' className="blog4"></img>
                        <h1 className="font-bold">Post Title</h1>
                    </div>
                    <div className="w-[100%] space-y-3">
                        <img src='' className="blog5"></img>
                        <h1 className="font-bold">Post Title</h1>
                    </div>
                    <div className="w-[100%] space-y-3">
                        <img src='' className="blog6"></img>
                        <h1 className="font-bold">Post Title</h1>
                    </div>
                </div>
                <div className="comments my-8">
                    <h1 className="text-2xl pt-5 font-semibold ">Comments</h1>
                    <div className="md:w-[60%]">
                        <div className="flex items-center flex-wrap md:flex-nowrap  gap-5 my-5">
                            <div className="">
                                <div className=" text-gray-500 rounded border border-gray-500 px-5 py-1">
                                    <p className="">Username</p>
                                </div>
                            </div>
                            <div className="w-[100%]">
                                <div className=" text-gray-500 rounded border border-gray-500 px-5 py-1">
                                    <p className="">Your Comment...</p>
                                </div>
                            </div>
                            <div className="">
                                <button className=" text-white bg-[#1b7cfc] hover:bg-[#1b7cfc]  rounded border border-gray-500 px-5 py-1">
                                    <p className="">Comment</p>
                                </button>
                            </div>
                        </div>
                        <div className="comment-box space-y-5">
                            <div className="bg-gray-200 p-5 rounded">
                                <div className="flex items-center gap-5">
                                    <div className="space-y-2">
                                        <PersonIcon sx={{ fontSize: "50px" }} className="bg-gray-800 rounded-full text-white" />
                                        <p className="text-center">User</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.</p>
                                        <div className="flex items-center gap-3">
                                            <p className="active:text-blue hover:text-blue">Reply</p>
                                            <p className="active:text-blue hover:text-blue text-blue-700">a min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-5 rounded">
                                <div className="flex items-center gap-5">
                                    <div className="space-y-2">
                                        <PersonIcon sx={{ fontSize: "50px" }} className="bg-gray-800 rounded-full text-white" />
                                        <p className="text-center">User</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.</p>
                                        <div className="flex items-center gap-3">
                                            <p className="active:text-blue hover:text-blue">Reply</p>
                                            <p className="active:text-blue hover:text-blue text-blue-700">a min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;