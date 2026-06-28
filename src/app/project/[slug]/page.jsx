"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import "./page.css"
import { useParams } from 'next/navigation'
import projectData from '../project.json'

function Page() {
    const params = useParams();
    const slug = params?.slug;

    const { blogs } = projectData;
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (slug) {
            const foundProject = blogs.find(
                b => b.slug === slug ||
                    b.title.toLowerCase() === slug.toLowerCase() ||
                    b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug.toLowerCase()
            );
            setProject(foundProject);
        }
    }, [slug, blogs]);

    const { title, date, introduction, description, coverImage, content } = project || {};

    return (
        <div className='grandparent-project'>
            <div className='parent-project'>
                <div className='heading-project'>
                    <h1 className='heading-project'>{title}</h1>
                    <h3 className='text-2xl'>{date}</h3>
                </div>
                <div className='introduction-project rem-top'>{introduction}</div>
                <div className='des-project rem-top'>{description}</div>
                <div className='img-project'>
                </div>
                <div className='head_para_description'>
                    <div>
                        {content?.map((item, i) => (
                            <>
                                <h1 className='rem-top'>{item.title}</h1>
                                <Image
                                    className='rem-top'
                                    src={item.image}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                                <p className='rem-top'>{item.description}</p>
                            </>
                        ))}
                    </div>
                    {/* <div>
                        <Image
                            className='rem-top'
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p className='rem-top'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div> */}
                    {/* <div>
                        <Image
                            className='rem-top'
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p className='rem-top'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div>
                    <div>
                        <Image
                            className='rem-top'
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p className='rem-top'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Page