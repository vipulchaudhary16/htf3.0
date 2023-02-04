import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.REACT_APP_ENDPOINT)
  .setProject(process.env.REACT_APP_PROJECT_ID);

export const account = new Account(client);

export const databases = new Databases(client);
