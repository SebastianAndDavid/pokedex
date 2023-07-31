import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

async function getAllPokemon() {
  const { data } = await supabase.from("pokemon").select("*");
  return data;
}

export { getAllPokemon };
