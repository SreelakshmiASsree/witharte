import Image from "next/image";
import bgimage from "../../../public/images/bg.jpg"
import logo from "../../../public/images/logo.jpg"
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
                    <div className="absolute lg:bottom-56 bottom-48">
                        <p className=" lg:text-lg text-sm font-normal tracking-widest">WE  ARE  PUBLISHING  SOON...</p>
                    </div>
                </div>

            </div>

        </>
    )
}