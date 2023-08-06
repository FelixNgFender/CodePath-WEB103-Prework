import { supabase } from "@/lib/supabase";
import { Creator } from "@/types";

export const addCreator = async (creator: Creator) => {
  const { error } = await supabase.from("creators").insert(creator);
  if (error) {
    console.error(error);
  }
};
