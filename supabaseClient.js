import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const supabase = createClient(
  "https://blefcapivbvswutesdsc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZWZjYXBpdmJ2c3d1dGVzZHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NTczNTksImV4cCI6MjA3NTMzMzM1OX0.K0RlQYKfY3lfFa3Noi5Og7QBRSfhT7S3u7SJrp_nJxk"
);
