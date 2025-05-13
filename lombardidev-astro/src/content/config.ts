import { defineCollection, z } from "astro:content";

export const collections = {
  works: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      status: z.string(),
      colorStatus: z.string(),
      img: z.string(),
      repo: z.string().url(),
      demo: z.string().url(),
      tags: z.array(z.string()),
    })
  })
}