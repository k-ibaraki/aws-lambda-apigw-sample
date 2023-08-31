# Wing

## view on local machine
```
wing it ibaraki-sample-api-gateway.w
```

## compile to terraform
```
wing compile --target tf-aws ibaraki-sample-api-gateway.w
```

##　go to terraform directory
```
cd target/ibaraki-sample-api-gateway.tfaws
```


## initialize

```
export AWS_REGION="ap-northeast-1"
export AWS_PROFILE="{profile}"
terraform init
```

## deploy
```
terraform apply
```

## delete
```
terraform destroy
```

## Wing Documentation
https://www.winglang.io/
