# Stage 1 
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2
FROM node:22-alpine
WORKDIR /mera_micaela_ui_garden
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 8083
CMD ["serve", "-s", "build", "-l", "8083"]