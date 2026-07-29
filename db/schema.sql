-- FuelPulse Pro Database Schema for Neon Postgres

-- Enable pgcrypto for UUID generation if needed
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User Settings Table
CREATE TABLE IF NOT EXISTS user_settings (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  currency VARCHAR(10) DEFAULT '$',
  distance_unit VARCHAR(10) DEFAULT 'km',
  volume_unit VARCHAR(10) DEFAULT 'L',
  consumption_unit VARCHAR(20) DEFAULT 'l_100km',
  theme VARCHAR(10) DEFAULT 'dark',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Vehicles Table
CREATE TABLE IF NOT EXISTS vehicles (
  id VARCHAR(100) PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  make VARCHAR(100),
  model VARCHAR(100),
  year INTEGER,
  fuel_type VARCHAR(50),
  tank_capacity NUMERIC(10, 2),
  initial_odometer NUMERIC(12, 2) DEFAULT 0,
  service_interval NUMERIC(12, 2) DEFAULT 10000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Refuel Logs Table
CREATE TABLE IF NOT EXISTS refuel_logs (
  id VARCHAR(100) PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  vehicle_id VARCHAR(100) NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  odometer NUMERIC(12, 2) NOT NULL,
  fuel_volume NUMERIC(10, 2) NOT NULL,
  price_per_unit NUMERIC(10, 3) NOT NULL,
  total_cost NUMERIC(10, 2) NOT NULL,
  station VARCHAR(100),
  fuel_type VARCHAR(50),
  is_full_tank BOOLEAN DEFAULT TRUE,
  notes TEXT,
  calculated_l100km NUMERIC(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Service & Repair Records Table
CREATE TABLE IF NOT EXISTS services (
  id VARCHAR(100) PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  vehicle_id VARCHAR(100) NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  odometer NUMERIC(12, 2) NOT NULL,
  cost NUMERIC(10, 2) NOT NULL,
  service_type VARCHAR(100) NOT NULL,
  description TEXT,
  workshop VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_vehicles_user_id ON vehicles(user_id);
CREATE INDEX IF NOT EXISTS idx_logs_user_vehicle ON refuel_logs(user_id, vehicle_id);
CREATE INDEX IF NOT EXISTS idx_services_user_vehicle ON services(user_id, vehicle_id);
