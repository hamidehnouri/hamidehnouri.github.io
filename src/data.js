// Edit your portfolio content here.
export const profile = {
  name: 'Hamideh Nouri',
  role: 'Frontend engineer',
  location: 'Berlin, Germany',
  exploring: 'Applied AI',
  tagline: 'Frontend craft. A curious mind.',
  intro: '7+ years building for the web.',
  focus: 'From interfaces and design systems to AI applications.',
  story: 'I’m Hamideh, a frontend engineer in Berlin. I started in embedded systems, co-founded a company, and went on to build web products. Today I’m bringing that experience into AI applications.',
  contact: 'Have a frontend challenge, an AI product idea, or a question about my work? I’d be happy to hear from you.',
  github: 'https://github.com/hamidehnouri',
  linkedin: 'https://linkedin.com/in/hamidehnouri',
};

export const projects = [
  {
    id: 'buddy',
    title: 'Onboarding Buddy',
    category: '01 / Developer tools',
    kind: 'Project 01 / AI + code exploration',
    description: 'A new codebase doesn’t have to feel like a maze. Ask a question and get an answer with citations to the relevant lines of code.',
    technologies: ['Next.js', 'TypeScript', 'Hybrid RAG'],
    details: [
      'Qdrant vector search combined with BM25 keyword retrieval.',
      'AST-based code chunking with ts-morph.',
      'Tested with Vitest and Playwright.',
    ],
    url: 'https://github.com/hamidehnouri/onboarding-buddy',
  },
  {
    id: 'amade',
    title: 'Āmāde Interview Prep',
    category: '02 / Interview coaching',
    kind: 'Project 02 / AI + interview practice',
    description: 'Practice for the role you want. Turn a job description into behavioral questions, then get specific feedback on typed or spoken answers.',
    technologies: ['Next.js', 'TypeScript', 'Web Speech API'],
    details: [
      'STAR-based questions and feedback on each part of an answer.',
      'Prompt-injection detection and output moderation.',
      'A benchmark comparing five prompting techniques.',
    ],
    url: 'https://github.com/hamidehnouri/amade-interview-prep',
  },
];

export const experience = [
  {
    period: '2021–2023', company: 'Aroundhome', title: 'Frontend at scale',
    description: 'Built an expert directory in Next.js, led a TypeScript migration, and developed shared design system components.',
  },
  {
    period: '2019–2021', company: 'Adanic', title: 'Making data usable',
    description: 'Owned a fraud detection dashboard from UI design to React implementation, with real-time visualizations.',
  },
  {
    period: '2015–2019', company: 'HotSpotPlus', title: 'Building a company',
    description: 'Co-founded a company and led frontend for a Wi-Fi management platform used by more than 500 venues.',
  },
  {
    period: '2004–2012', company: 'Basamad AC&C', title: 'Starting with hardware',
    description: 'Designed, tested, and debugged embedded systems in C and VHDL, from initial concept to working hardware.',
  },
];

// Verified public GitHub snapshot. These are contributions, not a live API feed.
// Each tuple is [date, contribution count, GitHub intensity level].
export const githubActivity = {
  start: '2025-09-28',
  end: '2026-09-28',
  days: [
    ['2026-07-03', 1, 1], ['2026-07-06', 4, 1], ['2026-07-07', 10, 2],
    ['2026-07-09', 4, 1], ['2026-07-10', 19, 3], ['2026-07-11', 15, 2],
    ['2026-07-12', 20, 3], ['2026-07-13', 6, 1], ['2026-07-28', 45, 4],
    ['2026-07-29', 45, 4], ['2026-07-30', 34, 4], ['2026-07-31', 16, 2],
    ['2026-08-01', 4, 1], ['2026-08-02', 18, 3],
  ],
};
