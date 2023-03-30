-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2023 a las 01:06:05
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
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `images` varchar(255) NOT NULL,
  `size` double NOT NULL,
  `price` double NOT NULL,
  `discount_percentage` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `images`, `size`, `price`, `discount_percentage`, `category_id`, `brand_id`) VALUES
(1, 'Vans Old Skool', 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70\'y con el correr de las décadas se transformó en un modelo básico de lifestyle', '', 36, 28500, 15, 2, 3),
(2, 'Adidas NMD_V3', 'La vida pasa volando. Pero esto no es un \'parpadea y te lo perdés\'. Esto es algo así como \'atate los cordones y disfrutá cada minuto\'. Diseñadas sobre el legado de la velocidad, estas zapatillas adidas inspiradas en el running te ayudan a enfrentarte al ritmo de tu rutina diaria. Incorporan amortiguación BOOST suave muy cómodo y estable', '', 44, 41000, 20, 1, 2),
(3, 'Nike Air Jordan 1 Hi Og \'Yellow Toe\'', 'Revive lo retro con el Air Jordan 1 Retro Hi OG, llevado a la calle en una nueva combinación de colores. La parte superior de cuero de primera calidad y las superposiciones lustradas le brindan ese aspecto icónico de la vieja escuela arraigado en la comodidad. Con un cuello acolchado, una marca clásica y un diseño de bloques de colores que se destacará entre la multitud', '', 46, 42500, 15, 3, 1),
(4, 'Converse Chuck 70 Low Tonal', 'Consigue ese look auténtico de los 70 con las Chuck 70 Low Tonal Polyester. La marca vintage y el retroceso al diseño clásico de la época te permitirán dominarlo en poco tiempo. Las características de diseño elevadas incluyen amortiguación adicional, una parte superior de lona y costuras reforzadas en la lengüeta. Conseguí las tuyas hoy!', '', 38, 32500, 20, 2, 7),
(5, 'Puma Suede Classic XXI', 'Las PUMA Suede Classic XXI son unas de las zapatillas PUMA más conocidas y populares y merece su lugar en todos los salones de la fama. Esta gran versión del Suede Classic viene en colores frescos que completarán tu estilo de vida deportivo. Disponible ahora en G3 Footwear', '', 36, 28000, 20, 2, 5),
(6, 'Nike Blazer Low \'77 Jumbo', 'Para una apariencia audaz, sabe que el Blazer Low \'77 Jumbo se presentará. A veces necesitas combinar la energía de tu calce con zapatillas que son igualmente icónicas, y ahí es donde entra Nike con el Blazer Low \'77 Jumbo. Terminado con cordones jumbo, detalles de gamuza y un diseño Swoosh de gran tamaño.', '', 38, 29000, 15, 2, 1),
(7, 'Saucony Shadow 6000', 'El Shadow 6000 le da un guiño a su debut original con una silueta vintage, pero se ve con la comodidad de hoy en día. Hechas con superposiciones de malla y gamuza en la parte superior y suavizada con una entresuela de EVA que absorbe los golpes, esta zapatilla mantiene su clase con su combinación de colores frescos y su fabricación de calidad. ¡Compralo hoy!', '', 36, 32000, 0, 3, 6),
(8, 'Puma Slipstream', 'Una de las zapatillas de baloncesto originales de Puma, la Slipstream es un elegante diseño vintage que se presenta en la actualidad. Con paneles de gamuza fresca y una parte superior de cuero resistente, además de una plantilla Softfoam+ para comodidad durante todo el día, estos se convertirán fácilmente en los favoritos en su rotación de zapatillas', '', 36, 30000, 30, 3, 5),
(9, 'Adidas Forum MID', 'Tomemos un momento para rendir homenaje a un ícono. ¿Será la leyenda que desafiaba la gravedad en los años 80? ¿O tal vez las zapatillas que le daban estatus a los pies de raperos? De hecho, ambas. Las zapatillas adidas Forum han dominado las canchas de básquet y las calles, y ahora regresan con una versión de corte medio para llevar tus pasos a otro nivel. Envolvé tus pies con un estilo inconfundible en piel revestida prémium para un look que exude clase', '', 0, 35000, 10, 4, 2),
(10, 'Reebok Question Low', 'Las zapatillas Question Low de Reebok son perfectas para los amantes de las zapatillas. Este modelo actualizado presenta toques de color y una puntera de cuero reforzado, lo que le da a las zapatillas un aspecto de élite, mientras que la amortiguación hexagonal hexalite y la entresuela de EVA garantizan comodidad y durabilidad. ¡Añádilos a tu colección hoy!', '', 46, 31000, 10, 1, 8),
(11, 'Reebok Club C85', 'Reebok regresa con el icónico Club C 85. Las características incluyen una parte superior de cuero suave, un perfil de corte bajo y el logotipo de la firma. El aspecto limpio pero sofisticado hace que esta zapatilla sea perfecta para cualquier atuendo y está hecha para durar. ¡Disponible ahora, conseguí el tuyo hoy!', '', 46, 28000, 15, 2, 8),
(12, 'Nike Air Max TW', 'Entonces, ¿estás enamorado del estilo clásico de los años 90, pero te gusta la cultura acelerada de hoy? Conoce las Air Max TW. Inspirado en la preciada franquicia que trajo la amortiguación Nike Air al mundo y sentó las bases para la estética de la pista a la calle, su diseño llamativo ofrece un 2x1 de comodidad y moda. Listas para resaltar, su parte superior liviana combina líneas angulares y orgánicas para crear un efecto háptico fascinante. Los colores contrastantes facilitan el estilo. Y si está listo para el siguiente paso, las 5 ventanas debajo de los pies brindan un toque moderno a la amortiguación Air visible. Conseguí el tuyo hoy en G3 Footwear!', '', 46, 34000, 15, 3, 1),
(13, 'Asics Gel-Quantum 180 VII', 'La zapatilla GEL-QUANTUM 180™ VII combina una forma futurista con tecnologías de amortiguación avanzadas estudiadas en el Instituto ASICS de Ciencias del Deporte. Su parte superior está reelaborada con una parte superior de malla jacquard que está diseñada para una mejor ventilación y comodidad. La estética elegante del diseño también presenta líneas suaves y menos capas para crear un calce más adaptable. ¡Comprá las tuyas hoy mismo!', '', 46, 29000, 15, 1, 4),
(14, 'Reebok Pump Omni Zone II', 'Haz que tus enemigos se babeen por cada detalle, desde la jaula de TPU con curvas hasta el perfil de corte medio. Nunca comprometa la comodidad con la amortiguación Hexalite en la entresuela. Podríamos seguir. ¿Pero por qué? Conseguílas hoy en G3 Footwear!', '', 46, 45000, 10, 3, 8),
(15, 'Nike Air Huarache Premium', '¿Qué te mueve? Descúbrelo en las Nike Air Huarache.\'NIKE MOVING CO.\' los detalles celebran la historia de hacer que la gente se mueva. La tela elástica que abraza los pies, la amortiguación liviana y la estructura futurista del talón lo llevan a todos lados con comodidad. ¿Dónde seguir?', '', 46, 41500, 20, 3, 1),
(16, 'Jordan Series ES', 'Inspirada en las batallas en el patio trasero de Mike con su hermano mayor Larry, la serie Jordan hace referencia a su legendaria rivalidad entre hermanos en todo el diseño. La suela de goma ofrece más que una tracción impresionante, también cuenta la historia de cómo MJ llegó a ser el número 23. Busque el recordatorio oculto de \'Swing for the Fence\', una cita directa de Larry a su hermanito.', '', 46, 28000, 10, 2, 9);

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
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_id_brands` FOREIGN KEY (`brand_id`) REFERENCES `products_brands` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_categories` FOREIGN KEY (`category_id`) REFERENCES `products_categories` (`id`) ON UPDATE CASCADE;

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
