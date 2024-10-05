"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
import config from "@/utils/configuration";

type AuthResponse = {
  error?: string;
  success?: boolean;
  callbackUrl?: string;
};

export async function login(formData: FormData): Promise<AuthResponse> {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signup(formData: FormData): Promise<AuthResponse> {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function logout(): Promise<AuthResponse> {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { error: error.message };
  }
  return { success: true };
}

type signInWithOAuthProps = {
  provider: Provider;
};

export async function signInWithOAuth({
  provider,
}: signInWithOAuthProps): Promise<AuthResponse> {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
  });

  if (error) {
    return { error: error.message };
  }

  if (data?.url) {
    return { success: true, callbackUrl: data.url as string };
  }

  return { error: "Sign-in successful, but no redirect URL was provided." };
}
