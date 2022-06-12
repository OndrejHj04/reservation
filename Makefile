dev: 
	docker build -t react-image .
	docker run --rm -p 3000:3000 -v /home/onik666/react/project_x/src:/app/src:ro react-image

stop:
	docker rm $$(docker ps -aq)
	docker rmi $$(docker images -q)