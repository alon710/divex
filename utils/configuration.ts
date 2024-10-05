import { isLocalEnv } from "@/utils/common";

interface Config {
  SITE_URL: string;
  SITE_NAME: string;
  SITE_DESCRIPTION: string;
}

const config: Config = {
  SITE_URL: "https://divex.io",
  SITE_NAME: "Divex",
  SITE_DESCRIPTION: "A Next.js starter template with Supabase authentication.",
};

export default config;
