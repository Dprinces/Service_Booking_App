import { ServiceProvider } from "../types";

export const categories = [
  "Car Wash",
  "Cleaning",
  "Plumbing",
  "Laundry",
  "Electrician",
  "Painting",
  "Repairs"
];

export const fetchServices = async (): Promise<ServiceProvider[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return data.map((user: any) => {
      const category = categories[Math.floor(Math.random() * categories.length)];
      return {
        id: user.id,
        name: user.name,
        phone: user.phone,
        company: user.company.name,
        city: user.address.city,
        category: category,
        description: `Professional ${category} services provided by ${user.company.name}. We are committed to delivering high-quality results for all your needs in ${user.address.city}.`,
        website: user.website,
        email: user.email
      };
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
