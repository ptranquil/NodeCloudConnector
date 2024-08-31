# Node.js Application on AWS Lambda with Docker, ECR, and API Gateway

This project demonstrates how to deploy a Node.js application on AWS Lambda using Docker, Amazon ECR (Elastic Container Registry), and API Gateway. The application is packaged in a Docker container, pushed to ECR, and then deployed to AWS Lambda. API Gateway is used to expose the Lambda function as a REST API.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
    - [Step 1: Create ECR Repository](#step-1-create-ecr-repository)
    - [Step 2: Build and Push Docker Image](#step-2-build-and-push-docker-image)
    - [Step 3: Create Lambda Function](#step-3-create-lambda-function)
    - [Step 4: Test Lambda Function](#step-4-test-lambda-function)
    - [Step 5: Set Up API Gateway](#step-5-set-up-api-gateway)
3. [Contributing](#contributing)

## Technologies Used

- **AWS Lambda**: A serverless compute service that lets you run code without provisioning or managing servers.
- **Docker**: A platform to develop, ship, and run applications inside containers, making it easy to package and distribute software.
- **Amazon ECR (Elastic Container Registry)**: A fully-managed container registry that makes it easy for developers to store, manage, and deploy Docker container images.
- **AWS API Gateway**: A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.


## Setup Instructions

### Step 1: Create ECR Repository

1. Log in to your AWS Management Console.
2. Navigate to the **ECR** (Elastic Container Registry) service.
3. Click on Create repository:
   - Provide a repository name (node-cloud-connector) in my case.
   - Choose the appropriate settings for your needs.
   - Click **Create repository**.
   - Select the repository which you just created from the repositories list
   - Click on **View Push Commands**

### Step 2: Build and Push Docker Image

1. Authenticate Docker to your ECR registry:
   ```sh
   aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
   ```

2. Build your Docker image using the following command:
    ```sh
    docker build -t node-cloud-connector .
    ```
3. Tag the Docker image:
    ```bash
    docker tag node-cloud-connector:latest <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/node-cloud-connector:latest
    ```
4. Push the Docker image to ECR:
    ```bash
    docker push <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/node-cloud-connector:latest
    ```

### Step 3: Create Lambda Function

1. Navigate to the Lambda service in the AWS Management Console.

2. Create a new Lambda function:
    - Choose "Create function" and then "Container image".
    - Choose the ECR image you pushed in the previous step.
    - Click **Create function**.

### Step 4: Test Lambda Function

1. After the function is created, you can test it directly from the Lambda console.

2. Configure a test event and invoke the Lambda function to ensure it works as expected.

### Step 5: Set Up API Gateway

1. Navigate to the **API Gateway** service in the AWS Management Console.

2. Create a new REST API:
    - Click on **Create API **
    - Select **REST API** and click on build
    - Give API Name & Click on **Create API**

3. Create a resource:
    - Add a new resource (e.g., /api/users).
    - Create a method (e.g., GET, POST) and integrate it with the Lambda function.

4. Deploy API
    - Create a new deployment stage (e.g., default / staging / production).
    - Access the API using the generated endpoint URL.

### Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.