import React, { useState, useEffect } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  Zap,
  CheckCircle,
  ArrowRight,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResetPassUi = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  useEffect(() => {
    const pwd = formData.password;
    setRequirements({
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    });
  }, [formData.password]);

  const isValid =
    Object.values(requirements).every(Boolean) &&
    formData.password === formData.confirmPassword &&
    formData.password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const RequirementItem = ({ met, text }) => (
    <div
      className={`flex items-center gap-2 text-xs transition-colors duration-300 ${
        met ? "text-green-400" : "text-gray-500"
      }`}
    >
      {met ? (
        <CheckCircle className="w-3.5 h-3.5" />
      ) : (
        <div className="w-3.5 h-3.5 rounded-full border border-gray-600" />
      )}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f1016] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1a1b23]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 mb-4 shadow-lg shadow-indigo-500/30">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Reset your password
              </h2>
              {!isSuccess ? (
                <p className="text-gray-400 text-sm">
                  Create a new strong password for your account
                </p>
              ) : (
                <p className="text-gray-400 text-sm">
                  Your password has been successfully updated
                </p>
              )}
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    New Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="block w-full pl-10 pr-10 py-2.5 bg-[#0f1016] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 sm:text-sm"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Strength Guidelines */}
                <div className="bg-white/5 rounded-lg p-3 space-y-2 border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                    Password requirements
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <RequirementItem
                      met={requirements.length}
                      text="8+ characters"
                    />
                    <RequirementItem
                      met={requirements.uppercase}
                      text="Uppercase letter"
                    />
                    <RequirementItem
                      met={requirements.number}
                      text="One number"
                    />
                    <RequirementItem
                      met={requirements.special}
                      text="Special character"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className={`block w-full pl-10 pr-10 py-2.5 bg-[#0f1016] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all duration-200 sm:text-sm
                        ${
                          formData.confirmPassword &&
                          formData.password !== formData.confirmPassword
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/50"
                        }
                      `}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-xs text-red-400 ml-1 flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> Passwords do not match
                      </p>
                    )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !isValid}
                  className="w-full relative py-3 px-4 flex justify-center items-center gap-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Update Password
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-20" />
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  You're all set!
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Your password has been successfully updated. You can now use
                  your new password to log in to your account.
                </p>

                <Link
                  to="/login"
                  className="block w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300"
                >
                  Go to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassUi;
