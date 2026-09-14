import { createClient } from "@supabase/supabase-js";

// Server-only. SUPABASE_SERVICE_ROLE_KEY must NOT have the NEXT_PUBLIC_ prefix — that prefix is
// what tells Next.js to ship a variable to the browser bundle. This key bypasses every RLS
// policy, so it only ever belongs in a Route Handler (server-side), never in client code.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
