import { projectPitches } from "@/content/project-pitches";
import type { Localized, LocalizedList, Project } from "@/content/site";
import type { Audience } from "@/lib/audience";

export type ProjectView = {
  audience: Audience;
  tagline: Localized;
  challenge: Localized;
  approach: Localized;
  outcome: Localized;
  features: { title: Localized; body: Localized }[];
  metrics: { value: string; label: Localized }[];
  benefits?: LocalizedList;
  /** Technical stack is for recruiters; business audiences see benefits instead. */
  showStack: boolean;
  showBenefits: boolean;
};

export function resolveProjectView(project: Project, audience: Audience): ProjectView {
  const pitch =
    audience === "recruiter" ? undefined : projectPitches[project.slug]?.[audience];

  if (!pitch) {
    return {
      audience,
      tagline: project.tagline,
      challenge: project.challenge,
      approach: project.approach,
      outcome: project.outcome,
      features: project.features,
      metrics: project.metrics,
      showStack: audience === "recruiter",
      showBenefits: false,
    };
  }

  return {
    audience,
    tagline: pitch.tagline,
    challenge: pitch.challenge,
    approach: pitch.approach,
    outcome: pitch.outcome,
    features: pitch.features,
    metrics: pitch.metrics ?? project.metrics,
    benefits: pitch.benefits,
    showStack: false,
    showBenefits: Boolean(pitch.benefits?.en.length),
  };
}
