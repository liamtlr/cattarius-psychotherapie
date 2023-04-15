FROM node:16

SHELL [ "bash", "-xc" ]


WORKDIR /usr/app
ENV PORT 8080

EXPOSE 8080

COPY package.json yarn.lock ./
RUN yarn install && \
    yarn cache clean

CMD ["npm", "run" ,"dev"]

# ENTRYPOINT /bin/bash