FROM augustodelg/pocketbase:latest

RUN mkdir pocketbase-data

VOLUME /pocketbase-data

EXPOSE 8090

CMD [ "/app/pocketbase/pocketbase", "serve", "--http", "0.0.0.0:8090" ]
