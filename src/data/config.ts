export const CONFIG = {
  site: {
    url: "https://rihab114.github.io/profile/",
    locale: "en_US",
    twitterHandle: "",
  },

  seo: {
    titleTemplate: "%s | %n",
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ...everything else stays unchanged
} as const;