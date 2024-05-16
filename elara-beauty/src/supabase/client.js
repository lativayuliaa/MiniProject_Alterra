import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vdatjsebmawluyjwvnyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkYXRqc2VibWF3bHV5and2bnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwOTM0NjgsImV4cCI6MjAzMDY2OTQ2OH0.Ha_RgEZJLJfi2yj3w2NBqKLmbuOOkxvb8qWuHAyHJYc";

export const supabase = createClient(supabaseUrl, supabaseKey);