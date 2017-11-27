# chaingear-api

#### build and run container
   docker build -t cyber-fund/chaingear-api -f devops/Dockerfile ./
   docker run --name chaingear-api -p 8000:8090 -d cyber-fund/chaingear-api