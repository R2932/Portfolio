import { formatDate } from "@/lib/utils";
// import { ThemeToggle } from "../ui/theme-toggle";
import "@/components/changelog/changelog.css";
import { getMDXComponents } from "@/components/changelog/mdx-components";
import { getSortedChangelogsData } from "@/lib/changelog";
import { Text } from "@once-ui-system/core";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Changelog() {
  const allChangelogs = getSortedChangelogsData();
  const components = getMDXComponents({});

  return (
    <div className="theme-changelog border-1">
      <div className="min-h-screen dark:bg-background relative">
        {/* Header */}
        <div className="border-b border-border/50">
          <div className="max-w-5xl mx-auto relative">
            <div className="p-3  flex items-center justify-between">
              <Text onBackground="neutral-weak" className="text-4xl font-semibold tracking-tight">
                Projects
              </Text>

              <Text
                wrap="balance"
                onBackground="neutral-weak"
                variant="code-default-xl"
                className="hidden sm:block md:block lg:block xl:block"
              >
                Where ideas meet reality and transforms into code
              </Text>
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10">
          <div className="relative">
            {allChangelogs.map((changelog) => {
              const date = new Date(changelog.date);
              const formattedDate = formatDate(date);

              return (
                <div key={changelog.id} className="relative">
                  <div className="flex flex-col md:flex-row gap-y-6">
                    <div className="md:w-48 flex-shrink-0">
                      <div className="md:sticky md:top-8 pb-10">
                        <time className="text-sm font-medium text-muted-foreground block mb-3">
                          {formattedDate}
                        </time>

                        {changelog.version && (
                          <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-bold">
                            <Text onBackground="neutral-weak">{changelog.version}</Text>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 md:pl-8 relative pb-10">
                      {/* Vertical timeline line */}
                      <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-neutral-300">
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-neutral-400 prose dark rounded-full z-10" />
                      </div>

                      <div className="space-y-6">
                        <div className="relative flex flex-col gap-2">
                          <h2 className="text-2xl font-semibold tracking-tight text-balance">
                            <Text onBackground="neutral-weak">{changelog.title}</Text>
                          </h2>

                          {/* Tags */}
                          {changelog.tags && changelog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {changelog.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="h-6 w-fit px-5 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                          <MDXRemote source={changelog.content} components={components} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
