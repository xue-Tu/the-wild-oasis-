import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kbasqifuvpnzbhqfqhzu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYXNxaWZ1dnBuemJocWZxaHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4ODU0MjcsImV4cCI6MjA1MzQ2MTQyN30.nKEeL1IfdAqqDrgET-M-ai6jAoBOdw1SXljI_qMCY9w";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
