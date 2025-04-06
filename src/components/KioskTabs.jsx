import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import asam from "../assets/kioskTabs/asam-kiosk-image.webp";
import digital_signage from "../assets/kioskTabs/digital-signage-kiosk-image.webp";
import web_based from "../assets/kioskTabs/web-based-kiosk-image.webp";
import multi_app from "../assets/kioskTabs/multi-app-kiosk-image.webp";
import single_app from "../assets/kioskTabs/single-app-kiosk-image.webp";

function KioskTabs() {
  const [activeTab, setActiveTab] = useState("single");
  const previousTabIndex = useRef(0);

  const tabs = [
    { id: "single", label: "Single App Kiosk" },
    { id: "multi", label: "Multi-App Kiosk" },
    { id: "web", label: "Web-based Kiosk" },
    { id: "digital", label: "Digital Signages" },
    { id: "asam", label: "ASAM Kiosk" },
  ];

  const tabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const content = {
    single: {
      title: "Powerful Single-App Kiosk solutions for enhanced control",
      points: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: single_app,
    },
    multi: {
      title: "Elevate efficiency with Multi-App Kiosk",
      points: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: multi_app,
    },
    web: {
      title: "Explore the new way to manage web apps and websites",
      points: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: web_based,
    },
    digital: {
      title: "Capture attention with Digital Signage Kiosks",
      points: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: digital_signage,
    },
    asam: {
      title: "Unlock the power of Autonomous Single App Mode (ASAM)",
      points: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: asam,
    },
  };

  const handleTabClick = (id) => {
    previousTabIndex.current = tabIndex;
    setActiveTab(id);
  };

  const direction = tabIndex > previousTabIndex.current ? -1 : 1;


  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl text-black font-bold text-center my-8 md:my-16 ">
          Specific kiosk modes for unique use cases
        </h2>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center border border-gray-200 rounded-t-lg shadow-sm ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 px-4 py-2 text-sm font-medium border border-gray-100 text-center transition-colors md:p-5
                ${activeTab === tab.id ? "bg-gray-900 text-white shadow-md" : "bg-white text-gray-500 hover:text-gray-900"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: direction * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 50, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="hidden md:flex items-center gap-6 bg-gray-100 border border-gray-300 rounded-b-lg p-6"
          >
            {/* Text Content on Left */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-black mb-4 md:mb-16 ">
                {content[activeTab].title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-lg">
                {content[activeTab].points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image on Right */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={content[activeTab].image}
                alt={activeTab}
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Accordion */}
        <div className="md:hidden px-4">
          {tabs.map((tab) => (
            <div key={tab.id} className="border border-gray-100 rounded-lg sm:rounded-sm md:mb-2">
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                className={`w-full flex justify-between items-center px-4 py-3 text-base font-medium
                  ${activeTab === tab.id ? "bg-black text-white" : "bg-white text-gray-700"}`}
              >
                {tab.label}
                <span>
                  {activeTab === tab.id ? (
                    <svg
                      className="w-6 h-6 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>
              </button>
              {activeTab === tab.id && (
                <div className="p-4 bg-white">
                  <div className="mb-3">
                    <img
                      src={content[tab.id].image}
                      alt={tab.id}
                      className="w-full max-w-sm rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {content[tab.id].title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {content[tab.id].points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KioskTabs;
