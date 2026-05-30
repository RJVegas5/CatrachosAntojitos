-- Catering inquiries table
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

-- Enable RLS
alter table catering_inquiries enable row level security;

-- Allow anonymous inserts (for form submissions)
create policy "Allow public insert" on catering_inquiries
  for insert with check (true);

-- Allow authenticated reads (for admin dashboard)
create policy "Allow authenticated read" on catering_inquiries
  for select using (auth.role() = 'authenticated');

-- Truck locations table (for admin updates)
create table if not exists truck_locations (
  id uuid default gen_random_uuid() primary key,
  updated_at timestamptz default now(),
  location_name text not null,
  address text not null,
  hours text not null,
  maps_url text default '',
  is_active boolean default true
);

alter table truck_locations enable row level security;

create policy "Allow public read" on truck_locations
  for select using (true);

create policy "Allow authenticated write" on truck_locations
  for all using (auth.role() = 'authenticated');

-- Seed with default location
insert into truck_locations (location_name, address, hours, maps_url)
values (
  'Summerlin Festival Grounds',
  '1980 Festival Plaza Dr, Las Vegas, NV 89135',
  '10:00 AM – 9:00 PM',
  'https://maps.google.com/?q=1980+Festival+Plaza+Dr+Las+Vegas+NV'
);
