import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { Key } from "react";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post: { slug: string; }) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a: { metadata: { publishedAt: string | number | Date; }; }, b: { metadata: { publishedAt: string | number | Date; }; }) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post: { slug: Key | null | undefined; metadata: { images: string[]; title: string; summary: string; team: any[]; link: any; }; content: string; }, index: number) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member: { avatar: any; }) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
