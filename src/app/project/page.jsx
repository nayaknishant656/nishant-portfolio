import React from 'react'
import BlurFade from "@/components/magicui/blur-fade";
const data = {
    project: [
        {
            id: 1,
            title: "Snappy",
            description: "Snappy-Poornima Project",
            link: "/project/1",
        }, {
            id: 2,
            title: "AI-Journal",
            description: "AI-Journal Project",
            link: "/project/2",
        }, {
            id: 3,
            title: "Trading-Market-Place",
            description: "Trading-Market-Place Project",
            link: "/project/3",
        }, {
            id: 4,
            title: "Paardarshi",
            description: "Paardarshi Project",
            link: "/project/4",
        }, {
            id: 5,
            title: "Doctor-AI",
            description: "Doctor-AI Platform tactics",
            link: "/project/5",
        },
        {
            id: 6,
            title: "Nawnit-Studio-Prints",
            description: "Nawnit-Studio-Prints",
            link: "/project/6",
        },
        {
            id: 7,
            title: "React-Ecommerce",
            description: "i developed and i didnt want to build but anyways i tried and build these project",
            link: "/project/7",
        },
    ],
};
const BLUR_FADE_DELAY = 0.04;
function page() {
    return (
        <BlurFade delay={BLUR_FADE_DELAY}>
            <div>
                {data.project.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href={item.link}>View Project</a>
                    </div>
                ))}
            </div>
        </BlurFade>
    )
}

export default page