import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challenge_options);
        await db.delete(schema.challenge_progress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "AWS",
                imageSrc: "aws.svg",
            },
            {
                id: 2,
                title: "Google Cloud",
                imageSrc: "google.svg",
            },
            {
                id: 3,
                title: "Azure",
                imageSrc: "azure.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Amazon Web Services",
                order: 1,
            },
            {
                id: 2,
                courseId: 2,
                title: "Unit 1",
                description: "Learn the basics of Google Cloud",
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Nouns",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Nouns",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verbs",
            },
            {
                id: 6,
                unitId: 2,
                order: 1,
                title: "Nouns",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "ASSIST",
                order: 1,
                question: 'What does CSP stand for?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "SELECT",
                order: 2,
                question: 'What is a Cloud Service Prodiver(CSP)?',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Which of these is NOT a characterisitc of a CSP"?',
            },
        ]);

        await db.insert(schema.challenge_options).values([
            { challengeId: 1, correct: true,  text: "Cloud Service Provider", audioSrc: null },
            { challengeId: 1, correct: false, text: "Computer Software Program", audioSrc: null },
            { challengeId: 1, correct: false, text: "Cloud Software Platform", audioSrc: null },
        ]);


        await db.insert(schema.challenge_options).values([
            {
                challengeId: 2,
                imageSrc: null,
                correct: true,
                text: "A company that provides multiple cloud services accessible via a unified API",
                audioSrc: null,
            },
            {
                challengeId: 2,
                imageSrc: null,
                correct: false,
                text: "A company that only sells SaaS applications",
                audioSrc: null,
            },
            {
                challengeId: 2,
                imageSrc: null,
                correct: false,
                text: "A type of hardware vendor that sells physical servers",
                audioSrc: null,
            },
            {
                challengeId: 2,
                imageSrc: null,
                correct: false,
                text: "An on-premise virtualization platform",
                audioSrc: null,
            },
        ]);

        await db.insert(schema.challenge_options).values([
            {
                challengeId: 3,
                correct: false,
                text: "Metered billing based on usage",
                imageSrc: null,
                audioSrc: null,
            },
            {
                challengeId: 3,
                correct: false,
                text: "Rich monitoring built-in",
                imageSrc: null,
                audioSrc: null,
            },
            {
                challengeId: 3,
                correct: false,
                text: "Offers Infrastructure as a Service (IaaS)",
                imageSrc: null,
                audioSrc: null,
            },
            {
                challengeId: 3,
                correct: false,
                text: "Automation with Infrastructure as Code (IaC)",
                imageSrc: null,
                audioSrc: null,
            },
            {
                challengeId: 3,
                correct: true,
                text: "Only offers one or two cloud services",
                imageSrc: null,
                audioSrc: null,
            },
        ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();