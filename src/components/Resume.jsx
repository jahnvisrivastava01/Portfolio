import { FiDownload, FiExternalLink } from "react-icons/fi";
import { profile } from "../data";
import { Button, Section } from "./ui";

export default function Resume() {
  return (
    <Section id="resume" index="05" title="Resume">
      <div className="reveal grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <p className="leading-relaxed text-muted">
            The full one-page version — experience, projects, skills and certifications. Updated November 2026.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={profile.resume} download="Jahnvi_Srivastava_Resume.pdf">
              <FiDownload /> Download PDF
            </Button>
            <Button href={profile.resume} target="_blank" rel="noopener noreferrer" variant="secondary">
              <FiExternalLink /> Open in new tab
            </Button>
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-xl border border-line bg-surface md:block">
          <object
            data={`${profile.resume}#view=FitH&toolbar=0`}
            type="application/pdf"
            title="Jahnvi Srivastava resume"
            className="h-[560px] w-full"
          >
            <div className="flex h-[560px] items-center justify-center p-6 text-center text-sm text-muted">
              Your browser can't preview PDFs here —{" "}
              <a href={profile.resume} className="ml-1 text-accent underline">
                open the resume
              </a>
              .
            </div>
          </object>
        </div>
      </div>
    </Section>
  );
}
