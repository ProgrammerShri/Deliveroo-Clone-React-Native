import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "jyabr3kv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-08-25",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};

export default client;
