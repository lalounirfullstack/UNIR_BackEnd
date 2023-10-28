-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema blogs
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blogs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blogs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `blogs` ;

-- -----------------------------------------------------
-- Table `blogs`.`authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogs`.`authors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `image` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `blogs`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogs`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(120) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `category` VARCHAR(100) NULL DEFAULT NULL,
  `updated_date` DATETIME NULL DEFAULT NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_authors_idx` (`author_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_authors`
    FOREIGN KEY (`author_id`)
    REFERENCES `blogs`.`authors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
