// src/App.tsx
import type { ReactNode } from "react";
import {
  Box, Container, Heading, Text, Button, HStack, VStack, Link,
  SimpleGrid, Stack, Tag, Divider, IconButton, useColorMode,
  useColorModeValue, Card, CardHeader, CardBody, List, ListItem, Spacer
} from "@chakra-ui/react";
import { EmailIcon, ExternalLinkIcon, DownloadIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

/* ---------- Content (edit me) ---------- */
const LINKS = {
  email: "bomba.amir1@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  resume: "/resume.pdf",
};

const PROFILE = {
  name: "Amir Bomba",
  tagline: "CS student • Math tutor • Builder of useful automations",
  location: "Seattle, WA · Addis Ababa, ET",
};

type Project = { title: string; desc: string; stack: string[]; links: { code?: string; demo?: string } };
type Experience = { company: string; role: string; period: string; bullets: string[] };
type Education = { school: string; detail: string; extra?: string };

const PROJECTS: Project[] = [
  {
    title: "Crypto Momentum Bot (Alpaca)",
    desc: "Multi-coin breakout bot with ATR risk, trailing stops, volatility filter, and CSV logging.",
    stack: ["Python", "alpaca-py", "Pandas"],
    links: { code: "https://github.com/your-username/crypto-bot" },
  },
  {
    title: "Sheets → Live Dashboard",
    desc: "Auto-updating dashboards from messy Google Sheets with alerting for small businesses.",
    stack: ["Python", "Google API", "Flask"],
    links: { code: "https://github.com/your-username/sheets-dashboard" },
  },
  {
    title: "TutorHub (Math)",
    desc: "One-page site for booking sessions & sharing notes. Supports LaTeX equations.",
    stack: ["React", "Chakra UI"],
    links: { code: "https://github.com/your-username/tutorhub" },
  },
];

const EXPERIENCE: Experience[] = [
  {
    company: "Hello Tractor",
    role: "Software Engineering Intern",
    period: "Summers 2023 & 2024 · Nairobi, Kenya",
    bullets: [
      "Contributed React components and internal tools in an Agile team.",
      "Shadowed Eng Manager & CTO; shipped small features end-to-end.",
      "Improved internal docs and team workflows.",
    ],
  },
  {
    company: "Private Math Tutor",
    role: "Tutor (College Level)",
    period: "Summer 2025 · Seattle, WA",
    bullets: [
      "Tutored Calculus, Probability, and Linear Algebra 1-on-1.",
      "Built personalized study plans and exam prep.",
    ],
  },
  {
    company: "IB Computer Science Tutor",
    role: "Tutor",
    period: "Jan–Apr 2024 · Addis Ababa, Ethiopia",
    bullets: [
      "Guided students through algorithm design and Java debugging.",
      "Mentored IA projects from concept to implementation.",
    ],
  },
];

const SKILLS = [
  "Java","C","Python","TypeScript","JavaScript","React","HTML","CSS","Git/GitHub",
  "Pandas","NumPy","Agile/Scrum","Higher-level Math","Problem Solving"
];

const EDUCATION: Education[] = [
  {
    school: "Temple University",
    detail: "B.S. Computer Science (in progress)",
    extra: "Coursework: Data Structures, Algorithms, Probability/Statistics, Physics",
  },
  {
    school: "International Community School of Addis Ababa",
    detail: "IB Diploma (2024)",
    extra: "HL: Math AA, Business Mgmt, CS · ISSEA captain; high-jump record (2024)",
  },
];

/* ---------- Layout helpers ---------- */
interface SectionProps { title: string; children: ReactNode; mt?: number; mb?: number }
function Section({ title, children, mt = 16, mb = 8 }: SectionProps) {
  return (
    <Box as="section" mt={mt} mb={mb}>
      <Heading size="lg" mb={6}>{title}</Heading>
      {children}
    </Box>
  );
}

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const surface = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");
  const subtle = useColorModeValue("gray.600", "gray.300");

  return (
    <Box minH="100vh">
      <Container maxW="2xl" py={{ base: 8, md: 10 }}>
        {/* Header / Hero */}
        <HStack align="start" mb={6}>
          <VStack align="start" spacing={1}>
            <Heading size="2xl" lineHeight={1.1}>{PROFILE.name}</Heading>
            <Text fontSize="lg" color={subtle}>{PROFILE.tagline}</Text>
            <Text fontSize="sm" color={subtle}>{PROFILE.location}</Text>
          </VStack>
          <Spacer />
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>

        <HStack spacing={3} mb={10} flexWrap="wrap">
          <Button as={Link} href={`mailto:${LINKS.email}`} leftIcon={<EmailIcon/>} colorScheme="blue" size="sm">
            Email
          </Button>
          <Button as={Link} href={LINKS.github} isExternal size="sm">
            GitHub <ExternalLinkIcon ml={2}/>
          </Button>
          <Button as={Link} href={LINKS.linkedin} isExternal size="sm">
            LinkedIn <ExternalLinkIcon ml={2}/>
          </Button>
          <Button as={Link} href={LINKS.resume} leftIcon={<DownloadIcon/>} variant="outline" size="sm">
            Resume
          </Button>
        </HStack>

        <Divider borderColor={border} />

        {/* Projects */}
        <Section title="Projects">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {PROJECTS.map((p) => (
              <Card
                key={p.title}
                h="100%" // equal height
                bg={surface}
                borderWidth="1px"
                borderColor={border}
                rounded="xl"
                transition="all .2s ease"
                _hover={{ transform: "translateY(-2px)", shadow: "md", borderColor: useColorModeValue("gray.300","gray.600") }}
              >
                <CardHeader pb={2}>
                  <Heading size="md">{p.title}</Heading>
                  <Text mt={1} fontSize="sm" color={subtle}>{p.desc}</Text>
                </CardHeader>
                <CardBody pt={0}>
                  <HStack spacing={2} mb={3} flexWrap="wrap">
                    {p.stack.map((s) => (
                      <Tag key={s} size="sm" variant="subtle">{s}</Tag>
                    ))}
                  </HStack>
                  <HStack spacing={3}>
                    {p.links.code && (
                      <Button as={Link} href={p.links.code} isExternal size="sm">
                        Code <ExternalLinkIcon ml={2}/>
                      </Button>
                    )}
                    {p.links.demo && (
                      <Button as={Link} href={p.links.demo} isExternal variant="outline" size="sm">
                        Live Demo <ExternalLinkIcon ml={2}/>
                      </Button>
                    )}
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        {/* Experience & Skills */}
        <Section title="Experience & Skills">
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
            <Box gridColumn={{ lg: "span 2" }}>
              <Stack spacing={4}>
                {EXPERIENCE.map((e) => (
                  <Card
                    key={`${e.company}-${e.role}`}
                    bg={surface}
                    borderWidth="1px"
                    borderColor={border}
                    rounded="xl"
                  >
                    <CardHeader pb={1}>
                      <Heading size="md">{e.role} — {e.company}</Heading>
                      <Text mt={1} fontSize="sm" color={subtle}>{e.period}</Text>
                    </CardHeader>
                    <CardBody pt={2}>
                      <List spacing={1.5} styleType="disc" pl={5}>
                        {e.bullets.map((b) => <ListItem key={b}>{b}</ListItem>)}
                      </List>
                    </CardBody>
                  </Card>
                ))}
              </Stack>
            </Box>

            <Card bg={surface} borderWidth="1px" borderColor={border} rounded="xl">
              <CardHeader pb={1}>
                <Heading size="md">Skills</Heading>
                <Text mt={1} fontSize="sm" color={subtle}>Languages, tools & strengths</Text>
              </CardHeader>
              <CardBody pt={2}>
                <HStack spacing={2} flexWrap="wrap">
                  {SKILLS.map((s) => (
                    <Tag key={s} size="sm" variant="subtle">{s}</Tag>
                  ))}
                </HStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Section>

        {/* Education */}
        <Section title="Education">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {EDUCATION.map((ed) => (
              <Card key={ed.school} bg={surface} borderWidth="1px" borderColor={border} rounded="xl">
                <CardHeader pb={1}>
                  <Heading size="md">{ed.school}</Heading>
                  <Text mt={1} fontSize="sm" color={subtle}>{ed.detail}</Text>
                </CardHeader>
                <CardBody pt={2}>
                  <Text fontSize="sm" color={subtle}>{ed.extra}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        <Divider borderColor={border} my={10} />

        {/* Footer */}
        <VStack spacing={1} align="start" pb={10}>
          <Text fontSize="sm" color={subtle}>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Link href={`mailto:${LINKS.email}`}>Email</Link>
            <Link href={LINKS.github} isExternal>GitHub</Link>
            <Link href={LINKS.linkedin} isExternal>LinkedIn</Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
