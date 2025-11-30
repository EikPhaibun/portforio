export interface Project {
  title: string;
  company?: string;
  description: string;
  tasks: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  detailedGroups?: {
    title: string;
    items: string[];
  }[];
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
          title: "NHK Workflow Platform (Full Stack)",
          items: [
            "Architected a scalable full-stack approval system using Flask + SQLAlchemy + Alembic (backend), React + Vite (frontend), with Celery + Redis for asynchronous task processing.",
            "Implemented enterprise SSO with Microsoft Entra ID: MSAL library for frontend id_token acquisition, backend JWKS validation, and internal JWT (HS256) issuance with role-based claims.",
            "Developed 'Measurement Workflow' module with role-based queue system (Requester → QA Lab → QA Manager), file attachment requirements, and complete audit history.",
            "Built 'Material Flow' module with multi-stage state machine (Store Accept/Issue, TP Receive, Requester Complete) and real-time backlog monitoring.",
            "Created modular workflow engines for Cleanroom Import, Import Part Approval, Prototype Sign-off, Nozzle Inventory, Adhesive Batch Logs, and Internal Change Control.",
            "Designed comprehensive observability: health endpoints per module, /metrics for Prometheus scraping, Alertmanager rules for incident response, and structured logging with module tags.",
            "Built notification system using Celery workers for email queues, webhook dispatching, and in-app notification API with toast integration.",
            "Implemented Flask-Admin console for user/role management, signature handling (base64), and comprehensive audit log review.",
            "Deployed using Docker Compose with Traefik reverse proxy, supporting both monolith and modular service profiles for flexible scaling.",
            "Managed database migrations with Alembic, shared PostgreSQL instances, and Redis for both caching and queue management.",
            "Developed RESTful API with JWT authentication, role-based endpoint protection, and comprehensive error handling.",
            "Established CI/CD-ready infrastructure with health checks, automated migration scripts, and container orchestration for production reliability."
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
    title: "NHK Workflow Platform",
    company: "MV Solution Co., Ltd",
    logo: "/images/Approval Forkflow.png",
    description: "Full-stack factory workflow solution with Flask, React, and Docker, featuring SSO (Entra ID), comprehensive observability, and complex approval modules.",
    tasks: [
      "Full-stack Development (Flask/React/Celery)",
      "SSO Integration (Microsoft Entra ID/MSAL)",
      "Observability (Prometheus/Grafana/Traefik)",
      "Complex Workflow Engines (Measurement/Material)",
      "Admin Console & Audit Logging",
      "Docker Compose & Micro-services Ready"
    ],
    detailedGroups: [
      {
        title: "1) Architecture & Infrastructure",
        items: [
          "Backend: Flask + SQLAlchemy + Celery + Redis สำหรับ Task Queue และ Caching",
          "Frontend: Vite + React (River of components) เชื่อมต่อ REST API + JWT",
          "Deployment: Docker Compose (Backend/Worker/Frontend/Postgres/Redis) พร้อม Script Migrate/Health Check",
          "Gateway: Traefik รองรับ Profile แบบ Monolith และ Modular",
          "Observability: /metrics สำหรับ Prometheus, Health endpoints, Alert rules และ Structured logging (Module tags)"
        ]
      },
      {
        title: "2) Authentication & Security",
        items: [
          "SSO: Microsoft Entra ID (MSAL รับ id_token → Backend ตรวจ JWKS → ออก JWT HS256)",
          "Hybrid Auth: รองรับ Auto-provision, Domain whitelist และ Fallback Email/Password (Service Account)",
          "Security: Role-based Access Control (RBAC), Secure Admin View (Hash/Base64), Audit Logging บันทึกทุก Action"
        ]
      },
      {
        title: "3) Workflow Modules",
        items: [
          "Measurement Workflow: Flow แยก Role (Requester → QA Lab → QA Manager) พร้อม Queue, History และ File Attachment",
          "Material Flow: State Machine (Store Accept/Issue, TP Receive) พร้อม Backlog Monitoring และ Audit Log",
          "Modules อื่นๆ: Cleanroom Import, Part Approval, Prototype Sign-off, Nozzle Inventory, Adhesive Tracking, Internal Change Control"
        ]
      },
      {
        title: "4) System Features",
        items: [
          "Notifications: Celery Worker + Redis Queue สำหรับ Email/Scheduled Jobs และ In-app Notification API",
          "Admin Console: Flask-Admin สำหรับจัดการ Role, ลายเซ็น, และตรวจสอบ Log",
          "Dashboard: Real-time status tracking, Health indicators และ Search/Filter ครบถ้วน"
        ]
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "MSAL (Azure AD)", "JavaScript/TypeScript"] },
      { category: "Backend", items: ["Python", "Flask", "SQLAlchemy", "Celery", "Flask-Admin", "JWKS"] },
      { category: "Database", items: ["PostgreSQL", "Redis"] },
      { category: "DevOps", items: ["Docker Compose", "Traefik", "Prometheus", "Grafana", "Alertmanager"] }
    ]
  },
  {
    title: "Microsoft Dynamics 365 Business Central (BC)",
    company: "MV Solution Co., Ltd",
    logo: "/images/bc-logo.png",
    description: "Extension development and deployment for Dynamics 365 Business Central using AL Language.",
    tasks: [
      "ติดตั้ง BC ผ่าน Docker/Podman",
      "สร้าง Extension",
      "เข้าใจ Table / Page / Field",
      "Customize ERP Logic",
      "Deploy Extension"
    ],
    detailedGroups: [
      {
        title: "1) AL Development & Customization",
        items: [
          "พัฒนา Extensions ด้วยภาษา AL",
          "สร้าง Tables, Table Extensions, Pages, Page Extensions",
          "พัฒนา Codeunits, Triggers, Events (OnBefore/OnAfter)",
          "ใช้ Event Subscriber ปรับแต่ง logic โดยไม่แตะระบบมาตรฐาน",
          "สร้าง custom business logic เช่น validation, workflows, automation",
          "พัฒนา Reports (RDLC / Word Layout)",
          "สร้าง API Page เพื่อให้ BC เชื่อมต่อภายนอก",
          "Custom Fields, Permissions Set, Profiles",
          "พัฒนา Job Queue สำหรับงาน background"
        ]
      },
      {
        title: "2) Integration & API",
        items: [
          "พัฒนา REST API / OData สำหรับเชื่อมระบบอื่น",
          "ใช้ HttpClient, JsonObject, XMLPorts",
          "ผูก BC เข้ากับ ERP / CRM / POS / Web Portal",
          "จัดการ Authentication (OAuth2 / Basic / Token)",
          "ออกแบบ Data Contract (DTO) ระหว่างระบบ",
          "สร้างเว็บเซอร์วิสให้ระบบภายนอกเรียกใช้งาน"
        ]
      },
      {
        title: "3) Page & UI Customization",
        items: [
          "ปรับ UI บน Role Center / List Page / Card Page",
          "เพิ่ม FastTabs, FactBoxes, Actions",
          "สร้าง Wizard Page / Assistant Guide",
          "ออกแบบ Flow แสดงข้อมูลเฉพาะตาม Role",
          "เพิ่ม Validation popup, confirmation dialog"
        ]
      },
      {
        title: "4) Business Process Customization",
        items: [
          "เข้าใจ Module หลักของ BC: Finance (GL, AR, AP), Sales / Purchase, Inventory / Warehouse, Production / MRP, Projects / Jobs",
          "แปลง Requirement → AL Logic → Extension",
          "วาง Flow ทำงาน เช่น: Auto posting, Approval workflow, Automatic numbering, Custom transactions",
          "แก้ Pain Points ของลูกค้าโดยปรับ logic ให้เหมาะกับธุรกิจ"
        ]
      },
      {
        title: "5) Testing & Quality Control",
        items: [
          "เขียน Test Codeunits (Automated Tests)",
          "ทดสอบ Extension ใน Container ก่อน Deploy",
          "Debug ผ่าน Visual Studio Code",
          "ตรวจ performance เวลา run logic (loop, finder, query)",
          "ตรวจสอบ breaking changes เวลา upgrade version BC"
        ]
      },
      {
        title: "6) Deployment & Environment Management",
        items: [
          "ใช้ Docker / Podman BC Sandboxes สำหรับ Dev/Test",
          "สร้าง Environment ใหม่ใน Microsoft Admin Center",
          "Publish/Install Extensions ผ่าน: VS Code, Powershell, Admin Center",
          "Version control ผ่าน Git",
          "Backup & Restore Sandbox"
        ]
      },
      {
        title: "7) Documentation & Technical Specs",
        items: [
          "เขียน Technical Design Document (TDD)",
          "Document Business Logic ที่ Customize",
          "Document API endpoints",
          "ทำ User Guide สำหรับการใช้งานฟีเจอร์ใหม่",
          "ทำ Release Notes เวลาออก Version ใหม่"
        ]
      }
    ],
    techStack: [
      { category: "Language", items: ["AL Language"] },
      { category: "Framework", items: ["Dynamics 365 BC Extension Model"] },
      { category: "Environment", items: ["Docker", "Podman", "VS Code + AL Extension", "Microsoft 365 Developer Tenant"] }
    ]
  },
  {
    title: "ERP Customization (NetSuite / General ERP)",
    company: "MV Solution Co., Ltd",
    logo: "/images/netsuite-logo.png",
    description: "Deep customization of NetSuite ERP including scripts, workflows, and external integrations.",
    tasks: [
      "Custom Record",
      "Scripted Sublist",
      "Auto Renew / Manual Renew",
      "Popup Suitelet",
      "RESTlet integration",
      "Token-Based Authentication",
      "External system interfaces",
      "WHT / Thai Localization",
      "RFM Analysis"
    ],
    detailedGroups: [
      {
        title: "1) Custom Record & Data Model Design",
        items: [
          "ออกแบบโครงสร้างข้อมูลสำหรับธุรกิจเฉพาะ",
          "ออกแบบและสร้าง Custom Record (Master Data / Transaction Data)",
          "เพิ่ม Custom Fields, Lists, Enums, Sublist",
          "ออกแบบความสัมพันธ์ระหว่างข้อมูล (Relationship)",
          "วาง Data Model ให้รองรับ Business Flow จริง",
          "สร้าง Scripted Sublist แสดงข้อมูลเชิงลึกบน Record"
        ]
      },
      {
        title: "2) Business Logic Customization (SuiteScript)",
        items: [
          "พัฒนา UserEvent Script เพื่อ Validate / Auto-fill / Auto-generate",
          "พัฒนา Client Script เพื่อควบคุม UI (Disable/Hide/Validation)",
          "เขียน RESTlet สำหรับสร้าง/อัปเดตข้อมูลผ่าน API",
          "เขียน Suitelet สำหรับทำฟอร์ม Popup/Flow เฉพาะกิจ",
          "เขียน Script ควบคุม Business Rules เช่น Auto Renew Membership, Auto Create Transaction",
          "ทำ Scheduled Scripts ประมวลผลข้อมูลประจำวัน"
        ]
      },
      {
        title: "3) Workflow & Process Automation",
        items: [
          "ออกแบบ Business Flow ให้ตรง Pain Point จริง",
          "ใช้ Script/Workflow ขับเคลื่อนการทำงาน เช่น ต่ออายุข้อมูลอัตโนมัติ, เปลี่ยนสถานะ",
          "สร้าง History Record อัตโนมัติ",
          "ออกแบบ Action บน Record (Renew / Cancel / Approve)"
        ]
      },
      {
        title: "4) Integration with External Systems",
        items: [
          "เชื่อม Payment Gateway (CyberSource)",
          "รับข้อมูลจากระบบภายนอกผ่าน REST API",
          "Mapping Field → Custom Record",
          "TBA (Token-Based Authentication) สำหรับ RESTlet",
          "ออกแบบ Interface: Payment Result, Web Form → NetSuite, Data Warehouse Sync"
        ]
      },
      {
        title: "5) UI / UX Customization",
        items: [
          "สร้างฟอร์ม Suitelet แบบ Popup UI",
          "เพิ่มปุ่ม Renew / Cancel / Custom Actions",
          "Scripted Sublist แสดงข้อมูลแบบ Real-time",
          "Hidden field / Default value / UI Rules",
          "Summary Fields เช่น Sponsorship Summary"
        ]
      },
      {
        title: "6) Reporting & Analytics Tools",
        items: [
          "สร้าง RFM Analysis ให้แสดงบน Donor Record",
          "Scheduled Script ประมวลผลข้อมูลย้อนหลัง",
          "Custom Summary Fields",
          "ออกแบบ Insight Tab ให้ User เห็นข้อมูลสำคัญ"
        ]
      },
      {
        title: "7) Data Migration & Cleansing",
        items: [
          "การ Import Template CSV",
          "Mapping Field → Custom Record",
          "Pre-validation ก่อน Import",
          "Cleansing ข้อมูลให้ถูกต้องก่อนใช้งานจริง"
        ]
      },
      {
        title: "8) Security, Permission & Role Management",
        items: [
          "ออกแบบ Role และ Permission ให้สอดคล้องกับ Flow",
          "ควบคุมการมองเห็น Sublist / Field / Action",
          "เขียน Script บังคับสิทธิ์การแก้ไข/ลบข้อมูล"
        ]
      },
      {
        title: "9) Troubleshooting & Debugging (SuiteScript)",
        items: [
          "แก้ Script Error ระดับ Transaction-based",
          "Debug การ Submit/Save ของ Record",
          "แก้ปัญหา Loop, Governance Limit, Time-out",
          "วิเคราะห์ Execution Log / JSONArray / Request Payload",
          "ปรับ Performance ของ Script ให้วิ่งเร็วขึ้น"
        ]
      },
      {
        title: "10) Documentation & Functional Specification",
        items: [
          "Document Data Mapping ระหว่างระบบ",
          "API Spec ของ RESTlet",
          "Business Logic Spec (เช่น Auto Renew, Sponsor Tier)",
          "Flow Diagram, Sequence Diagram",
          "User Manual สำหรับทีมงาน"
        ]
      }
    ],
    techStack: [
      { category: "Language", items: ["JavaScript"] },
      { category: "NetSuite Framework", items: ["SuiteScript 2.x", "Client Script", "UserEvent Script", "RESTlet", "Suitelet", "Map/Reduce"] },
      { category: "Auth", items: ["Token-Based Authentication"] },
      { category: "Integration", items: ["REST/JSON"] }
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
    title: "WMS Flutter Application",
    company: "MV Solution Co., Ltd",
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
