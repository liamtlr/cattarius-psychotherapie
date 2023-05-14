FROM node:16

SHELL [ "bash", "-xc" ]


WORKDIR /usr/app
ENV PORT 8080

EXPOSE 8080

COPY package.json yarn.lock ./
RUN yarn install && \
    yarn cache clean

# The below will run the server if commented out
CMD ["npm", "run" , "dev"]

# The below will generate a version of the code to host
# CMD ["npm", "run" , "generate"]
