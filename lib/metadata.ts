import type { Metadata } from "next"

type OgMetadataInput = {
  title: string
  description: string
}

export function createOgMetadata({
  title,
  description,
}: OgMetadataInput): Metadata {
  const imageUrl = `/og?title=${encodeURIComponent(
    title
  )}&description=${encodeURIComponent(description)}`

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  }
}
