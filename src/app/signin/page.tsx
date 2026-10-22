"use client";

import React, { useState } from "react";
import Link from "next/link";

const SigninPage = () => {
     // ফর্মের ইনপুট স্টেটসমূহ
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     // পাসওয়ার্ড শো/হাইড টগল করার স্টেট
     const [showPassword, setShowPassword] = useState(false);

     // এরর এবং সাকসেস মেসেজ স্টেট
     const [error, setError] = useState("");
     const [success, setSuccess] = useState("");

     // ফর্ম সাবমিট হ্যান্ডলার
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError("");
          setSuccess("");

          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData.entries());

          // সাধারণ ফিল্ড চেক
          if (!email || !password) {
               setError("Please fill in all fields.");
               return;
          }

          console.log(formValues)

          // সব ঠিক থাকলে এখানে লগইন লজিক কাজ করবে
          setSuccess("Logged in successfully!");
          console.log({ email, password });
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
               <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {/* Header */}
                    <div className="text-center mb-8">
                         <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                         <p className="text-sm text-gray-500 mt-2">Please enter your details to sign in</p>
                    </div>

                    {/* Error / Success Message */}
                    {error && (
                         <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                              {error}
                         </div>
                    )}
                    {success && (
                         <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg">
                              {success}
                         </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                         {/* Email Field */}
                         <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                              <input 
                                   type="email"
                                   required
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="example@gmail.com"
                                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                              />
                         </div>

                         {/* Password Field */}
                         <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                              <div className="relative">
                                   <input 
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm pr-10"
                                   />
                                   {/* Show/Hide Button */}
                                   <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                                   >
                                        {showPassword ? "Hide" : "Show"}
                                   </button>
                              </div>
                         </div>

                         {/* Submit Button */}
                         <button 
                              type="submit"
                              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-colors text-sm mt-2"
                         >
                              Sign In
                         </button>
                    </form>

                    {/* Footer Link */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                         Don&apos;t have an account?{" "}
                         <Link href="/signup" className="text-orange-600 font-semibold hover:underline">
                              Sign up
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default SigninPage;