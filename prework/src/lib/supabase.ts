import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/config";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
