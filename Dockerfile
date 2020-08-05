FROM node:12


COPY package.json ./  
RUN npm install

# Add your source files
COPY . .  

EXPOSE 8080
CMD [ "node", "index.js" ]