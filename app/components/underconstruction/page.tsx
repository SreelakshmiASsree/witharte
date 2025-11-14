import Image from "next/image";
import bgimage from "../../../public/images/bg.jpg"
import logo from "../../../public/images/logo.jpg"
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
export default function Underconstruction() {
    return (
        <>
            <div className="relative w-full h-screen">

                {/* Your content on top */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
                    <div className="relative">
                        <Image src={logo} alt="logo" className="lg:w-3xl w-2xl object-contain" />
                        <div className="absolute lg:top-80 lg:left-80  top-[155px] left-[135px]">
                            <p className="text-center lg:text-5xl text-3xl font-extralight">Gallery</p>
                        </div>
                    </div>
                    <div className="absolute lg:bottom-20 bottom-24">
                        <p className=" lg:text-lg text-sm font-normal tracking-widest">WE  ARE  PUBLISHING  SOON...</p>
                    </div>
                    <div className="flex gap-5 absolute lg:bottom-10 bottom-14">
                        <a href="https://www.instagram.com/witharte_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="md:text-3xl text-2xl text-[#ffffff]" />
                        </a>
                        <p className="text-[#ffffff] md:text-2xl text-xl font-medium flex items-center gap-1">
                            <span><FiPhoneCall /></span>
                            <a href=""></a>+91 9633249362
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}