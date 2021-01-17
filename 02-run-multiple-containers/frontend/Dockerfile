FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN ["yarn", "install"]
COPY . /app/
RUN [ "yarn", "run", "build"]

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["run", "serve"]
