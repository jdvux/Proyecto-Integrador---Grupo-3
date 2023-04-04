-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2023 a las 17:52:47
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo3_proyecto`
--
CREATE DATABASE IF NOT EXISTS `grupo3_proyecto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `grupo3_proyecto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `product_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'zapas-vans-1.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(2, 'zapas-vans-2.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(3, 'zapas-vans-3.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(4, 'zapas-vans-4.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(5, 'zapas-vans-5.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(6, 'zapas-vans-6.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(7, 'zapas-vans-7.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(8, 'zapas-vans-8.jpg', 1, '2023-04-01 22:27:09', NULL, NULL),
(9, 'adidas-NMD-1.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(10, 'adidas-NMD-2.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(11, 'adidas-NMD-3.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(12, 'adidas-NMD-4.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(13, 'adidas-NMD-5.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(14, 'adidas-NMD-6.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(15, 'adidas-NMD-7.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(16, 'adidas-NMD-8.avif', 2, '2023-04-01 22:27:09', NULL, NULL),
(17, 'nike-air-jordan-1.avif', 3, '2023-04-01 22:27:09', NULL, NULL),
(18, 'nike-air-jordan-2.jpg', 3, '2023-04-01 22:27:09', NULL, NULL),
(19, 'nike-air-jordan-3.avif', 3, '2023-04-01 22:27:09', NULL, NULL),
(20, 'nike-air-jordan-4.avif', 3, '2023-04-01 22:27:09', NULL, NULL),
(21, 'nike-air-jordan-5.avif', 3, '2023-04-01 22:27:09', NULL, NULL),
(22, 'nike-air-jordan-2.jpg', 3, '2023-04-01 22:27:09', NULL, NULL),
(30, 'converse-chuck70-1.avif', 4, '2023-04-02 21:54:39', NULL, NULL),
(31, 'converse-chuck70-2.jpg', 4, '2023-04-02 21:08:02', NULL, NULL),
(32, 'converse-chuck70-3.avif', 4, '2023-04-02 21:06:02', NULL, NULL),
(33, 'puma-suede-1.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(34, 'puma-suede-2.jpg', 5, '2023-04-01 22:27:09', NULL, NULL),
(35, 'puma-suede-3.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(36, 'puma-suede-4.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(37, 'puma-suede-5.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(38, 'puma-suede-6.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(39, 'puma-suede-7.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(40, 'puma-suede-8.avif', 5, '2023-04-01 22:27:09', NULL, NULL),
(41, 'nike-blazer-low-1.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(42, 'nike-blazer-low-2.jpg', 6, '2023-04-01 22:27:09', NULL, NULL),
(43, 'nike-blazer-low-3.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(44, 'nike-blazer-low-4.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(45, 'nike-blazer-low-5.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(46, 'nike-blazer-low-6.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(47, 'nike-blazer-low-7.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(48, 'nike-blazer-low-8.avif', 6, '2023-04-01 22:27:09', NULL, NULL),
(49, 'saucony-shadow-1.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(50, 'saucony-shadow-2.jpg', 7, '2023-04-01 22:27:09', NULL, NULL),
(51, 'saucony-shadow-3.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(52, 'saucony-shadow-4.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(53, 'saucony-shadow-5.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(54, 'saucony-shadow-6.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(55, 'saucony-shadow-7.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(56, 'saucony-shadow-8.avif', 7, '2023-04-01 22:27:09', NULL, NULL),
(57, 'puma-slipstream-1.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(58, 'puma-slipstream-2.jpg', 8, '2023-04-01 22:27:09', NULL, NULL),
(59, 'puma-slipstream-3.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(60, 'puma-slipstream-4.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(61, 'puma-slipstream-5.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(62, 'puma-slipstream-6.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(63, 'puma-slipstream-7.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(64, 'puma-slipstream-8.avif', 8, '2023-04-01 22:27:09', NULL, NULL),
(65, 'adidas-forum-mid-1.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(66, 'adidas-forum.jpg', 9, '2023-04-01 22:27:09', NULL, NULL),
(67, 'adidas-forum-mid-3.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(68, 'adidas-forum-mid-4.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(69, 'adidas-forum-mid-5.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(70, 'adidas-forum-mid-6.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(71, 'adidas-forum-mid-7.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(72, 'adidas-forum-mid-8.avif', 9, '2023-04-01 22:27:09', NULL, NULL),
(73, 'reebok-question-low-1.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(74, 'reebok-question-low-2.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(75, 'reebok-question-low-3.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(76, 'reebok-question-low-4.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(77, 'reebok-question-low-5.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(78, 'reebok-question-low-6.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(79, 'reebok-question-low-7.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(80, 'reebok-question-low-8.avif', 10, '2023-04-01 22:27:09', NULL, NULL),
(81, 'reebok-club-1.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(82, 'reebok-club-2.jpg', 11, '2023-04-01 22:27:09', NULL, NULL),
(83, 'reebok-club-3.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(84, 'reebok-club-4.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(85, 'reebok-club-5.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(86, 'reebok-club-6.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(87, 'reebok-club-7.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(88, 'reebok-club-8.avif', 11, '2023-04-01 22:27:09', NULL, NULL),
(89, 'nike-air-max-1.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(90, 'nike-air-max-2.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(91, 'nike-air-max-3.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(92, 'nike-air-max-4.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(93, 'nike-air-max-5.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(94, 'nike-air-max-6.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(95, 'nike-air-max-7.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(96, 'nike-air-max-8.avif', 12, '2023-04-01 22:27:09', NULL, NULL),
(97, 'asics-gel-quantum-1.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(98, 'asics-gel-quantum-2.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(99, 'asics-gel-quantum-3.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(100, 'asics-gel-quantum-4.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(101, 'asics-gel-quantum-5.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(102, 'asics-gel-quantum-6.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(103, 'asics-gel-quantum-7.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(104, 'asics-gel-quantum-8.avif', 13, '2023-04-01 22:27:09', NULL, NULL),
(105, 'reebok-pump-1.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(106, 'reebok-pump-2.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(107, 'reebok-pump-3.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(108, 'reebok-pump-4.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(109, 'reebok-pump-5.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(110, 'reebok-pump-6.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(111, 'reebok-pump-7.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(112, 'reebok-pump-8.avif', 14, '2023-04-01 22:27:09', NULL, NULL),
(113, 'nike-air-huarache-1.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(114, 'nike-air-huarache-2.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(115, 'nike-air-huarache-3.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(116, 'nike-air-huarache-4.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(117, 'nike-air-huarache-5.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(118, 'nike-air-huarache-6.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(119, 'nike-air-huarache-7.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(120, 'nike-air-huarache-8.avif', 15, '2023-04-01 22:27:09', NULL, NULL),
(121, 'jordan-ES-1.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(122, 'jordan-ES-2.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(123, 'jordan-ES-3.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(124, 'jordan-ES-4.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(125, 'jordan-ES-5.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(126, 'jordan-ES-6.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(127, 'jordan-ES-7.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(128, 'jordan-ES-8.avif', 16, '2023-04-01 22:27:09', NULL, NULL),
(261, 'nike-air-jordan-6.avif', 3, '2023-04-02 03:24:05', NULL, NULL),
(262, 'nike-air-jordan-7.avif', 3, '2023-04-02 03:24:05', NULL, NULL),
(263, 'converse-chuck70-4.avif', 4, '2023-04-02 21:06:18', NULL, NULL),
(264, 'converse-chuck70-5.avif', 4, '2023-04-02 21:06:33', NULL, NULL),
(265, 'converse-chuck70-6.avif', 4, '2023-04-02 21:06:45', NULL, NULL),
(266, 'converse-chuck70-7.avif', 4, '2023-04-02 21:06:59', NULL, NULL),
(275, 'converse-chuck70-8.avif', 4, '2023-04-02 21:07:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `size` double NOT NULL,
  `price` int(11) NOT NULL,
  `discount_percentage` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `size`, `price`, `discount_percentage`, `category_id`, `brand_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Vans Old Skool', 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70\'y con el correr de las décadas se transformó en un modelo básico de lifestyle', 36, 28500, 15, 2, 3, '2023-04-01 22:23:56', NULL, NULL),
(2, 'Adidas NMD_V3', 'La vida pasa volando. Pero esto no es un \'parpadea y te lo perdés\'. Esto es algo así como \'atate los cordones y disfrutá cada minuto\'. Diseñadas sobre el legado de la velocidad, estas zapatillas adidas inspiradas en el running te ayudan a enfrentarte al ritmo de tu rutina diaria. Incorporan amortiguación BOOST suave muy cómodo y estable', 44, 41000, 20, 1, 2, '2023-04-01 22:23:56', NULL, NULL),
(3, 'Nike Air Jordan 1 Hi Og \'Yellow Toe\'', 'Revive lo retro con el Air Jordan 1 Retro Hi OG, llevado a la calle en una nueva combinación de colores. La parte superior de cuero de primera calidad y las superposiciones lustradas le brindan ese aspecto icónico de la vieja escuela arraigado en la comodidad. Con un cuello acolchado, una marca clásica y un diseño de bloques de colores que se destacará entre la multitud', 46, 42500, 15, 4, 1, '2023-04-02 22:28:48', NULL, NULL),
(4, 'Converse Chuck 70 Low Tonal', 'Consigue ese look auténtico de los 70 con las Chuck 70 Low Tonal Polyester. La marca vintage y el retroceso al diseño clásico de la época te permitirán dominarlo en poco tiempo. Las características de diseño elevadas incluyen amortiguación adicional, una parte superior de lona y costuras reforzadas en la lengüeta. Conseguí las tuyas hoy!', 38, 32500, 20, 2, 7, '2023-04-01 22:23:56', NULL, NULL),
(5, 'Puma Suede Classic XXI', 'Las PUMA Suede Classic XXI son unas de las zapatillas PUMA más conocidas y populares y merece su lugar en todos los salones de la fama. Esta gran versión del Suede Classic viene en colores frescos que completarán tu estilo de vida deportivo. Disponible ahora en G3 Footwear', 36, 28000, 20, 2, 5, '2023-04-01 22:23:56', NULL, NULL),
(6, 'Nike Blazer Low \'77 Jumbo', 'Para una apariencia audaz, sabe que el Blazer Low \'77 Jumbo se presentará. A veces necesitas combinar la energía de tu calce con zapatillas que son igualmente icónicas, y ahí es donde entra Nike con el Blazer Low \'77 Jumbo. Terminado con cordones jumbo, detalles de gamuza y un diseño Swoosh de gran tamaño.', 38, 29000, 15, 2, 1, '2023-04-01 22:23:56', NULL, NULL),
(7, 'Saucony Shadow 6000', 'El Shadow 6000 le da un guiño a su debut original con una silueta vintage, pero se ve con la comodidad de hoy en día. Hechas con superposiciones de malla y gamuza en la parte superior y suavizada con una entresuela de EVA que absorbe los golpes, esta zapatilla mantiene su clase con su combinación de colores frescos y su fabricación de calidad. ¡Compralo hoy!', 36, 32000, 0, 3, 6, '2023-04-01 22:23:56', NULL, NULL),
(8, 'Puma Slipstream', 'Una de las zapatillas de baloncesto originales de Puma, la Slipstream es un elegante diseño vintage que se presenta en la actualidad. Con paneles de gamuza fresca y una parte superior de cuero resistente, además de una plantilla Softfoam+ para comodidad durante todo el día, estos se convertirán fácilmente en los favoritos en su rotación de zapatillas', 36, 30000, 30, 3, 5, '2023-04-01 22:23:56', NULL, NULL),
(9, 'Adidas Forum MID', 'Tomemos un momento para rendir homenaje a un ícono. ¿Será la leyenda que desafiaba la gravedad en los años 80? ¿O tal vez las zapatillas que le daban estatus a los pies de raperos? De hecho, ambas. Las zapatillas adidas Forum han dominado las canchas de básquet y las calles, y ahora regresan con una versión de corte medio para llevar tus pasos a otro nivel. Envolvé tus pies con un estilo inconfundible en piel revestida prémium para un look que exude clase', 0, 35000, 10, 4, 2, '2023-04-01 22:23:56', NULL, NULL),
(10, 'Reebok Question Low', 'Las zapatillas Question Low de Reebok son perfectas para los amantes de las zapatillas. Este modelo actualizado presenta toques de color y una puntera de cuero reforzado, lo que le da a las zapatillas un aspecto de élite, mientras que la amortiguación hexagonal hexalite y la entresuela de EVA garantizan comodidad y durabilidad. ¡Añádilos a tu colección hoy!', 46, 31000, 10, 1, 8, '2023-04-01 22:23:56', NULL, NULL),
(11, 'Reebok Club C85', 'Reebok regresa con el icónico Club C 85. Las características incluyen una parte superior de cuero suave, un perfil de corte bajo y el logotipo de la firma. El aspecto limpio pero sofisticado hace que esta zapatilla sea perfecta para cualquier atuendo y está hecha para durar. ¡Disponible ahora, conseguí el tuyo hoy!', 46, 28000, 15, 2, 8, '2023-04-01 22:23:56', NULL, NULL),
(12, 'Nike Air Max TW', 'Entonces, ¿estás enamorado del estilo clásico de los años 90, pero te gusta la cultura acelerada de hoy? Conoce las Air Max TW. Inspirado en la preciada franquicia que trajo la amortiguación Nike Air al mundo y sentó las bases para la estética de la pista a la calle, su diseño llamativo ofrece un 2x1 de comodidad y moda. Listas para resaltar, su parte superior liviana combina líneas angulares y orgánicas para crear un efecto háptico fascinante. Los colores contrastantes facilitan el estilo. Y si está listo para el siguiente paso, las 5 ventanas debajo de los pies brindan un toque moderno a la amortiguación Air visible. Conseguí el tuyo hoy en G3 Footwear!', 46, 34000, 15, 3, 1, '2023-04-01 22:23:56', NULL, NULL),
(13, 'Asics Gel-Quantum 180 VII', 'La zapatilla GEL-QUANTUM 180™ VII combina una forma futurista con tecnologías de amortiguación avanzadas estudiadas en el Instituto ASICS de Ciencias del Deporte. Su parte superior está reelaborada con una parte superior de malla jacquard que está diseñada para una mejor ventilación y comodidad. La estética elegante del diseño también presenta líneas suaves y menos capas para crear un calce más adaptable. ¡Comprá las tuyas hoy mismo!', 46, 29000, 15, 1, 4, '2023-04-01 22:23:56', NULL, NULL),
(14, 'Reebok Pump Omni Zone II', 'Haz que tus enemigos se babeen por cada detalle, desde la jaula de TPU con curvas hasta el perfil de corte medio. Nunca comprometa la comodidad con la amortiguación Hexalite en la entresuela. Podríamos seguir. ¿Pero por qué? Conseguílas hoy en G3 Footwear!', 46, 45000, 10, 3, 8, '2023-04-01 22:23:56', NULL, NULL),
(15, 'Nike Air Huarache Premium', '¿Qué te mueve? Descúbrelo en las Nike Air Huarache.\'NIKE MOVING CO.\' los detalles celebran la historia de hacer que la gente se mueva. La tela elástica que abraza los pies, la amortiguación liviana y la estructura futurista del talón lo llevan a todos lados con comodidad. ¿Dónde seguir?', 46, 41500, 20, 3, 1, '2023-04-01 22:23:56', NULL, NULL),
(16, 'Jordan Series ES', 'Inspirada en las batallas en el patio trasero de Mike con su hermano mayor Larry, la serie Jordan hace referencia a su legendaria rivalidad entre hermanos en todo el diseño. La suela de goma ofrece más que una tracción impresionante, también cuenta la historia de cómo MJ llegó a ser el número 23. Busque el recordatorio oculto de \'Swing for the Fence\', una cita directa de Larry a su hermanito.', 46, 28000, 10, 2, 9, '2023-04-01 22:23:56', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_brands`
--

CREATE TABLE `products_brands` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_brands`
--

INSERT INTO `products_brands` (`id`, `name`) VALUES
(1, 'Nike'),
(2, 'Adidas'),
(3, 'Vans'),
(4, 'Asics'),
(5, 'Puma'),
(6, 'Saucony'),
(7, 'Converse'),
(8, 'Reebok'),
(9, 'Jordan');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_categories`
--

CREATE TABLE `products_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_categories`
--

INSERT INTO `products_categories` (`id`, `name`) VALUES
(1, 'Sport'),
(2, 'Comfort'),
(3, 'Lifestyle'),
(4, 'Boots');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `avatar`, `user_type_id`) VALUES
(1, 'Luciano', 'Gauna', 'luciano.927@hotmail.com', '123456ab', '', 1),
(2, 'Juan', 'Noailles', 'jpnoailles@gmail.com', '123456ab', '', 1),
(3, 'Juan', 'Vergara', 'abgjvergara@gmail.com', '123456ab', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users-products`
--

CREATE TABLE `users-products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_types`
--

CREATE TABLE `users_types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_types`
--

INSERT INTO `users_types` (`id`, `name`) VALUES
(1, 'Administrador'),
(2, 'Estandar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_ibfk_1` (`product_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_brands` (`brand_id`),
  ADD KEY `fk_id_categories` (`category_id`);

--
-- Indices de la tabla `products_brands`
--
ALTER TABLE `products_brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_types` (`user_type_id`);

--
-- Indices de la tabla `users-products`
--
ALTER TABLE `users-products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`,`product_id`),
  ADD KEY `fk_id_product` (`product_id`);

--
-- Indices de la tabla `users_types`
--
ALTER TABLE `users_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=293;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `products_brands`
--
ALTER TABLE `products_brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users-products`
--
ALTER TABLE `users-products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_types`
--
ALTER TABLE `users_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_id_brands` FOREIGN KEY (`brand_id`) REFERENCES `products_brands` (`id`),
  ADD CONSTRAINT `fk_id_categories` FOREIGN KEY (`category_id`) REFERENCES `products_categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_types` FOREIGN KEY (`user_type_id`) REFERENCES `users_types` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `users-products`
--
ALTER TABLE `users-products`
  ADD CONSTRAINT `fk_id_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
