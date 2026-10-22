"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUp } from "@/lib/auth-client";

const SignUpPage = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
     });

     const [showPassword, setShowPassword] = useState(false);
     const [showRepeatPassword, setShowRepeatPassword] = useState(false);
     const [error, setError] = useState < string | null > (null);

     // Password validation rule:
     // - At least 8 characters
     // - Contains uppercase letter
     // - Contains lowercase letter
     // - Contains special character
     const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData((prev) => ({
               ...prev,
               [e.target.name]: e.target.value,
          }));
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null);

          // Validate password requirements
          if (!passwordRegex.test(formData.password)) {
               setError(
                    "Password must be at least 8 characters long and include a mix of uppercase, lowercase, and special characters."
               );
               return;
          }

          // Validate matching passwords
          if (formData.password !== formData.repeatPassword) {
               setError("Passwords do not match.");
               return;
          }
          
          console.log("Signup before auth", formData);

          const { data: resData, error } = await signUp.email({
               name: formData?.name,
               email: formData?.email,
               password: formData?.password
          })

          console.log(resData, error);
          if(resData?.user) {
               console.log("Signup successfully:", resData);
          }else {
               console.error(error);
          }
     };

     return (
          <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
               <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
                    <div>
                         <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                              Create an account
                         </h2>
                    </div>

                    {error && (
                         <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                              {error}
                         </div>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                         <div className="space-y-4 rounded-md shadow-sm">
                              {/* Name Field */}
                              <div>
                                   <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Full Name
                                   </label>
                                   <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="John Doe"
                                   />
                              </div>

                              {/* Email Field */}
                              <div>
                                   <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Email address
                                   </label>
                                   <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="you@example.com"
                                   />
                              </div>

                              {/* Password Field */}
                              <div>
                                   <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Password
                                   </label>
                                   <div className="relative mt-1">
                                        <input
                                             id="password"
                                             name="password"
                                             type={showPassword ? "text" : "password"}
                                             required
                                             value={formData.password}
                                             onChange={handleChange}
                                             className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                             placeholder="••••••••"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword((prev) => !prev)}
                                             className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                                        >
                                             {showPassword ? (
                                                  <EyeOff className="h-5 w-5" />
                                             ) : (
                                                  <Eye className="h-5 w-5" />
                                             )}
                                        </button>
                                   </div>
                              </div>

                              {/* Repeat Password Field */}
                              <div>
                                   <label
                                        htmlFor="repeatPassword"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Repeat Password
                                   </label>
                                   <div className="relative mt-1">
                                        <input
                                             id="repeatPassword"
                                             name="repeatPassword"
                                             type={showRepeatPassword ? "text" : "password"}
                                             required
                                             value={formData.repeatPassword}
                                             onChange={handleChange}
                                             className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                             placeholder="••••••••"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowRepeatPassword((prev) => !prev)}
                                             className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                                        >
                                             {showRepeatPassword ? (
                                                  <EyeOff className="h-5 w-5" />
                                             ) : (
                                                  <Eye className="h-5 w-5" />
                                             )}
                                        </button>
                                   </div>
                              </div>
                         </div>

                         <div>
                              <button
                                   type="submit"
                                   className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                   Sign Up
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default SignUpPage;