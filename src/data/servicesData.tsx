
export const servicesData: any = {
    "ai-ml": {
        hero: {
            title: "AI & Machine Learning",
            subtitle: "Intelligence That Drives Business",
            description: "We build intelligent systems that learn, adapt, and automate. From predictive analytics to natural language processing, our AI solutions turn raw data into actionable insights and autonomous actions.",
        },
        overview: {
            heading: "The Cognitive Enterprise",
            content: "Artificial Intelligence is no longer a futuristic concept—it is the standard for modern business. We help organizations harness the power of machine learning to automate complex tasks, personalize customer experiences, and predict market trends with unprecedented accuracy.",
            image: "/services/vision.jpg"
        },
        subServices: [
            { title: "Predictive Analytics", desc: "Forecast trends and behaviors with high-accuracy models.", image: "/services/dataanalytics.jpg" },
            { title: "NLP & Chatbots", desc: "Intelligent conversational agents for 24/7 support.", image: "/services/ai.jpg" },
            { title: "Computer Vision", desc: "Automated visual inspection and recognition systems.", image: "/services/vision.jpg" },
            { title: "Recommendation Engines", desc: "Personalized content delivery algorithms.", image: "/services/big-data.jpg" },
        ],
        process: [
            { step: "01", title: "Data Audit", desc: "Evaluating data quality and availability." },
            { step: "02", title: "Modeling", desc: "Training and refining ML algorithms." },
            { step: "03", title: "Integration", desc: "Embedding AI into existing workflows." },
            { step: "04", title: "Optimization", desc: "Continuous learning and improvement." },
        ],
        industries: [
            { name: "Fintech", image: "/industries/banking.jpg" },
            { name: "Healthcare", image: "/industries/healthcare.jpg" },
            { name: "Retail", image: "/industries/retail.jpg" },
            { name: "Manufacturing", image: "/industries/manufacturing.jpg" },
        ],
        techStack: [
            { name: "Python", icon: "/tech/python.png" },
            { name: "TensorFlow", icon: "/tech/tensorflow.png" },
            { name: "PyTorch", icon: "/tech/pytorch.png" },
            { name: "OpenAI API", icon: "/tech/openai.png" },
            { name: "Scikit-learn", icon: "/tech/scikit-learn.png" },
        ]
    },

    // "iot": {
    //     hero: {
    //         title: "Internet of Things (IoT)",
    //         subtitle: "Connecting the Physical and Digital Worlds",
    //         description: "We design and deploy IoT ecosystems that monitor, control, and optimize physical assets. Our solutions bridge the gap between hardware and software to create smarter environments.",
    //     },
    //     overview: {
    //         heading: "Smart Connectivity",
    //         content: "Real-time data from the physical world empowers proactive decision-making. We build end-to-end IoT solutions, from sensor integration and edge computing to cloud analytics and user dashboards, enabling remote monitoring and automation at scale.",
    //         image: "/services/iot.jpg"
    //     },
    //     subServices: [
    //         { title: "Industrial IoT (IIoT)", desc: "Smart factory and predictive maintenance solutions.", image: "/services/iot.jpg" },
    //         { title: "Smart Home/City", desc: "Connected infrastructure for living spaces.", image: "/services/smart-city.jpg" },
    //         { title: "Asset Tracking", desc: "Real-time location and condition monitoring.", image: "/services/logistics.jpg" },
    //         { title: "Edge Computing", desc: "Processing data at the source for low latency.", image: "/services/cloud.jpg" },
    //     ],
    //     process: [
    //         { step: "01", title: "Hardware Design", desc: "Selecting sensors and connectivity modules." },
    //         { step: "02", title: "Firmware Dev", desc: "Embedded software for device intelligence." },
    //         { step: "03", title: "Cloud Integration", desc: "Secure data transmission and storage." },
    //         { step: "04", title: "Analytics", desc: "Visualizing data for operational insights." },
    //     ],
    //     industries: [
    //         { name: "Manufacturing", image: "/industries/manufacturing.jpg" },
    //         { name: "Logistics", image: "/industries/logistics.jpg" },
    //         { name: "Energy", image: "/industries/energy.jpg" },
    //         { name: "Healthcare", image: "/industries/healthcare.jpg" },
    //     ],
    //     techStack: [
    //         { name: "MQTT", icon: "/tech/mqtt.svg" },
    //         { name: "Raspberry Pi", icon: "/tech/raspberry-pi.svg" },
    //         { name: "Arduino", icon: "/tech/arduino.svg" },
    //         { name: "AWS IoT Core", icon: "/tech/aws-iot.svg" },
    //         { name: "Azure IoT Hub", icon: "/tech/azure-iot.svg" },
    //         { name: "Zigbee", icon: "/tech/zigbee.svg" },
    //         { name: "LoRaWAN", icon: "/tech/lorawan.svg" },
    //         { name: "C++", icon: "/tech/cpp.svg" }
    //     ]
    // },

    "cybersecurity": {
        hero: {
            title: "Cybersecurity",
            subtitle: "Protecting Digital Assets",
            description: "Security is the foundation of trust. We implement robust defense mechanisms to protect your infrastructure, data, and users from evolving cyber threats.",
        },
        overview: {
            heading: "Zero Trust Architecture",
            content: "In an interconnected world, perimeter defense is not enough. We advocate for a zero-trust approach, ensuring strict identity verification for every person and device trying to access resources on your network, regardless of whether they are sitting within or outside of the network perimeter.",
            image: "/services/cyber.jpg"
        },
        subServices: [
            { title: "Penetration Testing", desc: "Ethical hacking to identify vulnerabilities.", image: "/services/cyber.jpg" },
            { title: "Compliance Audits", desc: "Ensuring adherence to GDPR, HIPAA, bacterial standards.", image: "/services/advisory.jpeg" },
            { title: "Incident Response", desc: "Rapid remediation of security breaches.", image: "/services/cyber.jpg" },
            { title: "Identity Mgmt (IAM)", desc: "Secure access control and authentication.", image: "/services/cyber.jpg" },
        ],
        process: [
            { step: "01", title: "Assessment", desc: "Identifying risks and vulnerabilities." },
            { step: "02", title: "Strategy", desc: "Designing a defense-in-depth architecture." },
            { step: "03", title: "Implementation", desc: "Deploying security controls." },
            { step: "04", title: "Monitoring", desc: "24/7 threat detection and response." },
        ],
        industries: [
            { name: "Fintech", image: "/industries/banking.jpg" },
            { name: "Healthcare", image: "/industries/healthcare.jpg" },
            { name: "Government", image: "/industries/govtech.jpg" },
            { name: "Legal", image: "/industries/legal.jpg" },
        ],
        techStack: [
            { name: "Kali Linux", icon: "/tech/kali-linux.svg" },
            { name: "Wireshark", icon: "/tech/wireshark.svg" },
            { name: "Metasploit", icon: "/tech/metasploit.svg" },
            { name: "Burp Suite", icon: "/tech/burp-suite.svg" },
            { name: "Splunk", icon: "/tech/splunk.svg" },
            { name: "CrowdStrike", icon: "/tech/crowdstrike.svg" },
            { name: "Okta", icon: "/tech/okta.svg" },
            { name: "Auth0", icon: "/tech/auth0.svg" }
        ]
    },

    "cloud-devops": {
        hero: {
            title: "Cloud Computing & DevOps",
            subtitle: "Scalable Infrastructure for Agile Teams",
            description: "We modernize your infrastructure to be resilient, scalable, and cost-effective. Our DevOps practices accelerate delivery pipelines, ensuring high-quality software reaches users faster.",
        },
        overview: {
            heading: "Cloud Native Excellence",
            content: "Move beyond lift-and-shift. We architect cloud-native solutions that leverage microservices, serverless computing, and containerization to maximize agility and minimize operational overhead.",
            image: "/services/cloud.jpg"
        },
        subServices: [
            { title: "Cloud Migration", desc: "Seamless transition to AWS, Azure, or GCP.", image: "/services/cloud.jpg" },
            { title: "CI/CD Pipelines", desc: "Automated testing and deployment workflows.", image: "/services/devops.jpg" },
            { title: "Infrastructure as Code", desc: "Managing infrastructure via Terraform/Ansible.", image: "/services/cloud.jpg" },
            { title: "Kubernetes Mgmt", desc: "Orchestrating containerized applications.", image: "/services/network-monitoring.jpg" },
        ],
        process: [
            { step: "01", title: "Audit", desc: "Reviewing current infrastructure and costs." },
            { step: "02", title: "Architecture", desc: "Designing scalable cloud topology." },
            { step: "03", title: "Migration", desc: "Moving workloads with minimal downtime." },
            { step: "04", title: "Optimization", desc: "Automating scaling and cost management." },
        ],
        industries: [
            { name: "SaaS", image: "/industries/saas.jpg" },
            { name: "Fintech", image: "/industries/fintech.jpg" },
            { name: "E-Commerce", image: "/industries/retail.jpg" },
            { name: "Media", image: "/industries/telecom.jpg" },
        ],
        techStack: [
            { name: "AWS", icon: "/tech/aws.svg" },
            { name: "Azure", icon: "/tech/azure.svg" },
            { name: "Google Cloud", icon: "/tech/gcp.svg" },
            { name: "Docker", icon: "/tech/docker.svg" },
            { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
            { name: "Terraform", icon: "/tech/terraform.svg" },
            { name: "Jenkins", icon: "/tech/jenkins.svg" },
            { name: "GitLab CI", icon: "/tech/gitlab-ci.svg" }
        ]
    },

    "custom-software": {
        hero: {
            title: "Custom Software Development",
            subtitle: "Tailored Solutions for Unique Challenges",
            description: "Off-the-shelf software doesn't fit every mold. We engineer bespoke applications that address your specific business needs, integrating seamlessly with your existing ecosystem.",
        },
        overview: {
            heading: "Built for You",
            content: "Your business processes are unique, and your software should be too. We build scalable, secure, and high-performance custom software that streamlines operations and provides a competitive edge.",
            image: "/services/customsoftware.jpg"
        },
        subServices: [
            { title: "Enterprise ERP", desc: "Integrated management of core business processes.", image: "/services/erp.jpg" },
            { title: "CRM Solutions", desc: "Tools to manage customer relationships.", image: "/services/erp.jpg" },
            { title: "Legacy Modernization", desc: "Upgrading outdated systems to modern tech.", image: "/services/cloud.jpg" },
            { title: "API Integration", desc: "Connecting disparate systems for data flow.", image: "/services/api-integration.jpg" },
        ],
        process: [
            { step: "01", title: "Reg Gathering", desc: "Understanding detailed functional needs." },
            { step: "02", title: "Prototyping", desc: "Validating user flows and design." },
            { step: "03", title: "Agile Dev", desc: "Iterative development sprints." },
            { step: "04", title: "UAT", desc: "User Acceptance Testing and launch." },
        ],
        industries: [
            { name: "Manufacturing", image: "/industries/manufacturing.jpg" },
            { name: "Healthcare", image: "/industries/healthcare.jpg" },
            { name: "Logistics", image: "/industries/logistics.jpg" },
            { name: "Professional Services", image: "/industries/legal.jpg" },
        ],
        techStack: [
            { name: "Java", icon: "/tech/java.svg" },
            { name: ".NET", icon: "/tech/dotnet.svg" },
            { name: "Node.js", icon: "/tech/nodejs.svg" },
            { name: "Python", icon: "/tech/python.svg" },
            { name: "React", icon: "/tech/react.svg" },
            { name: "Angular", icon: "/tech/angular.svg" },
            { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
            { name: "MongoDB", icon: "/tech/mongodb.svg" }
        ]
    },

    "blockchain": {
        hero: {
            title: "Blockchain & Crypto",
            subtitle: "Decentralized Trust and Transparency",
            description: "We build secure, transparent, and decentralized applications. From smart contracts to tokenomics, we help you leverage blockchain technology to revolutionize value exchange.",
        },
        overview: {
            heading: "The Web3 Revolution",
            content: "Blockchain is redefining ownership and trust. We help businesses navigate the Web3 landscape, building decentralized applications (dApps) and implementing blockchain solutions for supply chain transparency, secure identity, and financial transactions.",
            image: "/services/blockchain.jpg"
        },
        subServices: [
            { title: "Smart Contracts", desc: "Self-executing contracts on Ethereum/Solana.", image: "/services/smart-contract.png" },
            { title: "DeFi Platforms", desc: "Decentralized financial instruments.", image: "/services/defi.jpg" },
            { title: "NFT Marketplaces", desc: "Platforms for digital asset trading.", image: "/services/nft.jpg" },
            { title: "Private Blockchains", desc: "Permissioned ledgers for enterprise use.", image: "/services/block.png" },
        ],
        process: [
            { step: "01", title: "Use Case Analysis", desc: "Determining blockchain suitability." },
            { step: "02", title: "Architecture", desc: "Choosing the right chain and consensus." },
            { step: "03", title: "Development", desc: "Smart contract coding and auditing." },
            { step: "04", title: "Deployment", desc: "Mainnet launch and node management." },
        ],
        industries: [
            { name: "Fintech", image: "/industries/fintech.jpg" },
            { name: "Supply Chain", image: "/industries/logistics.jpg" },
            { name: "Real Estate", image: "/industries/realestate.jpg" },
            { name: "Gaming", image: "/industries/saas.jpg" },
        ],
        techStack: [
            { name: "Solidity", icon: "/tech/solidity.svg" },
            { name: "Rust", icon: "/tech/rust.svg" },
            { name: "Ethereum", icon: "/tech/ethereum.svg" },
            { name: "Hyperledger", icon: "/tech/hyperledger.svg" },
            { name: "Web3.js", icon: "/tech/web3js.svg" },
            { name: "Hardhat", icon: "/tech/hardhat.svg" },
            { name: "Truffle", icon: "/tech/truffle.svg" },
            { name: "IPFS", icon: "/tech/ipfs.svg" }
        ]
    },

    "data-science": {
        hero: {
            title: "Data Science & Analytics",
            subtitle: "Turning Data into Strategic Capital",
            description: "Data is your most valuable asset. We extract, clean, and analyze your data to uncover hidden patterns, enabling evidence-based decision making and strategic planning.",
        },
        overview: {
            heading: "Insight Driven Strategy",
            content: "We move organizations from intuition-based to data-driven. Our data engineers and scientists build robust pipelines and visualization dashboards that provide a single source of truth for your business performance.",
            image: "/services/data-insight.jpg"
        },
        subServices: [
            { title: "Big Data Pipelines", desc: "ETL processes for massive datasets.", image: "/services/big-data.jpg" },
            { title: "BI Dashboards", desc: "Interactive visualizations (PowerBI/Tableau).", image: "/services/bi.png" },
            { title: "Data Warehousing", desc: "Centralized repositories (Snowflake/Redshift).", image: "/services/cloud.jpg" },
            { title: "Predictive Models", desc: "Forecasting revenue and market trends.", image: "/services/ai.jpg" },
        ],
        process: [
            { step: "01", title: "Ingestion", desc: "Gathering data from various sources." },
            { step: "02", title: "Processing", desc: "Cleaning and structuring data." },
            { step: "03", title: "Analysis", desc: "Applying statistical models." },
            { step: "04", title: "Visualization", desc: "Presenting actionable insights." },
        ],
        industries: [
            { name: "Retail", image: "/industries/retail.jpg" },
            { name: "Finance", image: "/industries/fintech.jpg" },
            { name: "Marketing", image: "/industries/saas.jpg" },
            { name: "Logistics", image: "/industries/logistics.jpg" },
        ],
        techStack: [
            { name: "Python", icon: "/tech/python.svg" },
            { name: "R", icon: "/tech/r.svg" },
            { name: "SQL", icon: "/tech/sql.svg" },
            { name: "Apache Spark", icon: "/tech/spark.svg" },
            { name: "Tableau", icon: "/tech/tableau.svg" },
            { name: "PowerBI", icon: "/tech/powerbi.svg" },
            { name: "Snowflake", icon: "/tech/snowflake.svg" },
            { name: "Databricks", icon: "/tech/databricks.svg" }
        ]
    },

    "web-development": {
        hero: {
            title: "Full-Stack Web Development",
            subtitle: "Architecting Digital Real Estate",
            description: "We don't just build websites; we construct high-performance digital assets. Using modern frameworks, we deliver fast, responsive, and SEO-optimized web applications that engage users.",
        },
        overview: {
            heading: "Beyond The Browser",
            content: "A website is a transactional engine. Whether you need a high-frequency trading dashboard or a global e-commerce hub, we engineer the web to handle scale, security, and speed.",
            image: "/services/fullstack.jpg"
        },
        subServices: [
            { title: "Custom Web Apps", desc: "React/Next.js architectures for complex logic.", image: "/services/custom-web.jpg" },
            { title: "Enterprise CMS", desc: "Headless CMS solutions for content control.", image: "/services/cms.jpg" },
            { title: "E-Commerce", desc: "High-volume transactional platforms.", image: "/services/ecommerce.jpg" },
            { title: "PWA Development", desc: "Native-app experience in the browser.", image: "/services/pwa.png" },
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Mapping business logic." },
            { step: "02", title: "Design", desc: "UI/UX wireframes and mockups." },
            { step: "03", title: "Engineering", desc: "Frontend and backend coding." },
            { step: "04", title: "Deployment", desc: "CI/CD and performance tuning." },
        ],
        industries: [
            { name: "SaaS", image: "/industries/saas.jpg" },
            { name: "E-Commerce", image: "/industries/retail.jpg" },
            { name: "Education", image: "/industries/edtech.jpg" }, // Assuming EdTech/Generic
            { name: "Media", image: "/industries/telecom.jpg" },
        ],
        techStack: [
            { name: "Next.js", icon: "/tech/nextjs.svg" },
            { name: "React", icon: "/tech/react.svg" },
            { name: "Node.js", icon: "/tech/nodejs.svg" },
            { name: "TypeScript", icon: "/tech/typescript.svg" },
            { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
            { name: "GraphQL", icon: "/tech/graphql.svg" },
            { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
            { name: "Vercel", icon: "/tech/vercel.svg" }
        ]
    },

    "mobile-app": {
        hero: {
            title: "Mobile App Development",
            subtitle: "Experiences at Your Fingertips",
            description: "We create native and cross-platform mobile applications that deliver smooth performance and intuitive interfaces. Capture your audience on the devices they use most.",
        },
        overview: {
            heading: "Mobile-First Innovation",
            content: "From consumer-facing apps to enterprise mobility solutions, we build mobile experiences that drive engagement. We focus on performance, battery efficiency, and platform-specific design patterns.",
            image: "/services/mobileapp.jpg"
        },
        subServices: [
            { title: "iOS Development", desc: "Native Swift apps for the Apple ecosystem.", image: "/services/ios-dev.png" },
            { title: "Android Development", desc: "Kotlin-based apps for global reach.", image: "/services/android-dev.jpg" },
            { title: "Cross-Platform", desc: "React Native/Flutter for unified codebases.", image: "/services/cross.jpg" },
            { title: "Wearable Apps", desc: "Extensions for watches and IoT devices.", image: "/services/wearable.jpg" },
        ],
        process: [
            { step: "01", title: "Strategy", desc: "Defining platform and stack." },
            { step: "02", title: "UI Design", desc: "Mobile-specific interaction design." },
            { step: "03", title: "Development", desc: "Coding and API integration." },
            { step: "04", title: "App Store", desc: "Submission and optimization." },
        ],
        industries: [
            { name: "Fintech", image: "/industries/fintech.jpg" },
            { name: "Healthcare", image: "/industries/healthcare.jpg" },
            { name: "Retail", image: "/industries/retail.jpg" },
            { name: "Social", image: "/industries/saas.jpg" },
        ],
        techStack: [
            { name: "Swift", icon: "/tech/swift.svg" },
            { name: "Kotlin", icon: "/tech/kotlin.svg" },
            { name: "React Native", icon: "/tech/react-native.svg" },
            { name: "Flutter", icon: "/tech/flutter.svg" },
            { name: "Firebase", icon: "/tech/firebase.svg" },
            { name: "SQLite", icon: "/tech/sqlite.svg" },
            { name: "Realm", icon: "/tech/realm.svg" },
            { name: "Fastlane", icon: "/tech/fastlane.svg" }
        ]
    },

    "ui-ux": {
        hero: {
            title: "Product Design & UX",
            subtitle: "Designing for Humans",
            description: "Great technology needs great design. We craft intuitive, accessible, and aesthetically pleasing interfaces that ensure user adoption and satisfaction.",
        },
        overview: {
            heading: "Empathy Driven Design",
            content: "We don't just design screens; we design journeys. Our user-centric approach involves deep research, prototyping, and testing to create interfaces that users love and understand intuitively.",
            image: "/services/uiux.jpg"
        },
        subServices: [
            { title: "User Research", desc: "Interviews and persona development.", image: "/services/uiux.jpg" },
            { title: "Wireframing", desc: "Structural blueprints of the application.", image: "/services/custom-web.jpg" },
            { title: "High-Fidelity UI", desc: "Pixel-perfect visual design systems.", image: "/services/uiux.jpg" },
            { title: "Prototyping", desc: "Interactive mockups for user testing.", image: "/services/prototyping.jpg" },
        ],
        process: [
            { step: "01", title: "Research", desc: "Understanding user needs." },
            { step: "02", title: "Ideation", desc: "Sketching possible solutions." },
            { step: "03", title: "Prototyping", desc: "Creating testable models." },
            { step: "04", title: "Handoff", desc: "Specs for development teams." },
        ],
        industries: [
            { name: "SaaS", image: "/industries/saas.jpg" },
            { name: "Consumer Apps", image: "/industries/retail.jpg" },
            { name: "Fintech", image: "/industries/fintech.jpg" },
            { name: "Enterprise", image: "/industries/manufacturing.jpg" },
        ],
        techStack: [
            { name: "Figma", icon: "/tech/figma.svg" },
            { name: "Adobe XD", icon: "/tech/adobe-xd.svg" },
            { name: "Sketch", icon: "/tech/sketch.svg" },
            { name: "InVision", icon: "/tech/invision.svg" },
            { name: "Zeplin", icon: "/tech/zeplin.svg" },
            { name: "Principle", icon: "/tech/principle.svg" },
            { name: "Miro", icon: "/tech/miro.svg" },
            { name: "Framer", icon: "/tech/framer.svg" }
        ]
    },

    "staff-augmentation": {
        hero: {
            title: "IT Staff Augmentation",
            subtitle: "Scale Your Team on Demand",
            description: "Access top-tier engineering talent without the overhead of hiring. We provide vetted developers, designers, and QA engineers who integrate seamlessly into your existing workflows.",
        },
        overview: {
            heading: "Talent Without Borders",
            content: "Close the skills gap instantly. Whether you need a single specialist or a dedicated squad, our staff augmentation services allow you to scale your team up or down based on project demands.",
            image: "/services/staff.jpg"
        },
        subServices: [
            { title: "Dedicated Teams", desc: "Long-term squads for product development.", image: "/services/staff.jpg" },
            { title: "Specialist Hire", desc: "Niche experts for specific problems.", image: "/services/advisory.jpeg" },
            { title: "QA Augmentation", desc: "Testers to ensure release quality.", image: "/services/customsoftware.jpg" },
            { title: "DevOps Eng", desc: "Infrastructure experts for deployment.", image: "/services/cloud.jpg" },
        ],
        process: [
            { step: "01", title: "Needs Assessment", desc: "Defining roles and skills." },
            { step: "02", title: "Matching", desc: "Selecting the right candidates." },
            { step: "03", title: "Onboarding", desc: "Integrating into your tools." },
            { step: "04", title: "Management", desc: "Ongoing HR and performance support." },
        ],
        industries: [
            { name: "Startups", image: "/industries/saas.jpg" },
            { name: "Enterprise", image: "/industries/manufacturing.jpg" },
            { name: "Agencies", image: "/industries/saas.jpg" },
            { name: "Govt", image: "/industries/govtech.jpg" },
        ],
        techStack: [
            { name: "Jira", icon: "/tech/jira.svg" },
            { name: "Slack", icon: "/tech/slack.svg" },
            { name: "Trello", icon: "/tech/trello.svg" },
            { name: "GitHub", icon: "/tech/github.svg" },
            { name: "Zoom", icon: "/tech/zoom.svg" },
            { name: "Confluence", icon: "/tech/confluence.svg" },
            { name: "Teams", icon: "/tech/microsoft-teams.svg" },
            { name: "Asana", icon: "/tech/asana.svg" }
        ]
    },

    "consulting": {
        hero: {
            title: "Strategic Tech Advisory",
            subtitle: "Navigating Digital Transformation",
            description: "Technology moves fast. We provide the strategic guidance you need to make informed decisions, mitigate risks, and align your IT roadmap with your business goals.",
        },
        overview: {
            heading: "CTO-Level Insight",
            content: "We act as your technical partners. From auditing legacy systems to planning digital transformation roadmaps, we bring decades of engineering leadership to your boardroom.",
            image: "/services/advisory.jpeg"
        },
        subServices: [
            { title: "Tech Roadmap", desc: "Long-term planning for IT evolution.", image: "/services/advisory.jpeg" },
            { title: "Due Diligence", desc: "Auditing software for M&A.", image: "/services/duediligence.jpeg" },
            { title: "Architecture Review", desc: "Ensuring scalability and best practices.", image: "/services/cloud.jpg" },
            { title: "Security Strategy", desc: "Risk assessment and policy formation.", image: "/services/cyber.jpg" },
        ],
        process: [
            { step: "01", title: "Audit", desc: "Current state assessment." },
            { step: "02", title: "Gap Analysis", desc: "Identifying missing capabilities." },
            { step: "03", title: "Strategy", desc: "Defining the path forward." },
            { step: "04", title: "Governance", desc: "Establishing oversight frameworks." },
        ],
        industries: [
            { name: "Private Equity", image: "/industries/fintech.jpg" },
            { name: "Healthcare", image: "/industries/healthcare.jpg" },
            { name: "Manufacturing", image: "/industries/manufacturing.jpg" },
            { name: "Retail", image: "/industries/retail.jpg" },
        ],
        techStack: [
            { name: "TOGAF", icon: "/tech/togaf.svg" },
            { name: "AWS Well-Architected", icon: "/tech/aws.svg" },
            { name: "Six Sigma", icon: "/tech/six-sigma.svg" },
            { name: "Agile", icon: "/tech/agile.svg" },
            { name: "Lean", icon: "/tech/lean.svg" },
            { name: "ITIL", icon: "/tech/itil.svg" },
            { name: "COBIT", icon: "/tech/cobit.svg" },
            { name: "ISO 27001", icon: "/tech/iso.svg" }
        ]
    }
};