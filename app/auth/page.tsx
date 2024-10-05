import SignInForm from "@/components/auth/SignInForm";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function SignIn() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/profile");
  }

  return <SignInForm />;
}
