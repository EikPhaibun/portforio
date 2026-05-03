export interface Project {
  title: string;
  company?: string;
  description: string;
  tasks: string[];
  category?: string;
  ctaLabel?: string;
  modalSummary?: string;
  highlights?: {
    value: string;
    label: string;
  }[];
  signals?: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  detailedGroups?: {
    title: string;
    summary?: string;
    items: string[];
  }[];
  spotlight?: {
    title: string;
    description: string;
    items: string[];
  };
  caseStudy?: {
    theme?: 'workflow' | 'finance' | 'crm' | 'mobile';
    cardLabel: string;
    heroLabel: string;
    subtitle: string;
    narrative: string;
    cardTags: string[];
    metrics: {
      icon: 'clock' | 'shield' | 'users' | 'check';
      label: string;
      value: string;
      note: string;
    }[];
    featureCards: {
      icon: 'workflow' | 'lock' | 'history' | 'cloud';
      title: string;
      description: string;
    }[];
    tabs: {
      id: string;
      label: string;
      title: string;
      summary: string;
      bullets?: string[];
    }[];
    facts: {
      icon: 'factory' | 'layers' | 'shield' | 'server' | 'user';
      label: string;
      value: string;
    }[];
  };
  logo?: string;
}

export interface Profile {
  name: string;
  role: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  about: string;
  education: {
    school: string;
    degree: string;
    period: string;
    location: string;
    details?: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    location: string;
    description: (string | { title: string; items: string[] })[];
  }[];
  certificates: string[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profileData: Profile = {
  name: "Phaibun Poonmaroeng",
  role: "NetSuite Developer & Enterprise Systems Specialist",
  contact: {
    email: "Poonmareong@gmail.com",
    phone: "084-116-8102",
    location: "325/103 Kheha Romklao 37, Lat Krabang, Bangkok",
    linkedin: "linkedin.com/in/phaibun6533",
    github: "github.com/EikPhaibun"
  },
  about: "Experienced NetSuite Developer with hands-on expertise in SuiteScript (1.0, 2.0, 2.1), SuiteFlow, and end-to-end ERP customization. Adept at translating business requirements into scalable technical solutions and integrating NetSuite with external systems. Strong collaborator with cross-functional teams to deliver high-performance, automated business processes across Finance, CRM, and custom modules.",
  education: [
    {
      school: "Institute of Vocational Education Bangkok",
      degree: "Bachelor's degree (B.SC), Information Technology",
      period: "05/23 - Present",
      location: "Bangkok, TH",
      details: "Major of Information Technology - Business information technology"
    },
    {
      school: "Siam Technology College (Siam Tech)",
      degree: "High Vocational Certificate (Dip. Voc. Cert.), Information Technology and Digital Media",
      period: "05/21 - 03/23",
      location: "Bangkok, TH",
      details: "Digital business technology (mobile applications)"
    }
  ],
  experience: [
    {
      role: "Senior Full Stack Developer & ERP Specialist",
      company: "MV Solution Co., Ltd",
      period: "Bangkok, TH",
      location: "Bangkok, TH",
      description: [
        "Lead Developer & ERP Specialist delivering end-to-end solutions for enterprise clients, handling full-stack development, ERP customization, and mobile applications.",
        {
          title: "Enterprise Workflow Platform (Full Stack)",
          items: [
            "Led the design and delivery of an enterprise internal workflow and approval platform that consolidated multiple factory and QA document processes into one production-ready system.",
            "Engineered reusable multi-step approval workflows with role-based routing, task inboxes, follow-up queues, file attachments, and ownership tracking so teams could see exactly where each request was pending.",
            "Delivered business-critical modules for Import Clean Room, Material Withdraw, Adhesive Control, Prototype Approval, Measurement Requests, Internal Change Approval, and Nozzle Lifecycle management within a shared platform.",
            "Built role-aware frontend experiences with React 18, Vite, and Chakra UI, including dashboard views, multi-form UX, status visualization, and navigation tailored to different user groups.",
            "Developed Flask and SQLAlchemy backend services backed by PostgreSQL to enforce workflow transitions, business rules, approval integrity, and secure REST API access.",
            "Designed Internal Change Approval as a flagship flow with phase-based approvals, approver inboxes, follow-up boards, export/import tooling, and structured document history for high-traceability change control.",
            "Implemented audit logging, searchable history, and operational dashboards that reduced manual document chasing and made retrospective review significantly easier for cross-functional teams.",
            "Built a notification center and background job processing with Celery and Redis to support email delivery, asynchronous tasks, and workflow follow-ups across departments.",
            "Delivered administrative tooling for login/reset password, user and role management, flow-level permissions, and Excel-based access import for internal support teams.",
            "Prepared Microsoft SSO readiness and role-based security controls, aligning authentication flows and JWT-protected APIs with enterprise access requirements.",
            "Productionized deployment with Docker Compose, Traefik, Prometheus metrics, health endpoints, and structured monitoring practices to ensure reliability in a real organizational environment."
          ]
        },
        {
          title: "NetSuite ERP Development",
          items: [
            "Developed complex SuiteScript 2.1 solutions spanning all script types: Client Scripts (UI control), UserEvent Scripts (record lifecycle), Scheduled Scripts (batch processing), Map/Reduce (large datasets).",
            "Built custom NetSuite modules with Custom Records, Custom Fields, Scripted Sublists, and relationship mappings to model complex business domains.",
            "Implemented RESTlet APIs with Token-Based Authentication (TBA/OAuth 1.0) for secure integration with external CRM, e-commerce platforms, and payment gateways.",
            "Designed multi-stage SuiteFlow workflows for automated business processes including membership renewal, transaction approvals, and inventory replenishment.",
            "Created interactive Suitelets with custom HTML/CSS UI for specialized workflows like popup renewal forms, payment result processing, and batch data imports.",
            "Developed RFM (Recency, Frequency, Monetary) Analysis system with Scheduled Scripts and custom summary fields to provide actionable donor insights.",
            "Optimized script performance by reducing governance usage, implementing efficient N/S search queries, and refactoring legacy code to prevent time-outs.",
            "Built data migration pipelines with CSV import validation, field mapping automation, and error handling for seamless data cleansing and migration.",
            "Implemented custom transaction automation including Auto-Renew logic, payment webhook processing, and automatic history record generation.",
            "Designed security architecture with role-based permissions, field-level access control, and script-enforced business rules for data integrity.",
            "Created comprehensive documentation including API specifications, data flow diagrams, business logic documentation, and user training materials.",
            "Utilized advanced NetSuite features: Saved Searches with complex formulas, Custom Reports, Dashboard integration, and CSV/Excel export automation."
          ]
        },
        {
          title: "Dynamics 365 Business Central",
          items: [
            "Developed and deployed AL Language extensions to customize Tables, Pages, and Codeunits, tailoring the ERP to specific manufacturing requirements.",
            "Managed containerized development environments using Docker/Podman to ensure consistent testing and deployment workflows.",
            "Implemented OData and REST API integrations for real-time data exchange with external web portals and POS systems.",
            "Designed complex RDLC and Word layout reports for invoices, purchase orders, and financial statements.",
            "Customized Role Centers and added validation logic to enhance user experience and data integrity."
          ]
        },
        {
          title: "Mobile WMS (Flutter)",
          items: [
            "Engineered an offline-first Warehouse Management System using Flutter, enabling seamless operation in low-connectivity warehouse zones.",
            "Implemented Clean Architecture with Riverpod for state management and SQLite for robust local data persistence and sync queues.",
            "Developed a background synchronization service with retry policies to ensure data consistency between the handheld app and the ERP.",
            "Integrated hardware peripherals including camera barcode scanners, Bluetooth thermal printers (ESC/POS), and handheld terminals.",
            "Optimized UI/UX for rapid scanning and inventory counting, reducing worker error rates."
          ]
        }
      ]
    },
    {
      role: "POS Support Desk",
      company: "Living Mobile Co., Ltd. (food story)",
      period: "Bangkok, TH",
      location: "Bangkok, TH",
      description: [
        "Offers expert support for POS system, hardware, and software issues.",
        "Diagnosed and resolved POS system issues to minimize business disruptions and maintain customer service.",
        "Used remote tools and phone support, achieving a high first-call resolution rate.",
        "Maintained detailed records of customer interactions, including reported issues and follow-up actions.",
        "Educated customers on efficient POS system usage, reducing recurring issues.",
        "Assisted in installing and configuring POS system upgrades, including hardware and software.",
        "Participated in quality assurance checks to ensure POS system accuracy and functionality."
      ]
    }
  ],
  certificates: [
    "Transform business teaching with Oracle NetSuite - Oracle Academy",
    "Impactful Presentations Workshop - Oracle Academy",
    "SuiteLife: SuiteWeek - Oracle JPAC Training"
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "HTML", "CSS", "JavaScript", "TypeScript",
        "C", "C#", "Python", "R", "Kotlin", "Dart",
        "SQL", "SuiteScript", "AL Language",
        "React", "Next.js", "Vue.js", "Flutter",
        "Node.js", "Flask", "Django"
      ]
    },
    {
      category: "ERP & Enterprise",
      items: [
        "NetSuite", "Dynamics 365 BC", "Odoo", "ERPNext",
        "Salesforce", "Swiff Dynamic", "SuiteFlow", "SuiteTalk"
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker", "Podman", "Kubernetes", "Git",
        "Jira", "Freshdesk", "Power BI", "Looker Studio",
        "PostgreSQL", "Redis", "Traefik"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership", "Project Management", "Problem Solving",
        "Cross-functional Collaboration", "Result Oriented"
      ]
    }
  ]
};

