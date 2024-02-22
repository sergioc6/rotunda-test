FROM node:14

WORKDIR /usr/src/app

COPY *.js ./

CMD ["node", "script.js"]