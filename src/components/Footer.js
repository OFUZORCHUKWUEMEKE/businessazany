import React from 'react';
import { TfiLinkedin } from "react-icons/tfi"
import { CgFacebook } from "react-icons/cg"
import { VscTwitter } from "react-icons/vsc"
import { AiOutlineInstagram } from "react-icons/ai"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return (
        <footer>
            <div class="mt-18 py-4 flex items-center bg-[#0266EA] text-white ">
                <div className='flex w-[90%] mx-auto justify-between'>
                    <div>
                        <h2>Azany Business</h2>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <CgFacebook />
                        <VscTwitter />
                        <TfiLinkedin />
                        <AiOutlineInstagram />
                    </div>
                </div>
                {/* <div className="flex justify-between items-center gap-12">
                    <div className="w-[100%]">
                        <div className="bg-[#003C8A1A] rounded-tr-full p-3" ></div>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <CgFacebook />
                        <VscTwitter />
                        <TfiLinkedin />
                        <AiOutlineInstagram />
                    </div>
                    <div className="w-[100%]">
                        <div className="bg-[#003C8A1A] rounded-tl-full p-3" ></div>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;