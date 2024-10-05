"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Input from "@/components/common/forms/Input";
import ThirdPartyButton from "@/components/auth/ThirdPartyButton";
import { login, signup } from "@/app/auth/actions";
import Alert from "@/components/common/Alert";

const SignInForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGoogleClick = () => {
    console.log("Google login clicked");
  };

  const handleGitHubClick = () => {
    console.log("GitHub login clicked");
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await login(formData);

    if (response.error) {
      setAlert(response.error);
      setShowAlert(true);
    } else {
      router.push("/profile");
    }
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await signup(formData);

    if (response.error) {
      setShowAlert(true);
    } else {
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Divex.io"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <Header title="Sign in to your account" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="space-yb-8">
            {showAlert && (
              <Alert message={alert} onClose={handleCloseAlert} level="error" />
            )}
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input
              id="email"
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <span className="block mt-2" />
          </form>
          <button
            onClick={handleSignup}
            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white px-6 text-gray-900">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <ThirdPartyButton
              label="Google"
              icon={
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                </svg>
              }
              onClick={handleGoogleClick}
            />

            <ThirdPartyButton
              label="GitHub"
              icon={
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5 fill-[#24292F]"
                >
                  <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.628.07-.615.07-.615 1.004.071 1.532 1.032 1.532 1.032.893 1.537 2.341 1.093 2.911.835.091-.662.35-1.093.636-1.345-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.029-2.688-.103-.254-.446-1.275.098-2.656 0 0 .84-.27 2.75 1.025a9.552 9.552 0 015.002 0c1.91-1.296 2.75-1.025 2.75-1.025.545 1.381.202 2.402.099 2.656.64.704 1.028 1.596 1.028 2.688 0 3.848-2.34 4.694-4.57 4.942.36.31.68.923.68 1.86 0 1.343-.012 2.424-.012 2.753 0 .268.18.58.688.482A10.014 10.014 0 0020 10.017C20 4.484 15.523 0 10 0z" />
                </svg>
              }
              onClick={handleGitHubClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
