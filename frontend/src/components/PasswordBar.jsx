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
          {item.met ? <Check className="text-green-500 mr-2" /> : <X className="text-gray-500" />}
          <span className={items.met ? "text-green-500" : "text-gray-500"}>{items.label}</span>
        </div>
      ))}
    </div>
  );
};
const PasswordBar = ({ password }) => {
  const strength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    return strength;
  };
  const strengthLevel = strength(password);

  const strengthLabel = ["Too weak", "Weak", "Good", "Strong", "Strong"][strengthLevel];

  return <div>PasswordBar</div>;
};

export default PasswordBar;
