FROM node:12-alpine as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN ["yarn", "install"]
COPY . /app/
RUN [ "yarn", "run", "build"]

FROM nginx:1.19.4-alpine
COPY --from=build /app/dist /
COPY kittens.conf /etc/nginx/conf.d/
EXPOSE 3000
