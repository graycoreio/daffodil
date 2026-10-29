terraform {
  required_version = ">= 1.5"

  # daffodiltfstate is managed outside Terraform so this state never tracks its own backend.
  backend "azurerm" {
    subscription_id      = "b5d7fc54-ab25-430c-a65f-7487704305c4"
    resource_group_name  = "daffodil"
    storage_account_name = "daffodiltfstate"
    container_name       = "tfstate"
    key                  = "daffodil.tfstate"
    use_azuread_auth     = true
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = "b5d7fc54-ab25-430c-a65f-7487704305c4"

  # The cache account has shared keys disabled.
  storage_use_azuread = true
}
