import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="size-5 text-orange-200" />
      </div>
      <input
        {...props}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5"
      />
    </div>
  );
};

export default Input;
