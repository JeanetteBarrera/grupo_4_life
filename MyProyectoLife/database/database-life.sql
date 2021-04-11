-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: database-life
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `depto` varchar(255) DEFAULT NULL,
  `piso` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zipCode` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sizeId` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `variantId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sizeId` (`sizeId`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  KEY `variantId` (`variantId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`variantId`) REFERENCES `variants` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Mujer','2021-04-11 15:31:35','2021-04-11 15:31:35'),(2,'Hombre','2021-04-11 15:31:35','2021-04-11 15:31:35');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addressId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addressId` (`addressId`),
  KEY `userId` (`userId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `subcategoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategoryId` (`subcategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'pantalon skills','Pantalón tipo babucha con cintura elastizada, bolsillos con tapa y cierres diente de perro.',2500,10,1,6,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(2,'babucha cargo reloaded','Babucha cargo de frisa liviana. Cintura elastizada con tanca y elastico al tono de la base con posibilidad de ajuste. Detalle de doble bolsillo con tapa en cada lateral de pierna. Puño con elastico. Grifa institucional en cintura izquierda.',1500,10,1,6,'2021-04-11 15:51:31','2021-04-11 15:51:31'),(3,'cargo lima','Pantalon cargo de gabarina 100% algodón. Posee un detalle de cadena colgando desde el lateral. Múltiples bolsillos y tanca con elástico en bajo para justar el efecto babucha o recto. Súper canchero y cómodo para todo uso.',2500,0,1,6,'2021-04-11 15:55:47','2021-04-13 10:32:08'),(4,'pantalon laos','Pantalon tipo palazzo de morley ancho. Cintura elastizada. Calce relajado. Grifa institucional en cintura izquierda.',2000,0,1,6,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(5,'campera basic','Campera básica de frisa liviana. Bolsillo canguro. Cierre metalico color crudo. Cordon color crudo con puntera metalica. Largo a la primer cadera.',1500,0,1,5,'2021-04-12 23:17:44','2021-04-12 23:17:44'),(6,'canguro reflect','Canguro básico de frisa liviana. Medio cierre con tira cierre argolla en cuello. Capucha. Detalle de vivo reflex en recortes. Grifa institucional en ruedo izquierdo.',2000,0,1,5,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(7,'canguro sidney','Canguro oversize de rustico esmerilado. Detalle de recortes en mangas con combinacion de colores. Estampa centrada en frente. Bolsillos en laterales.',2200,0,1,4,'2021-04-12 23:22:36','2021-04-13 10:32:36'),(8,'canguro everyday light','Canguro basico de rustico liviano. Bolsillo canguro. Cordon color crudo con puntera metalica. Largo a la primer cadera. Grifa institucional en ruedo izquiedo.',2200,0,1,4,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(9,'buzo crunch','Buzo de rustico esmerilado. Escote en V. Ruedo en cintura con elastico generando ajuste. Puños aplicados. Bordado en manga izquierda. Grifa institucional en ruedo izquierdo.',2500,0,1,4,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(10,'jean deep tripp','Jean 5 bolsillos calce deep (tiro medio), skinny, con pespuntes azul marino y avíos metálicos personalizados negros.',2400,0,1,7,'2021-04-12 23:29:10','2021-04-12 23:29:10'),(11,'jean boy relax elliot','Jean 5 bolsillos calce boy relax (tiro relajado-pierna recta amplia), en lona rígida 100% algodón color azul oscuro gastado con una rotura en una rodilla. Avíos metálicos personalizados baño níquel.',2400,0,1,7,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(12,'jean relax keen','Jean 5 bolsillos calce relax (tiro relajado), tonalidad celeste gastado conroturas en rodillas y brocas. Avíos metálicos personalizados baño níquel.',2800,0,1,7,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(13,'jean high rise slash','Jean 5 bolsillos calce high rise (tiro alto), skinny, en lona adherente con spandex, lavado medio con ruedos gastados. Avíos metálicos personalizados níquel mate',2900,0,1,7,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(14,'jean high relax digging','Jean 5 bolsillos, calce high relax (tiro alto, y piernas rectas relajadas), en lona con spandex color azul medio con pequeñas roturas. Avíos metálicos personalizados baño níquel.',2900,0,1,7,'2021-04-12 23:34:52','2021-04-13 10:33:20'),(15,'remera tiger','remera de jersey de 100% algodon estampada.(LA MODELO USA TALLE M)',700,0,1,1,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(16,'remera mercury','remera de jersey de 100% algodon estampada.',700,0,1,1,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(17,'remera blair','remera de jersey de 100% algodon estampada.',700,0,1,1,'2021-04-13 00:03:49','2021-04-13 10:33:51'),(18,'remera peace','remera de jersey de 100% algodon estampada con lavado batik.',700,0,1,1,'2021-04-13 00:05:45','2021-04-13 10:34:06'),(19,'remera jurassic','remera crop de rayon manga corta,cuello redondo.',800,0,1,1,'2021-04-13 00:08:16','2021-04-13 00:14:09'),(20,'remera mickey lion','Remera manga corta de jersey con cuello redondo aplicado. Detalle de dobladillo en ruedo de manga. Largo a la cadera. Molderia cuadrada. Estampa con centrada en frente.',700,0,1,1,'2021-04-13 00:18:00','2021-04-13 00:18:00'),(21,'babucha bob','Babucha de cuero ecológico tiro medio. Modelo relajado, con 2 bolsillos delanteros metálicos al tono. Cintura y puños con elástico interno fruncido en tela base. Avios personalizados al tono. Modelo super cómodo y canchero',1200,0,1,6,'2021-04-13 00:20:34','2021-04-13 00:20:34'),(22,'cargo callie','Pantalón cargo de gabardina algodón con spandex. Multiples bolsillos y cierre metálico en la bota manga. Super canchero y cómodo para todo uso.',1250,0,1,6,'2021-04-13 00:22:57','2021-04-13 00:22:57'),(23,'vestido waves','Vestido tipo remera con frunces en laterales. Cuello redondo. Manga corta. Detalle de tira ajustable en los laterales dando la posibilidad de usarlo a diferentes largos. Grifa institucional en ruedo izquierdo.',2200,10,1,3,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(24,'vestido romantic liberty','Vestido largo de voile rayón liberty. Escote camisero, mangas cortas. Falda con maxi volados y frunces..',2500,10,1,3,'2021-04-13 00:27:51','2021-04-13 00:27:51');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210326143118-create-category.js'),('20210326143349-create-subcategory.js'),('20210326143438-create-product.js'),('20210326143551-create-variant.js'),('20210326143812-create-size.js'),('20210326143950-create-stock.js'),('20210326144000-create-address.js'),('20210326144029-create-user.js'),('20210326144339-create-cart.js'),('20210326144428-create-order.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S','2021-04-11 15:31:36','2021-04-11 15:31:36'),(2,'M','2021-04-11 15:31:36','2021-04-11 15:31:36'),(3,'L','2021-04-11 15:31:36','2021-04-11 15:31:36'),(4,'XL','2021-04-11 15:31:36','2021-04-11 15:31:36');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `variantId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `variantId` (`variantId`),
  KEY `sizeId` (`sizeId`),
  CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_2` FOREIGN KEY (`variantId`) REFERENCES `variants` (`id`),
  CONSTRAINT `stocks_ibfk_3` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,1,1,1,10,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(2,1,1,2,10,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(3,1,1,3,10,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(4,1,1,4,10,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(5,1,2,1,10,'2021-04-11 15:44:45','2021-04-11 15:44:45'),(6,1,2,2,10,'2021-04-11 15:44:45','2021-04-11 15:44:45'),(7,1,2,3,10,'2021-04-11 15:44:45','2021-04-11 15:44:45'),(8,1,2,4,8,'2021-04-11 15:44:45','2021-04-11 15:44:45'),(9,2,3,1,10,'2021-04-11 15:51:32','2021-04-11 15:51:32'),(10,2,3,2,10,'2021-04-11 15:51:32','2021-04-11 15:51:32'),(11,2,3,3,5,'2021-04-11 15:51:32','2021-04-11 15:51:32'),(12,2,3,4,3,'2021-04-11 15:51:32','2021-04-11 15:51:32'),(13,3,4,1,10,'2021-04-11 15:55:48','2021-04-13 10:32:14'),(14,3,4,2,10,'2021-04-11 15:55:48','2021-04-13 10:32:14'),(15,3,4,3,10,'2021-04-11 15:55:48','2021-04-13 10:32:14'),(16,3,4,4,3,'2021-04-11 15:55:48','2021-04-13 10:32:14'),(17,3,5,1,10,'2021-04-11 15:55:49','2021-04-13 10:32:14'),(18,3,5,2,2,'2021-04-11 15:55:49','2021-04-13 10:32:14'),(19,3,5,3,6,'2021-04-11 15:55:49','2021-04-13 10:32:14'),(20,3,5,4,5,'2021-04-11 15:55:49','2021-04-13 10:32:14'),(21,4,6,1,5,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(22,4,6,2,2,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(23,4,6,3,5,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(24,4,6,4,1,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(25,5,7,1,10,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(26,5,7,2,10,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(27,5,7,3,5,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(28,5,7,4,10,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(29,5,8,1,3,'2021-04-12 23:17:48','2021-04-12 23:17:48'),(30,5,8,2,6,'2021-04-12 23:17:48','2021-04-12 23:17:48'),(31,5,8,3,10,'2021-04-12 23:17:48','2021-04-12 23:17:48'),(32,5,8,4,10,'2021-04-12 23:17:48','2021-04-12 23:17:48'),(33,6,10,1,3,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(34,6,10,2,7,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(35,6,10,3,4,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(36,6,10,4,8,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(37,6,9,1,10,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(38,6,9,2,10,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(39,6,9,3,5,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(40,6,9,4,2,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(41,7,11,1,10,'2021-04-12 23:22:36','2021-04-13 10:32:37'),(42,7,11,2,6,'2021-04-12 23:22:36','2021-04-13 10:32:37'),(43,7,11,3,3,'2021-04-12 23:22:36','2021-04-13 10:32:37'),(44,7,11,4,3,'2021-04-12 23:22:36','2021-04-13 10:32:37'),(45,8,13,1,10,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(46,8,13,2,5,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(47,8,13,3,2,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(48,8,13,4,10,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(49,8,12,1,10,'2021-04-12 23:25:00','2021-04-12 23:25:00'),(50,8,12,2,7,'2021-04-12 23:25:00','2021-04-12 23:25:00'),(51,8,12,3,3,'2021-04-12 23:25:00','2021-04-12 23:25:00'),(52,8,12,4,4,'2021-04-12 23:25:00','2021-04-12 23:25:00'),(53,9,14,1,10,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(54,9,14,2,5,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(55,9,14,3,5,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(56,9,14,4,7,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(57,9,15,1,6,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(58,9,15,2,10,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(59,9,15,3,8,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(60,9,15,4,7,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(61,10,16,1,10,'2021-04-12 23:29:11','2021-04-12 23:29:11'),(62,10,16,2,5,'2021-04-12 23:29:11','2021-04-12 23:29:11'),(63,10,16,3,10,'2021-04-12 23:29:11','2021-04-12 23:29:11'),(64,10,16,4,5,'2021-04-12 23:29:11','2021-04-12 23:29:11'),(65,11,17,1,12,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(66,11,17,2,12,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(67,11,17,3,5,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(68,11,17,4,10,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(69,12,18,1,10,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(70,12,18,2,5,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(71,12,18,3,5,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(72,12,18,4,8,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(73,13,19,1,10,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(74,13,19,2,6,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(75,13,19,3,10,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(76,13,19,4,12,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(77,14,20,1,5,'2021-04-12 23:34:52','2021-04-13 10:33:21'),(78,14,20,2,2,'2021-04-12 23:34:52','2021-04-13 10:33:21'),(79,14,20,3,12,'2021-04-12 23:34:52','2021-04-13 10:33:21'),(80,14,20,4,5,'2021-04-12 23:34:52','2021-04-13 10:33:21'),(81,15,21,1,10,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(82,15,21,2,7,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(83,15,21,3,2,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(84,15,21,4,5,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(85,15,22,1,5,'2021-04-12 23:58:35','2021-04-12 23:58:35'),(86,15,22,2,10,'2021-04-12 23:58:35','2021-04-12 23:58:35'),(87,15,22,3,7,'2021-04-12 23:58:35','2021-04-12 23:58:35'),(88,15,22,4,14,'2021-04-12 23:58:35','2021-04-12 23:58:35'),(89,16,23,1,10,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(90,16,23,2,5,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(91,16,23,3,10,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(92,16,23,4,10,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(93,16,24,1,5,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(94,16,24,2,5,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(95,16,24,3,9,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(96,16,24,4,2,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(97,17,25,1,5,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(98,17,25,2,10,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(99,17,25,3,9,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(100,17,25,4,12,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(101,17,26,1,10,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(102,17,26,2,10,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(103,17,26,3,10,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(104,17,26,4,0,'2021-04-13 00:03:50','2021-04-13 10:33:51'),(105,18,27,1,14,'2021-04-13 00:05:45','2021-04-13 10:34:07'),(106,18,27,2,15,'2021-04-13 00:05:45','2021-04-13 10:34:07'),(107,18,27,3,2,'2021-04-13 00:05:45','2021-04-13 10:34:07'),(108,18,27,4,7,'2021-04-13 00:05:45','2021-04-13 10:34:07'),(109,19,28,1,9,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(110,19,28,2,9,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(111,19,28,3,12,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(112,19,28,4,5,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(113,19,29,1,8,'2021-04-13 00:08:17','2021-04-13 00:14:10'),(114,19,29,2,9,'2021-04-13 00:08:17','2021-04-13 00:14:10'),(115,19,29,3,12,'2021-04-13 00:08:17','2021-04-13 00:14:10'),(116,19,29,4,7,'2021-04-13 00:08:17','2021-04-13 00:14:10'),(117,19,30,1,6,'2021-04-13 00:08:18','2021-04-13 00:14:10'),(118,19,30,2,3,'2021-04-13 00:08:18','2021-04-13 00:14:10'),(119,19,30,3,0,'2021-04-13 00:08:18','2021-04-13 00:14:10'),(120,19,30,4,0,'2021-04-13 00:08:18','2021-04-13 00:14:10'),(121,20,31,1,10,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(122,20,31,2,12,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(123,20,31,3,5,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(124,20,31,4,6,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(125,20,32,1,5,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(126,20,32,2,7,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(127,20,32,3,5,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(128,20,32,4,10,'2021-04-13 00:18:01','2021-04-13 00:18:01'),(129,21,33,1,7,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(130,21,33,2,10,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(131,21,33,3,6,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(132,21,33,4,12,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(133,21,34,1,12,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(134,21,34,2,16,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(135,21,34,3,15,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(136,21,34,4,10,'2021-04-13 00:20:35','2021-04-13 00:20:35'),(137,22,35,1,10,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(138,22,35,2,5,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(139,22,35,3,10,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(140,22,35,4,5,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(141,22,36,1,7,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(142,22,36,2,10,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(143,22,36,3,8,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(144,22,36,4,12,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(145,22,37,1,12,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(146,22,37,2,10,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(147,22,37,3,5,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(148,22,37,4,3,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(149,23,38,1,3,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(150,23,38,2,5,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(151,23,38,3,5,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(152,23,38,4,5,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(153,23,39,1,7,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(154,23,39,2,6,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(155,23,39,3,7,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(156,23,39,4,5,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(157,23,40,1,12,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(158,23,40,2,4,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(159,23,40,3,15,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(160,23,40,4,6,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(161,24,41,1,5,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(162,24,41,2,7,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(163,24,41,3,5,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(164,24,41,4,8,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(165,24,42,1,5,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(166,24,42,2,7,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(167,24,42,3,5,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(168,24,42,4,7,'2021-04-13 00:27:51','2021-04-13 00:27:51');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Remeras',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(2,'Tops',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(3,'Vestidos',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(4,'Buzos',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(5,'Camperas',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(6,'Pantalones',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(7,'Jeans',1,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(8,'Remeras',2,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(9,'Buzos',2,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(10,'Camperas',2,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(11,'Pantalones',2,'2021-04-11 15:31:35','2021-04-11 15:31:35'),(12,'Jeans',2,'2021-04-11 15:31:35','2021-04-11 15:31:35');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jeanette','garcia','jeane0710@gmail.com','$2b$12$8deGpoP7f6vkbVdPUVHNvOOH/zfSbkBUfDJDdn6vppCHS5kSoLlyK','default.png','admin','1',NULL,'2021-04-13 11:22:08','2021-04-13 11:22:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS `variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variants`
--

LOCK TABLES `variants` WRITE;
/*!40000 ALTER TABLE `variants` DISABLE KEYS */;
INSERT INTO `variants` VALUES (1,'#5B6857','image-1618155884233.jpg',1,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(2,'#000000','image-1618155884265.jpg',1,'2021-04-11 15:44:44','2021-04-11 15:44:44'),(3,'#000000','image-1618156291917.jpg',2,'2021-04-11 15:51:32','2021-04-11 15:51:32'),(4,'#5B6857  ','image-1618156878309.jpg',3,'2021-04-11 15:55:48','2021-04-13 10:32:11'),(5,'#000000  ','image-1618156878315.jpg',3,'2021-04-11 15:55:48','2021-04-13 10:32:11'),(6,'#A74F24','image-1618156669492.jpg',4,'2021-04-11 15:57:49','2021-04-11 15:57:49'),(7,'#0A2B54','image-1618269464546.jpg',5,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(8,'#000000','image-1618269464593.jpg',5,'2021-04-12 23:17:47','2021-04-12 23:17:47'),(9,'#6E727D','image-1618269651066.jpg',6,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(10,'#000000','image-1618269651082.jpg',6,'2021-04-12 23:20:51','2021-04-12 23:20:51'),(11,'#6E727D ','image-1618269756857.jpg',7,'2021-04-12 23:22:36','2021-04-13 10:32:37'),(12,'#000000','image-1618269899291.jpg',8,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(13,'#7D6C52','image-1618269899126.jpg',8,'2021-04-12 23:24:59','2021-04-12 23:24:59'),(14,'#CB9672','image-1618270018167.jpg',9,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(15,'#DFC8E7','image-1618270018183.jpg',9,'2021-04-12 23:26:58','2021-04-12 23:26:58'),(16,'#1C3E65','image-1618270150688.jpg',10,'2021-04-12 23:29:10','2021-04-12 23:29:10'),(17,'#1C63A0','image-1618270235169.jpg',11,'2021-04-12 23:30:35','2021-04-12 23:30:35'),(18,'#87BBE0','image-1618270325207.jpg',12,'2021-04-12 23:32:05','2021-04-12 23:32:05'),(19,'#426389','image-1618270403740.jpg',13,'2021-04-12 23:33:23','2021-04-12 23:33:23'),(20,'#426389 ','image-1618270492327.jpg',14,'2021-04-12 23:34:52','2021-04-13 10:33:21'),(21,'#000000','image-1618271914384.jpg',15,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(22,'#474E5C','image-1618271914400.jpg',15,'2021-04-12 23:58:34','2021-04-12 23:58:34'),(23,'#000000','image-1618272044621.jpg',16,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(24,'#ffffff','image-1618272044621.jpg',16,'2021-04-13 00:00:44','2021-04-13 00:00:44'),(25,'#ffffff ','image-1618272229635.jpg',17,'2021-04-13 00:03:49','2021-04-13 10:33:51'),(26,'#000000 ','image-1618272229534.jpg',17,'2021-04-13 00:03:49','2021-04-13 10:33:51'),(27,'#000000 ','image-1618272345230.jpg',18,'2021-04-13 00:05:45','2021-04-13 10:34:06'),(28,'#000000 ','image-1618272849310.jpg',19,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(29,'#D0D267 ','image-1618272849315.jpg',19,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(30,'#BBBCBF ','image-1618272849325.jpg',19,'2021-04-13 00:08:16','2021-04-13 00:14:10'),(31,'#C6B393','image-1618273080685.jpg',20,'2021-04-13 00:18:00','2021-04-13 00:18:00'),(32,'#000000','image-1618273080600.jpg',20,'2021-04-13 00:18:00','2021-04-13 00:18:00'),(33,'#B46839','image-1618273234820.jpg',21,'2021-04-13 00:20:34','2021-04-13 00:20:34'),(34,'#000000','image-1618273234891.jpg',21,'2021-04-13 00:20:34','2021-04-13 00:20:34'),(35,'#000000','image-1618273377951.jpg',22,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(36,'#725B39','image-1618273377956.jpg',22,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(37,'#AF835E','image-1618273377961.jpg',22,'2021-04-13 00:22:58','2021-04-13 00:22:58'),(38,'#DAA16C','image-1618273553088.jpg',23,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(39,'#000000','image-1618273553098.jpg',23,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(40,'#ffffff','image-1618273553103.jpg',23,'2021-04-13 00:25:53','2021-04-13 00:25:53'),(41,'#CCDBCE','image-1618273671503.jpg',24,'2021-04-13 00:27:51','2021-04-13 00:27:51'),(42,'#7A6B64','image-1618273671493.jpg',24,'2021-04-13 00:27:51','2021-04-13 00:27:51');
/*!40000 ALTER TABLE `variants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-13  8:29:33
