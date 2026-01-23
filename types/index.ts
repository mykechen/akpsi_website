export interface Member {
  id: string;
  name: string;
  role?: string;
  major?: string;
  photo: string;
  linkedin?: string;
  pledgeClass?: string;
  isExec: boolean;
  isAlumni?: boolean;
  description?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  title: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Photo {
  id: string;
  src: string;
  caption: string;
  size: "small" | "medium" | "large";
}
