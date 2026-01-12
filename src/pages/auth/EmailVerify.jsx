import React, { useState, useEffect, useRef } from "react";
import { Zap, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const EmailVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const location = useLocation();
  const email = location.state?.email || "user@email.com";

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
    setError(false);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];
    pastedData.forEach((val, i) => {
      if (i < 6 && !isNaN(val)) newOtp[i] = val;
    });
    setOtp(newOtp);
    if (pastedData.length > 0) {
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) return;

    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      try {
        const res = fetch(
          "https://pexels-pro-server.onrender.com/auth/email-verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, verificationCode: otpValue }),
          }
        );
        if (res.ok) {
          toast.success("Email verified successfully");
        }
      } catch (e) {
        toast.error("Email verification failed");
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-[#0f1016] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1a1b23]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500/10 mb-4 border border-indigo-500/20">
                <ShieldCheck className="w-7 h-7 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Verify your email
              </h2>
              <p className="text-gray-400 text-sm">
                We've sent a 6-digit verification code to <br />
                <span className="text-white font-medium">{email}</span>
              </p>
            </div>

            {/* OTP Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-11 h-12 md:w-12 md:h-14 text-center text-xl font-bold bg-[#0f1016] border rounded-xl text-white outline-none transition-all duration-200
                      ${
                        error
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/10 focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                      }
                      focus:ring-0
                    `}
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-400 text-xs text-center -mt-6 mb-6">
                  Invalid code. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={!isComplete || isLoading}
                className="w-full relative py-3 px-4 flex justify-center items-center gap-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Verify & Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResend}
                disabled={timer > 0}
                className={`flex items-center justify-center gap-2 mx-auto text-sm font-medium transition-colors
                  ${
                    timer > 0
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-indigo-400 hover:text-indigo-300"
                  }
                `}
              >
                <RefreshCw
                  className={`w-4 h-4 ${
                    timer > 0
                      ? ""
                      : "group-hover:rotate-180 transition-transform duration-500"
                  }`}
                />
                {timer > 0 ? `Resend in ${timer}s` : "Resend Code"}
              </button>
            </div>
          </div>

          <div className="px-8 py-4 bg-[#14151c] border-t border-white/5 flex justify-center text-sm">
            <Link
              to="/login"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
