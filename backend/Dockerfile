FROM clojure:openjdk-11-lein-2.9.3 as build
COPY . /app
WORKDIR /app
RUN ["lein", "deps"]
RUN ["lein", "uberjar"]

FROM azul/zulu-openjdk-alpine:11-jre
COPY --from=build "/app/target/trip-collector-0.1.0-SNAPSHOT-standalone.jar" "./"
EXPOSE 3000
CMD ["java", "-jar", "./trip-collector-0.1.0-SNAPSHOT-standalone.jar"]