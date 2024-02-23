-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2024 at 03:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `submissionticket`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_student`
--

CREATE TABLE `auth_student` (
  `id` int(11) NOT NULL DEFAULT current_timestamp(),
  `mis_id` varchar(11) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_student`
--

INSERT INTO `auth_student` (`id`, `mis_id`, `password`) VALUES
(1, 'I2K21103417', '123');

-- --------------------------------------------------------

--
-- Table structure for table `auth_teacher`
--

CREATE TABLE `auth_teacher` (
  `id` int(11) NOT NULL DEFAULT current_timestamp(),
  `email_id` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_teacher`
--

INSERT INTO `auth_teacher` (`id`, `email_id`, `password`) VALUES
(2, 'b@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_student`
--
ALTER TABLE `auth_student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mid_id` (`mis_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
