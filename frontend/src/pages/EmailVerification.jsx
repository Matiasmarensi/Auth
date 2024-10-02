import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      <p className="text-gray-600 mb-8">Enter the 6-digit code sent to your email address</p>
      <div className="flex space-x-4">
        {code.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => {
              const newCode = [...code];
              newCode[index] = e.target.value;
              setCode(newCode);

              if (e.target.value && index < code.length - 1) {
                inputRef.current[index + 1].focus();
              }
            }}
            ref={(el) => (inputRef.current[index] = el)}
            className="w-12 h-12 border-2 border-gray-300 rounded text-center text-xl focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>
      <button
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Verify
      </button>
    </div>
  );
};

export default EmailVerification;
