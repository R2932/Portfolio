import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  //Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";

//import { Mailchimp } from "@/components";
//import { Projects } from "@/components/work/Projects";
//import { Posts } from "@/components/blog/Posts";
import { GlowBox } from "@/components/GlowBox";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/components/ui/content";
import "@/components/ui/timeline.css";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Meteors } from "@/components/magicui/meteors";
import { BackgroundLines } from "@/components/ui/background-lines";
import Changelog from "@/components/changelog/changelog";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <GlowBox>
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </GlowBox>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} /> */}
      {/* <Mailchimp /> */}

      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="m" horizontal="center">
          <TextReveal>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="display-strong-xl"
              // className="!text-7xl !md:text-4xl !mb-8 max-w-4xl"
            >
              Engineering Solutions, Building Systems
            </Text>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="code-default-l"
              // className="!text-xl md:text-base !max-w-full"
            >
              Explore the projects and milestones that highlight my journey in software engineering and problem-solving.
            </Text>

          </TextReveal>
        </Column>
      </Column>
      {/* <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="m" horizontal="center" align="center">
          <Timeline data={data} />
        </Column>
      </Column> */}
      <Column>
        <Column>
          <Changelog/>
        </Column>
      </Column>
    </Column>
  );
}
