FROM openjdk

VOLUME /tmp
ADD maven/discsInventory-0.0.1-SNAPSHOT.jar discsInventory.jar
RUN sh -c 'touch /discsInventory.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/discsInventory.jar"]
