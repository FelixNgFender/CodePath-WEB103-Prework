import { supabase } from "@/lib/supabase";

export const deleteCreator = async (id: string) => {
  const { error } = await supabase.from("creators").delete().eq("id", id);
  if (error) {
    console.error(error);
  }
};
