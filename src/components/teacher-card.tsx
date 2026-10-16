import Image from "next/image";
import { Star } from "lucide-react";
import type { Teacher } from "@/lib/data";
export function Rating({ teacher }: { teacher: Teacher }) {
  return (
    <div
      className="rating"
      aria-label={`${teacher.rating} out of 5 stars, ${teacher.reviews} reviews`}
    >
      <span aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </span>
      <span>
        {teacher.rating} ({teacher.reviews})
      </span>
    </div>
  );
}
export function TeacherCard({
  teacher,
  compact = false,
  onProfile,
}: {
  teacher: Teacher;
  compact?: boolean;
  onProfile?: (teacher: Teacher) => void;
}) {
  return (
    <article className={`teacher-card ${compact ? "teacher-compact" : ""}`}>
      <div className="teacher-photo">
        <Image
          src={`/images/teachers/${teacher.photo}`}
          alt={`${teacher.name}, ${teacher.subject} teacher`}
          width={280}
          height={310}
          sizes={compact ? "128px" : "(max-width: 800px) 50vw, 33vw"}
        />
      </div>
      <div className="teacher-info">
        <h3>{teacher.name}</h3>
        <p>{teacher.subject}</p>
        <p>
          Grade {teacher.grades[0]} – {teacher.grades.at(-1)}
        </p>
        <Rating teacher={teacher} />
        {!compact && (
          <button
            type="button"
            className="button button-orange"
            onClick={() => onProfile?.(teacher)}
          >
            View Profile
          </button>
        )}
      </div>
    </article>
  );
}
