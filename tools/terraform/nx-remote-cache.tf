module "nx_remote_cache" {
  source = "../../../nx-remote-cache/deploy/terraform"

  resource_group_name  = data.azurerm_resource_group.daffodil.name
  storage_account_name = "daffodilnxcache"
  writer_subjects      = ["repo:graycoreio/daffodil:ref:refs/heads/develop"]
  reader_subjects      = ["repo:graycoreio/daffodil:pull_request", "repo:graycoreio/daffodil:ref:refs/heads/develop"]
  reader_group_object_ids = [
    "308b6e10-1dcd-4c58-93f6-cdac65b82bac"
  ]
  writer_group_object_ids = [
    "9b3b145a-bca1-4f81-bfd4-0e586f5ba9fc"
  ]
}

output "nx_remote_cache" {
  value = module.nx_remote_cache
}
