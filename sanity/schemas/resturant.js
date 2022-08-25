export default {
  name: "resturant",
  title: "Resturant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Resturant Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Resturant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Resturant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Resturant",
    },
    {
      name: "address",
      type: "string",
      title: "Resturant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
