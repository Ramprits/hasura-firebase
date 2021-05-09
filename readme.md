```
hasura init
project name: hasura-server
cd hasura-server

# Add your admin secret in your code.yaml file
admin_secret: myadminsecretkey

hasura migrate create init --from-server --database-name default

hasura metadata export
and check your metadata file that your code updated there
```

```
hasura migrate status --database-name default
hasura migrate apply --skip-execution --version 1620361416863 --database-name default
hasura migrate apply --endpoint https://oclm.hasura.app --admin-secret vrsk7Tif7Lhx5knA468gRIIGK2pIt4vTGILMA5dNfdokk8xezjZa8HRvxQhK0Ff8 --database-name default
```# hasura-firebase
