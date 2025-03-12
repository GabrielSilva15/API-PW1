## Getting Started

OBS: Necessary install Docker(Linux) or Docker Setup(Windows)

```bash
Replace the locations where it is: POSTGRES_USER,POSTGRES_PASSWORD, POSTGRES_DB with the values ​​defined in your .env file
```

To create network:

Execute this comand in terminal(Linux) or Terminal Docker Setup(Windows):

```bash
sudo docker network create postgres-network 
```

To create container:

Execute this comand in terminal(Linux) or Terminal Docker Setup(Windows):


```bash
docker run --name projeto --network postgres-network -p 5432:5432 -e POSTGRES_PASSWORD= POSTGRES_PASSWORD -e POSTGRES_USER= POSTGRES_USER -e POSTGRES_DB= POSTGRES_DB -d postgis/postgis
```

# Example .env file

```bash
POSTGRES_USER = usuario
POSTGRES_PASSWORD = senha
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
POSTGRES_DB = banco
```

# Start

To install dependencies:

```bash
npm install
```

To run:

```bash
npm run dev
```
