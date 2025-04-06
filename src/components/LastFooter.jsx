import React from "react";
import { ChevronDown } from "lucide-react";

function FooterBottomBar() {
    return (
        <div className="bg-[#F4F4F4] w-full text-gray-600 text-sm py-3 px-6 flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center flex-wrap gap-4">
                {/* Language Dropdown */}

                {/* Links */}
                <div className="flex items-center gap-2">
                    <a href="#" className="hover:underline md:ml-12 ">Terms of Use</a>
                    <span>-</span>
                    <a href="#" className="hover:underline">Privacy</a>
                    <span>-</span>
                    <a href="#" className="hover:underline">Cookies</a>
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-2 md:mt-0 sm:py-4 md:mr-12">
                <p>Copyright © 2025 Mitsogo Inc. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default FooterBottomBar;
