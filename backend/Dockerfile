FROM clojure:openjdk-11-lein-2.9.3 as build
WORKDIR /app
COPY project.clj /app
RUN ["lein", "deps"]
COPY . /app/
RUN ["lein", "uberjar"]

FROM azul/zulu-openjdk-alpine:11-jre
COPY --from=build "/app/target/trip-collector-0.1.0-SNAPSHOT-standalone.jar" "./"
EXPOSE 3001
CMD ["java", "-jar", "./trip-collector-0.1.0-SNAPSHOT-standalone.jar"]