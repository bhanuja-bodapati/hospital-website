// src/data/departments.ts

export interface Department {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
}

export const departments: Department[] = [
  {
    id: 1,
    title: "Ophthalmology",
    slug: "ophthalmology",
    image: "/departments/card2.jpg",
    description:
      "Comprehensive eye care including diagnosis, treatment, and surgery.",
  },
  {
    id: 2,
    title: "Cardiology",
    slug: "cardiology",
    image: "/departments/card1.jpg",
    description:
      "Advanced heart care services with experienced cardiologists.",
  },
  {
    id: 3,
    title: "Pulmonology",
    slug: "pulmonology",
    image: "/departments/card4.jpg",
    description:
      "Specialized care for lung and respiratory system conditions.",
  },
  {
    id: 4,
    title: "Dental Care",
    slug: "dental-care",
    image: "/departments/card3.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
  {
    id: 5,
    title: "Heart Surgeon",
    slug: "heart surgeon",
    image: "/departments/card5.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
  {
    id: 6,
    title: "Cancer Doctor",
    slug: "cancer doctor",
    image: "/departments/card6.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
  {
    id: 7,
    title: "Bone Marrow Transplant",
    slug: "bone marrow transplant",
    image: "/departments/card7.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
  {
    id: 8,
    title: "Spine Surgeon",
    slug: "spine surgeon",
    image: "/departments/card8.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
  {
    id: 9,
    title: "Liver Transplant",
    slug: "liver transplant",
    image: "/departments/card9.jpg",
    description:
      "Complete dental solutions including preventive and cosmetic care.",
  },
];
