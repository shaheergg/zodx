import React, { useEffect, useState } from "react";

function Progress({ title, percentage }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="w-full space-y-2 ">
        <div className="flex items-center gap-4">
          <span className="w-56 text-sm">{title}</span>

          <div className="w-full border border-gray-600 cursor-pointer group h-7">
            <div
              style={{
                width: percentage,
              }}
              className={`h-full transition-all bg-indigo-600 hover:bg-indigo-500 duration-500 ease-in-out`}
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
