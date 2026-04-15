import { Artwork } from "@/types/artwork";

export const artworks: Artwork[] = [
  {
    slug: "himalayan-whisper",
    title: "Himalayan Whisper",
    description:
      "A sumptuous mountain composition where silence, distance, and light are rendered with exquisite sensitivity.",
    story:
      "Inspired by childhood mornings in Nepal, this work revisits the hush between mountain shadow and first light. Sandhya captures belonging, longing, and grace with extraordinary composure.",
    size: "60 x 80 cm",
    medium: "Acrylic on canvas",
    year: "2025",
    price: "£1,250",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80",
    featured: true,
  },
  {
    slug: "coastal-breath",
    title: "Coastal Breath",
    description:
      "A luminous shoreline study where cool horizons and warm undertones meet in perfect emotional equilibrium.",
    story:
      "After moving to the UK, Sandhya discovered restoration in evening walks by the sea. This painting carries the tenderness of new beginnings and her rare gift for transmuting atmosphere into feeling.",
    size: "50 x 70 cm",
    medium: "Acrylic on canvas",
    year: "2024",
    price: "£980",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "between-monsoons",
    title: "Between Monsoons",
    description:
      "Soft rain textures and fluid movement that evoke emotional transition with refined poetic depth.",
    story:
      "This painting dwells in the suspended space between ending and renewal. Its palette echoes rain-soaked memories of Nepal and the meditative stillness she has cultivated in the UK.",
    size: "40 x 60 cm",
    medium: "Acrylic on canvas",
    year: "2025",
    price: "£790",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1500&q=80",
    featured: true,
  },
  {
    slug: "silent-estuary",
    title: "Silent Estuary",
    description:
      "A contemplative estuary landscape balancing still water and sweeping cloud with understated elegance.",
    story:
      "Created after a winter residency by the sea, this piece captures the sacred pause before transformation. Sandhya's restraint reveals the maturity of both her hand and her heart.",
    size: "70 x 100 cm",
    medium: "Acrylic on canvas",
    year: "2026",
    price: "£1,450",
    image:
      "https://images.unsplash.com/photo-1482192597420-4814f29b8f14?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "valley-of-light",
    title: "Valley of Light",
    description:
      "A radiant valley composition built through translucent acrylic veils and a masterful command of luminosity.",
    story:
      "This work reflects Sandhya's belief that landscape can hold emotional memory. Light enters from the edge of the frame as a quiet benediction of inner renewal.",
    size: "45 x 60 cm",
    medium: "Acrylic on canvas",
    year: "2024",
    price: "£860",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80",
  },
  {
    slug: "tide-memory",
    title: "Tide Memory",
    description:
      "Expressive, assured brushwork tracing tidal movement and the vulnerable cadence of emotional change.",
    story:
      "Painted during a deeply personal transition, this work binds nature's movement to emotional release, acceptance, and strength. It stands as a quiet testament to Sandhya's courage on canvas.",
    size: "55 x 75 cm",
    medium: "Acrylic on canvas",
    year: "2026",
    price: "£1,050",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80",
  },
];

export const featuredArtworks = artworks.filter((artwork) => artwork.featured);
