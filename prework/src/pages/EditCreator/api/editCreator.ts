import { supabase } from "@/lib/supabase";
import { Creator } from "@/types";

export const editCreator = async (creator: Creator) => {
  const { error } = await supabase
    .from("creators")
    .update(creator)
    .eq("id", creator.id);
  if (error) {
    console.error(error);
  }
};