export const portfolioData: Project[] = [
  {
    title: "Enterprise Workflow Platform",
    company: "MV Solution Co., Ltd",
    category: "Full-stack",
    ctaLabel: "Project Overview",
    logo: "/images/Approval Forkflow.png",
    description: "Built and delivered a multi-flow internal approval platform for factory and QA teams, covering the full stack from role-aware frontend workflows to backend services, background jobs, and production deployment.",
    modalSummary: "This project highlights end-to-end full-stack ownership across workflow design, frontend UX, backend business rules, asynchronous processing, and production readiness in a document-heavy enterprise environment.",
    highlights: [
      { value: "7+", label: "Business flows unified in one platform" },
      { value: "Multi-step", label: "Approval orchestration across teams" },
      { value: "RBAC", label: "Access control by role and workflow" },
      { value: "Ops-ready", label: "Docker, background jobs, and monitoring" }
    ],
    signals: [
      "Built as a shared operational platform rather than a one-off approval form.",
      "Gave multiple departments a consistent way to submit, review, approve, and track work.",
      "Handled document-heavy workflows with attachments, audit history, and export tooling.",
      "Paired application delivery with background jobs, monitoring, and access control for real production use."
    ],
    tasks: [
      "Workflow Architecture & Delivery",
      "Approval Engine, Routing & RBAC",
      "Dashboards, Task Inbox & Tracking",
      "Notifications, Background Jobs & Auditability",
      "Admin Tooling & Excel-based Access Import",
      "Production Deployment & Monitoring"
    ],
    caseStudy: {
      cardLabel: "FULL-STACK",
      heroLabel: "Engineering Case Study",
      subtitle: "Built and shipped a multi-flow approval platform for factory and QA teams",
      narrative: "This project is a strong example of my end-to-end engineering work: designing approval logic, building role-aware React interfaces, implementing Flask and PostgreSQL services, wiring Celery and Redis jobs, and preparing the platform for real production use.",
      cardTags: [
        "Approval engine design",
        "Role-aware dashboard UX",
        "Flask + PostgreSQL backend",
        "Celery, Docker, monitoring"
      ],
      metrics: [
        {
          icon: "clock",
          label: "Workflow modules",
          value: "7+",
          note: "delivered under one shared platform"
        },
        {
          icon: "shield",
          label: "Approval routing",
          value: "Multi-step",
          note: "business rules, escalations, and ownership tracking"
        },
        {
          icon: "users",
          label: "Active users",
          value: "300+",
          note: "active across daily factory and QA operations"
        },
        {
          icon: "check",
          label: "Delivery scope",
          value: "Full-stack",
          note: "frontend, backend, workers, and deployment"
        }
      ],
      featureCards: [
        {
          icon: "workflow",
          title: "Approval engine design",
          description: "Implemented reusable multi-step approvals, conditional routing, acknowledgements, and ownership tracking across several business flows."
        },
        {
          icon: "lock",
          title: "Role-aware user experience",
          description: "Built task inboxes, dashboards, follow-up views, and multi-form workflows that changed based on each user’s responsibilities."
        },
        {
          icon: "history",
          title: "Backend rules and data model",
          description: "Developed Flask and SQLAlchemy services that enforced workflow transitions, stored audit history, and handled attachments safely."
        },
        {
          icon: "cloud",
          title: "Production operations",
          description: "Integrated Celery, Redis, email notifications, Docker Compose, Traefik, and monitoring so the system could run reliably in production."
        }
      ],
      tabs: [
        {
          id: "role",
          label: "My Role",
          title: "My Role",
          summary: "I worked across the full delivery surface of this platform, from workflow design and frontend implementation to backend logic, asynchronous jobs, and production deployment.",
          bullets: [
            "Designed how approval flows, roles, and state transitions should work across multiple modules",
            "Built role-aware React and Vite interfaces for request submission, approval, dashboarding, and follow-up",
            "Implemented Flask and SQLAlchemy backend services that enforced workflow integrity and auditability",
            "Handled background jobs, notification flows, containerized deployment, and operational monitoring"
          ]
        },
        {
          id: "challenges",
          label: "Challenges",
          title: "Technical Challenges",
          summary: "The hard part was not building a single form. It was creating a reusable workflow platform that could support many business flows without losing clarity, control, or traceability.",
          bullets: [
            "Each workflow had different routing rules, approval sequences, attachment requirements, and participant roles",
            "Users needed clear visibility into who owned the next step and where requests were currently blocked",
            "The system had to capture a trustworthy audit trail across status changes, comments, files, and administrative actions",
            "Operational support teams needed tooling to manage access, imports, and follow-up without breaking workflow integrity"
          ]
        },
        {
          id: "delivery",
          label: "Contributions",
          title: "Key Contributions",
          summary: "My contribution was to turn those business requirements into a working internal platform with shared workflow mechanics and flow-specific behavior where it mattered.",
          bullets: [
            "Implemented multi-step approvals, conditional routing, role-based action control, and ownership tracking",
            "Built dashboards, task inboxes, and follow-up boards so users could act on pending work without manual chasing",
            "Added administrative tooling for login, password reset, user roles, flow permissions, and Excel-based access import",
            "Integrated notifications, background jobs, and export tooling to support daily operational usage"
          ]
        },
        {
          id: "architecture",
          label: "Architecture",
          title: "Architecture Decisions",
          summary: "The architecture balanced fast delivery on the frontend with durable workflow control on the backend, while keeping deployment and operations practical for an enterprise setting.",
          bullets: [
            "Used React 18, Vite, and Chakra UI for complex form flows, status visibility, and role-aware navigation",
            "Used Flask, SQLAlchemy, and PostgreSQL to model workflow data, approval records, and audit trails reliably",
            "Used Celery and Redis for email delivery, asynchronous processing, and follow-up tasks outside the request cycle",
            "Used Docker Compose, Traefik, health checks, and Prometheus metrics to keep deployment and monitoring production-friendly"
          ]
        },
        {
          id: "tech-stack",
          label: "Tech Stack",
          title: "Tech Stack",
          summary: "The stack reflects the kind of full-stack work I can deliver: interactive frontend, durable backend services, async processing, and deployment discipline."
        },
        {
          id: "impact",
          label: "Impact",
          title: "Engineering Impact",
          summary: "What this project demonstrates most clearly is my ability to translate messy internal operations into maintainable full-stack software with real production constraints.",
          bullets: [
            "Delivered one shared platform that covered several approval-heavy workflows instead of separate point solutions",
            "Improved day-to-day execution by making pending work, ownership, and follow-up easier to see",
            "Strengthened auditability through structured workflow history, attachments, and decision trails",
            "Showed end-to-end ownership across UI, APIs, data model, workers, deployment, and monitoring"
          ]
        }
      ],
      facts: [
        {
          icon: "factory",
          label: "Industry",
          value: "Manufacturing"
        },
        {
          icon: "layers",
          label: "Platform Scope",
          value: "Workflow + approval engine"
        },
        {
          icon: "shield",
          label: "Core Stack",
          value: "React, Flask, PostgreSQL"
        },
        {
          icon: "server",
          label: "Operations",
          value: "Celery, Redis, Docker"
        },
        {
          icon: "user",
          label: "My Role",
          value: "End-to-end full-stack delivery"
        }
      ]
    },
    detailedGroups: [
      {
        title: "Platform Overview",
        summary: "This was positioned as a shared internal platform rather than a standalone approval form, with the goal of giving multiple teams one consistent way to submit, review, approve, and track operational documents.",
        items: [
          "Brought together factory and QA document processes that had previously been spread across email, spreadsheets, and disconnected approvals.",
          "Connected requesters, reviewers, approvers, and support teams through a single workflow model that made handoffs and responsibility clearer.",
          "Introduced dashboards, task inboxes, follow-up views, and searchable history so teams could see status, backlog, and ownership without manual chasing.",
          "Improved traceability and day-to-day execution by standardizing how approvals, attachments, comments, and status changes were recorded."
        ]
      },
      {
        title: "Approval Logic and Control Model",
        summary: "The platform revolved around reusable workflow logic, with each flow able to enforce its own business rules without losing consistency in how work was routed, approved, and audited.",
        items: [
          "Implemented multi-step approval sequences, conditional routing, mandatory acknowledgements, and attachment requirements tailored to each workflow.",
          "Applied role-based and flow-based access control so users only saw the actions, queues, and administration features relevant to their responsibilities.",
          "Tracked ownership at every stage, making it clear who needed to act next, where requests were waiting, and which items required follow-up.",
          "Captured audit history across approvals, comments, attachments, status transitions, and administrative actions to support review and accountability.",
          "Exposed secure backend services and APIs that preserved workflow integrity while handling complex transitions safely."
        ]
      },
      {
        title: "Operational Workflows Delivered",
        summary: "The system supported several business-critical processes under one platform, allowing different departments to work in the same environment while keeping each flow’s rules and terminology intact.",
        items: [
          "Import Clean Room handled document submission, related-section acknowledgement, QA review, and supporting files such as MSDS or lab documentation.",
          "Material Withdraw supported issue, return, and transfer scenarios with store queues, document tracking, history, and notifications.",
          "Adhesive Flow managed freezer stock activity from deposit and withdrawal through usage updates, disposal, and expiry-related visibility.",
          "Prototype and Measurement workflows covered stage-based approvals, QA assignment rules, document lookup, and work return or closure states.",
          "Nozzle Flow tracked receive, withdraw, usage, cleaning, disposal, scan-out, and maintenance planning across the equipment lifecycle."
        ]
      },
      {
        title: "Featured Workflow: Internal Change Approval",
        summary: "Among the available modules, Internal Change Approval best represented the complexity of the platform because it combined formal approval governance, document-heavy collaboration, and operational follow-through.",
        items: [
          "Structured requests by phase and part context so that approvers could review changes with the right level of operational detail.",
          "Provided approver inboxes, follow-up boards, and summary dashboards that made long-running requests easier to supervise and unblock.",
          "Included PDF and CSV export together with Excel import/export to support reporting, downstream coordination, and surrounding business processes.",
          "Allowed multiple supporting documents and preserved a complete decision trail so teams could review what changed, who approved it, and when each step occurred.",
          "Showcased the platform's ability to handle layered business rules and cross-functional approvals without collapsing into a brittle form flow."
        ]
      },
      {
        title: "User Experience, Administration, and Notifications",
        summary: "The product experience had to work for both day-to-day requesters and operational administrators, so the interface focused on clarity, role-aware navigation, and visibility into active work.",
        items: [
          "Built the frontend with React 18, Vite, and Chakra UI, with an emphasis on multi-form usability, role-based navigation, and readable status presentation.",
          "Added a notification center and email-driven follow-up so users could stay aligned on pending work and approval changes without relying on manual reminders.",
          "Supported administrative operations including login and password reset, user management, role assignment, flow-level permissions, and Excel-based access import.",
          "Designed search, filter, and attachment handling around real document-heavy usage rather than a simplified demo scenario.",
          "Used Celery and Redis to support background processing and workflow follow-up tasks that should not block the main application experience."
        ]
      },
      {
        title: "Production Architecture and Observability",
        summary: "From the beginning, the platform was treated as a system that needed to run reliably in an enterprise environment, not just as an internal prototype.",
        items: [
          "Used Flask, SQLAlchemy, and PostgreSQL as the core application stack for durable workflow data, approval history, and audit records.",
          "Packaged services with Docker Compose and Traefik so the application, worker processes, database, and supporting infrastructure could be deployed coherently.",
          "Added health endpoints, structured logging, and Prometheus metrics to make runtime visibility and issue diagnosis practical.",
          "Prepared the platform for enterprise access requirements with Microsoft SSO readiness, JWT-protected APIs, and role-aware authorization.",
          "Built the system with maintainability in mind, including background workers, operational tooling, and production-focused service boundaries."
        ]
      }
    ],
    spotlight: {
      title: "Most Complex Flow",
      description: "Internal Change Approval best reflects the depth of the work because it combines structured review paths, multi-party coordination, export tooling, and strong traceability in one flow.",
      items: [
        "Phase-aware review paths with clear approver responsibility",
        "Follow-up boards and summary dashboards for long-running requests",
        "Export and import tooling for operational reporting and handoff",
        "Complete attachment history and decision trace for retrospective review"
      ]
    },
    techStack: [
      { category: "Frontend", items: ["React 18", "Vite", "Chakra UI", "TypeScript"] },
      { category: "Backend", items: ["Flask", "SQLAlchemy", "PostgreSQL", "REST API"] },
      { category: "Async & Security", items: ["Redis", "Celery", "Microsoft SSO Readiness", "JWT / RBAC"] },
      { category: "DevOps", items: ["Docker Compose", "Traefik", "Prometheus Metrics", "Health Monitoring"] }
    ]
  },
  {
    title: "Microsoft Dynamics 365 Business Central (BC)",
    company: "MV Solution Co., Ltd",
    category: "ERP",
    ctaLabel: "Project Overview",
    logo: "/images/bc-logo.png",
    description: "Customized Microsoft Dynamics 365 Business Central for a natural latex manufacturing business, with the main focus on finance and accounting workflows, AL extensions, reports, validation rules, and ERP delivery support.",
    tasks: [
      "Finance & Accounting Customization",
      "AL Extensions, Pages & Reports",
      "Posting Rules, Validation & Permissions",
      "Sandbox Setup, Testing & Deployment",
      "Role-based ERP UX for Finance Teams",
      "Functional Support & User Handover"
    ],
    caseStudy: {
      theme: "finance",
      cardLabel: "ERP FINANCE",
      heroLabel: "Engineering Case Study",
      subtitle: "Customized Business Central for finance and accounting operations in a natural latex manufacturing business",
      narrative: "This project reflects ERP-focused engineering work rather than a generic web application. I customized Microsoft Dynamics 365 Business Central for a company producing and processing natural latex, with the main emphasis on finance and accounting workflows, AL extensions, reports, validation logic, and controlled delivery through sandbox environments.",
      cardTags: [
        "Finance & accounting customization",
        "AL extensions and reports",
        "BC sandbox and deployment",
        "Manufacturing ERP fit"
      ],
      metrics: [
        {
          icon: "clock",
          label: "Business focus",
          value: "Finance",
          note: "GL, AP, AR, posting, and reporting"
        },
        {
          icon: "shield",
          label: "ERP stack",
          value: "AL",
          note: "extensions, pages, codeunits, and reports"
        },
        {
          icon: "users",
          label: "Industry context",
          value: "Manufacturing",
          note: "natural latex production and processing"
        },
        {
          icon: "check",
          label: "Delivery scope",
          value: "ERP lifecycle",
          note: "setup, testing, deployment, and support"
        }
      ],
      featureCards: [
        {
          icon: "workflow",
          title: "Finance process customization",
          description: "Adapted Business Central around finance and accounting operations, including document handling, posting flow, and day-to-day accounting needs."
        },
        {
          icon: "lock",
          title: "AL extensions and reports",
          description: "Built AL extensions, pages, page extensions, codeunits, and report layouts to fit the business without breaking the extension model."
        },
        {
          icon: "history",
          title: "Data integrity and control",
          description: "Added validation rules, document checks, and role-aware behavior so accounting data stayed consistent, controlled, and auditable."
        },
        {
          icon: "cloud",
          title: "Sandbox, testing, deployment",
          description: "Worked with Docker and Podman sandboxes, extension publishing, testing, and rollout support to keep delivery safe and repeatable."
        }
      ],
      tabs: [
        {
          id: "role",
          label: "My Role",
          title: "My Role",
          summary: "My role in this project was to customize Business Central around finance and accounting operations while fitting the ERP to a real manufacturing business that produces and processes natural latex.",
          bullets: [
            "Translated accounting and operational requirements into AL-based ERP customization",
            "Built and adjusted tables, pages, reports, and business rules within the Business Central extension model",
            "Handled sandbox setup, testing, publishing, and deployment support for extension delivery",
            "Worked close to the business side so finance users could use the ERP with less manual workaround"
          ]
        },
        {
          id: "challenges",
          label: "Challenges",
          title: "Technical Challenges",
          summary: "The challenge was not only writing AL code. It was shaping finance and accounting behavior around standard Business Central patterns while respecting data integrity, posting accuracy, and maintainability.",
          bullets: [
            "Finance workflows required stricter validation and posting behavior than simple field customization",
            "The ERP had to support a manufacturing context without turning into brittle over-customized logic",
            "Reports, documents, and user-facing pages had to align with how accounting teams actually worked",
            "Changes needed to be testable and deployable through extension-based delivery rather than direct core modification"
          ]
        },
        {
          id: "delivery",
          label: "Contributions",
          title: "Key Contributions",
          summary: "My contribution was to turn finance-heavy requirements into maintainable Business Central customizations that fit both accounting control and day-to-day ERP usage.",
          bullets: [
            "Developed AL extensions for tables, pages, page extensions, codeunits, and supporting business logic",
            "Customized finance-facing forms, reports, and layouts so documents and outputs matched actual accounting needs",
            "Implemented validation logic, permissions, and role-aware behavior to reduce user error and improve data consistency",
            "Supported testing, publishing, and deployment through BC sandbox workflows and extension rollout"
          ]
        },
        {
          id: "architecture",
          label: "Architecture",
          title: "Architecture Decisions",
          summary: "The implementation followed the Business Central extension model so the system stayed maintainable, upgrade-friendly, and easier to manage than direct customization against the base application.",
          bullets: [
            "Used AL extensions as the main customization surface instead of modifying core application behavior directly",
            "Used table and page extension patterns to keep domain changes structured and easier to maintain",
            "Used RDLC and document layouts to support finance reporting and operational document output",
            "Used containerized sandbox environments for safer iteration, testing, and deployment preparation"
          ]
        },
        {
          id: "tech-stack",
          label: "Tech Stack",
          title: "Tech Stack",
          summary: "This stack shows my ERP customization capability: AL development inside Business Central, finance-facing reports and pages, and a practical sandbox-based delivery workflow."
        },
        {
          id: "impact",
          label: "Impact",
          title: "Engineering Impact",
          summary: "This project demonstrates my ability to work inside a real ERP platform, understand business accounting requirements, and deliver maintainable customization for a manufacturing company.",
          bullets: [
            "Improved fit between standard ERP behavior and the finance and accounting needs of the business",
            "Reduced friction for accounting users by aligning pages, rules, and reports to their actual process",
            "Delivered customization in an extension-friendly way that remained safer for testing and future change",
            "Showed that I can bridge business requirements, ERP domain knowledge, and technical implementation in one project"
          ]
        }
      ],
      facts: [
        {
          icon: "factory",
          label: "Industry",
          value: "Natural latex manufacturing"
        },
        {
          icon: "layers",
          label: "Functional Focus",
          value: "Finance & Accounting"
        },
        {
          icon: "shield",
          label: "Platform",
          value: "Dynamics 365 BC + AL"
        },
        {
          icon: "server",
          label: "Environment",
          value: "Docker / Podman sandboxes"
        },
        {
          icon: "user",
          label: "My Role",
          value: "ERP customization and delivery"
        }
      ]
    },
    detailedGroups: [
      {
        title: "1) Finance & Accounting Scope",
        summary: "The project focused on shaping Business Central around finance and accounting operations for a company producing and processing natural latex.",
        items: [
          "Customized finance-facing ERP behavior around accounting documents, reporting, and user workflow.",
          "Aligned ERP screens and logic to how the finance team actually worked rather than relying only on default standard flows.",
          "Worked within a manufacturing context where finance accuracy and document control mattered alongside operations.",
          "Focused on maintainable ERP customization rather than one-off hardcoded changes."
        ]
      },
      {
        title: "2) AL Extensions & ERP Logic",
        summary: "Most of the implementation work happened through the AL extension model, which kept customization structured and safer for long-term maintenance.",
        items: [
          "Built and adjusted tables, pages, page extensions, and supporting AL logic.",
          "Customized business rules through codeunits, triggers, and extension-driven behavior.",
          "Added fields, validation flow, and role-aware ERP behavior where the standard model did not fully match the business.",
          "Kept the implementation aligned with extension-based BC practices instead of relying on fragile shortcuts."
        ]
      },
      {
        title: "3) Reports, Documents & User Experience",
        summary: "A major part of the project was making Business Central more usable for finance users through clearer pages, document outputs, and role-aware navigation.",
        items: [
          "Customized pages and page extensions for finance-facing use cases.",
          "Prepared RDLC or document layouts so financial outputs matched operational needs.",
          "Adjusted role centers, actions, and user-facing behavior to support clearer accounting workflows.",
          "Worked to reduce friction for finance users by shaping the ERP around real task flow."
        ]
      },
      {
        title: "4) Validation, Permissions & Control",
        summary: "Finance and accounting customization required stronger control over validation, permissions, and posting-related behavior than simple UI changes alone.",
        items: [
          "Added validation logic to improve document completeness and data consistency.",
          "Worked with permissions and role-based behavior so users saw the right actions and screens.",
          "Protected finance-sensitive workflows through controlled ERP logic rather than loose manual handling.",
          "Supported more reliable accounting usage by combining business rules with system constraints."
        ]
      },
      {
        title: "5) Sandbox, Testing & Deployment",
        summary: "The delivery process relied on controlled environments so customization could be tested and published more safely.",
        items: [
          "Used Docker or Podman-based Business Central sandbox environments during development and testing.",
          "Published and tested extensions before rollout to reduce deployment risk.",
          "Used Visual Studio Code and AL tooling as the primary development workflow.",
          "Supported debugging, iteration, and controlled deployment as part of normal delivery."
        ]
      },
      {
        title: "6) Business Fit & Engineering Value",
        summary: "The value of this project was not just the customization itself, but the ability to fit ERP behavior to a real finance function inside a manufacturing business.",
        items: [
          "Translated business-side accounting requirements into actual ERP implementation decisions.",
          "Worked within Business Central constraints while still adapting the system to the company’s process.",
          "Delivered ERP customization that remained maintainable and deployment-friendly.",
          "Demonstrated ERP engineering capability across business analysis, AL development, testing, and rollout support."
        ]
      }
    ],
    techStack: [
      { category: "Language", items: ["AL Language"] },
      { category: "Platform", items: ["Dynamics 365 Business Central", "BC Extension Model", "Role Centers", "Permissions"] },
      { category: "Reporting", items: ["RDLC Reports", "Document Layouts", "Pages", "Codeunits"] },
      { category: "Environment", items: ["Docker", "Podman", "VS Code + AL Extension", "Sandbox Environments"] }
    ]
  },
  {
    title: "Oracle NetSuite ERP",
    company: "MV Solution Co., Ltd",
    category: "CRM & ERP",
    ctaLabel: "Project Overview",
    logo: "/images/netsuite-logo.png",
    description: "Implemented a cloud-based Donor Management CRM on Oracle NetSuite for a non-profit organization, covering donor and sponsor data modeling, recurring donation automation, payment integration, reporting, migration, UAT, and go-live support.",
    tasks: [
      "Donor CRM & Sponsorship Workflow Design",
      "SuiteScript, SuiteFlow & Custom Record Development",
      "Recurring Donation & Transaction Automation",
      "Payment Gateway Integration with Tokenization",
      "Data Migration, UAT & Go-Live Support",
      "Dashboards, Reports, Documentation & Training"
    ],
    caseStudy: {
      theme: "crm",
      cardLabel: "NETSUITE ERP",
      heroLabel: "Enterprise Case Study",
      subtitle: "Cloud-based donor CRM, recurring giving automation, and payment integration built on Oracle NetSuite",
      narrative: "Implemented a NetSuite-based Donor Management System for a non-profit organization, translating donor, sponsorship, campaign, and recurring donation processes into structured CRM workflows. The delivery covered business analysis, custom records, SuiteScript and SuiteFlow automation, RESTlet/API integrations, payment status handling, legacy data migration, UAT, training, and post-go-live support.",
      cardTags: [
        "Donor CRM architecture",
        "Recurring giving automation",
        "Payment gateway integration",
        "Migration, UAT & go-live"
      ],
      metrics: [
        {
          icon: "users",
          label: "CRM Scope",
          value: "Donor 360",
          note: "Donor, sponsor, and recurring giving lifecycle"
        },
        {
          icon: "check",
          label: "Automation",
          value: "Recurring",
          note: "Monthly/yearly donations, invoices, and receipts"
        },
        {
          icon: "shield",
          label: "Payments",
          value: "Tokenized",
          note: "Credit card, QR, and bank transfer workflows"
        },
        {
          icon: "clock",
          label: "Delivery",
          value: "Go-Live",
          note: "Migration, UAT, training, and support"
        }
      ],
      featureCards: [
        {
          icon: "workflow",
          title: "Donor & Sponsor CRM",
          description: "Modeled donor, sponsor, sponsorship, and related entity relationships in NetSuite so teams could track profile data, history, status, and ownership in one CRM flow."
        },
        {
          icon: "cloud",
          title: "Recurring Donation Engine",
          description: "Built automation for monthly and yearly giving, including transaction creation, payment status handling, arrears tracking, and receipt generation."
        },
        {
          icon: "lock",
          title: "Secure Payment Integration",
          description: "Connected payment gateways, website forms, and NetSuite through RESTlets/APIs to support tokenized credit cards, QR payments, and bank-transfer updates."
        },
        {
          icon: "history",
          title: "Reporting & Analytics Layer",
          description: "Designed dashboards and reports for donation trends, campaign performance, segmentation, recurring payment follow-up, and management visibility."
        }
      ],
      tabs: [
        {
          id: "role",
          label: "My Role",
          title: "My Role",
          summary: "I worked across both functional and technical delivery, turning non-profit fundraising operations into a structured NetSuite CRM implementation with automation, integration, reporting, and rollout support.",
          bullets: [
            "Analyzed donor, sponsor, campaign, and recurring donation requirements and mapped them into NetSuite CRM workflows",
            "Designed the solution structure across custom records, relationships, workflow states, transaction automation, and user-facing processes",
            "Developed SuiteScript, SuiteFlow, RESTlet, and reporting logic to support daily fundraising and finance operations",
            "Supported data migration, UAT, documentation, training, go-live, and post-launch stabilization"
          ]
        },
        {
          id: "delivery",
          label: "Delivery",
          title: "What I Implemented",
          summary: "The implementation covered the core CRM, recurring payment engine, integration layer, migration process, and operational reporting needed to run donor management inside NetSuite.",
          bullets: [
            "Customized NetSuite to manage donors, sponsors, sponsorship relationships, related entities, status tracking, and contribution history",
            "Automated Sales Order, Invoice, and Receipt creation based on donation and payment outcomes",
            "Built recurring donation logic for monthly and yearly giving cycles with Success, Failed, and Arrears handling",
            "Prepared dashboards, reports, user manuals, technical documentation, training material, and launch support"
          ]
        },
        {
          id: "architecture",
          label: "Architecture",
          title: "Solution Architecture",
          summary: "The solution connected CRM data, payment activity, online forms, and reporting into one NetSuite-centered operating model for donor and sponsorship management.",
          bullets: [
            "Designed custom record structures for Donor, Sponsorship, and related entities with one-to-many relationship support",
            "Mapped external website and online form submissions into NetSuite through REST APIs and RESTlets",
            "Integrated payment gateway flows for tokenized credit cards, QR, and bank-transfer payment updates",
            "Built reporting views around donation trends, campaign performance, segmentation, and recurring payment follow-up"
          ]
        },
        {
          id: "tech-stack",
          label: "Tech Stack",
          title: "Tech Stack",
          summary: "The stack combined NetSuite-native customization with external integration and controlled delivery practices: SuiteScript, SuiteFlow, Custom Records, RESTlets, payment gateway APIs, CSV/Excel migration, UAT, documentation, and user training."
        },
        {
          id: "challenges",
          label: "Challenges",
          title: "Technical Challenges",
          summary: "The main challenge was fitting non-profit fundraising behavior into NetSuite while keeping payment processing, data quality, auditability, and user operations reliable.",
          bullets: [
            "Translating donor lifecycle, sponsorship management, and recurring donation rules into maintainable NetSuite modules",
            "Keeping payment status synchronization clear across Success, Failed, Arrears, receipt generation, and finance follow-up",
            "Migrating legacy CSV/Excel data while validating accuracy, consistency, relationships, and historical records",
            "Balancing deep CRM customization with NetSuite-native workflows so the system remained supportable after go-live"
          ]
        },
        {
          id: "impact",
          label: "Impact",
          title: "Business Impact",
          summary: "The project gave the organization a more scalable and auditable donor management foundation, reducing manual work while improving visibility across donations, sponsorships, payments, and campaigns.",
          bullets: [
            "Reduced manual processing across donation entry, payment follow-up, transaction creation, and reporting",
            "Improved data accuracy and consistency by centralizing donor, sponsor, and payment history in NetSuite",
            "Supported recurring revenue operations through monthly/yearly giving automation and payment status tracking",
            "Increased transparency and auditability for finance, fundraising, campaign, and management teams"
          ]
        }
      ],
      facts: [
        {
          icon: "user",
          label: "Sector",
          value: "Non-Profit"
        },
        {
          icon: "layers",
          label: "Functional Scope",
          value: "Donor CRM + Payments"
        },
        {
          icon: "shield",
          label: "Platform",
          value: "Oracle NetSuite"
        },
        {
          icon: "server",
          label: "Integration",
          value: "RESTlet / Payment APIs"
        },
        {
          icon: "factory",
          label: "Delivery",
          value: "Migration to Go-Live"
        }
      ]
    },
    spotlight: {
      title: "Recurring donation and payment control",
      description: "The strongest engineering part of this work was connecting donation intent, payment confirmation, NetSuite transactions, and operational follow-up into one controlled recurring payment flow.",
      items: [
        "Automatically generated Sales Orders, Invoices, and Receipts once donation payment conditions were met.",
        "Handled Success, Failed, and Arrears payment states so finance and operations teams could follow up clearly.",
        "Connected donor records, sponsorship history, payment tokens, and reporting views into one auditable CRM process."
      ]
    },
    detailedGroups: [
      {
        title: "1) Business Analysis & Solution Design",
        summary: "Translated non-profit fundraising operations into a structured NetSuite CRM design that could support donors, sponsors, campaigns, recurring payments, and reporting.",
        items: [
          "Analyzed donor lifecycle, sponsorship management, recurring donation, and campaign processes.",
          "Mapped business processes into NetSuite CRM modules, workflow states, custom records, and transaction flows.",
          "Designed the operating model for how fundraising, finance, and support users would manage donor activity.",
          "Prepared functional and technical specifications for automation, integration, reporting, and rollout."
        ]
      },
      {
        title: "2) NetSuite Customization & Automation",
        summary: "Customized NetSuite so it could operate as a specialized donor management platform rather than a generic CRM setup.",
        items: [
          "Created custom records and fields for donors, sponsors, sponsorship relationships, related entities, and tracking states.",
          "Implemented SuiteScript and SuiteFlow logic for recurring donation processing and internal workflow control.",
          "Automated Sales Order, Invoice, and Receipt creation based on donation and payment status.",
          "Added validation and status logic to reduce manual corrections and improve CRM data reliability."
        ]
      },
      {
        title: "3) Payment Gateway & RESTlet Integration",
        summary: "Connected NetSuite with payment and external entry points so donations could move from online intake to internal processing with less manual handling.",
        items: [
          "Integrated payment gateway flows for tokenized credit card payments, QR payments, and bank-transfer workflows.",
          "Built RESTlet/API connectivity between NetSuite, website forms, payment services, and external systems.",
          "Handled Success, Failed, and Arrears payment states for recurring payment follow-up.",
          "Supported monthly and yearly recurring payment cycles while preserving auditability in NetSuite."
        ]
      },
      {
        title: "4) Data Migration, Testing & Go-Live",
        summary: "Managed the transition from legacy data and manual processes into a controlled NetSuite launch.",
        items: [
          "Planned CSV/Excel data migration and validated donor, sponsor, relationship, and payment history accuracy.",
          "Ran unit testing, integration testing, data migration testing, and supported user acceptance testing.",
          "Prepared user manuals, technical documentation, and user training for operational handover.",
          "Supported go-live and post-launch stabilization to ensure users could operate the system confidently."
        ]
      },
      {
        title: "5) Reporting, Analytics & Business Visibility",
        summary: "Built reporting surfaces that helped teams monitor fundraising activity, donor behavior, and recurring payment performance.",
        items: [
          "Designed dashboards and reports for donation trends, campaign performance, donor segmentation, and payment follow-up.",
          "Created visibility into recurring donation status, arrears, receipts, and operational workload.",
          "Improved management decision-making by centralizing fundraising and finance data in NetSuite.",
          "Strengthened transparency and audit readiness through structured records, status history, and reportable processes."
        ]
      }
    ],
    techStack: [
      { category: "Platform", items: ["Oracle NetSuite", "CRM Module", "SuiteFlow", "Saved Searches"] },
      { category: "Development", items: ["SuiteScript 2.1", "Custom Records", "Custom Fields", "Workflow Automation"] },
      { category: "Integration", items: ["RESTlet APIs", "REST/JSON", "Payment Gateway", "Tokenization", "External Forms"] },
      { category: "Delivery", items: ["CSV/Excel Migration", "Unit & Integration Testing", "UAT Support", "Documentation", "User Training"] }
    ]
  },
  {
    title: "Financial Analysis & Data Science Platform",
    description: "Automated financial ratio computation and scoring model platform with PDF reporting.",
    tasks: [
      "Extract Data from XLS/XLSX",
      "Convert legacy XLS → XLSX",
      "Compute 11 financial ratios",
      "PCA / K-Means / DBSCAN",
      "Scoring Model",
      "PDF Export + Graphs",
      "External APIs",
      "Dashboard UI (Streamlit)"
    ],
    techStack: [
      { category: "Language", items: ["Python"] },
      { category: "Libraries", items: ["pandas", "numpy", "scikit-learn", "matplotlib", "seaborn", "openpyxl", "xlrd", "reportlab"] },
      { category: "Frontend", items: ["Streamlit"] },
      { category: "Integration", items: ["HTTP/REST APIs"] }
    ]
  },
  {
    title: "Odoo ERP (Open Source ERP)",
    description: "Implementation and customization of Odoo ERP modules and system architecture analysis.",
    tasks: [
      "ติดตั้ง Odoo",
      "ปรับแต่งโมดูล",
      "สร้าง Model / View / Menu",
      "ศึกษา POS/Inventory/Accounting",
      "วิเคราะห์โครงสร้าง ERP",
      "ทดลองแก้ไข UI/Backend"
    ],
    techStack: [
      { category: "Language", items: ["Python"] },
      { category: "Framework", items: ["Odoo Standard Framework", "ORM Model", "XML View", "QWeb Templates"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Server", items: ["WSGI", "Odoo Server"] }
    ]
  },
  {
    title: "Warehouse Management System (WMS)",
    company: "MV Solution Co., Ltd",
    category: "Mobile WMS",
    ctaLabel: "Project Overview",
    logo: "/images/beaver_login.png",
    description: "Enterprise-grade offline-first Warehouse Management System built with Flutter, featuring clean architecture, SQLite persistence, background sync, and hardware integration for barcode scanning and thermal printing.",
    tasks: [
      "Clean Architecture (presentation/domain/data/core/services)",
      "Offline-first with SQLite persistence",
      "Background sync with retry/backoff",
      "Barcode scanning integration",
      "Thermal printer (ESC/POS) support",
      "Role-based access control",
      "Multi-module WMS (Inbound/Outbound/Inventory/Production/QC)",
      "Real-time sync status monitoring"
    ],
    caseStudy: {
      theme: "mobile",
      cardLabel: "MOBILE WMS",
      heroLabel: "Mobile Engineering Case Study",
      subtitle: "Offline-first warehouse operations app built with Flutter, SQLite sync queues, barcode scanning, and thermal printing",
      narrative: "Built an enterprise mobile Warehouse Management System for warehouse operations where connectivity can be unreliable. The app used Flutter with clean architecture, local SQLite persistence, queued transactions, retry/backoff synchronization, role-aware routing, barcode scanning, and printer integration to support daily inbound, outbound, inventory, production, and QC workflows.",
      cardTags: [
        "Offline-first mobile WMS",
        "Flutter clean architecture",
        "SQLite sync queue",
        "Barcode & thermal printing"
      ],
      metrics: [
        {
          icon: "clock",
          label: "Operations",
          value: "Offline",
          note: "Warehouse tasks continue in low-connectivity zones"
        },
        {
          icon: "shield",
          label: "Reliability",
          value: "Queue",
          note: "Retry/backoff sync for pending transactions"
        },
        {
          icon: "users",
          label: "WMS Scope",
          value: "5 Modules",
          note: "Inbound, outbound, inventory, production, and QC"
        },
        {
          icon: "check",
          label: "Hardware",
          value: "Scan/Print",
          note: "Barcode scanning and ESC/POS label printing"
        }
      ],
      featureCards: [
        {
          icon: "workflow",
          title: "Warehouse Task Flows",
          description: "Implemented mobile workflows for receiving, putaway, picking, packing, shipping, stock count, transfer, production issue, and QC operations."
        },
        {
          icon: "cloud",
          title: "Offline Sync Architecture",
          description: "Designed SQLite-backed local persistence and a sync queue so users could continue working offline and safely synchronize when the network returned."
        },
        {
          icon: "lock",
          title: "Role-Based Mobile Access",
          description: "Used guarded routing and role-aware access control so warehouse, production, QC, and admin users saw the right modules and actions."
        },
        {
          icon: "history",
          title: "Hardware Integration",
          description: "Integrated barcode scanning and thermal label printing for SKU, bin, pallet, and transaction labels used in real warehouse execution."
        }
      ],
      tabs: [
        {
          id: "role",
          label: "My Role",
          title: "My Role",
          summary: "I worked across the mobile architecture, offline data layer, warehouse workflow modules, hardware integration, routing, state management, and API synchronization design.",
          bullets: [
            "Designed the Flutter application structure using clean architecture across presentation, domain, data, core, and services layers",
            "Implemented Riverpod providers, GoRouter navigation, role guards, and reusable service composition for WMS modules",
            "Built the offline-first persistence model with SQLite, schema migration, transaction queueing, and sync status visibility",
            "Integrated barcode scanning, thermal printing, API networking, token authentication, error handling, and retry logic"
          ]
        },
        {
          id: "delivery",
          label: "Delivery",
          title: "What I Implemented",
          summary: "The app covered the practical warehouse execution layer: mobile tasks, offline transaction capture, hardware operations, and reliable sync with backend services.",
          bullets: [
            "Delivered inbound, outbound, inventory, production, quality control, bin management, and reporting-oriented mobile flows",
            "Created local transaction capture for receiving, issue, count, transfer, and other warehouse activities",
            "Built real-time sync indicators so users could understand pending transactions, network state, and synchronization results",
            "Supported development and testing through environment-based configuration and mock/real API switching"
          ]
        },
        {
          id: "architecture",
          label: "Architecture",
          title: "Solution Architecture",
          summary: "The architecture separated UI, domain rules, persistence, services, and network concerns so the app could stay maintainable as the WMS scope expanded.",
          bullets: [
            "Used clean architecture with repository pattern, use cases, dependency injection, and centralized provider wiring",
            "Used SQLite and migration scripts for local storage, master data caching, transaction tables, and sync queue management",
            "Used Dio with interceptors, token authentication, centralized API routes, connectivity monitoring, and retry/backoff handling",
            "Used GoRouter and route guards for authenticated navigation, role-based access, redirect behavior, and deep-link support"
          ]
        },
        {
          id: "tech-stack",
          label: "Tech Stack",
          title: "Tech Stack",
          summary: "The implementation used Flutter and Dart with Riverpod, GoRouter, SQLite/sqflite, Dio, connectivity monitoring, barcode scanning, Bluetooth/WiFi ESC/POS printing, and REST API integration."
        },
        {
          id: "challenges",
          label: "Challenges",
          title: "Technical Challenges",
          summary: "The key challenge was making warehouse operations reliable on mobile devices where connectivity, hardware behavior, and operational speed can vary throughout the warehouse floor.",
          bullets: [
            "Keeping transactions safe when users work offline, close the app, or reconnect after failed synchronization attempts",
            "Designing schema migration and master data caching so warehouse tasks remained fast and stable over time",
            "Handling printer and scanner workflows consistently across device, Bluetooth, WiFi, and label output scenarios",
            "Keeping a large multi-module WMS organized while preserving clear state management and role-based navigation"
          ]
        },
        {
          id: "impact",
          label: "Impact",
          title: "Engineering Impact",
          summary: "The project demonstrates mobile enterprise engineering beyond a standard form app: offline-first architecture, warehouse transaction integrity, hardware operations, and scalable module structure.",
          bullets: [
            "Enabled warehouse users to continue core operations even when network connectivity was unstable",
            "Reduced manual data capture risk by combining mobile task flows with barcode scanning and label printing",
            "Improved operational visibility through sync status, queue tracking, and structured transaction history",
            "Created a maintainable foundation for future features such as wave picking, slotting, multi-warehouse support, and automation integration"
          ]
        }
      ],
      facts: [
        {
          icon: "factory",
          label: "Domain",
          value: "Warehouse Operations"
        },
        {
          icon: "layers",
          label: "Application",
          value: "Flutter Mobile WMS"
        },
        {
          icon: "shield",
          label: "Architecture",
          value: "Offline-first"
        },
        {
          icon: "server",
          label: "Integration",
          value: "REST API + Devices"
        },
        {
          icon: "user",
          label: "Delivery",
          value: "Mobile Execution App"
        }
      ]
    },
    spotlight: {
      title: "Offline-first warehouse execution",
      description: "The most important engineering decision was to treat offline operation as a core requirement, not an edge case.",
      items: [
        "Captured warehouse transactions locally before syncing them through a controlled queue.",
        "Used retry/backoff and connectivity monitoring to recover from network failure without losing user work.",
        "Combined mobile workflows, barcode scanning, and printing into a practical execution tool for warehouse users."
      ]
    },
    detailedGroups: [
      {
        title: "1) Architecture & Bootstrap",
        items: [
          "Clean Architecture: แบ่งชั้นชัดเจน (presentation/domain/data/core/services)",
          "Bootstrap process: lock orientation, wrap ProviderScope, error handling",
          "Riverpod state management เชื่อมกับ GoRouter",
          "Dependency injection ผ่าน providers.dart (composition root)",
          "Environment-based configuration (dev/staging/prod)",
          "Mock/Real API switching ผ่าน AppConfig"
        ]
      },
      {
        title: "2) Offline-First & Sync Layer",
        items: [
          "SQLite schema version 14 พร้อม migration system",
          "DatabaseHelper จัดการ open/upgrade/migration",
          "ทุกธุรกรรม wrap ผ่าน EnqueueTransaction use case",
          "SyncQueueManager บันทึก payload ลง sync_queue table",
          "Retry/backoff mechanism สำหรับ failed transactions",
          "SyncService ฟังสถานะเครือข่าย (connectivity_plus)",
          "Auto drain queue เมื่อออนไลน์",
          "Real-time sync status และจำนวนคิวแสดงใน UI"
        ]
      },
      {
        title: "3) State Management & Providers",
        items: [
          "Riverpod เป็น state management หลัก",
          "Providers.dart wire ทุก dependencies (Dio, repositories, use cases)",
          "Auth state notifier สำหรับ authentication",
          "Sync state notifier แสดงสถานะ sync real-time",
          "Settings state สำหรับ user preferences",
          "Service composition: goods receipt, putaway, picking, automation, analytics"
        ]
      },
      {
        title: "4) Routing & Role-Based Access",
        items: [
          "GoRouter กำหนดเส้นทางทุกโมดูล (warehouse/production/maintenance)",
          "RouteGuard ตรวจสอบสิทธิ์ตาม role",
          "Redirect อัตโนมัติเมื่อ role ไม่ตรง",
          "Snackbar แจ้งเตือนเมื่อไม่มีสิทธิ์เข้าถึง",
          "Deep linking support"
        ]
      },
      {
        title: "5) WMS Core Modules",
        items: [
          "Inbound: Goods Receipt, Putaway, Quality Inspection",
          "Outbound: Picking, Packing, Shipping",
          "Inventory: Stock Count, Adjustment, Transfer",
          "Production: Work Order, Material Issue, Finished Goods",
          "Quality Control: Inspection, Approval/Rejection",
          "Bin Management: Location tracking",
          "Reporting & Analytics: Real-time dashboards"
        ]
      },
      {
        title: "6) Hardware Integration",
        items: [
          "Camera barcode scanner integration",
          "Bluetooth thermal printer (ESC/POS)",
          "WiFi thermal printer support",
          "Label printing สำหรับ SKU/Bin/Pallet",
          "Hardware abstraction layer สำหรับ easy switching"
        ]
      },
      {
        title: "7) Data Persistence & Migration",
        items: [
          "SQLite เป็น local database",
          "Schema versioning และ migration scripts",
          "Transaction tables: receive/issue/count/transfer",
          "Master data caching: items/bins/locations",
          "Sync queue table สำหรับ pending transactions",
          "Data integrity checks"
        ]
      },
      {
        title: "8) API Integration & Network Layer",
        items: [
          "Dio HTTP client พร้อม interceptors",
          "Token-based authentication",
          "API routes centralized ใน api_routes.dart",
          "Mock API สำหรับ development/testing",
          "Error handling และ retry logic",
          "Network connectivity monitoring"
        ]
      },
      {
        title: "9) Future Roadmap & Advanced Features",
        items: [
          "Wave picking optimization",
          "Slotting algorithm",
          "Automation integration (conveyor/AGV)",
          "Advanced reporting และ BI",
          "Multi-warehouse support",
          "Cross-docking workflow",
          "Batch/Serial number tracking"
        ]
      }
    ],
    techStack: [
      { category: "Language", items: ["Dart"] },
      { category: "Framework", items: ["Flutter", "Riverpod (State Management)", "GoRouter (Routing)"] },
      { category: "Database", items: ["SQLite", "sqflite package"] },
      { category: "Architecture", items: ["Clean Architecture", "Repository Pattern", "Use Cases", "Dependency Injection"] },
      { category: "Network", items: ["Dio", "connectivity_plus", "REST API"] },
      { category: "Hardware", items: ["Camera barcode scanner", "Bluetooth Printing (ESC/POS)", "WiFi Printing", "Thermal Label Printer"] },
      { category: "Features", items: ["Offline-first", "Background Sync", "Queue Manager", "Role-based Access", "Multi-module WMS"] }
    ]
  },
  {
    title: "Open Source ERP & System Comparison",
    description: "Comparative analysis and prototyping of ERPNext and Odoo structures.",
    tasks: [
      "ERPNext / Odoo ศึกษาโครงสร้างทั้งหมด",
      "วิเคราะห์ Python Framework",
      "วิเคราะห์ Database Structure",
      "ออกแบบ Ik-Accounting",
      "Prototype ทั้ง web & backend"
    ],
    techStack: [
      { category: "Languages", items: ["Python", "JavaScript"] },
      { category: "Frameworks", items: ["Frappe (ERPNext)", "Odoo"] },
      { category: "Database", items: ["MariaDB", "PostgreSQL"] },
      { category: "Deployment", items: ["Docker Compose"] }
    ]
  },


];
