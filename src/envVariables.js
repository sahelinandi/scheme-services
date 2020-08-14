const envVariables = {
  // DB configurations  
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD:
    process.env.DB_PASSWORD ||
    "postgres",
  DB_HOST: process.env.DB_HOST || "127.0.0.1",
  DB_NAME: process.env.DB_NAME || "dscheme", 
  DB_SSL: process.env.DB_SSL || false, 
  DB_PORT: process.env.DB_PORT || 5435,
  DB_MAX_POOL_SIZE: process.env.DB_MAX_POOL_SIZE || "5",

  //server configurations
  SERVER_PORT: process.env.SERVER_PORT || "8086",

};
export default envVariables;
