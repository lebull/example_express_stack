locals {
    s3_bucket = "terraform-${var.project_name}-${var.region}"
    dynamo_table = "terraform-${var.project_name}-${var.region}"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket = local.s3_bucket
    dynamodb_table = local.dynamo_table
    key    = "terraform.tfstate"
    region = var.region
  }
}

resource "aws_s3_bucket" "tf_course" {
    bucket = local.s3_bucket
}

resource "aws_dynamodb_table" "dynamodb-terraform-state-lock" {
  name = "terraform-state-lock-dynamo"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20
 
  attribute {
    name = "LockID"
    type = "S"
  }
}