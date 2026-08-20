const header = {
  homepage: 'https://usama-hassan-944.github.io/portfolio-gamedev/',
  title: 'UH.',
}

const about = {
  name: 'Usama Hassan',
  role: 'Unity Game Developer | Multiplayer & XR',
  picture: '/profile-images/1.png',

  description:
    'I’m a game developer with over 5 years of professional experience building gameplay systems and immersive experiences across multiple platforms. I primarily work with Unity and C#, and have contributed to both shipped and prototype projects ranging from multiplayer and co-op games to Web3 titles, mixed reality experiences, casual and hypercasual games. I enjoy tackling technical challenges, designing clean and scalable systems, and turning ideas into engaging, player-focused experiences.',
  resume: '/resume/Usama_Hassan_Resume_2.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/usama-hassan-505b3a1a4/',
    github: 'https://github.com/Usama-Hassan-944',
  },
}

const projects = [
  {
    name: 'Nexus Arcade',
    description:
      'Co-Developer of this mixed reality arcade simulation for Meta Quest blending virtual gameplay with real-world spatial interaction. Includes Boxing, Shooting, Racing, and Ten Pin Bowling with single-player, co-located multiplayer, and online multiplayer. Built around shared spatial experiences and Meta platform social integrations.',
    stack: [
      'Unity',
      'C#',
      'Photon Fusion',
      'Mixed Reality (MR)',
      'MR Utility Kit (MRUK)',
      'Spatial Anchors / Shared Spaces',
      'Meta Social Platform APIs',
      'Firebase Firestore',
    ],
    sourceCode: '',
    livePreview:
      'https://www.meta.com/en-gb/experiences/nexus-arcade/6962116033836064/?require_login=true',
    video: 'Nexus_Arcade.mp4',
    image: '/project-images/Nexus_Arcade.png',
  },
  {
    name: 'Animalia',
    description:
      'A multiplayer PC card game focused on scalable architecture, real-time networking, and live-service features. Built on a customized CCG framework with reactive patterns and dependency injection, integrating Photon Fusion for multiplayer, Unity Multiplay for server orchestration, and PlayFab-backed services for player data, progression, and online play.',
    stack: [
      'Unity',
      'C#',
      'Zenject',
      'UniRx',
      'Custom CCG Framework',
      'Photon Fusion',
      'Unity Multiplay',
      'PlayFab',
      'SQL',
      'Addressables',
    ],
    sourceCode: '',
    livePreview: 'https://animalia.games/',
    video: 'Animalia.mp4',
    // NOTE: your file is `Animalia.PNG` (uppercase extension) in public/project-images
    image: '/project-images/Animalia.PNG',
  },
  {
    name: 'Thunder Horse Racing',
    description:
      'Multiplayer mobile horse racing with breeding, campaign, competitive multiplayer, and training modes. Features persistent player data on a remote backend, real-time events, championships, and progression for horse upgrades/customization. Work focused on core gameplay systems, client integration with AWS-backed services, game state management, and UI/UX for online features.',
    stack: [
      'Unity',
      'C#',
      'Photon Fusion',
      'Live Realtime Events',
      'Live Championships',
      'Remote Persistence',
      'Progression Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.multiplayer.thunder.horse.racing&hl=en',
    video: '',
    image: '/project-images/HorseRacing.png',
  },
  {
    name: 'Emergency Ops: Drive to Rescue',
    description:
      'A multi-phase simulation combining shop management (inventory, shelf stocking, autonomous customer AI) with mission-based emergency operations. Players prepare resources, then deploy specialized vehicles (fire truck, ambulance, etc.) to resolve dynamic rescue missions. Built with scalable, data-driven architecture and structured AI workflows.',
    stack: [
      'Unity',
      'C#',
      'Simulation Systems Design',
      'AI Behavior Systems',
      'Command & Queue-Based Architectures',
      'Data-Driven Design (JSON)',
      'Vehicle Control Systems',
      'Design Patterns',
    ],
    sourceCode: '',
    livePreview:
      'https://apps.apple.com/uy/app/emergency-ops-drive-to-rescue/id6748608256',
    video: '',
    image: '/project-images/Emergency_Ops.png',
  },
  {
    name: 'Skid Rush - Car Race',
    description:
      'A fast-paced endless racing game inspired by double-drift mechanics, expanded with multiple modes including One Lane, Two Lane, Time Bomb, Speed Test, and AI Multiplayer. Focuses on responsive driving, adaptive AI opponents, and runtime procedural generation for obstacles, power-ups, and road segments.',
    stack: [
      'Unity',
      'C#',
      'Adaptive AI Systems',
      'Procedural Content Generation',
      'Runtime Level Generation',
      'Weighted Spawn Algorithms',
    ],
    sourceCode: '',
    livePreview:
      'https://apps.apple.com/us/app/skid-rush-car-race/id6748746985',
    video: '',
    image: '/project-images/SkidRush.png',
  },
  {
    name: 'Can You Retire?',
    description:
      'Co-Developed this multiplayer WebGL board game inspired by classic turn-based board games, supporting up to six players per session. Features card-based mechanics, real-time multiplayer gameplay, and an integrated chat room. Players join private rooms using invitation codes shared via email, with persistent player and session data stored remotely. Required significant customization to adapt Firebase authentication, data storage, and role-based access systems for WebGL platform limitations.',
    stack: [
      'Unity',
      'C#',
      'WebGL Deployment',
      'Photon PUN2',
      'Turn-Based Multiplayer Systems',
      'Custom Firebase Integration',
      'Role-Based Authentication (Admin / Player)',
      'Real-Time Chat Systems',
      'Room & Session Management',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'CanYouRetire.mp4',
    image: '/project-images/CanYouRetire.PNG',
  },
  {
    name: 'Texas Holdem',
    description:
      'Co-Developed this multiplayer mobile poker game supporting up to six players per table with real-time synchronized gameplay. Features multiple room configurations with varying buy-in values and gameplay modes, persistent player data, authentication, and social features. Implements turn-based betting logic, server-synchronized game states, and secure session management for fair and consistent gameplay across clients.',
    stack: [
      'Unity',
      'C#',
      'Photon PUN2',
      'Turn-Based Game Logic',
      'Room & Matchmaking Systems',
      'Firebase (Auth & Database)',
      'Social Logins (Google, Facebook)',
      'In-Game Chat & Voice Systems',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'TexasHoldem.mp4',
    image: '/project-images/TexasHoldem.PNG',
  },
  {
    name: 'Maze',
    description:
      'A 3D casual game where players navigate progressively challenging maze environments while avoiding multiple AI-controlled enemies with distinct behavior patterns. Features proximity-based chaser enemies and radar-based sentry enemies using line-of-sight detection, plus a customized physics-based character controller built on Puppet Master for dynamic, physics-driven interactions.',
    stack: [
      'Unity',
      'C#',
      'AI Behavior Systems',
      'NavMesh Navigation',
      'State Machines',
      'Puppet Master (Customized)',
      'Power-Up Systems',
      '3D Level Design',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'Maze.mp4',
    image: '/project-images/Maze.PNG',
  },
  {
    name: 'Ball Bash',
    description:
      'Co-Developed a hyper-casual arcade game where players guide a continuous flow of physics-driven balls through dynamic, obstacle-filled paths to the goal. Players draw runtime meshes to block, redirect, or open routes, affecting how many balls reach the end. Features varied layouts (bumps, cut sections, gaps, jump ramps) and a performance-based reward/progression loop.',
    stack: [
      'Unity',
      'C#',
      'Hyper-Casual Game Design',
      'Physics-Based Gameplay',
      'Runtime Mesh Generation',
      'Reward & Progression Systems',
      'Touch Input Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.SynergyGames.BashingBalls&pli=1',
    video: 'BallBash.mp4',
    image: '/project-images/BallBash.PNG',
  },
  {
    name: 'Ophelia',
    description:
      'Co-Developed a first-person mystery puzzle game focused on exploration, environmental storytelling, and clue-based progression. Set within a dark, castle-like environment, players investigate their surroundings, uncover hidden clues, and solve puzzles to advance through interconnected levels. Features an inventory system for collecting and reviewing narrative items such as books and medieval-style scrolls.',
    stack: [
      'Unity',
      'C#',
      'Puzzle Design',
      'Inventory Systems',
      'Level Design',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'Ophelia.mp4',
    image: '/project-images/Ophelia.PNG',
  },
]

const skills = [
  'Unity',
  'C#',
  'C++',
  'Python',
  'JavaScript',
  'SQL',
  'Photon (Fusion & Pun2)',
  'Netcode for GameObjects',
  'Mixed Reality (MR)',
  'VR/AR Interaction Systems',
  'Voice/Text Chat Systems',
  'AWS (Backend & Hosting)',
  'Custom Backend APIs',
  'Unity Multiplay',
  'PlayFab',
  'Firebase',
  'Social Platform APIs (Meta, Apple, Google Play)',
  'Git',
]


const contact = {
  email: 'usamahassan944@gmail.com',
}

export { header, about, projects, skills, contact }
