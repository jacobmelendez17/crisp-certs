import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database!");

        await db.delete(schema.challenge_progress);
        await db.delete(schema.challenge_options);
        await db.delete(schema.challenges);
        await db.delete(schema.lessons);
        await db.delete(schema.units);
        await db.delete(schema.userProgress);
        await db.delete(schema.courses);
        await db.delete(schema.categories);

        // ── Categories ────────────────────────────────────────────────────────
        await db.insert(schema.categories).values([
            { id: 1, title: "AWS",            imageSrc: "/aws.svg"      },
            { id: 2, title: "Microsoft Azure", imageSrc: "/azure.svg"    },
            { id: 3, title: "Google Cloud",    imageSrc: "/google.svg"   },
            { id: 4, title: "CompTIA",         imageSrc: "/comptia.webp" },
        ]);

        // ── Courses ───────────────────────────────────────────────────────────
        await db.insert(schema.courses).values([
            { id: 1,  categoryId: 1, title: "Cloud Practitioner",         imageSrc: "/aws.svg",       description: "Foundational AWS cloud concepts and core services"          },
            { id: 2,  categoryId: 1, title: "Solutions Architect",         imageSrc: "/aws.svg",       description: "Design resilient and cost-optimized AWS architectures"        },
            { id: 3,  categoryId: 1, title: "Developer Associate",         imageSrc: "/aws.svg",       description: "Build and deploy applications on AWS"                        },
            { id: 4,  categoryId: 2, title: "AZ-900 Fundamentals",         imageSrc: "/azure.svg",     description: "Core Microsoft Azure cloud services and solutions"            },
            { id: 5,  categoryId: 2, title: "AZ-104 Administrator",        imageSrc: "/azure.svg",     description: "Manage Azure identities, storage, and compute"               },
            { id: 6,  categoryId: 2, title: "AZ-204 Developer",            imageSrc: "/azure.svg",     description: "Develop Azure compute, storage, and security solutions"       },
            { id: 7,  categoryId: 3, title: "Associate Cloud Engineer",    imageSrc: "/google.svg",    description: "Deploy and manage GCP applications and infrastructure"        },
            { id: 8,  categoryId: 3, title: "Professional Cloud Architect", imageSrc: "/google.svg",   description: "Design and manage enterprise GCP solutions"                  },
            { id: 9,  categoryId: 4, title: "A+ Core 1",                  imageSrc: "/comptia.webp",  description: "Hardware, networking, mobile devices, and troubleshooting"   },
            { id: 10, categoryId: 4, title: "A+ Core 2",                  imageSrc: "/comptia.webp",  description: "OS, security, software, and operational procedures"          },
            { id: 11, categoryId: 4, title: "Security+",                  imageSrc: "/comptia.webp",  description: "Core cybersecurity skills and threat mitigation"             },
            { id: 12, categoryId: 4, title: "Network+",                   imageSrc: "/comptia.webp",  description: "Networking concepts, infrastructure, and troubleshooting"    },
        ]);

        // ── Units ─────────────────────────────────────────────────────────────
        // AWS Cloud Practitioner – single unit
        await db.insert(schema.units).values([
            { id: 1, courseId: 1, order: 1, color: "green", title: "Unit 1", description: "Cloud concepts and AWS core services" },
        ]);

        // A+ Core 1 – each sub-topic is its own unit, colored by domain
        // Domain 1: Mobile Devices → green
        // Domain 2: Networking     → blue
        // Domain 3: Hardware       → orange
        // Domain 4: Virtualization → purple
        // Domain 5: Troubleshooting → rose
        await db.insert(schema.units).values([
            // Domain 1 – Mobile Devices (green)
            { id: 2,  courseId: 9, order: 1,  color: "green",  title: "1.1 - Laptop Hardware",                     description: "" },
            { id: 3,  courseId: 9, order: 2,  color: "green",  title: "1.2 - Mobile Devices",                      description: "" },
            { id: 4,  courseId: 9, order: 3,  color: "green",  title: "1.3 - Mobile Device Network & Management",  description: "" },

            // Domain 2 – Networking (blue)
            { id: 5,  courseId: 9, order: 4,  color: "blue",   title: "2.1 - Introduction to IP",             description: "" },
            { id: 6,  courseId: 9, order: 5,  color: "blue",   title: "2.2 - Wireless Network Technologies",  description: "" },
            { id: 7,  courseId: 9, order: 6,  color: "blue",   title: "2.3 - Network Services",               description: "" },
            { id: 8,  courseId: 9, order: 7,  color: "blue",   title: "2.4 - DNS & DHCP",                    description: "" },
            { id: 9,  courseId: 9, order: 8,  color: "blue",   title: "2.5 - Network Devices",               description: "" },
            { id: 10, courseId: 9, order: 9,  color: "blue",   title: "2.6 - IP Addresses",                  description: "" },
            { id: 11, courseId: 9, order: 10, color: "blue",   title: "2.7 - Connection Types",              description: "" },
            { id: 12, courseId: 9, order: 11, color: "blue",   title: "2.8 - Network Tools",                 description: "" },

            // Domain 3 – Hardware (orange)
            { id: 13, courseId: 9, order: 12, color: "orange", title: "3.1 - Displays",             description: "" },
            { id: 14, courseId: 9, order: 13, color: "orange", title: "3.2 - Cables Part 1",        description: "" },
            { id: 15, courseId: 9, order: 14, color: "orange", title: "3.2 - Cables Part 2",        description: "" },
            { id: 16, courseId: 9, order: 15, color: "orange", title: "3.2 - Connectors",           description: "" },
            { id: 17, courseId: 9, order: 16, color: "orange", title: "3.3 - Memory",               description: "" },
            { id: 18, courseId: 9, order: 17, color: "orange", title: "3.4 - Storage Devices",      description: "" },
            { id: 19, courseId: 9, order: 18, color: "orange", title: "3.5 - Motherboards",         description: "" },
            { id: 20, courseId: 9, order: 19, color: "orange", title: "3.5 - BIOS",                 description: "" },
            { id: 21, courseId: 9, order: 20, color: "orange", title: "3.5 - More Computer Parts",  description: "" },
            { id: 22, courseId: 9, order: 21, color: "orange", title: "3.6 - Computer Power",       description: "" },
            { id: 23, courseId: 9, order: 22, color: "orange", title: "3.7 - Multifunction Devices", description: "" },
            { id: 24, courseId: 9, order: 23, color: "orange", title: "3.8 - Printers Part 1",      description: "" },
            { id: 25, courseId: 9, order: 24, color: "orange", title: "3.8 - Printers Part 2",      description: "" },

            // Domain 4 – Virtualization & Cloud (purple)
            { id: 26, courseId: 9, order: 25, color: "purple", title: "4.1 - Virtualization", description: "" },
            { id: 27, courseId: 9, order: 26, color: "purple", title: "4.2 - Cloud",           description: "" },

            // Domain 5 – Troubleshooting (rose)
            { id: 28, courseId: 9, order: 27, color: "rose",   title: "5.1 - Troubleshooting Hardware",          description: "" },
            { id: 29, courseId: 9, order: 28, color: "rose",   title: "5.2 - Troubleshooting Storage Devices",   description: "" },
            { id: 30, courseId: 9, order: 29, color: "rose",   title: "5.3 - Troubleshooting Display Issues",    description: "" },
            { id: 31, courseId: 9, order: 30, color: "rose",   title: "5.4 - Troubleshooting Mobile Devices",   description: "" },
            { id: 32, courseId: 9, order: 31, color: "rose",   title: "5.5 - Troubleshooting Networks",          description: "" },
            { id: 33, courseId: 9, order: 32, color: "rose",   title: "5.6 - Troubleshooting Printers",          description: "" },
        ]);

        // ── Lessons ───────────────────────────────────────────────────────────
        // AWS Cloud Practitioner – Unit 1
        await db.insert(schema.lessons).values([
            { id: 1, unitId: 1, order: 1, title: "Cloud Concepts"       },
            { id: 2, unitId: 1, order: 2, title: "AWS Core Services"    },
            { id: 3, unitId: 1, order: 3, title: "Security & Compliance" },
            { id: 4, unitId: 1, order: 4, title: "Billing & Pricing"    },
            { id: 5, unitId: 1, order: 5, title: "Support Plans"        },
        ]);

        // A+ Core 1 – one placeholder lesson per unit (challenges added later)
        await db.insert(schema.lessons).values([
            { id: 6,  unitId: 2,  order: 1, title: "Laptop Hardware"                    },
            { id: 7,  unitId: 3,  order: 1, title: "Mobile Devices"                     },
            { id: 8,  unitId: 4,  order: 1, title: "Mobile Device Network & Management" },
            { id: 9,  unitId: 5,  order: 1, title: "Introduction to IP"                 },
            { id: 10, unitId: 6,  order: 1, title: "Wireless Network Technologies"       },
            { id: 11, unitId: 7,  order: 1, title: "Network Services"                   },
            { id: 12, unitId: 8,  order: 1, title: "DNS & DHCP"                         },
            { id: 13, unitId: 9,  order: 1, title: "Network Devices"                    },
            { id: 14, unitId: 10, order: 1, title: "IP Addresses"                       },
            { id: 15, unitId: 11, order: 1, title: "Connection Types"                   },
            { id: 16, unitId: 12, order: 1, title: "Network Tools"                      },
            { id: 17, unitId: 13, order: 1, title: "Displays"                           },
            { id: 18, unitId: 14, order: 1, title: "Cables Part 1"                      },
            { id: 19, unitId: 15, order: 1, title: "Cables Part 2"                      },
            { id: 20, unitId: 16, order: 1, title: "Connectors"                         },
            { id: 21, unitId: 17, order: 1, title: "Memory"                             },
            { id: 22, unitId: 18, order: 1, title: "Storage Devices"                    },
            { id: 23, unitId: 19, order: 1, title: "Motherboards"                       },
            { id: 24, unitId: 20, order: 1, title: "BIOS"                               },
            { id: 25, unitId: 21, order: 1, title: "More Computer Parts"                },
            { id: 26, unitId: 22, order: 1, title: "Computer Power"                     },
            { id: 27, unitId: 23, order: 1, title: "Multifunction Devices"              },
            { id: 28, unitId: 24, order: 1, title: "Printers Part 1"                    },
            { id: 29, unitId: 25, order: 1, title: "Printers Part 2"                    },
            { id: 30, unitId: 26, order: 1, title: "Virtualization"                     },
            { id: 31, unitId: 27, order: 1, title: "Cloud"                              },
            { id: 32, unitId: 28, order: 1, title: "Troubleshooting Hardware"           },
            { id: 33, unitId: 29, order: 1, title: "Troubleshooting Storage Devices"    },
            { id: 34, unitId: 30, order: 1, title: "Troubleshooting Display Issues"     },
            { id: 35, unitId: 31, order: 1, title: "Troubleshooting Mobile Devices"     },
            { id: 36, unitId: 32, order: 1, title: "Troubleshooting Networks"           },
            { id: 37, unitId: 33, order: 1, title: "Troubleshooting Printers"           },
        ]);

        // ── Challenges (AWS Cloud Practitioner – Lesson 1 only) ───────────────
        await db.insert(schema.challenges).values([
            { id: 1, lessonId: 1, type: "SELECT", order: 1, question: "Which cloud deployment model runs entirely on the cloud provider's infrastructure?" },
            { id: 2, lessonId: 1, type: "ASSIST", order: 2, question: 'What does "IaaS" stand for?'                                                        },
            { id: 3, lessonId: 1, type: "SELECT", order: 3, question: "Which benefit of cloud computing allows you to pay only for what you use?"           },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 1, correct: true,  text: "Public Cloud"  },
            { challengeId: 1, correct: false, text: "Private Cloud" },
            { challengeId: 1, correct: false, text: "Hybrid Cloud"  },
            { challengeId: 1, correct: false, text: "On-Premises"   },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 2, correct: false, text: "Internet as a Service"       },
            { challengeId: 2, correct: true,  text: "Infrastructure as a Service" },
            { challengeId: 2, correct: false, text: "Integration as a Service"    },
            { challengeId: 2, correct: false, text: "Intelligence as a Service"   },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 3, correct: false, text: "High availability"      },
            { challengeId: 3, correct: false, text: "Elasticity"             },
            { challengeId: 3, correct: true,  text: "Pay-as-you-go pricing" },
            { challengeId: 3, correct: false, text: "Global reach"           },
        ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
};

main();
