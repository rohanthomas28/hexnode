import React from 'react';
import android_tv from '../assets/platForms/android-tv.svg';
import android from '../assets/platForms/android.svg';
import apple_tv from '../assets/platForms/apple-tv.svg';
import amazon_fire from '../assets/platForms/amazon-fire.webp';
import ios from '../assets/platForms/ios.svg';
import windows from '../assets/platForms/windows.svg';

const platforms = [
  { name: 'Android', logo: android },
  { name: 'Windows', logo: windows },
  { name: 'iOS', logo: ios },
  { name: 'Android TV', logo: android_tv },
  { name: 'Apple TV', logo: apple_tv },
  { name: 'Fire TV', logo: amazon_fire },
];

function Platforms() {
  return (
    <div className="py-16 px-4 bg-white w-full flex flex-col items-center">
      <h1 className="text-4xl text-black font-bold text-center mb-16">Platforms supported</h1>

      {/* Grid layout for responsive control */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="w-full h-20 md:w-48 rounded-xl flex items-center justify-center transition duration-300 hover:-translate-y-1"
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="h-8 w-auto object-contain transition-all duration-300 transform hover:-translate-y-2 w-40 h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Platforms;
