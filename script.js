const allQuizData = [
    {
        question: "What is the target year for achieving the SDGs?",
        choices: ["2025", "2030", "2035", "2040"],
        correct: 1
    },
    {
        question: "How many SDGs are there in total?",
        choices: ["12", "15", "17", "20"],
        correct: 2
    },
    {
        question: "What does SDG stand for?",
        choices: ["Social Development Goals", "Sustainable Development Goals", "Strategic Development Goals", "System Development Goals"],
        correct: 1
    },
    {
        question: "Where were the SDGs first proposed?",
        choices: ["United States", "Brazil", "Sweden", "Japan"],
        correct: 1
    },
    {
        question: "How many targets are there in total across all SDGs?",
        choices: ["169", "150", "175", "180"],
        correct: 0
    },
    {
        question: "Which organization oversees the SDGs?",
        choices: ["World Bank", "United Nations", "WHO", "UNESCO"],
        correct: 1
    },
    {
        question: "What was the predecessor to the SDGs?",
        choices: ["Global Goals", "Millennium Development Goals", "World Development Goals", "Universal Development Goals"],
        correct: 1
    },
    {
        question: "By what percentage does SDG 1 aim to reduce poverty?",
        choices: ["At least 50%", "At least 75%", "At least 90%", "100%"],
        correct: 0
    },
    {
        question: "What is the target maternal mortality ratio by 2030?",
        choices: ["Less than 70 per 100,000", "Less than 100 per 100,000", "Less than 50 per 100,000", "Less than 30 per 100,000"],
        correct: 0
    },
    {
        "question": "A startup develops affordable solar-powered lanterns for off-grid communities. Which SDG does this most directly support?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy", "SDG 1: No Poverty"],
        "correct": 2
    },
    {
        "question": "A government program provides free vocational training for young women. Which SDG is most aligned with this initiative?",
        "choices": ["SDG 8: Decent Work and Economic Growth", "SDG 4: Quality Education", "SDG 10: Reduced Inequalities", "SDG 5: Gender Equality"],
        "correct": 3
    },
    {
        "question": "A nation implements universal health care and increases access to vaccinations. Which SDG does this best support?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 1: No Poverty", "SDG 6: Clean Water and Sanitation", "SDG 4: Quality Education"],
        "correct": 0
    },
    {
        "question": "If a city's plan includes reducing air pollution, expanding public transport, and creating green spaces, which SDG is it fulfilling?",
        "choices": ["SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 15: Life on Land", "SDG 11: Sustainable Cities and Communities"],
        "correct": 3
    },
    {
        "question": "A major corporation commits to using only sustainably sourced raw materials. Which SDG does this action support?",
        "choices": ["SDG 8: Decent Work and Economic Growth", "SDG 14: Life Below Water", "SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production"],
        "correct": 3
    },
    {
        "question": "An NGO works to rehabilitate coral reefs and reduce ocean acidification. Which SDG aligns best with this goal?",
        "choices": ["SDG 14: Life Below Water", "SDG 6: Clean Water and Sanitation", "SDG 13: Climate Action", "SDG 15: Life on Land"],
        "correct": 0
    },
    {
        "question": "A national campaign aims to eliminate child marriage and empower girls to stay in school. Which SDG is this most related to?",
        "choices": ["SDG 16: Peace, Justice and Strong Institutions", "SDG 3: Good Health and Well-being", "SDG 5: Gender Equality", "SDG 4: Quality Education"],
        "correct": 2
    },
    {
        "question": "An international coalition is formed to share green technology and climate data. Which SDG supports this kind of global cooperation?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 17: Partnerships for the Goals", "SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy"],
        "correct": 1
    },
    {
        "question": "A city enacts zoning laws to reduce housing segregation and create more inclusive neighborhoods. Which SDG is targeted?",
        "choices": ["SDG 11: Sustainable Cities and Communities", "SDG 1: No Poverty", "SDG 16: Peace, Justice and Strong Institutions", "SDG 10: Reduced Inequalities"],
        "correct": 3
    },
    {
        "question": "A social enterprise focuses on reducing food waste by distributing surplus food to those in need. Which SDG is most relevant?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 3: Good Health and Well-being", "SDG 2: Zero Hunger", "SDG 10: Reduced Inequalities"],
        "correct": 2
    },
    {
        "question": "A country introduces strict environmental regulations to prevent deforestation and protect biodiversity. Which SDG does this align with?",
        "choices": ["SDG 13: Climate Action", "SDG 6: Clean Water and Sanitation", "SDG 15: Life on Land", "SDG 12: Responsible Consumption and Production"],
        "correct": 2
    },
    {
        "question": "Efforts to promote fair trade and ethical supply chains across borders support which SDG most directly?",
        "choices": ["SDG 17: Partnerships for the Goals", "SDG 10: Reduced Inequalities", "SDG 12: Responsible Consumption and Production", "SDG 8: Decent Work and Economic Growth"],
        "correct": 3
    },
    {
        "question": "Legal reforms that aim to reduce corruption and improve public access to justice support which SDG?",
        "choices": ["SDG 5: Gender Equality", "SDG 10: Reduced Inequalities", "SDG 1: No Poverty", "SDG 16: Peace, Justice and Strong Institutions"],
        "correct": 3
    },
    {
        "question": "Which SDG would be most directly affected by a national policy to subsidize nutritious school meals?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 2: Zero Hunger", "SDG 4: Quality Education", "SDG 1: No Poverty"],
        "correct": 1
    },
    {
        "question": "Promoting innovation hubs and startup incubators in rural areas aligns best with which SDG?",
        "choices": ["SDG 1: No Poverty", "SDG 9: Industry, Innovation and Infrastructure", "SDG 8: Decent Work and Economic Growth", "SDG 11: Sustainable Cities and Communities"],
        "correct": 1
    },
    {
        "question": "Raising awareness and taking action to limit global temperature rise falls under which SDG?",
        "choices": ["SDG 15: Life on Land", "SDG 12: Responsible Consumption and Production", "SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy"],
        "correct": 2
    },
    {
        "question": "A foundation funds literacy programs for refugees and marginalized communities. Which SDG is primarily being supported?",
        "choices": ["SDG 10: Reduced Inequalities", "SDG 4: Quality Education", "SDG 16: Peace, Justice and Strong Institutions", "SDG 1: No Poverty"],
        "correct": 1
    },
    {
        "question": "Improving access to clean toilets and hygiene education in schools contributes most to which SDG?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 6: Clean Water and Sanitation", "SDG 12: Responsible Consumption and Production", "SDG 4: Quality Education"],
        "correct": 1
    },
    {
        "question": "A multinational company partners with local NGOs to tackle youth unemployment. This is an example of which SDG in action?",
        "choices": ["SDG 4: Quality Education", "SDG 10: Reduced Inequalities", "SDG 8: Decent Work and Economic Growth", "SDG 17: Partnerships for the Goals"],
        "correct": 3
    },
    {
        "question": "If a region suffers from frequent droughts and the government invests in better irrigation systems and water conservation, which SDG is most relevant?",
        "choices": ["SDG 2: Zero Hunger", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 6: Clean Water and Sanitation"],
        "correct": 3
    },
      {
        "question": "A country launches a major campaign to reduce maternal and infant mortality rates. Which SDG does this support most directly?",
        "choices": ["SDG 5: Gender Equality", "SDG 3: Good Health and Well-being", "SDG 4: Quality Education", "SDG 1: No Poverty"],
        "correct": 1
    },
    {
        "question": "A city replaces diesel buses with electric vehicles to reduce carbon emissions. This supports which SDG the most?",
        "choices": ["SDG 11: Sustainable Cities and Communities", "SDG 7: Affordable and Clean Energy", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 2
    },
    {
        "question": "If a school curriculum is redesigned to teach students about tolerance, peace, and justice, which SDG is being addressed?",
        "choices": ["SDG 4: Quality Education", "SDG 5: Gender Equality", "SDG 10: Reduced Inequalities", "SDG 16: Peace, Justice and Strong Institutions"],
        "correct": 3
    },
    {
        "question": "A tech company expands internet access in rural areas to support digital learning. Which SDG is most relevant?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 4: Quality Education", "SDG 8: Decent Work and Economic Growth", "SDG 10: Reduced Inequalities"],
        "correct": 1
    },
    {
        "question": "A policy that protects wetlands and forests from industrial development primarily supports which SDG?",
        "choices": ["SDG 15: Life on Land", "SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production", "SDG 6: Clean Water and Sanitation"],
        "correct": 0
    },
    {
        "question": "A nonprofit provides small loans to women entrepreneurs in low-income areas. This best aligns with which SDG?",
        "choices": ["SDG 1: No Poverty", "SDG 5: Gender Equality", "SDG 8: Decent Work and Economic Growth", "SDG 10: Reduced Inequalities"],
        "correct": 1
    },
    {
        "question": "A city increases investment in recycling and waste reduction programs. Which SDG does this most directly support?",
        "choices": ["SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production", "SDG 11: Sustainable Cities and Communities", "SDG 14: Life Below Water"],
        "correct": 1
    },
    {
        "question": "A national job program focuses on creating green employment opportunities. This best supports which SDG?",
        "choices": ["SDG 7: Affordable and Clean Energy", "SDG 9: Industry, Innovation and Infrastructure", "SDG 8: Decent Work and Economic Growth", "SDG 13: Climate Action"],
        "correct": 2
    },
    {
        "question": "Efforts to ensure clean drinking water for remote communities most closely relate to which SDG?",
        "choices": ["SDG 6: Clean Water and Sanitation", "SDG 3: Good Health and Well-being", "SDG 1: No Poverty", "SDG 14: Life Below Water"],
        "correct": 0
    },
    {
        "question": "Cross-border collaboration to address global pandemics reflects which SDG in action?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 17: Partnerships for the Goals", "SDG 16: Peace, Justice and Strong Institutions", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 1
    },
    {
        "question": "An app is launched to help consumers trace the environmental impact of products. Which SDG does this best support?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 13: Climate Action", "SDG 8: Decent Work and Economic Growth", "SDG 7: Affordable and Clean Energy"],
        "correct": 0
    },
    {
        "question": "Programs that aim to reduce the gender pay gap are most closely aligned with which SDG?",
        "choices": ["SDG 1: No Poverty", "SDG 8: Decent Work and Economic Growth", "SDG 10: Reduced Inequalities", "SDG 5: Gender Equality"],
        "correct": 3
    },
    {
        "question": "A new law is passed to make education free for all children through high school. This best supports which SDG?",
        "choices": ["SDG 4: Quality Education", "SDG 1: No Poverty", "SDG 5: Gender Equality", "SDG 10: Reduced Inequalities"],
        "correct": 0
    },
    {
        "question": "Creating marine protected areas and banning harmful fishing practices most directly supports which SDG?",
        "choices": ["SDG 14: Life Below Water", "SDG 15: Life on Land", "SDG 12: Responsible Consumption and Production", "SDG 13: Climate Action"],
        "correct": 0
    },
    {
        "question": "If a company offers equal employment opportunities to people with disabilities, which SDG is being promoted?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 10: Reduced Inequalities", "SDG 5: Gender Equality", "SDG 8: Decent Work and Economic Growth"],
        "correct": 1
    },
    {
        "question": "Creating resilient infrastructure in earthquake-prone areas most directly supports which SDG?",
        "choices": ["SDG 13: Climate Action", "SDG 11: Sustainable Cities and Communities", "SDG 9: Industry, Innovation and Infrastructure", "SDG 6: Clean Water and Sanitation"],
        "correct": 2
    },
    {
        "question": "When a government provides subsidies for renewable energy projects, it is promoting which SDG?",
        "choices": ["SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy", "SDG 12: Responsible Consumption and Production", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 1
    },
    {
        "question": "Conflict resolution training for youth and community leaders is most aligned with which SDG?",
        "choices": ["SDG 4: Quality Education", "SDG 5: Gender Equality", "SDG 16: Peace, Justice and Strong Institutions", "SDG 17: Partnerships for the Goals"],
        "correct": 2
    },
    {
        "question": "Developing local cooperatives that boost food security in rural communities supports which SDG?",
        "choices": ["SDG 2: Zero Hunger", "SDG 1: No Poverty", "SDG 8: Decent Work and Economic Growth", "SDG 12: Responsible Consumption and Production"],
        "correct": 0
    },
    {
        "question": "If wealthy countries help fund climate resilience programs in small island nations, which SDG is being enacted?",
        "choices": ["SDG 13: Climate Action", "SDG 17: Partnerships for the Goals", "SDG 1: No Poverty", "SDG 10: Reduced Inequalities"],
        "correct": 1
    },
      {
        "question": "A national campaign helps farmers switch to climate-resilient crops. Which SDG does this support most directly?",
        "choices": ["SDG 2: Zero Hunger", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 15: Life on Land"],
        "correct": 0
    },
    {
        "question": "A public initiative ensures legal identity and birth registration for all citizens. Which SDG does this align with?",
        "choices": ["SDG 16: Peace, Justice and Strong Institutions", "SDG 10: Reduced Inequalities", "SDG 1: No Poverty", "SDG 4: Quality Education"],
        "correct": 0
    },
    {
        "question": "A country promotes the use of bicycles by building safe bike lanes in cities. Which SDG is being addressed?",
        "choices": ["SDG 11: Sustainable Cities and Communities", "SDG 7: Affordable and Clean Energy", "SDG 3: Good Health and Well-being", "SDG 13: Climate Action"],
        "correct": 0
    },
    {
        "question": "A developing country signs agreements to receive foreign aid for building renewable energy plants. Which SDG best fits this action?",
        "choices": ["SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy", "SDG 17: Partnerships for the Goals", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 2
    },
    {
        "question": "If a company introduces a zero-waste policy across its global offices, which SDG does it primarily support?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 8: Decent Work and Economic Growth", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 0
    },
    {
        "question": "Expanding early childhood education programs in low-income neighborhoods supports which SDG most directly?",
        "choices": ["SDG 1: No Poverty", "SDG 4: Quality Education", "SDG 5: Gender Equality", "SDG 3: Good Health and Well-being"],
        "correct": 1
    },
    {
        "question": "A policy that requires companies to disclose gender pay gaps relates most closely to which SDG?",
        "choices": ["SDG 10: Reduced Inequalities", "SDG 8: Decent Work and Economic Growth", "SDG 16: Peace, Justice and Strong Institutions", "SDG 5: Gender Equality"],
        "correct": 3
    },
    {
        "question": "An organization offers technical training to former refugees to improve their chances of employment. Which SDG is most relevant?",
        "choices": ["SDG 10: Reduced Inequalities", "SDG 4: Quality Education", "SDG 8: Decent Work and Economic Growth", "SDG 17: Partnerships for the Goals"],
        "correct": 2
    },
    {
        "question": "Protecting mountain ecosystems from mining damage is most aligned with which SDG?",
        "choices": ["SDG 15: Life on Land", "SDG 13: Climate Action", "SDG 6: Clean Water and Sanitation", "SDG 12: Responsible Consumption and Production"],
        "correct": 0
    },
    {
        "question": "A program introduces sustainable irrigation techniques to reduce water waste in agriculture. Which SDG does this best support?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 6: Clean Water and Sanitation", "SDG 2: Zero Hunger", "SDG 13: Climate Action"],
        "correct": 1
    },
    {
        "question": "A campaign encourages consumers to buy local and seasonal food to reduce carbon footprint. This supports which SDG?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 2: Zero Hunger", "SDG 11: Sustainable Cities and Communities", "SDG 13: Climate Action"],
        "correct": 0
    },
    {
        "question": "Introducing inclusive financial systems that help low-income families save money contributes to which SDG?",
        "choices": ["SDG 1: No Poverty", "SDG 8: Decent Work and Economic Growth", "SDG 10: Reduced Inequalities", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 0
    },
    {
        "question": "International organizations working together to develop global standards for digital education supports which SDG?",
        "choices": ["SDG 4: Quality Education", "SDG 17: Partnerships for the Goals", "SDG 9: Industry, Innovation and Infrastructure", "SDG 10: Reduced Inequalities"],
        "correct": 1
    },
    {
        "question": "A project helps protect endangered marine species by regulating fishing zones. Which SDG is most closely connected?",
        "choices": ["SDG 14: Life Below Water", "SDG 15: Life on Land", "SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production"],
        "correct": 0
    },
    {
        "question": "Developing renewable energy infrastructure in remote villages supports which SDG the most?",
        "choices": ["SDG 13: Climate Action", "SDG 1: No Poverty", "SDG 9: Industry, Innovation and Infrastructure", "SDG 7: Affordable and Clean Energy"],
        "correct": 3
    },
    {
        "question": "A nonprofit trains women in conflict zones to become local peacebuilders. Which SDG does this effort align with most closely?",
        "choices": ["SDG 5: Gender Equality", "SDG 16: Peace, Justice and Strong Institutions", "SDG 10: Reduced Inequalities", "SDG 17: Partnerships for the Goals"],
        "correct": 1
    },
    {
        "question": "Encouraging students to participate in environmental cleanup projects supports which SDG?",
        "choices": ["SDG 4: Quality Education", "SDG 11: Sustainable Cities and Communities", "SDG 15: Life on Land", "SDG 13: Climate Action"],
        "correct": 0
    },
    {
        "question": "If a company guarantees safe and fair working conditions across its entire supply chain, which SDG is being fulfilled?",
        "choices": ["SDG 8: Decent Work and Economic Growth", "SDG 12: Responsible Consumption and Production", "SDG 10: Reduced Inequalities", "SDG 9: Industry, Innovation and Infrastructure"],
        "correct": 0
    },
    {
        "question": "Campaigns promoting LGBTQ+ rights and legal protections are most aligned with which SDG?",
        "choices": ["SDG 16: Peace, Justice and Strong Institutions", "SDG 5: Gender Equality", "SDG 10: Reduced Inequalities", "SDG 3: Good Health and Well-being"],
        "correct": 2
    },
    {
        "question": "A government invests in research and development to boost sustainable technology innovation. Which SDG is being promoted?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 13: Climate Action", "SDG 7: Affordable and Clean Energy", "SDG 17: Partnerships for the Goals"],
        "correct": 0
    },
      {
        "question": "A city implements affordable housing policies to reduce homelessness. Which SDG does this support most directly?",
        "choices": ["SDG 11: Sustainable Cities and Communities", "SDG 1: No Poverty", "SDG 10: Reduced Inequalities", "SDG 8: Decent Work and Economic Growth"],
        "correct": 0
    },
    {
        "question": "A country's education ministry launches programs specifically targeting adult literacy. This initiative supports which SDG?",
        "choices": ["SDG 8: Decent Work and Economic Growth", "SDG 4: Quality Education", "SDG 10: Reduced Inequalities", "SDG 16: Peace, Justice and Strong Institutions"],
        "correct": 1
    },
    {
        "question": "A tech firm invests in battery innovation to improve energy storage for solar power. Which SDG is this most aligned with?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 7: Affordable and Clean Energy"],
        "correct": 3
    },
    {
        "question": "New legislation is introduced to criminalize corruption and improve transparency in government. Which SDG is this targeting?",
        "choices": ["SDG 17: Partnerships for the Goals", "SDG 8: Decent Work and Economic Growth", "SDG 16: Peace, Justice and Strong Institutions", "SDG 10: Reduced Inequalities"],
        "correct": 2
    },
    {
        "question": "A school introduces a mandatory sustainability course for all students. Which SDG is being advanced?",
        "choices": ["SDG 4: Quality Education", "SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production", "SDG 11: Sustainable Cities and Communities"],
        "correct": 0
    },
    {
        "question": "Small-scale farmers are given access to drought-resistant seeds and climate training. Which SDG does this support?",
        "choices": ["SDG 1: No Poverty", "SDG 6: Clean Water and Sanitation", "SDG 2: Zero Hunger", "SDG 13: Climate Action"],
        "correct": 2
    },
    {
        "question": "A bank provides low-interest loans to female entrepreneurs. This action supports which SDG the most?",
        "choices": ["SDG 5: Gender Equality", "SDG 10: Reduced Inequalities", "SDG 8: Decent Work and Economic Growth", "SDG 1: No Poverty"],
        "correct": 0
    },
    {
        "question": "An island nation develops coral reef protection zones to prevent ecosystem collapse. This supports which SDG?",
        "choices": ["SDG 15: Life on Land", "SDG 6: Clean Water and Sanitation", "SDG 13: Climate Action", "SDG 14: Life Below Water"],
        "correct": 3
    },
    {
        "question": "Trade unions advocating for safe working conditions for factory workers are promoting which SDG?",
        "choices": ["SDG 8: Decent Work and Economic Growth", "SDG 16: Peace, Justice and Strong Institutions", "SDG 12: Responsible Consumption and Production", "SDG 10: Reduced Inequalities"],
        "correct": 0
    },
    {
        "question": "A public health campaign offers vaccinations and healthcare access to underserved populations. Which SDG is this addressing?",
        "choices": ["SDG 1: No Poverty", "SDG 3: Good Health and Well-being", "SDG 4: Quality Education", "SDG 5: Gender Equality"],
        "correct": 1
    },
    {
        "question": "A government introduces tax incentives for companies that hire people from underrepresented communities. Which SDG is being supported?",
        "choices": ["SDG 17: Partnerships for the Goals", "SDG 8: Decent Work and Economic Growth", "SDG 5: Gender Equality", "SDG 10: Reduced Inequalities"],
        "correct": 3
    },
    {
        "question": "A coastal city invests in flood-resistant infrastructure to protect against rising sea levels. Which SDG is this targeting?",
        "choices": ["SDG 11: Sustainable Cities and Communities", "SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 6: Clean Water and Sanitation"],
        "correct": 1
    },
    {
        "question": "A water authority replaces aging pipes to prevent leaks and ensure safe drinking water. Which SDG is most relevant?",
        "choices": ["SDG 6: Clean Water and Sanitation", "SDG 3: Good Health and Well-being", "SDG 9: Industry, Innovation and Infrastructure", "SDG 12: Responsible Consumption and Production"],
        "correct": 0
    },
    {
        "question": "A university collaborates with international partners on green tech research. Which SDG does this reflect most?",
        "choices": ["SDG 13: Climate Action", "SDG 9: Industry, Innovation and Infrastructure", "SDG 17: Partnerships for the Goals", "SDG 4: Quality Education"],
        "correct": 2
    },
    {
        "question": "A campaign helps raise awareness about reducing plastic use and increasing recycling rates. This effort supports which SDG?",
        "choices": ["SDG 12: Responsible Consumption and Production", "SDG 14: Life Below Water", "SDG 11: Sustainable Cities and Communities", "SDG 13: Climate Action"],
        "correct": 0
    },
    {
        "question": "A rural electrification project installs off-grid solar panels in remote villages. Which SDG does this action support?",
        "choices": ["SDG 9: Industry, Innovation and Infrastructure", "SDG 1: No Poverty", "SDG 10: Reduced Inequalities", "SDG 7: Affordable and Clean Energy"],
        "correct": 3
    },
    {
        "question": "Students across the country join a youth movement advocating for climate justice. Which SDG are they most directly supporting?",
        "choices": ["SDG 4: Quality Education", "SDG 11: Sustainable Cities and Communities", "SDG 16: Peace, Justice and Strong Institutions", "SDG 13: Climate Action"],
        "correct": 3
    },
    {
        "question": "If nations coordinate pandemic response efforts and share medical resources, which SDG is in action?",
        "choices": ["SDG 3: Good Health and Well-being", "SDG 17: Partnerships for the Goals", "SDG 10: Reduced Inequalities", "SDG 16: Peace, Justice and Strong Institutions"],
        "correct": 1
    },
    {
        "question": "When companies develop biodegradable packaging to replace plastics, which SDG is being addressed?",
        "choices": ["SDG 14: Life Below Water", "SDG 9: Industry, Innovation and Infrastructure", "SDG 13: Climate Action", "SDG 12: Responsible Consumption and Production"],
        "correct": 3
    },
    {
        "question": "Local governments hold public consultations to include marginalized groups in decision-making. Which SDG does this reflect?",
        "choices": ["SDG 10: Reduced Inequalities", "SDG 11: Sustainable Cities and Communities", "SDG 5: Gender Equality", "SDG 16: Peace, Justice and Strong Institutions"],
        "correct": 3
    },
    {
    "question": "Which organization was responsible for setting up the Sustainable Development Goals (SDGs)?",
    "choices": [
      "World Economic Forum",
      "World Bank",
      "United Nations",
      "International Monetary Fund"
    ],
    "correct": 2
  },
  {
    "question": "Who holds the main responsibility for achieving the Sustainable Development Goals?",
    "choices": [
      "Only national governments",
      "Everyone—governments, businesses, and individuals",
      "Large corporations",
      "Non-governmental organizations"
    ],
    "correct": 1
  },
  {
    "question": "What is distinctive about the design of the SDGs that helps make them visually recognizable?",
    "choices": [
      "Each goal has a symbol representing a country",
      "They are all in shades of blue",
      "Each goal has a unique color and icon",
      "They use flags of different nations"
    ],
    "correct": 2
  },
  {
    "question": "Based on SDG 1, approximately how many people still live in extreme poverty globally?",
    "choices": [
      "Over 700 million",
      "Around 200 million",
      "About 1 billion",
      "Fewer than 500 million"
    ],
    "correct": 0
  },
  {
    "question": "According to SDG 3, how many people around the world lack access to health care?",
    "choices": [
      "500 million",
      "2 billion",
      "3.6 billion",
      "1 billion"
    ],
    "correct": 2
  },
  {
    "question": "According to SDG 13, which country is recognized for leading achievements in climate protection?",
    "choices": [
      "United States",
      "Denmark",
      "India",
      "Brazil"
    ],
    "correct": 1
  },
  {
    "question": "According to SDG 16, which institutions are most affected by corruption in many countries?",
    "choices": [
      "Universities and libraries",
      "Religious organizations",
      "Judiciary and police",
      "Media and schools"
    ],
    "correct": 2
  },
  {
    "question": "Based on SDG 4, approximately how many children and youth worldwide are out of school?",
    "choices": [
      "150 million",
      "120 million",
      "260 million",
      "80 million"
    ],
    "correct": 2
  },
  {
    "question": "Which SDG is most directly linked to the fact that women account for two-thirds of the world’s illiterate population?",
    "choices": [
      "SDG 1: No Poverty",
      "SDG 5: Gender Equality",
      "SDG 4: Quality Education",
      "SDG 10: Reduced Inequalities"
    ],
    "correct": 2
  },
  {
    "question": "Which SDG addresses the issue that one in three women will experience some form of violence in their lifetime?",
    "choices": [
      "SDG 3: Good Health and Well-being",
      "SDG 10: Reduced Inequalities",
      "SDG 5: Gender Equality",
      "SDG 16: Peace, Justice and Strong Institutions"
    ],
    "correct": 2
  },
  {
    "question": "Which SDG focuses on the issue that 650 million women alive today were married before the age of 18?",
    "choices": [
      "SDG 1: No Poverty",
      "SDG 4: Quality Education",
      "SDG 3: Good Health and Well-being",
      "SDG 5: Gender Equality"
    ],
    "correct": 3
  },
  {
    "question": "Maternal mortality is a major global concern. Which SDG is most directly working to prevent these deaths?",
    "choices": [
      "SDG 3: Good Health and Well-being",
      "SDG 5: Gender Equality",
      "SDG 10: Reduced Inequalities",
      "SDG 16: Peace, Justice and Strong Institutions"
    ],
    "correct": 0
  },
  {
    "question": "Women are paid on average 24% less than men for the same work. Which SDG focuses on addressing this issue?",
    "choices": [
      "SDG 8: Decent Work and Economic Growth",
      "SDG 1: No Poverty",
      "SDG 5: Gender Equality",
      "SDG 9: Industry, Innovation and Infrastructure"
    ],
    "correct": 2
  },
  {
    "question": "Adolescent girls and young women make up 61% of youth living with HIV. Which SDG connects most to this fact?",
    "choices": [
      "SDG 5: Gender Equality",
      "SDG 3: Good Health and Well-being",
      "SDG 10: Reduced Inequalities",
      "SDG 4: Quality Education"
    ],
    "correct": 1
  },
  {
    "question": "In over 100 countries, women are legally restricted from doing the same jobs as men. Which SDG is focused on changing that?",
    "choices": [
      "SDG 16: Peace, Justice and Strong Institutions",
      "SDG 5: Gender Equality",
      "SDG 8: Decent Work and Economic Growth",
      "SDG 10: Reduced Inequalities"
    ],
    "correct": 1
  },
  {
    "question": "Only 24% of seats in national parliaments are held by women. Which SDG aims to improve this representation?",
    "choices": [
      "SDG 10: Reduced Inequalities",
      "SDG 4: Quality Education",
      "SDG 5: Gender Equality",
      "SDG 16: Peace, Justice and Strong Institutions"
    ],
    "correct": 2
  },
  {
    "question": "Out of the top 500 companies, only 5.2% of CEOs are women. Which SDG targets this gap in leadership?",
    "choices": [
      "SDG 9: Industry, Innovation and Infrastructure",
      "SDG 8: Decent Work and Economic Growth",
      "SDG 5: Gender Equality",
      "SDG 10: Reduced Inequalities"
    ],
    "correct": 2
  },
  {
    "question": "Less than 20% of the world’s landholders are women. Which SDG focuses on ensuring equal rights to ownership?",
    "choices": [
      "SDG 2: Zero Hunger",
      "SDG 1: No Poverty",
      "SDG 5: Gender Equality",
      "SDG 15: Life on Land"
    ],
    "correct": 2
  },
    {
    "question": "What is the molecular formula of ozone?",
    "choices": ["O₂", "CO₂", "O₃", "H₂O"],
    "correct": 2
  },
  {
    "question": "Why is the ozone layer important for life on Earth?",
    "choices": [
      "It absorbs sound from outer space",
      "It protects against harmful UV radiation",
      "It controls global warming",
      "It helps plant growth"
    ],
    "correct": 1
  },
  {
    "question": "What is the main cause of ozone layer depletion?",
    "choices": [
      "Methane emissions",
      "Carbon dioxide emissions",
      "Chlorofluorocarbons (CFCs)",
      "Radioactive waste"
    ],
    "correct": 2
  },
  {
    "question": "Where is the ozone hole primarily located?",
    "choices": [
      "Over the Arctic Ocean",
      "Above the Sahara Desert",
      "Over Antarctica",
      "Over the Himalayas"
    ],
    "correct": 2
  },
  {
    "question": "If all precautions are taken, in which year is the ozone layer expected to return to normal levels?",
    "choices": [
      "2030", "2040", "2050", "2060"
    ],
    "correct": 2
  },
  {
    "question": "What is the current global literacy rate (approximate)?",
    "choices": [
      "57%", "74%", "86%", "98%"
    ],
    "correct": 2
  },
  {
    "question": "Roughly how many countries in the world have a democratic system?",
    "choices": [
      "30", "90", "120", "180"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is NOT one of the three core principles of UN peacekeeping operations?",
    "choices": [
      "Consent of the parties",
      "Impartiality",
      "Use of force to promote political ideologies",
      "Non-use of force except in self-defense"
    ],
    "correct": 2
  },
  {
    "question": "Who among the following was NOT awarded the Nobel Peace Prize?",
    "choices": [
      "Malala Yousafzai",
      "Nelson Mandela",
      "Mahatma Gandhi",
      "Kofi Annan"
    ],
    "correct": 2
  },
  {
    "question": "Which UN body holds the primary responsibility for maintaining international peace and security?",
    "choices": [
      "UNESCO",
      "UN General Assembly",
      "UN Security Council",
      "UNDP"
    ],
    "correct": 2
  },
  {
    "question": "What proportion of people worldwide rely on forests for subsistence, employment, and income?",
    "choices": [
      "1 in 20", "1 in 10", "1 in 5", "1 in 3"
    ],
    "correct": 3
  },
  {
    "question": "Approximately how many million plant and animal species are now threatened with extinction?",
    "choices": [
      "100 million", "2 million", "8 million", "1 million"
    ],
    "correct": 3
  },
  {
    "question": "Human activity has altered nearly what percentage of the Earth's land surface?",
    "choices": [
      "25%", "50%", "70%", "90%"
    ],
    "correct": 2
  },
  {
    "question": "Zoonotic diseases are best described as:",
    "choices": [
      "Diseases caused by water pollution",
      "Diseases transmitted from animals to humans",
      "Diseases spread through insects only",
      "Diseases caused by fungi"
    ],
    "correct": 1
  },
  {
    "question": "What percentage of the world's carbon dioxide is absorbed by the oceans?",
    "choices": [
      "10%", "30%", "50%", "70%"
    ],
    "correct": 1
  },
  {
    "question": "Coral reefs support approximately what percent of ocean life?",
    "choices": [
      "5%", "10%", "15%", "25%"
    ],
    "correct": 3
  },
  {
    "question": "What percentage of Earth's surface is covered by oceans?",
    "choices": [
      "51%", "61%", "71%", "81%"
    ],
    "correct": 2
  },
  {
    "question": "Over how many billion people rely on marine and coastal biodiversity for their livelihoods?",
    "choices": [
      "1 billion", "2 billion", "3 billion", "4 billion"
    ],
    "correct": 2
  },
  {
    "question": "Oceans help produce approximately what percentage of the Earth's oxygen?",
    "choices": [
      "20%", "30%", "50%", "70%"
    ],
    "correct": 3
  },
  {
    "question": "Which gas is most responsible for the greenhouse effect and climate warming?",
    "choices": [
      "Nitrogen", "Carbon dioxide", "Ozone", "Methane"
    ],
    "correct": 1
  },
  {
    "question": "In the context of climate change, what does COP stand for?",
    "choices": [
      "Carbon Offset Plan",
      "Coalition of Parties",
      "Conference of the Parties",
      "Convention on Protection"
    ],
    "correct": 2
  },
  {
    "question": "How many countries have implemented national policies for more sustainable consumption and production?",
    "choices": [
      "40", "100", "160", "190"
    ],
    "correct": 2
  },
    {
    "question": "Usage of energy-efficient light bulbs worldwide would result in saving how much annually?",
    "choices": [
      "$4 Billion", "$10 Billion", "$120 Billion", "$200 Billion"
    ],
    "correct": 2
  },
  {
    "question": "What percentage of the world population still does not have internet access?",
    "choices": [
      "12%", "25%", "33%", "50%"
    ],
    "correct": 2
  },
  {
    "question": "How many people globally still lack access to clean water?",
    "choices": [
      "100 million", "500 million", "700 million", "2 billion"
    ],
    "correct": 3
  },
  {
    "question": "To achieve SDG 9 and limit climate change, what proportion of GDP is required to be invested by lower-and-middle-income countries?",
    "choices": [
      "0.5%", "1.0%", "4.5%", "10%"
    ],
    "correct": 2
  },
  {
    "question": "Cities occupy what percentage of the Earth's surface?",
    "choices": [
      "1%", "3%", "7%", "10%"
    ],
    "correct": 1
  },
  {
    "question": "Rapid urbanization leads to which of the following?",
    "choices": [
      "Improved rural development", 
      "Pressure on the environment", 
      "Reduced energy use", 
      "Decline in technology"
    ],
    "correct": 1
  },
  {
    "question": "How many people lacked access to electricity in 2023?",
    "choices": [
      "120 million", "300 million", "675 million", "1.2 billion"
    ],
    "correct": 2
  },
  {
    "question": "What is currently the largest source of renewable energy?",
    "choices": [
      "Solar power", "Wind power", "Hydropower", "Geothermal energy"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following contributes the most to climate change?",
    "choices": [
      "Waste generation", "Transportation", "Electricity and heat production", "Deforestation"
    ],
    "correct": 2
  },
  {
    "question": "As of 2022, how many people lacked access to clean cooking fuels and technologies?",
    "choices": [
      "1.5 billion", "2.3 billion", "3.1 billion", "3.8 billion"
    ],
    "correct": 2
  },
  {
    "question": "In households without access to on-premises water, who typically collects it?",
    "choices": [
      "Men and boys", "Community leaders", "Volunteers", "Women and girls"
    ],
    "correct": 3
  },
  {
    "question": "How many people use healthcare facilities with no water service?",
    "choices": [
      "300 million", "500 million", "896 million", "1.5 billion"
    ],
    "correct": 2
  },
  {
    "question": "Lack of WASH services in healthcare settings leads to:",
    "choices": [
      "Improved technology use",
      "Compromised safety and spread of infections",
      "More hospital construction",
      "Reduced patient intake"
    ],
    "correct": 1
  },
  {
    "question": "What was the global unemployment rate in 2023?",
    "choices": [
      "3.5%", "5.1%", "6.8%", "8.2%"
    ],
    "correct": 1
  },
  {
    "question": "According to the ILO, how many new jobs are needed by 2030?",
    "choices": [
      "100 million", "300 million", "600 million", "900 million"
    ],
    "correct": 2
  },
  {
    "question": "What is the approximate global gender pay gap?",
    "choices": [
      "14%", "18%", "24%", "30%"
    ],
    "correct": 2
  },
  {
    "question": "Who won the 2014 Nobel Peace Prize for campaigning against child labour and for universal education?",
    "choices": [
      "Ban Ki-moon", "Kailash Satyarthi", "Greta Thunberg", "Malala Yousafzai"
    ],
    "correct": 1
  },
  {
    "question": "Roughly how many girls of school age are not in school globally?",
    "choices": [
      "32 million", "62 million", "100 million", "130 million"
    ],
    "correct": 3
  },
  {
    "question": "Women make up what percentage of health and social workers worldwide?",
    "choices": [
      "45%", "61%", "70%", "82%"
    ],
    "correct": 2
  },
  {
    "question": "How many teachers need to be recruited to achieve universal education by 2030?",
    "choices": [
      "10 million", "24 million", "44 million", "60 million"
    ],
    "correct": 2
  },
  {
    "question": "Around what percentage of young people lack basic math and literacy skills?",
    "choices": [
      "10%", "20%", "40%", "60%"
    ],
    "correct": 2
  },
  {
    "question": "Which document is the first legally binding international instrument on the right to education?",
    "choices": [
      "UDHR", "ICESCR", "CRC", "UNESCO Education Charter"
    ],
    "correct": 1
  },
  {
    "question": "What percentage of households globally lack access to basic handwashing facilities?",
    "choices": [
      "12%", "18%", "28%", "43%"
    ],
    "correct": 3
  },
    {
    "question": "Extreme malnutrition and chronic hunger are said to exist when daily energy intake is less than:",
    "choices": [
      "2,000 kilocalories", "1,800 kilocalories", "1,200 kilocalories", "800 kilocalories"
    ],
    "correct": 3
  },
  {
    "question": "What is one of the primary causes of hunger according to experts?",
    "choices": [
      "Low global food production", "Equitable distribution", "Lack of food technologies", "Dietary preferences"
    ],
    "correct": 1
  },
  {
    "question": "As of 2018, which region had the highest under-five mortality rate?",
    "choices": [
      "South Asia", "Latin America", "Sub-Saharan Africa", "Middle East"
    ],
    "correct": 2
  },
  {
    "question": "If a child suffers from malnutrition in the womb, what is likely to happen?",
    "choices": [
      "The child will recover fully after birth", "The child may make up for it with supplements", "The developmental shortfall is likely permanent", "The impact is minimal"
    ],
    "correct": 2
  },
  {
    "question": "Which region has the largest number of hungry people?",
    "choices": [
      "Africa", "Asia", "South America", "Eastern Europe"
    ],
    "correct": 1
  },
  {
    "question": "Which sector employs the largest proportion of the global workforce?",
    "choices": [
      "Construction", "Technology", "Agriculture", "Retail"
    ],
    "correct": 2
  },
  {
    "question": "Compared to a New Yorker paying 0.6% of daily income for a meal, what is the situation for a South Sudanese person?",
    "choices": [
      "They pay the same percentage", "They pay slightly more", "They pay less", "They often cannot afford it at all"
    ],
    "correct": 3
  },
  {
    "question": "Why is the number of overweight people now higher than the number of undernourished people?",
    "choices": [
      "Malnutrition has declined and obesity is rising", "Healthy food is more accessible", "Exercise rates have dropped", "Food scarcity is ending"
    ],
    "correct": 0
  },
  {
    "question": "What is the aim of the new EU Financial Markets Directive regarding food speculation?",
    "choices": [
      "To subsidize staple foods", "To increase market profits", "To curb food speculation", "To privatize agricultural markets"
    ],
    "correct": 2
  },
  {
    "question": "What does 'hidden hunger' refer to?",
    "choices": [
      "People hiding food due to shortages", "Undiagnosed eating disorders", "Micronutrient deficiencies despite adequate calorie intake", "Hunger in conflict zones"
    ],
    "correct": 2
  },
  {
    "question": "How much of the world’s wealth is owned by the richest 1% of the population?",
    "choices": [
      "25%", "40%", "50%", "More than 80%"
    ],
    "correct": 3
  },
  {
    "question": "Roughly how much of all food produced for human consumption is lost or wasted annually?",
    "choices": [
      "10%", "20%", "33%", "50%"
    ],
    "correct": 2
  },
    {
    "question": "At the current rate, what is predicted to happen by 2050 regarding plastic and marine life?",
    "choices": [
      "All plastic in oceans will be removed by then", 
      "Fish populations will increase beyond plastic levels", 
      "There will be more plastic than fish in the oceans", 
      "Ocean biodiversity will double"
    ],
    "correct": 2
  },
  {
    "question": "How many countries have signed the 2030 Agenda for Sustainable Development?",
    "choices": [
      "72", 
      "110", 
      "150", 
      "193"
    ],
    "correct": 3
  },
  {
    "question": "According to an Oxfam report, how long does it take a CEO of a top global fashion brand to earn what a garment worker in Bangladesh earns in a lifetime?",
    "choices": [
      "One month", 
      "Four days", 
      "Two weeks", 
      "One year"
    ],
    "correct": 1
  }
];

let quizData = [];
let playHistory = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;
let gameCount = 0;
let answeredCorrectly = 0;

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const rewardScreen = document.getElementById('reward-screen');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const playAgainBtn = document.getElementById('play-again');
const progressInfo = document.getElementById('progress-info');
const timerEl = document.getElementById('timer');
const badgesCollection = document.getElementById('badges-collection');
const earnedBadgesEl = document.getElementById('earned-badges');
const playHistoryContainer = document.getElementById('play-history');

// Load saved progress and badges
const loadProgress = () => {
    const savedProgress = localStorage.getItem('sdgsQuizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestion = progress.currentQuestion;
        score = progress.score;
        updateProgressInfo();
    }
    
    const savedBadges = localStorage.getItem('sdgsQuizBadges');
    if (savedBadges) {
        const parsedBadges = JSON.parse(savedBadges);
        badges.forEach((badge, index) => {
            if (parsedBadges[index].earned) {
                badge.earned = true;
            }
        });
    }
    
    gameCount = parseInt(localStorage.getItem('sdgsQuizGameCount') || '0');
    
    renderBadgesCollection();
};

// Save progress, badges, and game count
const saveProgress = () => {
    const progress = {
        currentQuestion,
        score
    };
    localStorage.setItem('sdgsQuizProgress', JSON.stringify(progress));
    localStorage.setItem('sdgsQuizBadges', JSON.stringify(badges));
    localStorage.setItem('sdgsQuizGameCount', gameCount.toString());
};

// Update progress info
const updateProgressInfo = () => {
    if (currentQuestion > 0) {
        progressInfo.textContent = `You have a saved game! Question: ${currentQuestion + 1}/${quizData.length}, Score: ${score}`;
    }
};

// Render badges collection on start screen
const renderBadgesCollection = () => {
    badgesCollection.innerHTML = '<h3>Your Badges</h3>';
    badges.forEach(badge => {
        const badgeEl = document.createElement('div');
        badgeEl.classList.add('badge');
        if (!badge.earned) badgeEl.classList.add('locked');
        badgeEl.style.backgroundColor = badge.color;
        badgeEl.innerHTML = `
            <span class="badge-icon">${badge.icon}</span>
            <div class="badge-name">${badge.name}</div>
        `;
        
        // Add tooltip for requirement
        badgeEl.title = badge.requirement;
        
        badgesCollection.appendChild(badgeEl);
    });
};

const badges = [
    { id: 'beginner', name: 'Beginner', icon: '🌱', color: '#87CEEB', requirement: 'Start the quiz', earned: false },
    { id: 'fast', name: 'Speed Demon', icon: '⚡', color: '#FFA500', requirement: 'Answer correctly with 25+ seconds left', earned: false },
    { id: 'perfect', name: 'Perfect Score', icon: '🏆', color: '#FFD700', requirement: 'Get all questions right', earned: false },
    { id: 'persistent', name: 'Persistent', icon: '🔄', color: '#9370DB', requirement: 'Play the quiz 3 times', earned: false },
    { id: 'halfway', name: 'Halfway Hero', icon: '🌍', color: '#3CB371', requirement: 'Answer at least half correctly', earned: false }
];

// Award badge and show notification
const awardBadge = (badgeId) => {
    const badge = badges.find(b => b.id === badgeId);
    if (badge && !badge.earned) {
        badge.earned = true;
        saveProgress();
        
        // Create notification
        const notification = document.createElement('div');
        notification.classList.add('badge-notification');
        notification.innerHTML = `
            <div class="badge-notification-icon" style="color: ${badge.color}">${badge.icon}</div>
            <div>
                <strong>New Badge Unlocked!</strong>
                <p>${badge.name}</p>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Remove notification after animation
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
};

// Start timer
const startTimer = () => {
    clearInterval(timer);
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    timerEl.classList.remove('warning');
    
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        // Add warning class when time is running out
        if (timeLeft <= 10) {
            timerEl.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Move to next question when time runs out
            currentQuestion++;
            saveProgress();
            
            if (currentQuestion < quizData.length) {
                displayQuestion();
            } else {
                showRewards();
            }
        }
    }, 1000);
};

// Display question
const displayQuestion = () => {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    
    choicesEl.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.classList.add('choice-btn');
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(index));
        choicesEl.appendChild(button);
    });

    progressEl.style.width = `${(currentQuestion / quizData.length) * 100}%`;
    scoreEl.textContent = score;
    
    startTimer();
};

// Handle answer selection
const selectAnswer = (choiceIndex) => {
    clearInterval(timer); // Stop the timer
    
    const correct = quizData[currentQuestion].correct === choiceIndex;
    const buttons = choicesEl.getElementsByClassName('choice-btn');
    
    Array.from(buttons).forEach((button, index) => {
        button.disabled = true;
        if (index === quizData[currentQuestion].correct) {
            button.classList.add('correct');
        } else if (index === choiceIndex && !correct) {
            button.classList.add('wrong');
        }
    });

    if (correct) {
        score += 100;
        score += timeLeft * 2; // Add bonus points based on time left
        answeredCorrectly++;
        
        // Award speed demon badge if answered correctly with 15+ seconds left
        if (timeLeft >= 25) {
            awardBadge('fast');
        }
    }

    setTimeout(() => {
        currentQuestion++;
        saveProgress();
        
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            showRewards();
        }
    }, 1500);
};

// Function to select random questions
const selectRandomQuestions = () => {
    const shuffled = [...allQuizData].sort(() => 0.5 - Math.random());
    quizData = shuffled.slice(0, 20);
};

// Function to save play history
const savePlayHistory = () => {
    const currentDate = new Date().toLocaleDateString();
    playHistory.unshift({
        date: currentDate,
        score: score,
        correctAnswers: answeredCorrectly,
        totalQuestions: quizData.length
    });
    
    // Keep only last 10 plays
    if (playHistory.length > 10) {
        playHistory = playHistory.slice(0, 10);
    }
    
    localStorage.setItem('sdgsQuizHistory', JSON.stringify(playHistory));
    renderPlayHistory();
};

// Function to load play history
const loadPlayHistory = () => {
    const savedHistory = localStorage.getItem('sdgsQuizHistory');
    if (savedHistory) {
        playHistory = JSON.parse(savedHistory);
        renderPlayHistory();
    }
};

// Function to render play history
const renderPlayHistory = () => {
    playHistoryContainer.innerHTML = '<h3>Play History</h3>';
    
    if (playHistory.length === 0) {
        playHistoryContainer.innerHTML += '<p>No games played yet!</p>';
        return;
    }
    
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Score</th>
            <th>Correct/Total</th>
        </tr>
    `;
    
    playHistory.forEach(game => {
        table.innerHTML += `
            <tr>
                <td>${game.date}</td>
                <td>${game.score}</td>
                <td>${game.correctAnswers}/${game.totalQuestions}</td>
            </tr>
        `;
    });
    
    playHistoryContainer.appendChild(table);
};

// Show rewards
const showRewards = () => {
    quizScreen.classList.add('hidden');
    rewardScreen.classList.remove('hidden');
    
    const finalScore = document.getElementById('final-score');
    finalScore.textContent = `Final Score: ${score}`;
    
    // Check for badges earned in this game
    if (answeredCorrectly === quizData.length) {
        awardBadge('perfect');
    }
    
    if (answeredCorrectly >= Math.floor(quizData.length / 2)) {
        awardBadge('halfway');
    }
    
    // Display earned badges
    earnedBadgesEl.innerHTML = '<h3>Your Badges</h3><div class="badges-showcase"></div>';
    const badgesShowcase = earnedBadgesEl.querySelector('.badges-showcase');
    
    badges.forEach(badge => {
        if (badge.earned) {
            const badgeEl = document.createElement('div');
            badgeEl.classList.add('badge');
            badgeEl.style.backgroundColor = badge.color;
            badgeEl.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <div class="badge-name">${badge.name}</div>
            `;
            badgesShowcase.appendChild(badgeEl);
        }
    });
    
    const rewards = document.getElementById('rewards');
    rewards.innerHTML = '';
    
    // Generate reward stars based on score
    const badgeCount = Math.floor(score / 200);
    for (let i = 0; i < badgeCount; i++) {
        const badge = document.createElement('div');
        badge.classList.add('reward-badge');
        badge.innerHTML = `
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#f1c40f"/>
                <text x="50" y="50" text-anchor="middle" dy=".3em" fill="#fff" font-size="40">🌟</text>
            </svg>
        `;
        rewards.appendChild(badge);
    }
    
    savePlayHistory();
};

// Event listeners
startBtn.addEventListener('click', () => {
    selectRandomQuestions();
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    awardBadge('beginner');
    displayQuestion();
});

playAgainBtn.addEventListener('click', () => {
    gameCount++;
    
    // Check for persistent badge (played 3 times)
    if (gameCount >= 3) {
        awardBadge('persistent');
    }
    
    saveProgress();
    
    currentQuestion = 0;
    score = 0;
    answeredCorrectly = 0;
    localStorage.removeItem('sdgsQuizProgress');
    rewardScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    progressInfo.textContent = '';
    renderBadgesCollection();
});

// Initialize
loadProgress();
loadPlayHistory();