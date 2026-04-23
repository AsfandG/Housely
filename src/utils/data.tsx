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
