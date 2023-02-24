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
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `isAdm` TINYINT(1) NULL DEFAULT 0,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`product` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `photo` VARCHAR(200) NOT NULL,
  `price` DECIMAL(18,2) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `category_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_product`, `category_id`),
  INDEX `fk_product_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `geekstore`.`category` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`purchase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`purchase` (
  `id_purchase` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total` DECIMAL(18,2) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_purchase`, `user_id`),
  INDEX `fk_purchase_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_purchase_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `geekstore`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekstore`.`purchase_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekstore`.`purchase_product` (
  `id_purchase_product` INT NOT NULL AUTO_INCREMENT,
  `purchase_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_purchase_product`, `purchase_id`, `product_id`),
  INDEX `fk_purchase_has_product_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_purchase_has_product_purchase1_idx` (`purchase_id` ASC) VISIBLE,
    CONSTRAINT `fk_purchase_has_product_purchase1`
    FOREIGN KEY (`purchase_id`)
    REFERENCES `geekstore`.`purchase` (`id_purchase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchase_has_product_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `geekstore`.`product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;