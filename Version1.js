#--------------------------------------------------------------
# Compute
#--------------------------------------------------------------

haproxy_node_count    = "1"
haproxy_instance_type = "t2.micro"
haproxy_artifact_name = "aws-us-east-1-ubuntu-haproxy"
haproxy_artifacts     = "latest" # Comma separated list of artifact version numbers, list length must match node count

nodejs_blue_node_count     = "2"
nodejs_blue_instance_type  = "t2.micro"
nodejs_blue_weight         = "100"
nodejs_green_node_count    = "0"
nodejs_green_instance_type = "t2.micro"
nodejs_green_weight        = "0"
nodejs_artifact_name       = "aws-us-east-1-ubuntu-nodejs"
nodejs_artifacts           = "latest,latest" # Comma separated "blue,green" artifact version numbers, list length must be 2
