import Image from "next/image";
import bgimage from "../../../public/images/bg.jpg"
import logo from "../../../public/images/logo.jpg"
import { FiPhoneCall  } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
export default function Underconstruction() {
    return (
        <>
            <div className="relative w-full h-screen">
                <Image
                    src={bgimage}
                    alt="Background"
                    fill
                    className="object-cover"
                />
                {/* Your content on top */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
                    <div className="relative">
                        <Image src={logo} alt="logo" className="lg:w-3xl w-2xl object-contain" />
                    </div>
                    <div className="absolute lg:bottom-56 bottom-60">
                        <p className=" lg:text-lg text-sm font-normal tracking-widest">WE  ARE  PUBLISHING  SOON...</p>
                    </div>
                    <div className="flex gap-5 ">
                <a href="https://www.instagram.com/witharte_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram  className="md:text-3xl text-2xl text-[#ffffff]" />
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