declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATA_BASE: string;
      DB_PORT: number;
      BASE_API: string;
    }
  }
}

export {}