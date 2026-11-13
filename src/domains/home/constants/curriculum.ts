export const themes = {
  gold: {
    card: "bg-[#FEF7DB] text-[#B99400]", edge: "from-[#CDA400] to-[#FFFBED]", flower: "fill-[#EAD16D] text-[#776004]",
    hover: "hover:shadow-[0_0.625rem_1.25rem] hover:shadow-[#AD8D18]/45",
  },
  blue: {
    card: "bg-[#E4F3FD] text-[#40B0E0]", edge: "from-[#319BEB] to-[#EDF7FE]", flower: "fill-[#40B0E0] text-white",
    hover: "hover:shadow-[0_0.625rem_1rem] hover:shadow-[#39ADFF]/35",
  },
  coral: {
    card: "bg-[#FDEBEA] text-[#F9655E]", edge: "from-[#FF7169] to-[#FDEBEA]", flower: "fill-[#F9655E] text-white",
    hover: "hover:shadow-[0_0.5rem_1rem] hover:shadow-[#FF6259]/33",
  },
  green: {
    card: "bg-[#F5FCEA] text-[#4CA132]", edge: "from-[#65B54E] to-[#F5FCEA]", flower: "fill-[#4CA132] text-white",
    hover: "hover:shadow-[0_0.625rem_1rem] hover:shadow-[#4CA132]/35",
  },
  violet: {
    card: "bg-[#F8F8FF] text-[#7A73E2]", edge: "from-[#A29BFF] to-[#F8F8FF]", flower: "fill-[#7A73E2] text-white",
    hover: "hover:shadow-[0_0.625rem_1rem] hover:shadow-[#7A73E2]/35",
  },
  aqua: {
    card: "bg-[#E2F6FF] text-[#38AEC5]", edge: "from-[#60BFE3] to-[#E2F6FF]", flower: "fill-[#41B5CA] text-white",
    hover: "hover:shadow-[0_0.625rem_1rem] hover:shadow-[#41B5CA]/35",
  },
  cream: {
    card: "bg-[#FDFAE4] text-[#AC920E]", edge: "from-[#E2C53D] to-[#FDFAE4]", flower: "fill-[#EAD16D] text-[#776004]",
    hover: "hover:shadow-[0_0.625rem_1.25rem] hover:shadow-[#AD8D18]/45",
  },
  sage: {
    card: "bg-[#F3FEEE] text-[#7DA86A]", edge: "from-[#9ABA8A] to-[#F3FEEE]", flower: "fill-[#7DA86A] text-white",
    hover: "hover:shadow-[0_0.625rem_1rem] hover:shadow-[#7DA86A]/35",
  },
};

export const decorations = [
  { name: "cap", width: 164, height: 151, position: "top-12 left-15 w-18 lg:top-1/10 lg:left-1/8 md:w-30 xl:w-41" },
  { name: "spiral", width: 103, height: 132, position: "top-40 left-0  w-18 lg:top-1/5 xl:w-26" },
  { name: "topstar", width: 92, height: 95, position: "top-12 right-0 w-12 lg:top-1/7 md:w-18 xl:w-23" },
  { name: "rightstar", width: 56, height: 60, position: "top-50 w-7 lg:top-[31%] right-1/40 xl:w-14 " },
  { name: "leftstar", width: 72, height: 78, position: "bottom-65 w-10 md:bottom-77 lg:top-7/10 left-1/72 lg:w-18" },
  { name: "triangle", width: 66, height: 93, position: "top-5/7 right-0 w-16.5 " },
  { name: "yellowstar", width: 29, height: 29, position: "bottom-6 left-2/3 w-6 lg:bottom-22 lg:w-7.5" },
];

export const curriculumCards = [
  {
    title: "Kiducation 2.0",
    subtitle: "Learning through their world.",
    theme: "gold",
    offset: "xl:pt-14",
    height: "xl:min-h-64.5",
    description:
      "Puts the child at the heart of learning—where curiosity, interests, pace and individuality shape the learning experience. Beyond books and worksheets, we create meaningful, sensory and real-life experiences to nurture confident, curious, independent and lifelong learners.",
  },
  {
    title: "Power of NEP 2020",
    subtitle: "A stronger foundation for brighter futures.",
    theme: "blue",
    offset: "",
    height: "xl:min-h-78.5",
    description:
      "NEP 2020 forms the foundation of our early years curriculum, with a focus on experiential and play-based learning. It supports foundational literacy and numeracy, social capacities, teamwork, cooperation and learning through the child’s familiar language and environment.",
  },
  {
    title: "EYFS & EYLF",
    subtitle: "Global perspectives. Lifelong skills.",
    theme: "coral",
    offset: "xl:pt-9",
    height: "xl:min-h-64.5",
    description:
      "Brings together global early-years perspectives through EYFS (UK) and EYLF (Australia). EYFS supports developmental learning across key areas, while EYLF focuses on identity, wellbeing, relationships, belonging and life skills. Together with NEP 2020, they create Podar Prep’s Glocal Advantage.",
  },
  {
    title: "Kiducation 2.0",
    subtitle: "From the point of view of the child.",
    theme: "green",
    offset: "xl:pt-5",
    height: "xl:min-h-61",
    description:
      "Kiducation means looking at education from the child’s perspective. We prioritise children’s needs, interests, opinions, developmental pace and happiness, encouraging exploration, mistakes, real-life learning experiences and positive relationships.",
  },
  {
    title: "Educational Approaches & Global Pioneers",
    subtitle: "Inspired by the best minds in education.",
    theme: "coral",
    offset: "xl:pt-4.5",
    height: "xl:min-h-60",
    description:
      "Our curriculum draws inspiration from influential educators such as Jean Piaget, Friedrich Froebel, Rudolf Steiner, Reggio Emilia, Lev Vygotsky and Erik Erikson—bringing global insights into a child-centred Indian preschool context.",
  },
  {
    title: "Trikona",
    subtitle: "Three approaches. One connected learning experience.",
    theme: "violet",
    offset: "",
    height: "xl:min-h-64.5",
    description:
      "Trikona is our Triple Impact Curriculum, bringing together S.T.R.E.A.M., Story-Led Learning and Spiral Integration. Each approach adds a unique dimension—building problem-solving, creativity, curiosity, critical thinking and deeper understanding.",
  },
  {
    title: "S.T.R.E.A.M.",
    subtitle: "Many subjects. One big world.",
    theme: "aqua",
    offset: "xl:pt-2.5",
    height: "xl:min-h-59.5",
    description:
      "Integrates Science, Technology, Reading-Writing, Engineering, Arts and Mathematics into meaningful early-learning experiences. Children explore connections through hands-on activities, inquiry and problem-solving—building creativity, critical thinking and innovation.",
  },
  {
    title: "Story-Based Curriculum",
    subtitle: "Stories that spark endless learning.",
    theme: "cream",
    offset: "xl:pt-2.5",
    height: "xl:min-h-74.5",
    description:
      "Inspired by Gijubhai Badheka’s pedagogy, a story can open the door to colours, shapes, animals, food and the environment. Children move from the known to the unknown, simple to complex and concrete to abstract—making learning meaningful and memorable.",
  },
  {
    title: "Spiral Curriculum",
    subtitle: "Revisit. Reinforce. Grow.",
    theme: "sage",
    offset: "xl:pt-1.5",
    height: "xl:min-h-61",
    description:
      "Inspired by Jerome Bruner, the Spiral Curriculum allows children to revisit concepts repeatedly as their understanding develops. A concept introduced simply at one stage can return with greater depth and complexity, reinforcing learning and building knowledge step by step.",
  },
] as const;
