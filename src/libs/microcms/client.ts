import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'yun8boo',
  apiKey: process.env.MICROCMS_API_KEY as string
})