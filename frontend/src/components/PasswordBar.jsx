import { Check, X } from "lucide-react";
import React from "react";

const PasswordCrit = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "At least one lowercase letter", met: /[a-z]/.test(password) },

    { label: "At least one number", met: /\d/.test(password) },
    { label: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password) },
    { label: "At least one uppercase letter", met: /[A-Z]/.test(password) },
  ];
  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 text-xs">
          {item.met ? <Check className="text-green-300 mr-2" /> : <X className="text-red-500" />}
          <span className={item.met ? "text-green-300" : "text-red-500"}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
const PasswordBar = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    return strength;
  };
  const strength = getStrength(password);
  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password strength</span>
        <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
            ${index < strength ? getColor(strength) : "bg-gray-600"}
          `}
          />
        ))}
      </div>
      <PasswordCrit password={password} />
    </div>
  );
};

export default PasswordBar;
