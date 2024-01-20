
# Variables
DOCKER_IMAGE_NAME = mixify-dev-image
DOCKER_CONTAINER_NAME = mixify-dev-container
DOCKERFILE = Dockerfile.dev
DOCKER_COMPOSE = docker-compose -f docker-compose.dev.yml

# Targets
.PHONY: help build run stop clean

help:
	@echo "Available targets:"
	@echo "  - build: Build the Docker image"
	@echo "  - run: Run the Docker container"
	@echo "  - start: Start the development environment using docker-compose.dev.yml"
	@echo "  - stop: Stop the Docker container"
	@echo "  - clean: Stop the container and remove it"

build:
	docker build -f ${DOCKERFILE} -t $(DOCKER_IMAGE_NAME) .

run:
	docker run -p 3000:3000 -v $(PWD):/usr/src/app --name $(DOCKER_CONTAINER_NAME) $(DOCKER_IMAGE_NAME)

start:
	$(DOCKER_COMPOSE) up

stop:
	docker stop $(DOCKER_CONTAINER_NAME)

clean: stop
	docker rm $(DOCKER_CONTAINER_NAME)
