// src/App.jsx
import {
  Box, Container, Heading, Text, Button, HStack, VStack, Link,
  SimpleGrid, Stack, Tag, Divider, IconButton, useColorMode,
  useColorModeValue, Card, CardHeader, CardBody, List, ListItem
} from "@chakra-ui/react";
import { EmailIcon, ExternalLinkIcon, DownloadIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const LINKS = {
  email: "bomba.amir1@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  resume: "/resume.pdf", // put your PDF in the public/ folder
};

const PROFILE = {
  name: "Amir Bomba",
  tagline: "CS student • Math tutor • Builder of useful automations",
  location: "Seattle, WA · Addis Ababa, ET",
};

const PROJECTS = [
  {
    title: "Crypto Momentum Bot (Alpaca)",
    desc:
      "Multi-coin breakout bot with ATR risk, trailing stops, volatility filter, and CSV logging.",
    stack: ["Python", "alpaca-py", "Pandas"],
    links: { code: "https://github.com/your-username/crypto-bot", demo: "" },
  },
  {
    title: "Sheets → Live Dashboard",
    desc:
      "Converts messy Google Sheets into an auto-updating dashboard with alerts for small businesses.",
    stack: ["Python", "Google API", "Flask"],
    links: { code: "https://github.com/your-username/sheets-dashboard", demo: "" },
  },
  {
    title: "TutorHub (Math)",
    desc:
      "One-page site for booking sessions & sharing notes. Supports LaTeX rendering for equations.",
    stack: ["React", "Chakra UI"],
    links: { code: "https://github.com/your-username/tutorhub", demo: "" },
  },
];

const EXPERIENCE = [
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
      "Mentored Internal Assessment projects from concept to implementation.",
    ],
  },
];

const SKILLS = [
  "Java", "C", "Python", "TypeScript", "JavaScript", "React",
  "HTML", "CSS", "Git/GitHub", "Pandas", "NumPy",
  "Agile/Scrum", "Higher-level Math", "Problem Solving"
];

const EDUCATION = [
  {
    school: "Temple University",
    detail: "B.S. Computer Science (in progress)",
    extra: "Coursework: Data Structures, Algorithms, Probability/Statistics, Physics",
  },
  {
    school: "International Community School of Addis Ababa",
    detail: "IB Diploma (2024)",
    extra: "HL: Math AA, Business Mgmt, Computer Science · ISSEA captain; set high-jump record (2024)",
  },
];

function Section({ title, children, mb = 14 }) {
  return (
    <Box as="section" mb={mb}>
      <Heading size="lg" mb={5}>{title}</Heading>
      {children}
    </Box>
  );
}

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const subtle = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={bg} minH="100vh">
      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        {/* Header / Hero */}
        <HStack justify="space-between" mb={8}>
          <VStack align="start" spacing={1}>
            <Heading size={{ base: "xl", md: "2xl" }}>{PROFILE.name}</Heading>
            <Text color={subtle}>{PROFILE.tagline}</Text>
            <Text fontSize="sm" color={subtle}>{PROFILE.location}</Text>
          </VStack>
          <HStack>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </HStack>
        </HStack>

        <HStack spacing={3} mb={10} flexWrap="wrap">
          <Button
            as={Link}
            href={`mailto:${LINKS.email}`}
            leftIcon={<EmailIcon />}
            colorScheme="blue"
          >
            Email
          </Button>
          <Button as={Link} href={LINKS.github} isExternal>
            GitHub <ExternalLinkIcon ml={2} />
          </Button>
          <Button as={Link} href={LINKS.linkedin} isExternal>
            LinkedIn <ExternalLinkIcon ml={2} />
          </Button>
          <Button as={Link} href={LINKS.resume} leftIcon={<DownloadIcon />} variant="outline">
            Resume
          </Button>
        </HStack>

        <Divider mb={10} />

        {/* Projects */}
        <Section title="Projects">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {PROJECTS.map((p) => (
              <Card key={p.title} bg={cardBg} shadow="sm" borderWidth="1px">
                <CardHeader>
                  <Heading size="md">{p.title}</Heading>
                  <Text mt={1} fontSize="sm" color={subtle}>{p.desc}</Text>
                </CardHeader>
                <CardBody pt={0}>
                  <HStack spacing={2} mb={4} flexWrap="wrap">
                    {p.stack.map((s) => (
                      <Tag key={s} size="sm" variant="subtle">{s}</Tag>
                    ))}
                  </HStack>
                  <HStack spacing={4}>
                    {p.links.code && (
                      <Button as={Link} href={p.links.code} isExternal size="sm">
                        Code <ExternalLinkIcon ml={2} />
                      </Button>
                    )}
                    {p.links.demo && (
                      <Button as={Link} href={p.links.demo} isExternal variant="outline" size="sm">
                        Live Demo <ExternalLinkIcon ml={2} />
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
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
            <Box gridColumn={{ lg: "span 2" }}>
              <Stack spacing={5}>
                {EXPERIENCE.map((e) => (
                  <Card key={`${e.company}-${e.role}`} bg={cardBg} shadow="sm" borderWidth="1px">
                    <CardHeader pb={0}>
                      <Heading size="md">{e.role} — {e.company}</Heading>
                      <Text mt={1} fontSize="sm" color={subtle}>{e.period}</Text>
                    </CardHeader>
                    <CardBody>
                      <List spacing={2} styleType="disc" pl={5}>
                        {e.bullets.map((b) => <ListItem key={b}>{b}</ListItem>)}
                      </List>
                    </CardBody>
                  </Card>
                ))}
              </Stack>
            </Box>

            <Card bg={cardBg} shadow="sm" borderWidth="1px">
              <CardHeader pb={0}>
                <Heading size="md">Skills</Heading>
                <Text mt={1} fontSize="sm" color={subtle}>Languages, tools & strengths</Text>
              </CardHeader>
              <CardBody>
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
        <Section title="Education" mb={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {EDUCATION.map((ed) => (
              <Card key={ed.school} bg={cardBg} shadow="sm" borderWidth="1px">
                <CardHeader pb={0}>
                  <Heading size="md">{ed.school}</Heading>
                  <Text mt={1} fontSize="sm" color={subtle}>{ed.detail}</Text>
                </CardHeader>
                <CardBody>
                  <Text fontSize="sm" color={subtle}>{ed.extra}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        <Divider mb={8} />

        {/* Footer */}
        <VStack spacing={2} align="start">
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
