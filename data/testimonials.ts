export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  residence: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "We weren't looking for just another apartment. Verde felt like a place we could actually grow into.",
    author: "Arjun & Meera",
    role: "Architect & Landscape Designer",
    residence: "4 BHK Courtyard Villa",
    year: "Resident Patrons",
  },
  {
    quote: "The way the light shifts through the double-height pavilion in the late afternoon is something you usually only find in standalone tropical estates.",
    author: "Kavitha Raman",
    role: "Managing Director, Global FinTech",
    residence: "3 BHK Pavilion Residence",
    year: "Resident Patron",
  },
  {
    quote: "Aarvana understood that true luxury isn't gold fixtures; it's acoustic silence, 24 acres of protected canopy, and knowing your children can run freely.",
    author: "Dr. Vikram & Sunita Rao",
    role: "Senior Surgeon & Botanist",
    residence: "4 BHK Grand Estate",
    year: "Resident Patrons",
  },
];
