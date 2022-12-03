-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mern_stack
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mern_stack
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mern_stack` DEFAULT CHARACTER SET utf8 ;
USE `mern_stack` ;

-- -----------------------------------------------------
-- Table `mern_stack`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mern_stack`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  `crypto_wallet_address` VARCHAR(100) NOT NULL,
  `login_token` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mern_stack`.`campaigns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mern_stack`.`campaigns` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `budget_amount` INT(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `expiration_date` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mern_stack`.`crypto_currencies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mern_stack`.`crypto_currencies` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `symbol` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mern_stack`.`donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mern_stack`.`donations` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `currency` VARCHAR(45) NOT NULL,
  `donation_amount` INT(45) NOT NULL,
  `total_amount` INT(45) NOT NULL,
  `fk_campaign_id` INT(11) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_donation_campaign_idx` (`fk_campaign_id` ASC) ,
  CONSTRAINT `fk_donation_campaign`
    FOREIGN KEY (`fk_campaign_id`)
    REFERENCES `mern_stack`.`campaigns` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
