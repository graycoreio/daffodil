############################
# STAGE 1: Build  
############################

FROM node:8-alpine as builder

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i -g @angular/cli lerna

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN lerna run build --scope="@daffodil/daffio" --include-filtered-dependencies && \
    lerna run build:ssr --scope="@daffodil/daffio"

############################
# STAGE 2: Server  
############################
FROM node:8-alpine

COPY --from=builder /app/dist/apps/daffio /app/dist/apps/daffio

WORKDIR /app/dist/apps

EXPOSE 4000

CMD ["node", "daffio/server.js"]
