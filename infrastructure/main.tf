# main.tf
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.42.0"
    }
  }
}

locals {
    //TODO: Swap with input var
    featureEnvironment = "setup"
}

provider "aws" {
  region  = "us-east-2" #The region where the environment 
}