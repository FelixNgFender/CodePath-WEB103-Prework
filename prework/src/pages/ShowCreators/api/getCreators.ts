import { supabase } from "@/lib/supabase";

export const getCreators = async () => {
  const { data, error } = await supabase.from("creators").select("*");
  if (error) {
    console.error(error);
  } else {
    return data;
  }
};
