import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import effortless from "../assets/kioskFeatures/effortless-kiosk-deployement-image.webp";
import customized from "../assets/kioskFeatures/customized-interface-image.webp";
import power from "../assets/kioskFeatures/power-up-protection-image.webp";
import secure from "../assets/kioskFeatures/secure-app-ecosystem.webp";
import easy from "../assets/kioskFeatures/easy-to-use-interface-image.webp";

function KioskFeatures() {

  const features = [
    {
      id: "effortless",
      title: "Effortless kiosk deployment & management",
      description:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      image: effortless,
    },
    {
      id: "customized",
      title: "Customized interface for brand visibility",
      description:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      image: customized,
    },
    {
      id: "power",
      title: "What more can you do with Hexnode kiosk?",
      description:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      image: power,
    },
    {
      id: "secure",
      title: "Secure and update your app ecosystem",
      description:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      image: secure,
    },
    {
      id: "easy",
      title: "Provide an easy-to-use interface for end-users",
      description:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      image: easy,
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const previousTabIndex = useRef(0);
  const directionRef = useRef(1); 

  const handleTabClick = (id) => {
    const currentIndex = features.findIndex((f) => f.id === activeFeature);
    const nextIndex = features.findIndex((f) => f.id === id);
  
    directionRef.current = nextIndex > currentIndex ? -1 : 1; // ✅ Corrected
    previousTabIndex.current = currentIndex;
    setActiveFeature(id);
  };

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -50 : 50,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
    }),
  };

  return (
    <div className="w-full mx-auto p-6 md:p-12 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:py-14">
        What additional possibilities does the <br></br>
        Kiosk mode offer?
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section for md and up */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center relative overflow-hidden h-[400px]">
        <AnimatePresence custom={directionRef.current} mode="wait">
          <motion.img
            key={activeFeature}
            src={features.find((f) => f.id === activeFeature).image}
            alt={features.find((f) => f.id === activeFeature).title}
            className="w-[500px] h-[400px] rounded-lg shadow-lg object-cover absolute"
            custom={directionRef.current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <ul className="space-y-4 text-lg font-medium">
            {features.map((feature) => (
              <li
                key={feature.id}
                className={`cursor-pointer text-3xl p-2 rounded-lg transition border-b border-gray-100`}
                onClick={() => handleTabClick(feature.id)}
              >
                {/* Show image first only for small devices */}
                {activeFeature === feature.id && (
                  <div className="block md:hidden mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg shadow-md object-cover mb-4"
                    />
                  </div>
                )}

                {/* Title */}
                {feature.title}

                {/* Description + CTA only if active */}
                {activeFeature === feature.id && (
                  <AnimatePresence mode="wait" custom={directionRef.current}>
                    <motion.div
                      key={feature.id}
                      custom={directionRef.current}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="mt-2 text-gray-700 text-sm font-normal"
                    >
                      <p className="mb-2 text-xl py-3">{feature.description}</p>
                      <a href="#" className="text-red-500 font-semibold">
                        TRY FOR FREE &gt;
                      </a>
                    </motion.div>
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KioskFeatures;
