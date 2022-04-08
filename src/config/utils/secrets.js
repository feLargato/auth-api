const env = process.env;


export const API_SECRET = env.API_SECRET ? env.API_SECRET : "bWljcm9zc2Vydmljb3MtY29udGFpbmVyLXBhc3N3b3Jk";

export const DB_HOST = env.DB_HOST ? env.DB_HOST : "localhost";
export const DB_NAME = env.DB_NAME ? env.DB_NAME : "auth-db";
export const DB_USER = env.DB_USER ? env.DB_USER : "admin";
export const DB_PASSWORD = env.DB_PASSWORD ? env.DB_PASSWORD : "root";
export const DB_PORT = env.DB_PORT ? env.DB_DB_PORT : "5432";

