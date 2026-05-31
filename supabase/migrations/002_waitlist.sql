-- VIP Launch Waitlist table
create table if not exists waitlist_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  first_name text not null,
  email text not null,
  phone text not null,
  interested_in_catering boolean default false,
  source text default 'homepage',
  status text default 'new' check (status in ('new', 'contacted'))
);

alter table waitlist_leads enable row level security;

-- Anyone can submit (public form)
create policy "Allow public insert" on waitlist_leads
  for insert with check (true);

-- Only authenticated users (admin) can read
create policy "Allow authenticated read" on waitlist_leads
  for select using (auth.role() = 'authenticated');

-- Unique email constraint
create unique index if not exists waitlist_email_unique on waitlist_leads (email);

-- Catering inquiries table (if not created yet)
create table if not exists catering_inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  email text not null,
  event_date date not null,
  event_location text not null,
  guest_count text not null,
  catering_type text not null,
  message text default '',
  status text default 'new' check (status in ('new', 'contacted', 'booked', 'declined'))
);

alter table catering_inquiries enable row level security;

create policy "Allow public insert" on catering_inquiries
  for insert with check (true);

create policy "Allow authenticated read" on catering_inquiries
  for select using (auth.role() = 'authenticated');
