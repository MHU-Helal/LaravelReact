-- Create table for patients
CREATE TABLE reviveme_react_patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NULL,
    age INT NULL,
    gender VARCHAR(15),
    phone VARCHAR(15),
    email VARCHAR(100)
);

-- Create table for doctors
CREATE TABLE reviveme_react_doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NULL,
    specialty VARCHAR(100) NULL,
    phone VARCHAR(15),
    email VARCHAR(100)
);

-- Create table for services
CREATE TABLE reviveme_react_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_name VARCHAR(100) NULL,
    service_description VARCHAR(255),
    cost DECIMAL(10, 2) NULL
);

-- Create table for bills
CREATE TABLE reviveme_react_bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NULL,
    doctor_id INT NULL,
    total_amount DECIMAL(10, 2) NULL,
    bill_date datetime default current_date
);

-- Create table for bill_details
CREATE TABLE reviveme_react_bill_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bill_id INT NOT NULL,
    description VARCHAR(255)  NULL,
    amount DECIMAL(10, 2) NULL
);



-- Insert data into react_patients
INSERT INTO reviveme_react_patients (name, age, gender, phone, email) VALUES
('John Doe', 35, 'Male', '1234567890', 'john@example.com'),
('Jane Smith', 28, 'Female', '2345678901', 'jane@example.com'),
('Alice Johnson', 42, 'Female', '3456789012', 'alice@example.com'),
('Bob Brown', 50, 'Male', '4567890123', 'bob@example.com'),
('Charlie Davis', 22, 'Other', '5678901234', 'charlie@example.com'),
('Emily Evans', 30, 'Female', '6789012345', 'emily@example.com'),
('Franklin Harris', 45, 'Male', '7890123456', 'franklin@example.com'),
('Grace Lee', 36, 'Female', '8901234567', 'grace@example.com'),
('Henry Moore', 60, 'Male', '9012345678', 'henry@example.com'),
('Ivy Clark', 27, 'Female', '0123456789', 'ivy@example.com');

-- Insert data into react_doctors
INSERT INTO reviveme_react_doctors (name, specialty, phone, email) VALUES
('Dr. Emma Thompson', 'Cardiologist', '1234567890', 'emma@example.com'),
('Dr. Liam Wilson', 'Dermatologist', '2345678901', 'liam@example.com'),
('Dr. Olivia Taylor', 'Pediatrician', '3456789012', 'olivia@example.com'),
('Dr. Noah Anderson', 'Orthopedic', '4567890123', 'noah@example.com'),
('Dr. Ava Martinez', 'Neurologist', '5678901234', 'ava@example.com'),
('Dr. Mason Garcia', 'Oncologist', '6789012345', 'mason@example.com'),
('Dr. Sophia Robinson', 'Gynecologist', '7890123456', 'sophia@example.com'),
('Dr. Jacob Clark', 'Psychiatrist', '8901234567', 'jacob@example.com'),
('Dr. Mia White', 'ENT Specialist', '9012345678', 'mia@example.com'),
('Dr. Ethan Hall', 'General Physician', '0123456789', 'ethan@example.com');

-- Insert data into react_bills
INSERT INTO reviveme_react_bills (patient_id, doctor_id, total_amount, bill_date) VALUES
(1, 1, 200.00, '2025-01-20'),
(2, 2, 150.00, '2025-01-21'),
(3, 3, 300.00, '2025-01-22'),
(4, 4, 250.00, '2025-01-23'),
(5, 5, 400.00, '2025-01-24'),
(6, 6, 350.00, '2025-01-25'),
(7, 7, 500.00, '2025-01-26'),
(8, 8, 450.00, '2025-01-27'),
(9, 9, 100.00, '2025-01-28'),
(10, 10, 600.00, '2025-01-29');

-- Insert data into react_bill_details
INSERT INTO reviveme_react_bill_details (bill_id, description, amount) VALUES
(1, 'Consultation Fee', 100.00),
(1, 'Blood Test', 100.00),
(2, 'Skin Treatment', 150.00),
(3, 'Vaccination', 200.00),
(3, 'Medicine', 100.00),
(4, 'X-ray', 150.00),
(4, 'Plastering', 100.00),
(5, 'MRI Scan', 300.00),
(5, 'Consultation Fee', 100.00),
(6, 'Chemotherapy', 350.00),
(7, 'Surgery', 500.00),
(8, 'Therapy Session', 300.00),
(8, 'Medication', 150.00),
(9, 'Hearing Test', 100.00),
(10, 'General Checkup', 600.00);

-- Insert data into react_services
INSERT INTO reviveme_react_services (service_name, service_description, cost) VALUES
('Consultation', 'General doctor consultation', 100.00),
('Blood Test', 'Routine blood work analysis', 50.00),
('MRI Scan', 'Magnetic Resonance Imaging scan', 300.00),
('X-ray', 'Radiology imaging service', 150.00),
('Vaccination', 'Immunization service', 75.00),
('Surgery', 'Minor and major surgical procedures', 500.00),
('Therapy Session', 'Physical or psychological therapy', 200.00),
('Hearing Test', 'Audiology testing service', 80.00),
('Skin Treatment', 'Dermatology-related procedures', 150.00),
('General Checkup', 'Routine health checkup', 100.00);
