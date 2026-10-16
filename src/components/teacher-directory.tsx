"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Search,
  X,
  GraduationCap,
  Languages,
  BriefcaseBusiness,
} from "lucide-react";
import { teachers, subjects, grades, media, type Teacher } from "@/lib/data";
import { TeacherCard, Rating } from "./teacher-card";
import { Button, SectionHeading } from "./ui";
const empty = { query: "", subject: "", grade: "", medium: "" };
export function TeacherDirectory() {
  const [filters, setFilters] = useState(empty);
  const [applied, setApplied] = useState(empty);
  const [selected, setSelected] = useState<Teacher | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const found = teachers.filter(
    (t) =>
      (!applied.query ||
        `${t.name} ${t.subject}`
          .toLowerCase()
          .includes(applied.query.toLowerCase().trim())) &&
      (!applied.subject || t.subject === applied.subject) &&
      (!applied.grade || t.grades.includes(Number(applied.grade))) &&
      (!applied.medium || t.medium === applied.medium),
  );
  function openProfile(t: Teacher) {
    setSelected(t);
    dialog.current?.showModal();
  }
  return (
    <div className="container directory">
      <form
        className="teacher-search"
        onSubmit={(e) => {
          e.preventDefault();
          setApplied({ ...filters });
        }}
      >
        <label className="search-field">
          <span className="sr-only">Search teachers</span>
          <input
            placeholder="Search teachers..."
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          />
        </label>
        <div className="filter-row">
          {[
            {
              key: "subject" as const,
              label: "Subject",
              all: "All Subjects",
              values: subjects,
            },
            {
              key: "grade" as const,
              label: "Grade",
              all: "All Grades",
              values: grades,
            },
            {
              key: "medium" as const,
              label: "Medium",
              all: "All Mediums",
              values: media,
            },
          ].map((f) => (
            <label className="field" key={f.key}>
              <span>{f.label}</span>
              <select
                value={filters[f.key]}
                onChange={(e) =>
                  setFilters({ ...filters, [f.key]: e.target.value })
                }
              >
                <option value="">{f.all}</option>
                {f.values.map((v) => (
                  <option key={v} value={v}>
                    {f.key === "grade" ? `Grade ${v}` : v}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button
            className="button button-purple search-button"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
        </div>
      </form>
      <section>
        <SectionHeading>Featured Teachers</SectionHeading>
        <p className="sr-only" role="status">
          {found.length} teachers found
        </p>
        <div className="teacher-grid directory-grid">
          {found.map((t) => (
            <TeacherCard key={t.id} teacher={t} onProfile={openProfile} />
          ))}
        </div>
        {found.length === 0 && (
          <div className="empty-state">
            <Search size={34} />
            <h3>No teachers found</h3>
            <p>Try another subject, grade or medium.</p>
            <button
              className="button button-purple"
              onClick={() => {
                setFilters(empty);
                setApplied(empty);
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      <dialog
        ref={dialog}
        className="profile-dialog"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              onClick={() => dialog.current?.close()}
              aria-label="Close profile"
            >
              <X />
            </button>
            <Image
              src={`/images/teachers/${selected.photo}`}
              alt={selected.name}
              width={180}
              height={200}
            />
            <h2>{selected.name}</h2>
            <p>
              {selected.subject} · Grade {selected.grades[0]}–
              {selected.grades.at(-1)}
            </p>
            <Rating teacher={selected} />
            <ul className="profile-details">
              <li>
                <GraduationCap size={18} />
                {selected.qualifications}
              </li>
              <li>
                <BriefcaseBusiness size={18} />
                {selected.experience} years of teaching experience
              </li>
              <li>
                <Languages size={18} />
                {selected.medium} medium
              </li>
            </ul>
            <p>
              Helping students build confidence, understand key concepts and
              achieve their learning goals.
            </p>
            <Button href="/register">Join GuruLink</Button>
          </>
        )}
      </dialog>
    </div>
  );
}
