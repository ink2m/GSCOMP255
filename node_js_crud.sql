-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2024 at 11:02 AM
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
-- Database: `node_js_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_node_crud`
--

CREATE TABLE `tbl_node_crud` (
  `user_id` int(11) NOT NULL,
  `fullName` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `isactive` int(1) NOT NULL,
  `inserted_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_node_crud`
--

INSERT INTO `tbl_node_crud` (`user_id`, `fullName`, `email`, `contact`, `description`, `isactive`, `inserted_date`) VALUES
(17, '17', '17@a.com', '0000000017', '0000000017', 1, '2024-12-31'),
(16, '16', '16@a.com', '0000000016', '0000000016', 1, '2024-12-31'),
(15, '15', '15@a.com', '0000000015', '0000000015', 1, '2024-12-31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_node_crud`
--
ALTER TABLE `tbl_node_crud`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_node_crud`
--
ALTER TABLE `tbl_node_crud`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
