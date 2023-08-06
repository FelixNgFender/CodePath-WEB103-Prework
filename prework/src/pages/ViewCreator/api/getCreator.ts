import { supabase } from "@/lib/supabase";

export const getCreator = async (id: string) => {
  const { data, error } = await supabase
    .from("creators")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
  } else {
    return data;
  }
};
