import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("63de285e6171c8d08735");

export const account = new Account(client);

export const databases = new Databases(client);
