export interface Category {
  name: string;
  subcategories?: string[];
}

const categories: Category[] = [
  {
    name: "Woman’s Fashion",
    subcategories: ["Subcategory1-1", "Subcategory1-2"],
  },
  {
    name: "Men’s Fashion",
    subcategories: ["Subcategory2-1", "Subcategory2-2", "Subcategory2-3"],
  },
  {
    name: "Electronics",
  },
  {
    name: "Home & Lifestyle",
  },
  {
    name: "Medicine",
  },
  {
    name: "Sports & Outdoor",
  },
  {
    name: "Baby’s & Toys",
  },
  {
    name: "Groceries & Pets",
  },
  {
    name: "Health & Beauty",
  },
];

export default categories;
