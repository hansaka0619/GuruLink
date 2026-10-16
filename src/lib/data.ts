export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/teachers", label: "Teachers" },
  { href: "/students", label: "Students" },
  { href: "/contact", label: "Contact" },
];
export type Teacher = {
  id: number;
  name: string;
  subject: string;
  grades: number[];
  medium: string;
  rating: string;
  reviews: number;
  photo: string;
  qualifications: string;
  experience: number;
};
export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ms. Perera",
    subject: "Mathematics",
    grades: [10, 11],
    medium: "Sinhala",
    rating: "4.9",
    reviews: 120,
    photo: "teacher1-perera.jpg",
    qualifications: "BSc in Mathematics",
    experience: 12,
  },
  {
    id: 2,
    name: "Mr. Silva",
    subject: "Physics",
    grades: [10, 11, 12],
    medium: "English",
    rating: "4.8",
    reviews: 96,
    photo: "teacher2-silva.jpg",
    qualifications: "BSc in Physics",
    experience: 9,
  },
  {
    id: 3,
    name: "Ms. Fernando",
    subject: "Chemistry",
    grades: [10, 11, 12],
    medium: "Sinhala",
    rating: "4.8",
    reviews: 76,
    photo: "teacher3-fernando.jpg",
    qualifications: "BSc in Chemistry",
    experience: 10,
  },
  {
    id: 4,
    name: "Mr. Jayawardena",
    subject: "Biology",
    grades: [10, 11],
    medium: "English",
    rating: "4.7",
    reviews: 64,
    photo: "teacher4-jayawardena.jpg",
    qualifications: "BSc in Biological Sciences",
    experience: 8,
  },
  {
    id: 5,
    name: "Ms. Rashmi",
    subject: "English",
    grades: [10, 11, 12],
    medium: "English",
    rating: "4.8",
    reviews: 82,
    photo: "teacher5-rashmi.jpg",
    qualifications: "BA in English",
    experience: 7,
  },
  {
    id: 6,
    name: "Mr. Nimal",
    subject: "ICT",
    grades: [6, 7, 8, 9, 10, 11],
    medium: "Tamil",
    rating: "4.7",
    reviews: 58,
    photo: "teacher6-nimal.jpg",
    qualifications: "BSc in Information Technology",
    experience: 6,
  },
];
export const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "ICT",
];
export const grades = [6, 7, 8, 9, 10, 11, 12, 13];
export const media = ["Sinhala", "English", "Tamil"];
