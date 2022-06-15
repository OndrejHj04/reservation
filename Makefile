dev: 
	docker build -t react-image .
	docker run --rm -p 3000:3000 -v $$(pwd)/src:/app/src:ro react-image

stop:
	docker rm $$(docker ps -aq)
	docker rmi $$(docker images -q)

container: 
	docker run --rm -p 3000:3000 -v $$(pwd)/src:/app/src:ro react-image