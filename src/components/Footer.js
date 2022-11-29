import React from 'react';
import {  TfiLinkedin} from "react-icons/tfi"
import {CgFacebook} from "react-icons/cg"
import {VscTwitter} from "react-icons/vsc"
import {AiOutlineInstagram} from "react-icons/ai"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return (
        <footer>
            <div class=" mt-18 bg-[#0266EA] text-white ">
                <div class="md:flex md:justify-between m-auto w-[85%] py-16 gap-12">
                    <div class="mb-6 md:mb-0 space-y-2 ">
                        <h1 class="text-xl font-semibold">Azany Business</h1>
                        <p className="text-sm text-gray-200">Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor Lorem ipsum dolor sit amet.sit amet consectetur.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 font-semibold">Product</h2>
                            <ul class="text-sm  text-gray-200">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Payment</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="">Solutions</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="">Referrals</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 font-semibold">Legal</h2>
                            <ul class=" text-sm text-gray-200">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class=" ">Terms and Services</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 font-semibold">Contact</h2>
                            <ul class="text-sm text-gray-200">
                                <li class="mb-4 flex items-center gap-5">
                                    < LocalPhoneIcon />
                                    <a href="#" class="">+123444444444</a>
                                </li>
                                <li class="mb-4 flex items-center gap-5">
                                    <EmailIcon />
                                    <a href="#" class="">Azanybusiness@gmail.com</a>
                                </li>
                                <li class="mb-4 flex items-center gap-5">
                                    <LocationOnIcon />
                                    <a href="#" class="">2972 Westheimer Rd. Santa Ana, Illinois 85486</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-12">
                <div className="w-[100%]">
                    <div className="bg-[#003C8A1A] rounded-tr-full p-3" ></div>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                    <CgFacebook/>
                    <VscTwitter/>
                    <TfiLinkedin/>
                    <AiOutlineInstagram/>
                    </div>
                    <div className="w-[100%]">
                    <div className="bg-[#003C8A1A] rounded-tl-full p-3" ></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;