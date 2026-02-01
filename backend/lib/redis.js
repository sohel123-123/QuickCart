import Redis from "ioredis";
import { createClient } from "redis"
import dotenv from "dotenv"

dotenv.config()

export const client = createClient({
  url: process.env.UPSTASH_REDIS_URL
});

client.on("error", function(err) {
  throw err;
});
await client.connect()
// await client.set('foo','bar');



// Disconnect after usage
// await client.disconnect();