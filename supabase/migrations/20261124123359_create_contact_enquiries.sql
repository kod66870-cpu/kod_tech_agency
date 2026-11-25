/*
# Create contact_enquiries table (single-tenant, no auth)

1. New Tables
- `contact_enquiries`: stores messages submitted through the website contact form.
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `company` (text, nullable) — optional company / business name
  - `service` (text, not null) — selected service of interest
  - `budget` (text, nullable) — optional project budget range
  - `details` (text, not null) — project details message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_enquiries`.
- Grant INSERT to `anon` + `authenticated` (the site has no sign-in; visitors submit the form anonymously).
- Insert-only policy: rows can be created by anyone, but never read, updated, or deleted through the public API — enquiries are private to the site owner.
3. Notes
- Deliberately NO SELECT/UPDATE/DELETE grants or policies: submitted enquiries cannot be read back through the website, protecting visitor data.
- The site owner reads enquiries via the Supabase dashboard (service role) or a future admin sign-in.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text,
  service text NOT NULL,
  budget text,
  details text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON contact_enquiries;

CREATE POLICY "Anyone can submit an enquiry"
ON contact_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
