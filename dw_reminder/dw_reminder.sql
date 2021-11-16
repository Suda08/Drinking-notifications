-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2021 at 12:44 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dw_reminder`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `a_id` int(11) NOT NULL,
  `a_name` varchar(50) NOT NULL,
  `a_username` varchar(50) NOT NULL,
  `a_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`a_id`, `a_name`, `a_username`, `a_password`) VALUES
(1, 'sudarat', 'admin', '$2y$10$P12jHxMVZxs5jhNwvTdsDuZuLP6ZauY7kZO7Ow8Y68J7bxwU2Jpbi');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_alert`
--

CREATE TABLE `tbl_alert` (
  `a_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `a_t` int(11) NOT NULL,
  `a_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_beverage`
--

CREATE TABLE `tbl_beverage` (
  `b_id` int(11) NOT NULL,
  `b_image` text NOT NULL,
  `b_name` varchar(100) NOT NULL,
  `b_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_beverage`
--

INSERT INTO `tbl_beverage` (`b_id`, `b_image`, `b_name`, `b_cat`) VALUES
(1, '1_1', 'น้ำเปล่า', 1),
(2, '1_2', 'น้ำแร่', 1),
(3, '1_3', 'เครื่องดื่มกีฬา', 1),
(4, '1_4', 'เครื่องดื่มวิตามิน', 1),
(5, '2_1', 'ชา', 2),
(6, '2_2', 'ชาสมุนไพร', 2),
(7, '2_3', 'ชาคาโมมายล์', 2),
(8, '2_4', 'ชาฮิบิคัส', 2),
(9, '2_5', 'ชาเขียว', 2),
(10, '2_6', 'ชาดำ', 2),
(11, '2_7', 'ชาสมุนไพรจีน', 2),
(12, '2_8', 'ชาอู่หลง', 2),
(13, '3_1', 'อเมริกาโน่', 3),
(14, '3_2', 'มอคค่า', 3),
(15, '3_3', 'คาปูชิโน', 3),
(16, '3_4', 'เอสเพรสโซ่', 3),
(17, '3_5', 'ลาเต้', 3),
(18, '3_6', 'มัคคิอาโต้', 3),
(19, '3_7', 'เฟร้บเป้', 3),
(20, '3_8', 'อัพโพกาโต', 3),
(21, '4_1', 'นมจืด', 4),
(22, '4_2', 'นมช็อคโกแลต', 4),
(26, '4_3', 'นมโค', 4),
(27, '5_1', 'โค้ก', 5),
(28, '5_2', 'แฟนต้า', 5),
(29, '5_3', 'โซดา', 5),
(30, 'capu', 'น้ำแตงโม', 6),
(31, 'capu', 'น้ำส้ม', 6),
(32, 'capu', 'น้ำสัปะรด', 6),
(33, 'capu', 'น้ำผึ่งมะนาว', 6),
(34, 'capu', 'ไวน์', 7),
(35, 'capu', 'เบียร์', 7),
(36, 'capu', 'สาเก', 7),
(37, 'capu', 'วิสกี้', 7),
(38, 'capu', 'วอดก้า', 7);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_drink_info`
--

CREATE TABLE `tbl_drink_info` (
  `d_i_id` int(11) NOT NULL,
  `d_i_title` varchar(300) NOT NULL,
  `d_i_des` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_drink_info`
--

INSERT INTO `tbl_drink_info` (`d_i_id`, `d_i_title`, `d_i_des`) VALUES
(1, 'ห้ามดื่มน้ำทันทีหลังรับประทานอาหาร', 'หลังจากรับประทานอาหารเสร็จ จำไว้ว่าเราไม่ควร\r\nดื่มน้ำทันทีที่วางช้อน เพราะนอกจากจะจะทำให้น้ำ\r\nย่อยในกระเพาะอาหารของเราเจือจางลงแล้วนั้น \r\nส่งผลให้การย่อยอาหารทำงานได้ไม่เต็มที่ อีกด้วย\r\nเพราะฉะนั้นเมื่อรับประทานอาหารเสร็จควรดื่มน้ำ\r\nหลังจากรับประทานอาหารเสร็จแล้วประมาณ \r\n15 -30 นาที\r\n'),
(2, 'การดื่มน้ำควรดื่มครั้งละแก้ว', 'การดื่มน้ำควรดื่มครั้งละแก้ว และที่สำคัญไม่ควรดื่มรวดเดียวหลาย ๆแก้ว เพราะจะไม่เป็นผลดีต่อร่างกาย ซึ่งอาจทำให้เกิดภาวะ “น้ำเป็นพิษได้” เนื่องจากเลือดเจือจาง และอาจทำให้เป็นตะคริวหรือกล้ามเนื้อเกร็งได้'),
(3, 'อย่าดื่มน้ำมากเกินไปก่อนที่จะรับประทานอาหาร', 'อย่าดื่มน้ำมากเกินไปก่อนที่จะรับประทานอาหาร หรือถ้าจะดื่มก็ควรดื่มน้ำก่อนสักประมาณครึ่งชั่วโมง หรือ 45 นาที และในระหว่างรับประทานอาหารไม่ควรดื่มน้ำตลอดเวลา เพราะจะทำให้น้ำย่อยในกระเพาะอาหารเจือจาง ทำให้ระบบย่อยทำงานได้ไม่ดี'),
(4, 'การดื่มน้ำเย็นบ่อยๆ', 'การดื่มน้ำเย็นบ่อยๆ โดยเฉพาะช่วงเวลาที่อากาศเย็นจัดทำให้ระบบร่างกายต้องทำงานหนักเพื่อปรับอุณหภูมิของน้ำเย็นให้เท่ากับอุณหภูมิของร่างกาย และส่งผลให้ร่างกายอ่อนแอ การย่อยอาหารไม่ดีเท่าที่ควรถ้าต้องการดื่มน้ำเย็นให้ได้ประโยชน์ต่อร่างกายมากที่สุด'),
(5, 'ควรดื่มหลังจากเพิ่งตื่นนอนหรือก่อนแปรงฟัน', 'ควรดื่มหลังจากเพิ่งตื่นนอนหรือก่อนแปรงฟัน ควรดื่มน้ำ 2-4 แก้ว เป็นน้ำอุ่นๆ ได้ก็จะดีมากจากนั้นก่อนอาหาร 1 ชั่วโมงและหลังอาหาร 1 ชั่วโมงในแต่ละมื้อสุดท้ายก่อนนอน 1 ชั่วโมง คือ ในระหว่างวันควรดื่มน้ำ 1 แก้วทั้งก่อนและหลังมื้ออาหารทุก ๆมื้อ และในระหว่างช่วง สาย บ่าย เย็น ก็ควรดื่มน้ำอีกครั้งละ 1 แก้ว'),
(6, 'ไม่ควรดื่มน้ำมากเกินไป', 'ไม่ควรดื่มน้ำมากเกินไปเพราะจะทำให้ระบบไตและระบบย่อยอาหารทำงานหนัก รวมทั้งอาจทำให้เป็นโรคกระเพาะอาหาร หรือกระเพาะปัสสาวะอักเสบได้อีกด้วย ยกเว้นในช่วงเวลาเพิ่งตื่นนอนหรือดื่มเพื่อบำบัด');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_drink_log`
--

CREATE TABLE `tbl_drink_log` (
  `d_l_id` int(10) NOT NULL,
  `u_id` int(10) NOT NULL,
  `b_id` int(10) NOT NULL,
  `d_l_volume` int(10) NOT NULL,
  `d_l_datetime` date NOT NULL,
  `d_l_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_drink_log`
--

INSERT INTO `tbl_drink_log` (`d_l_id`, `u_id`, `b_id`, `d_l_volume`, `d_l_datetime`, `d_l_time`) VALUES
(1, 1, 1, 500, '2021-11-12', '08:00:00'),
(2, 1, 1, 900, '2021-11-12', '05:00:00'),
(3, 1, 3, 900, '2021-11-13', '08:00:00'),
(4, 1, 4, 500, '2021-11-13', '02:14:00'),
(5, 1, 5, 1000, '2021-11-13', '00:00:00'),
(6, 1, 4, 900, '2021-11-13', '00:00:00'),
(10, 1, 2, 210, '2021-11-14', '00:00:00'),
(11, 1, 1, 250, '2021-11-14', '00:00:00'),
(12, 1, 4, 950, '2021-11-14', '00:00:00'),
(13, 1, 2, 1880, '2021-11-14', '00:00:00'),
(14, 1, 3, 4630, '2021-11-14', '00:00:00'),
(15, 1, 2, 5630, '2021-11-14', '00:00:00'),
(16, 1, 1, 100, '2021-11-14', '00:00:00'),
(17, 1, 2, 250, '2021-11-14', '00:00:00'),
(18, 1, 26, 200, '2021-11-14', '03:06:00'),
(19, 1, 26, 200, '2021-11-14', '05:15:00'),
(23, 1, 2, 150, '2021-11-14', '00:00:00'),
(24, 1, 1, 150, '2021-11-14', '00:00:00'),
(25, 1, 1, 0, '2021-11-14', '00:00:00'),
(26, 1, 1, 0, '2021-11-14', '00:00:00'),
(27, 1, 5, 100, '2021-11-14', '00:00:00'),
(28, 13, 1, 150, '2021-11-14', '00:00:00'),
(29, 13, 2, 300, '2021-11-14', '00:00:00'),
(30, 13, 2, 150, '2021-11-14', '00:00:00'),
(31, 13, 4, 100, '2021-11-14', '00:00:00'),
(32, 1, 1, 450, '2021-11-14', '00:00:00'),
(33, 1, 1, 100, '2021-11-15', '00:00:00'),
(34, 1, 13, 100, '2021-11-15', '00:00:00'),
(35, 1, 2, 300, '2021-11-15', '00:00:00'),
(36, 1, 1, 300, '2021-11-15', '11:08:11'),
(37, 21, 1, 100, '2021-11-15', '15:17:52'),
(38, 21, 3, 600, '2021-11-15', '15:20:28'),
(39, 23, 1, 150, '2021-11-15', '16:12:21'),
(40, 23, 2, 100, '2021-11-09', '13:21:54'),
(41, 23, 3, 200, '2021-11-16', '13:22:24'),
(42, 23, 1, 100, '2021-11-16', '13:44:17'),
(43, 23, 4, 300, '2021-11-16', '15:30:03'),
(44, 1, 4, 300, '2021-11-16', '17:12:01'),
(45, 1, 1, 300, '2021-11-16', '18:10:52'),
(46, 1, 2, 450, '2021-11-16', '18:11:06');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_excer_log`
--

CREATE TABLE `tbl_excer_log` (
  `e_l_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `e_l_type` int(11) NOT NULL,
  `e_l_level` int(11) NOT NULL,
  `e_l_hour` varchar(10) NOT NULL,
  `e_l_volume` int(11) NOT NULL,
  `e_l_datetime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_excer_log`
--

INSERT INTO `tbl_excer_log` (`e_l_id`, `u_id`, `e_l_type`, `e_l_level`, `e_l_hour`, `e_l_volume`, `e_l_datetime`) VALUES
(5, 1, 1, 2, '2', 1800, '2021-11-12'),
(6, 1, 0, 0, '1', 500, '2021-11-12'),
(10, 1, 0, 1, '1', 900, '2021-11-13'),
(11, 1, 0, 0, '4', 500, '2021-11-14'),
(12, 1, 1, 2, '7', 1800, '2021-11-14'),
(13, 1, 1, 2, '1', 1800, '2021-11-14'),
(14, 1, 1, 2, '2', 1800, '2021-11-14'),
(15, 1, 0, 1, '1', 1000, '2021-11-14'),
(16, 1, 0, 1, '1', 1000, '2021-11-14'),
(17, 1, 0, 2, '1', 1000, '2021-11-14'),
(18, 1, 0, 0, '2', 500, '2021-11-14'),
(19, 1, 0, 1, '2', 1000, '2021-11-14'),
(20, 13, 1, 2, '1', 1800, '2021-11-14'),
(21, 13, 0, 0, '1', 500, '2021-11-14'),
(22, 1, 0, 1, '1', 1000, '2021-11-15'),
(23, 21, 0, 0, '1', 500, '2021-11-15'),
(24, 23, 0, 1, '1', 1000, '2021-11-15'),
(25, 23, 1, 0, '1', 900, '2021-11-15'),
(26, 23, 0, 2, '1', 1000, '2021-11-15'),
(27, 23, 1, 0, '1', 900, '2021-11-15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_noti_type`
--

CREATE TABLE `tbl_noti_type` (
  `n_t_id` int(11) NOT NULL,
  `n_t_val` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_noti_type`
--

INSERT INTO `tbl_noti_type` (`n_t_id`, `n_t_val`) VALUES
(0, 60),
(1, 90),
(3, 5400),
(4, 7200),
(5, 9000);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `u_id` int(11) NOT NULL,
  `u_email` varchar(30) NOT NULL,
  `u_username` varchar(50) NOT NULL,
  `u_password` varchar(200) NOT NULL,
  `u_gender` int(11) NOT NULL,
  `u_weight` varchar(10) NOT NULL,
  `u_noti_start` time NOT NULL,
  `u_noti_end` time NOT NULL,
  `u_noti_type` int(11) NOT NULL,
  `u_is_custom_val` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`u_id`, `u_email`, `u_username`, `u_password`, `u_gender`, `u_weight`, `u_noti_start`, `u_noti_end`, `u_noti_type`, `u_is_custom_val`) VALUES
(1, 'john@email.com', 'john', '$2y$10$I47uyfwAdEGoLX/8Ph2MRO1OQysBrFbYFWkVTUCGpDtHqBjorNZLO', 2, '70', '09:16:07', '11:13:07', 3, 0),
(23, '621513006@crru.ac.th', 'Suda', '$2y$10$/mFnSY7hyJuG7RIGhnUU3OrA/UYIxb0JK.gG4mV33rc4TRAmS7iFm', 1, '50', '09:00:00', '18:00:00', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `tbl_alert`
--
ALTER TABLE `tbl_alert`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `tbl_beverage`
--
ALTER TABLE `tbl_beverage`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `tbl_drink_info`
--
ALTER TABLE `tbl_drink_info`
  ADD PRIMARY KEY (`d_i_id`);

--
-- Indexes for table `tbl_drink_log`
--
ALTER TABLE `tbl_drink_log`
  ADD PRIMARY KEY (`d_l_id`),
  ADD KEY `drink_log_bev` (`b_id`);

--
-- Indexes for table `tbl_excer_log`
--
ALTER TABLE `tbl_excer_log`
  ADD PRIMARY KEY (`e_l_id`);

--
-- Indexes for table `tbl_noti_type`
--
ALTER TABLE `tbl_noti_type`
  ADD PRIMARY KEY (`n_t_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_alert`
--
ALTER TABLE `tbl_alert`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tbl_beverage`
--
ALTER TABLE `tbl_beverage`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `tbl_drink_info`
--
ALTER TABLE `tbl_drink_info`
  MODIFY `d_i_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_drink_log`
--
ALTER TABLE `tbl_drink_log`
  MODIFY `d_l_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `tbl_excer_log`
--
ALTER TABLE `tbl_excer_log`
  MODIFY `e_l_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_noti_type`
--
ALTER TABLE `tbl_noti_type`
  MODIFY `n_t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_drink_log`
--
ALTER TABLE `tbl_drink_log`
  ADD CONSTRAINT `drink_log_bev` FOREIGN KEY (`b_id`) REFERENCES `tbl_beverage` (`b_id`);

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `drink_alert` ON SCHEDULE EVERY 5400 SECOND STARTS '2021-11-16 18:38:42' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'drink alert.' DO INSERT INTO tbl_alert (u_id, a_t, a_datetime)
VALUES ('1', '1', CURDATE())$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
