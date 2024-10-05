"use client";
import { logout } from "@/app/auth/actions";

const SignOutButton = () => {
  const handleSignOut = async () => {
    await logout();
  };
  return (
    <button
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handleSignOut}
    >
      <span>Sign out</span>
    </button>
  );
};

export default SignOutButton;
