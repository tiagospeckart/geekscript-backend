-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema geekstore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema geekstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `geekstore` ;
USE `geekstore` ;

-- -----------------------------------------------------
-- Table `geekstore`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`user` (
    `id_user` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `isAdm` TINYINT(1) NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`category` (
    `id_category` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    PRIMARY KEY (`id_category`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`product` (
    `id_product` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(70) NOT NULL,
    `photo` VARCHAR(100) NOT NULL,
    `category_id` INT NOT NULL,
    `price` DECIMAL(18,2) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    PRIMARY KEY (`id_product`, `category_id`),
    INDEX `fk_Product_Category_idx` (`category_id` ASC) VISIBLE,
    CONSTRAINT `fk_Product_Category`
        FOREIGN KEY (`category_id`)
        REFERENCES `geekstore`.`category` (`id_category`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`order_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`order_detail` (
    `id_order_detail` INT NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(18,2) NOT NULL,
    `user_id` INT NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    PRIMARY KEY (`id_order_detail`, `user_id`),
    INDEX `fk_OrderDetail_User1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_OrderDetail_User1`
        FOREIGN KEY (`user_id`)
        REFERENCES `geekstore`.`user` (`id_user`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`order_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`order_item` (
    `id_order_item` INT NOT NULL AUTO_INCREMENT,
    `product_id` INT NOT NULL,
    `order_detail_id` INT NOT NULL,
    `quantity` INT NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    PRIMARY KEY (`id_order_item`, `product_id`, `order_detail_id`),
    INDEX `fk_OrderItem_Product1_idx` (`product_id` ASC) VISIBLE,
    INDEX `fk_OrderItem_OrderDetail1_idx` (`order_detail_id` ASC) VISIBLE,
    CONSTRAINT `fk_OrderItem_Product1`
        FOREIGN KEY (`product_id`)
        REFERENCES `geekstore`.`product` (`id_product`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_OrderItem_OrderDetail1`
        FOREIGN KEY (`order_detail_id`)
        REFERENCES `geekstore`.`order_detail` (`id_order_detail`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
