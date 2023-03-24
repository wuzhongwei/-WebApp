export interface ProcessEnv {}
export interface DbConfig extends ProcessEnv {
  // DB_HOST: string
}

// const config: DbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   database: process.env.DB_DATA_BASE
// }

// export default config