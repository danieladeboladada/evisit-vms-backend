"use strict";

const joi = require("joi");

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = joi
  .object({
    DB_USER: joi.string().optional().empty(""),
    DB_HOST: joi.string(),
    DB_PASSWORD: joi.string().optional().empty(""),
    DB_DATABASE: joi.string(),
    DB_PORT: joi.string(),
    DB_CLOUD: joi.string(),
  })
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseConfig: {
    user: envVars.DB_USER,
    host: envVars.DB_HOST,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
    port: envVars.DB_PORT,
    db_cloud: envVars.DB_CLOUD,
  },
};

module.exports = config;
