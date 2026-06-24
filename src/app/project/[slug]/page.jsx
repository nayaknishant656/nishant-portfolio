import React from 'react'
import Image from 'next/image'
import "./page.css"
// import Waterloo from './waterloo.png'
function Page() {
    return (
        <div className='grandparent-project'>
            <div className='parent-project'>
                <div className='heading-project'>
                    <h1>Emotionally-AI</h1>
                </div>
                <div className='introduction-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsa corrupti nesciunt qui consequuntur maxime accusamus sequi tenetur dolores delectus minima, eos illum optio voluptas possimus sunt exercitationem necessitatibus? Reiciendis impedit rerum in nihil voluptatum provident sit eligendi aut itaque id, autem optio eveniet blanditiis suscipit, voluptate error aliquid est.</div>
                <div className='des-project'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, deserunt!</div>
                <div className='img-project'>
                    <Image
                        src="/mitremedia.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <p>hii this is image</p>
                </div>
                <div className='head_para_description'>
                    <div>
                        <Image
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div>
                    <div>
                        <Image
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div>
                    <div>
                        <Image
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div>
                    <div>
                        <Image
                            src="/mitremedia.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, odio corporis voluptates illo debitis, culpa voluptatum, quasi quibusdam ab dolorum ducimus atque excepturi esse adipisci distinctio nisi. Quae, iusto voluptatem!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page