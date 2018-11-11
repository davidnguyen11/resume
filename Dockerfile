FROM node:8.11.4-alpine as builder
WORKDIR /resume
COPY . ./
RUN yarn install
RUN yarn build

FROM node:8.11.4-alpine
WORKDIR /resume
COPY --from=builder /resume ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn"]
