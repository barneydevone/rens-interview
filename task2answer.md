# Backend explanation 

## Server deploys to AWS ECS
- Create ExpressJS Project
- Dockerize the Project
- Running the API on Docker
- Pushing Docker Image To ECR
- Deploying On AWS ECS

## Server connects to a postgres provider from AWS
- Get Host / Port / User / Password of postgres provider 
- Connect to AWS postgres using `Client pg`

## Server has 0 down time
- I have never done it before

## Server is prepared to scale up if the website has unexpected surge of traffic
- Use Resource Management for Pods and Containers (https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

## Server prevents DoS attack
- Use Cloudfront (https://aws.amazon.com/vi/cloudfront/)