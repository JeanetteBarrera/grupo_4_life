-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: datab-life
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sizeId` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `variantId` int DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Woman','2021-05-02 05:25:20','2021-05-02 05:25:20'),(2,'Man','2021-05-02 05:25:20','2021-05-02 05:25:20');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `cartId` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `subcategoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategoryId` (`subcategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'SKILLS TROUSERS','Slip-on pants with elasticated waist, flap pockets and dog tooth closures.',7000,0,1,6,'2021-05-02 06:00:22','2021-05-03 15:33:58'),(2,'RAY TROUSERS','Medium-rise eco-leather pants. Puffy legs with side closure. Two applied back pockets and two on the front. Adherent quality with spandex. Personalized alerts to the tone. Ideal model to show off the feminine silhouette.',9500,0,1,6,'2021-05-02 06:19:23','2021-05-03 15:35:18'),(3,'KANGAROO GEORGIA','Oversized rustic frosted kangaroo. Double sleeve detail simulating two overlapping garments in contrasting colors. Kangaroo pocket. Hood matching the sleeves. Logo location print on the front and on the sleeves.',8000,0,1,4,'2021-05-02 06:34:31','2021-05-03 16:01:31'),(4,'T-SHIRT VANCOUVER','Short-sleeved jersey T-shirt with applied round neck. Hem detail on sleeve hem. Length to the hip. Square mold. Print centered on the front and back.',3000,0,1,1,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(5,'JEAN BOY RELAX ELLIOT','Jeans 5 pockets fit boy relax (relaxed shot-wide straight leg), in rigid canvas 100% cotton color dark blue worn with a break in one knee. Nickel plated custom metal aircraft',6999,0,1,7,'2021-05-02 06:54:57','2021-05-03 16:12:38'),(6,'ALBERTA DRESS','Lightweight liberty rayon voile short dress, 3/4 sleeves with elasticated cuffs. Central wallet with buttons and ruffles in hem.',7500,0,1,3,'2021-05-02 07:09:01','2021-05-03 16:17:41'),(7,'JEAN RELAX KEEN','5-pocket jean with a relax fit (relaxed shot), worn blue tonality with broken knees and bits. Nickel plated custom metal aircraft.',5999,0,1,7,'2021-05-02 07:10:35','2021-05-03 16:18:35'),(8,'TOP ATHLETIC','Morley top complement. Elasticated waist. Lower back. Institutional grifa in left ring.',2500,0,1,2,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(9,'JAZZY DRESS','Short dress in light crepe. Flared skirt, balloon sleeves and round neckline with small gathers. Back access with neckline opening.',7400,0,1,3,'2021-05-02 07:29:29','2021-05-03 16:58:15'),(10,'JACKET MIND K.','Bomber jacket with maxi pockets, quilted lining with padding and internal straps to hang backpack type.\r\nPRE-SALE: The product will be available to be dispatched from 03/30',13000,0,1,5,'2021-05-02 07:41:15','2021-05-02 09:39:09'),(11,'JACKET  BASIC FUR','Basic jacket with central opening, has fur detail on the hood.',5000,0,1,5,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(12,'T-SHIRT WOOL','Basic short sleeve T-shirt with applied collar. I roll to the cut. Length below the waist. Print centered in front.',2300,0,1,1,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(13,'JEAN HIGH RISE JENNA','5-pocket jean with a high rise, skinny fit, in adherent canvas with blue spandex. Matt nickel personalized metal aircraft',5500,0,1,7,'2021-05-02 07:56:37','2021-05-02 07:56:37'),(14,'TOP GIGI','Lurex weft top. Applied round neck of base fabric. Open back with button detail on the top and adjustable elastic on the bottom. Institutional grifa in left ring.',3000,0,1,2,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(15,'Core Slim-Fit Denim','A pair of denim skinny jeans featuring a whiskered design, five-pocket construction, and a zip fly with a button closure.',5000,0,1,12,'2021-05-02 08:10:39','2021-05-02 09:35:11'),(16,'Distressed Paint Splatter Jeans','A pair of denim jeans featuring distressed details with rips and frays at the knees and thighs, paint splatter design, slim fit, traditional five-pocket construction, and a zip fly with a button closure.',6000,0,1,12,'2021-05-02 08:15:48','2021-05-02 08:15:48'),(17,'Core Slim-Fit ','A pair of denim skinny jeans featuring a whiskered design, five-pocket construction, and a zip fly with a button closure.',7000,0,1,12,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(18,'Relaxed Woven Shorts','A pair of woven shorts featuring front slanted and back patch pockets, belt loops, zip fly with a button closure, and a relaxed fit.',5000,0,1,9,'2021-05-02 08:29:27','2021-05-03 17:05:24'),(19,'Zippered Bomber Jacket','A lightweight woven bomber jacket featuring ribbed knit trim, front zipper closure, slanted front pockets with snap-button closures, interior slip pocket, ribbed flat collar, long sleeves with a zippered utility pocket, and elasticized trim.',8000,0,1,10,'2021-05-02 08:36:43','2021-05-03 17:07:05'),(20,'Button-Down Denim Jacket','A midweight denim jacket featuring a basic collar, button front, button-flap chest pockets, long sleeves with button cuffs, slant front welt pockets, and adjustable button-strap hem.',7500,0,1,10,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(21,'Piped-Trim Windbreaker','A woven windbreaker featuring piped trim, long sleeves, zippered front, funnel neck, slanted front pockets, and elasticized trim',5000,0,1,10,'2021-05-02 08:48:02','2021-05-03 17:09:30'),(22,'Drawstring Cargo Joggers','A pair of woven joggers featuring pleated flap cargo, zippered front slanted, and back welt pockets, smocked waist with contrast shoestring pull, elasticized hem, and carabiner tassel accent.',7000,0,1,11,'2021-05-02 08:59:45','2021-05-03 17:14:34'),(23,'Cargo Windbreaker Pants','A pair of woven windbreaker pants featuring side cargo flap pockets, front slanted pockets, back patch pockets, ankle-zip hem, and an elasticized waist.',8000,0,1,11,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(24,'Lakers Graphic Fleece Joggers','A pair of fleece knit joggers featuring \"Los Angeles\" text down one side and \"Lakers\" basketball logo graphic on the other, smocked drawstring waist, front slanted pockets, and single back patch pocket',6000,0,1,11,'2021-05-02 09:11:24','2021-05-02 09:11:24'),(25,'Fitted Oxford Pocket Shirt','A fitted Oxford shirt featuring a chest patch pocket, basic collar, short sleeves, button-down front, and curved hem',3000,0,1,13,'2021-05-02 09:16:35','2021-05-02 09:16:35'),(26,'Classic Fit Tropical Print Shirt','Cut and sewn for a classic fit, this soft woven shirt takes you from beach to boardwalk with easy-going appeal. It features a tropical print, Cuban collar, short sleeves, and button-down front.',5000,0,1,13,'2021-05-02 09:19:19','2021-05-02 09:19:19'),(27,'Basic Cotton Crew Neck Tee','Crafted from organically grown cotton, this basic knit tee features short sleeves and a crew neck.',2500,0,1,8,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(28,'Basic Cotton V-Neck Tee','Crafted from organically grown cotton, this basic knit tee featuring a V-neckline and short sleeves',2300,0,1,8,'2021-05-03 23:02:29','2021-05-03 23:02:29'),(29,'Basic Cotton V-Neck Tee','Crafted from organically grown cotton, this basic knit tee featuring a V-neckline and short sleeves',1900,0,1,8,'2021-05-03 23:09:11','2021-05-03 23:11:50');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `sequelizemeta` VALUES ('20210326143118-create-category.js'),('20210326143349-create-subcategory.js'),('20210326143438-create-product.js'),('20210326143551-create-variant.js'),('20210326143812-create-size.js'),('20210326143950-create-stock.js'),('20210326144029-create-user.js'),('20210326144339-create-cart.js'),('20210326144428-create-order.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `size` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S','2021-05-02 05:25:21','2021-05-02 05:25:21'),(2,'M','2021-05-02 05:25:21','2021-05-02 05:25:21'),(3,'L','2021-05-02 05:25:21','2021-05-02 05:25:21'),(4,'XL','2021-05-02 05:25:21','2021-05-02 05:25:21');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stocks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `variantId` int DEFAULT NULL,
  `sizeId` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `variantId` (`variantId`),
  KEY `sizeId` (`sizeId`),
  CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_2` FOREIGN KEY (`variantId`) REFERENCES `variants` (`id`),
  CONSTRAINT `stocks_ibfk_3` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,1,2,1,10,'2021-05-02 06:00:22','2021-05-03 15:34:08'),(2,1,2,2,10,'2021-05-02 06:00:22','2021-05-03 15:34:08'),(3,1,2,3,10,'2021-05-02 06:00:22','2021-05-03 15:34:08'),(4,1,2,4,10,'2021-05-02 06:00:22','2021-05-03 15:34:08'),(5,1,1,1,10,'2021-05-02 06:00:22','2021-05-03 15:34:07'),(6,1,1,2,15,'2021-05-02 06:00:22','2021-05-03 15:34:07'),(7,1,1,3,10,'2021-05-02 06:00:22','2021-05-03 15:34:07'),(8,1,1,4,10,'2021-05-02 06:00:22','2021-05-03 15:34:07'),(9,2,3,1,13,'2021-05-02 06:19:24','2021-05-03 15:35:21'),(10,2,3,2,20,'2021-05-02 06:19:24','2021-05-03 15:35:21'),(11,2,3,3,14,'2021-05-02 06:19:24','2021-05-03 15:35:21'),(12,2,3,4,15,'2021-05-02 06:19:24','2021-05-03 15:35:21'),(13,2,4,1,14,'2021-05-02 06:19:24','2021-05-03 15:35:25'),(14,2,4,2,11,'2021-05-02 06:19:24','2021-05-03 15:35:25'),(15,2,4,3,4,'2021-05-02 06:19:24','2021-05-03 15:35:25'),(16,2,4,4,16,'2021-05-02 06:19:24','2021-05-03 15:35:25'),(17,3,5,1,20,'2021-05-02 06:34:33','2021-05-03 16:01:32'),(18,3,5,2,30,'2021-05-02 06:34:33','2021-05-03 16:01:32'),(19,3,5,3,29,'2021-05-02 06:34:33','2021-05-03 16:01:32'),(20,3,5,4,28,'2021-05-02 06:34:33','2021-05-03 16:01:32'),(21,3,7,1,14,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(22,3,7,2,16,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(23,3,7,3,16,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(24,3,7,4,11,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(25,3,6,1,8,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(26,3,6,2,6,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(27,3,6,3,7,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(28,3,6,4,8,'2021-05-02 06:34:34','2021-05-03 16:01:32'),(29,4,8,1,15,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(30,4,8,2,10,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(31,4,8,3,9,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(32,4,8,4,8,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(33,4,9,1,9,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(34,4,9,2,11,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(35,4,9,3,9,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(36,4,9,4,9,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(37,5,10,1,29,'2021-05-02 06:54:58','2021-05-03 16:12:38'),(38,5,10,2,40,'2021-05-02 06:54:58','2021-05-03 16:12:38'),(39,5,10,3,30,'2021-05-02 06:54:58','2021-05-03 16:12:38'),(40,5,10,4,30,'2021-05-02 06:54:58','2021-05-03 16:12:38'),(41,6,11,1,10,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(42,6,11,2,20,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(43,6,11,3,19,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(44,6,11,4,10,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(45,6,12,1,10,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(46,6,12,2,17,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(47,6,12,3,19,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(48,6,12,4,16,'2021-05-02 07:09:02','2021-05-03 16:17:41'),(49,7,13,1,29,'2021-05-02 07:10:36','2021-05-03 16:18:36'),(50,7,13,2,29,'2021-05-02 07:10:36','2021-05-03 16:18:36'),(51,7,13,3,29,'2021-05-02 07:10:36','2021-05-03 16:18:36'),(52,7,13,4,29,'2021-05-02 07:10:36','2021-05-03 16:18:36'),(53,8,14,1,6,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(54,8,14,2,5,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(55,8,14,3,7,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(56,8,14,4,6,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(57,8,15,1,7,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(58,8,15,2,4,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(59,8,15,3,5,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(60,8,15,4,4,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(61,9,16,1,6,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(62,9,16,2,5,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(63,9,16,3,3,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(64,9,16,4,3,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(65,9,17,1,4,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(66,9,17,2,4,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(67,9,17,3,4,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(68,9,17,4,5,'2021-05-02 07:29:29','2021-05-03 16:58:16'),(69,10,18,1,3,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(70,10,18,2,2,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(71,10,18,3,3,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(72,10,18,4,3,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(73,10,19,1,2,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(74,10,19,2,4,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(75,10,19,3,0,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(76,10,19,4,4,'2021-05-02 07:41:16','2021-05-02 09:39:10'),(77,11,20,1,3,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(78,11,20,2,2,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(79,11,20,3,4,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(80,11,20,4,3,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(81,11,21,1,2,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(82,11,21,2,4,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(83,11,21,3,3,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(84,11,21,4,4,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(85,12,22,1,5,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(86,12,22,2,4,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(87,12,22,3,3,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(88,12,22,4,3,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(89,12,23,1,3,'2021-05-02 07:51:09','2021-05-02 07:51:09'),(90,12,23,2,3,'2021-05-02 07:51:09','2021-05-02 07:51:09'),(91,12,23,3,3,'2021-05-02 07:51:09','2021-05-02 07:51:09'),(92,12,23,4,3,'2021-05-02 07:51:09','2021-05-02 07:51:09'),(93,13,24,1,3,'2021-05-02 07:56:38','2021-05-02 07:56:38'),(94,13,24,2,3,'2021-05-02 07:56:38','2021-05-02 07:56:38'),(95,13,24,3,3,'2021-05-02 07:56:38','2021-05-02 07:56:38'),(96,13,24,4,4,'2021-05-02 07:56:38','2021-05-02 07:56:38'),(97,14,25,1,3,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(98,14,25,2,3,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(99,14,25,3,3,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(100,14,25,4,3,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(101,15,26,1,2,'2021-05-02 08:10:39','2021-05-02 09:35:12'),(102,15,26,2,2,'2021-05-02 08:10:39','2021-05-02 09:35:12'),(103,15,26,3,3,'2021-05-02 08:10:39','2021-05-02 09:35:12'),(104,15,26,4,2,'2021-05-02 08:10:39','2021-05-02 09:35:12'),(105,16,27,1,3,'2021-05-02 08:15:49','2021-05-02 08:15:49'),(106,16,27,2,3,'2021-05-02 08:15:49','2021-05-02 08:15:49'),(107,16,27,3,3,'2021-05-02 08:15:49','2021-05-02 08:15:49'),(108,16,27,4,7,'2021-05-02 08:15:49','2021-05-02 08:15:49'),(109,17,28,1,2,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(110,17,28,2,2,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(111,17,28,3,2,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(112,17,28,4,2,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(113,18,29,1,3,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(114,18,29,2,3,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(115,18,29,3,2,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(116,18,29,4,4,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(117,18,30,1,3,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(118,18,30,2,2,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(119,18,30,3,3,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(120,18,30,4,1,'2021-05-02 08:29:28','2021-05-03 17:05:25'),(121,19,31,1,2,'2021-05-02 08:36:43','2021-05-03 17:07:06'),(122,19,31,2,2,'2021-05-02 08:36:43','2021-05-03 17:07:06'),(123,19,31,3,1,'2021-05-02 08:36:43','2021-05-03 17:07:06'),(124,19,31,4,2,'2021-05-02 08:36:43','2021-05-03 17:07:06'),(125,20,32,1,1,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(126,20,32,2,1,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(127,20,32,3,1,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(128,20,32,4,2,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(129,20,33,1,2,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(130,20,33,2,2,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(131,20,33,3,2,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(132,20,33,4,2,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(133,21,34,1,3,'2021-05-02 08:48:03','2021-05-03 17:09:31'),(134,21,34,2,2,'2021-05-02 08:48:03','2021-05-03 17:09:31'),(135,21,34,3,2,'2021-05-02 08:48:03','2021-05-03 17:09:31'),(136,21,34,4,2,'2021-05-02 08:48:03','2021-05-03 17:09:31'),(137,22,35,1,1,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(138,22,35,2,3,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(139,22,35,3,2,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(140,22,35,4,2,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(141,22,36,1,2,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(142,22,36,2,2,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(143,22,36,3,3,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(144,22,36,4,2,'2021-05-02 08:59:45','2021-05-03 17:14:35'),(145,23,37,1,3,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(146,23,37,2,3,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(147,23,37,3,4,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(148,23,37,4,4,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(149,24,38,1,2,'2021-05-02 09:11:25','2021-05-02 09:11:25'),(150,24,38,2,2,'2021-05-02 09:11:25','2021-05-02 09:11:25'),(151,24,38,3,2,'2021-05-02 09:11:25','2021-05-02 09:11:25'),(152,24,38,4,3,'2021-05-02 09:11:25','2021-05-02 09:11:25'),(153,25,39,1,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(154,25,39,2,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(155,25,39,3,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(156,25,39,4,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(157,25,40,1,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(158,25,40,2,3,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(159,25,40,3,3,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(160,25,40,4,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(161,25,41,1,0,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(162,25,41,2,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(163,25,41,3,0,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(164,25,41,4,2,'2021-05-02 09:16:36','2021-05-02 09:16:36'),(165,26,42,1,1,'2021-05-02 09:19:20','2021-05-02 09:19:20'),(166,26,42,2,1,'2021-05-02 09:19:20','2021-05-02 09:19:20'),(167,26,42,3,1,'2021-05-02 09:19:20','2021-05-02 09:19:20'),(168,26,42,4,1,'2021-05-02 09:19:20','2021-05-02 09:19:20'),(169,27,43,1,2,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(170,27,43,2,3,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(171,27,43,3,3,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(172,27,43,4,3,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(173,27,44,1,2,'2021-05-03 22:59:06','2021-05-03 23:00:22'),(174,27,44,2,2,'2021-05-03 22:59:06','2021-05-03 23:00:22'),(175,27,44,3,3,'2021-05-03 22:59:06','2021-05-03 23:00:22'),(176,27,44,4,2,'2021-05-03 22:59:06','2021-05-03 23:00:22'),(177,28,45,1,0,'2021-05-03 23:02:30','2021-05-03 23:02:30'),(178,28,45,2,0,'2021-05-03 23:02:30','2021-05-03 23:02:30'),(179,28,45,3,0,'2021-05-03 23:02:30','2021-05-03 23:02:30'),(180,28,45,4,0,'2021-05-03 23:02:30','2021-05-03 23:02:30'),(181,29,46,1,2,'2021-05-03 23:09:11','2021-05-03 23:11:51'),(182,29,46,2,2,'2021-05-03 23:09:11','2021-05-03 23:11:51'),(183,29,46,3,2,'2021-05-03 23:09:11','2021-05-03 23:11:51'),(184,29,46,4,2,'2021-05-03 23:09:11','2021-05-03 23:11:51'),(185,29,47,1,3,'2021-05-03 23:09:12','2021-05-03 23:11:51'),(186,29,47,2,2,'2021-05-03 23:09:12','2021-05-03 23:11:51'),(187,29,47,3,2,'2021-05-03 23:09:12','2021-05-03 23:11:51'),(188,29,47,4,3,'2021-05-03 23:09:12','2021-05-03 23:11:51');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'T-shirts',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(2,'Tops',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(3,'Dresses',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(4,'Divers',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(5,'Jackets',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(6,'Pants',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(7,'Jeans',1,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(8,'T-shirts',2,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(9,'Divers',2,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(10,'Jackets',2,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(11,'Pants',2,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(12,'Jeans',2,'2021-05-02 05:25:21','2021-05-02 05:25:21'),(13,'Shirts',2,'2021-05-02 05:25:21','2021-05-02 05:25:21');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Abi','Contreras','abi@gmail.com','$2b$12$s/OI5lljyNkEFtkmZ9eqN.9RRt/uJ614cmS4s197Nd3LGpe7Cfcii','default.png','user',1,NULL,NULL,NULL,NULL,'2021-05-02 05:28:10','2021-05-02 05:28:10'),(2,'Abi','Contreras','abi1@gmail.com','$2b$12$ht4n/WUjVBZYiBdzpsEJ8uQeU0DbcyUmu0b8UDCTeazBcrEMtt/9W','default.png','admin',1,NULL,NULL,NULL,NULL,'2021-05-02 05:37:17','2021-05-02 05:37:17'),(3,'Lidia','Contreras','lidia-c@gmail.com','$2b$12$573qRZ55tD.F7Ud0fkq.EuxDz4zprUWKV5bvqeBW5UWoGhMZZVG6K','default.png','user',1,NULL,NULL,NULL,NULL,'2021-05-03 15:04:32','2021-05-03 15:04:32'),(4,'Camila','escalante','camilu@gmail.com','$2b$12$9g6TkFfK/gFhGta2h//ZkeMRCdBUlCAH7RdWYqAe5Hdm2wL6PhXF.','default.png','user',1,NULL,NULL,NULL,NULL,'2021-05-03 16:33:34','2021-05-03 16:33:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS `variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `productId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variants`
--

LOCK TABLES `variants` WRITE;
/*!40000 ALTER TABLE `variants` DISABLE KEYS */;
INSERT INTO `variants` VALUES (1,'#7c9909','image-1619935222122.jpg',1,'2021-05-02 06:00:22','2021-05-03 15:34:01'),(2,'#000000','image-1619935222131.jpg',1,'2021-05-02 06:00:22','2021-05-03 15:34:01'),(3,'#d4934c','image-1619936363721.jpg',2,'2021-05-02 06:19:23','2021-05-03 15:35:20'),(4,'#000000','image-1619936363724.jpg',2,'2021-05-02 06:19:23','2021-05-03 15:35:20'),(5,'#c6c8ef','image-1619937271815.jpg',3,'2021-05-02 06:34:32','2021-05-03 16:01:31'),(6,'#000000','image-1619937271917.jpg',3,'2021-05-02 06:34:32','2021-05-03 16:01:31'),(7,'#e8e8e8','image-1619937271938.jpg',3,'2021-05-02 06:34:32','2021-05-03 16:01:31'),(8,'#ffffff','image-1619938197985.jpg',4,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(9,'#000000','image-1619938197988.jpg',4,'2021-05-02 06:49:58','2021-05-03 16:03:47'),(10,'#378bc3','image-1619938497652.jpg',5,'2021-05-02 06:54:57','2021-05-03 16:12:38'),(11,'#000000','image-1619939341335.jpg',6,'2021-05-02 07:09:01','2021-05-03 16:17:41'),(12,'#e6d147','image-1619939341353.jpg',6,'2021-05-02 07:09:01','2021-05-03 16:17:41'),(13,'#7697f9','image-1619939435917.jpg',7,'2021-05-02 07:10:36','2021-05-03 16:18:35'),(14,'#ffffff','image-1619940334006.jpg',8,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(15,'#959d6c','image-1619940334009.jpg',8,'2021-05-02 07:25:34','2021-05-03 16:24:06'),(16,'#b96b67','image-1619940569151.jpg',9,'2021-05-02 07:29:29','2021-05-03 16:58:15'),(17,'#c5b1e2','image-1619940569155.jpg',9,'2021-05-02 07:29:29','2021-05-03 16:58:15'),(18,'#9f7b53 ','image-1619941275751.jpg',10,'2021-05-02 07:41:15','2021-05-02 09:39:09'),(19,'#000000','image-1619941275758.jpg',10,'2021-05-02 07:41:15','2021-05-02 09:39:09'),(20,'#c2c2c2','image-1619941499070.jpg',11,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(21,'#ff0000','image-1619941499073.jpg',11,'2021-05-02 07:44:59','2021-05-02 07:44:59'),(22,'#f5f5dc','image-1619941868586.jpg',12,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(23,'#e7bafe','image-1619941868591.jpg',12,'2021-05-02 07:51:08','2021-05-02 07:51:08'),(24,'#2946ff','image-1619942197810.jpg',13,'2021-05-02 07:56:37','2021-05-02 07:56:37'),(25,'#000000','image-1619942442099.jpg',14,'2021-05-02 08:00:42','2021-05-02 08:00:42'),(26,'#000000 ','image-1619943039509.jpg',15,'2021-05-02 08:10:39','2021-05-02 09:35:12'),(27,'#abc3e6','image-1619943348368.jpg',16,'2021-05-02 08:15:48','2021-05-02 08:15:48'),(28,'#92b1de','image-1619943618013.jpg',17,'2021-05-02 08:20:18','2021-05-02 08:20:18'),(29,'#d81818','image-1619944167702.jpg',18,'2021-05-02 08:29:27','2021-05-03 17:05:24'),(30,'#ffffff','image-1619944167703.jpg',18,'2021-05-02 08:29:27','2021-05-03 17:05:24'),(31,'#000000','image-1619944603078.jpg',19,'2021-05-02 08:36:43','2021-05-03 17:07:05'),(32,'#d1e1f3','image-1619944901327.jpg',20,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(33,'#e4dccb','image-1619944901329.jpg',20,'2021-05-02 08:41:41','2021-05-02 08:41:41'),(34,'#3a4063','image-1619945282950.jpg',21,'2021-05-02 08:48:03','2021-05-03 17:09:31'),(35,'#c7a17d','image-1619945985291.jpg',22,'2021-05-02 08:59:45','2021-05-03 17:14:34'),(36,'#de704f','image-1619945985295.jpg',22,'2021-05-02 08:59:45','2021-05-03 17:14:34'),(37,'#847965','image-1619946292430.jpg',23,'2021-05-02 09:04:52','2021-05-02 09:04:52'),(38,'#e7bd33','image-1619946684718.jpg',24,'2021-05-02 09:11:24','2021-05-02 09:11:24'),(39,'#ffffff','image-1619946995488.jpg',25,'2021-05-02 09:16:35','2021-05-02 09:16:35'),(40,'#edcbdc','image-1619946995491.jpg',25,'2021-05-02 09:16:35','2021-05-02 09:16:35'),(41,'#bbece3','image-1619946995492.jpg',25,'2021-05-02 09:16:35','2021-05-02 09:16:35'),(42,'#f52b32','image-1619947159672.jpg',26,'2021-05-02 09:19:19','2021-05-02 09:19:19'),(43,'#fd3426','image-1620082746422.jpg',27,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(44,'#f79a18','image-1620082746425.jpg',27,'2021-05-03 22:59:06','2021-05-03 23:00:21'),(45,'#000000','image-1620082949865.jpg',28,'2021-05-03 23:02:30','2021-05-03 23:02:30'),(46,'#f2cbc3','image-1620083351572.jpg',29,'2021-05-03 23:09:11','2021-05-03 23:11:50'),(47,'#b3c3a4','image-1620083351574.jpg',29,'2021-05-03 23:09:11','2021-05-03 23:11:50');
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

-- Dump completed on 2021-05-03 21:05:45
