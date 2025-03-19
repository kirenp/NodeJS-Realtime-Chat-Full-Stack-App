# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies (only production dependencies)
RUN npm install --only=production

# Copy the rest of the backend source code
COPY . .

# Expose the port your backend listens on
EXPOSE 5000

# Command to run the backend server
CMD ["node", "index.js"]
