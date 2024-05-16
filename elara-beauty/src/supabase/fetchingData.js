import { supabase } from "./client";

export default async function FetchData() {

  return supabase
    .from("article")
    .select("*")
    .then(({ data }) => {
      return data || [];
    });
}