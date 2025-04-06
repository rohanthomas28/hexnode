import React from "react";
import LastFooter from "./LastFooter"
function Footer() {
    return (
        <>
            {/* Main Footer Section */}
            <div className="bg-[#0B0E16] text-white flex flex-col text-center p-12">
                {/* Signup Box */}
                <div className="text-center max-w-lg mx-auto">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
                        Sign up and try Hexnode free for 14 days!
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <input
                            type="email"
                            placeholder="Your Work Email"
                            className="px-4 py-3 text-black bg-white rounded-sm w-full sm:w-80 focus:outline-none"
                        />
                        <button className="bg-red-500 px-4 py-3 rounded-sm text-white font-semibold w-full sm:w-auto">
                            GET STARTED NOW!
                        </button>
                    </div>
                    <p className="text-gray-400 mt-2 text-sm mb-6">
                        No credit cards required. <span className="text-[#E50938] cursor-pointer">Request a demo &gt;</span>
                    </p>
                </div>
                </div>
                <LastFooter/>
        </>
    );
}

export default Footer;
