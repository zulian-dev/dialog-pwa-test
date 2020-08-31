react-start:
	PORT=3000 npm start --prefix ./react-dialog

server-start:
	PORT=4000 DEBUG=* npm start --prefix ./server-dialog

start:
	$(make server-start & make react-start)
