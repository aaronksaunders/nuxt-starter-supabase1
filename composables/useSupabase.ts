import type { SupabaseClient } from "@supabase/supabase-js";

export const useSupabase = (): SupabaseClient => {
  const supabase = inject<SupabaseClient>("supabase");
  if (!supabase) {
    throw new Error("Cant find a Supabase provider");
  }
  return supabase as SupabaseClient;
};
