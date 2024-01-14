// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

import { createContext } from 'react';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '08dz2avh',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-12-31', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const builder = imageUrlBuilder(client)


// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getAll() {
//   const all = await client.fetch('*')
//   return all
// }
export const Projects= createContext(await client.fetch('*[_type == "projects"]'))
export const Events= createContext(await client.fetch('*[_type == "events"]'))
export  const LevelContext = createContext(await client.fetch('*')
);