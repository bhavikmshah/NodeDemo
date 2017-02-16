FROM node:6.9

EXPOSE 3000

RUN mkdir /opt/app
RUN mkdir /opt/app/NodeDemo
WORKDIR /opt/app/NodeDemo

COPY . /opt/app/NodeDemo

RUN npm install
CMD npm run start