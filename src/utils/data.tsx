import { Home, Building2, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type StatItem = {
  icon: LucideIcon;
  count: string;
  label: string;
};

export type Service = {
  imgUrl: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  review: string;
  description: string;
  imgUrl: string;
};

export const StatsData = [
  { icon: Building2, count: "1M+", label: "Sqft Area Constructed" },
  { icon: Home, count: "160", label: "Sqft Area Constructed" },
  { icon: Clock, count: "20", label: "Years of Experience" },
  { icon: Users, count: "89", label: "Trained Professionals" },
];

export const services = [
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1738779001498-a1385f9b897d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pre-Construction",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit ducimus ex voluptatibus. Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.  \n\n   Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Alias velit.`,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1609347744425-175ecbd3cc0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "General Contracting",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit ducimus ex voluptatibus. Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.  \n\n   Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Alias velit.`,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design Build",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit ducimus ex voluptatibus. Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.  \n\n   Inventore sapiente, officia fugiat dolor esse qui incidunt culpa optio assumenda eligendi quo voluptatibus perspiciatis repellendus. Dolore? Alias velit.`,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    imgUrl:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Outstanding craftsmanship and attention to detail.",
    description:
      "The team transformed our vision into reality. From planning to execution,the final result exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    imgUrl:
      "https://images.unsplash.com/photo-1688622302529-a31da3b9eedd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Reliable, efficient, and highly professional.",
    description:
      "They delivered the project on time without compromising quality. Communication was smooth throughout, and every concern was addressed quickly.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Beautiful design and seamless experience.",
    description:
      "We loved working with them. The design process was collaborative, and the end result feels modern, functional, and exactly what we wanted.",
  },
];
