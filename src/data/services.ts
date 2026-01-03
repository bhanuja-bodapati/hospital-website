export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostics.",
    icon: "/home/cardioology.jpg",
  },
  {
    id: 2,
    title: "Neurology",
    description: "Expert treatment for brain and nervous system disorders.",
    icon: "/home/neurology.jpg",
  },
  {
    id: 3,
    title: "Orthopedics",
    description: "Advanced bone, joint, and spine treatments.",
    icon: "/home/orthopedic.jpg",
  },
  {
    id: 4,
    title: "Pediatrics",
    description: "Specialized healthcare for infants and children.",
    icon: "/home/pediatrics.jpg",
  },
  {
    id: 5,
    title: "General Surgery",
    description: "Safe and modern surgical procedures.",
    icon: "/home/genralsurgery.jpg",
  },
  {
    id: 6,
    title: "Diagnostics",
    description: "Accurate lab tests and imaging services.",
    icon: "/home/diagnostics.jpg",
  },
];
