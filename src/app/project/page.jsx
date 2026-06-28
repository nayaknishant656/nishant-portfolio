import React from 'react'

const data = {
    project: [
        {
            id: 1,
            title: "Emotionally-AI",
            description: "i developed and i didnt want to build but anyways i tried and build these project",
            link: "/project/1",
        },
    ],
};

function page() {
    return (
        <div>
            {data.project.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.link}>View Project</a>
                </div>
            ))}
        </div>
    )
}

export default page