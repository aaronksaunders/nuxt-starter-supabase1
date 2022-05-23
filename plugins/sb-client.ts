// sb-client.ts
import { createClient } from "@supabase/supabase-js";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const supabaseUrl = config.public.SUPABASE_URL;
  const supabaseAnonKey = config.public.SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  nuxtApp.vueApp.provide('supabase', supabase)
});
