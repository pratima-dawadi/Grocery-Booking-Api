import express from "express";
import config from "./config";
import Router from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(Router);

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentation",
      version: "1.0.0",
      description: "API documentation for my Express app",
    },
    servers: [
      {
        url: "http://localhost:3000/", // Change this URL to match your development or production environment
      },
    ],
  },

  
  apis: ["src/routes/*.ts"], // Specify the path where your API routes are defined
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
