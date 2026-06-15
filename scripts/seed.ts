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

        await db.insert(schema.categories).values([
            { id: 1, title: "AWS", imageSrc: "/aws.svg" },
            { id: 2, title: "Microsoft Azure", imageSrc: "/azure.svg" },
            { id: 3, title: "Google Cloud", imageSrc: "/google.svg" },
            { id: 4, title: "CompTIA", imageSrc: "/comptia.webp" },
        ]);

        await db.insert(schema.courses).values([
            // AWS
            {
                id: 1,
                categoryId: 1,
                title: "Cloud Practitioner",
                imageSrc: "/aws.svg",
                description: "Foundational AWS cloud concepts and core services",
            },
            {
                id: 2,
                categoryId: 1,
                title: "Solutions Architect",
                imageSrc: "/aws.svg",
                description: "Design resilient and cost-optimized AWS architectures",
            },
            {
                id: 3,
                categoryId: 1,
                title: "Developer Associate",
                imageSrc: "/aws.svg",
                description: "Build and deploy applications on AWS",
            },
            // Azure
            {
                id: 4,
                categoryId: 2,
                title: "AZ-900 Fundamentals",
                imageSrc: "/azure.svg",
                description: "Core Microsoft Azure cloud services and solutions",
            },
            {
                id: 5,
                categoryId: 2,
                title: "AZ-104 Administrator",
                imageSrc: "/azure.svg",
                description: "Manage Azure identities, storage, and compute",
            },
            {
                id: 6,
                categoryId: 2,
                title: "AZ-204 Developer",
                imageSrc: "/azure.svg",
                description: "Develop Azure compute, storage, and security solutions",
            },
            // Google Cloud
            {
                id: 7,
                categoryId: 3,
                title: "Associate Cloud Engineer",
                imageSrc: "/google.svg",
                description: "Deploy and manage GCP applications and infrastructure",
            },
            {
                id: 8,
                categoryId: 3,
                title: "Professional Cloud Architect",
                imageSrc: "/google.svg",
                description: "Design and manage enterprise GCP solutions",
            },
            // CompTIA
            {
                id: 9,
                categoryId: 4,
                title: "A+",
                imageSrc: "/comptia.webp",
                description: "Foundational IT support and hardware troubleshooting",
            },
            {
                id: 10,
                categoryId: 4,
                title: "Security+",
                imageSrc: "/comptia.webp",
                description: "Core cybersecurity skills and threat mitigation",
            },
            {
                id: 11,
                categoryId: 4,
                title: "Network+",
                imageSrc: "/comptia.webp",
                description: "Networking concepts, infrastructure, and troubleshooting",
            },
        ]);

        // Seed unit and lessons only for AWS Cloud Practitioner (id: 1)
        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Cloud concepts and AWS core services",
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            { id: 1, unitId: 1, order: 1, title: "Cloud Concepts" },
            { id: 2, unitId: 1, order: 2, title: "AWS Core Services" },
            { id: 3, unitId: 1, order: 3, title: "Security & Compliance" },
            { id: 4, unitId: 1, order: 4, title: "Billing & Pricing" },
            { id: 5, unitId: 1, order: 5, title: "Support Plans" },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which cloud deployment model runs entirely on the cloud provider\'s infrastructure?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                order: 2,
                question: 'What does "IaaS" stand for?',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Which benefit of cloud computing allows you to pay only for what you use?',
            },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 1, correct: true,  text: "Public Cloud" },
            { challengeId: 1, correct: false, text: "Private Cloud" },
            { challengeId: 1, correct: false, text: "Hybrid Cloud" },
            { challengeId: 1, correct: false, text: "On-Premises" },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 2, correct: false, text: "Internet as a Service" },
            { challengeId: 2, correct: true,  text: "Infrastructure as a Service" },
            { challengeId: 2, correct: false, text: "Integration as a Service" },
            { challengeId: 2, correct: false, text: "Intelligence as a Service" },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 3, correct: false, text: "High availability" },
            { challengeId: 3, correct: false, text: "Elasticity" },
            { challengeId: 3, correct: true,  text: "Pay-as-you-go pricing" },
            { challengeId: 3, correct: false, text: "Global reach" },
        ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();
