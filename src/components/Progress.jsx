import React, { useEffect, useState } from "react";

function Progress({ title, percentage }) {
  const [bgColor, setBgColor] = useState("");
  const [flag, setFlag] = useState(false);

  // after every 5 seconds, the progress bar color will change
  useEffect(() => {
    const interval = setInterval(() => {
      setFlag((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const randomLightColor = () => {
    const colors = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    setBgColor(randomLightColor());
  }, [flag]);

  return (
    <div className="flex items-center justify-between py-2 cursor-grab">
      <div className="w-full space-y-2 ">
        <div className="flex items-center gap-4">
          <span className="w-56 text-sm">{title}</span>

          <div className="w-full border border-gray-600 cursor-pointer group h-7">
            <div
              style={{
                width: percentage,
              }}
              className={`h-full transition-all ${bgColor} duration-500 ease-in-out`}
            ></div>
          </div>
          <span className="text-xs font-semibold text-gray-200">
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Progress;
