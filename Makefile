.PHONY: docker-build
docker-build:
	docker build -t amitharwani/bookkeeping_repo/system_admin_service:0.1 . --ssh default=../sshkeys
