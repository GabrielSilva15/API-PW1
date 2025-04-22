FROM node
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY ./src ./src
COPY ./uploads ./uploads
EXPOSE 3006
CMD ["npx","tsx","./src/server.ts"]