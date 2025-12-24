import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPython, faCss3, faGitAlt, faHtml5, faJava, faReact, } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className="content-wrapper">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>

                    <div className='about-section personal'>
                        <h2>Beyond the Code</h2>
                        <p>
                            Outside of academics and engineering, I enjoy staying active and finding new things
                            that keep me motivated and excited. I am huge runner as I have ran multiple half marathons 
                            and currently training for a full! I also love movies and tv shows, such as Breaking Bad and Whiplash <strong>(Two of the GOATs)</strong>.
                            On top of that, I fight for my life watching the Steelers play every week but it is one of the best experiences,
                            coming from a sports fan.
                        </p>

                    </div>
                    <div className='about-section technical'>
                        <h2>Engineering & Technical Focus</h2>
                        <p>
                            I am a Computer Science student at the University of Minnesota Twin Cities,
                            concentrating in Intelligence and Software Engineering/Database Systems, and expected to
                            graduate in May 2026 with a 3.85 GPA. My academic foundation spans through data structure 
                            and algorithms, software engineering, artifical intelligence, operating systems, databases, and
                            computer graphics
                        </p>
                        <p>
                            My professional expereince includes working as a Software Engineer at Tropho, where I built scalable
                            mobile and backend systems using React Native, Firebase, and third-party APIs, and serving as an Undergraduate
                            Teaching Assistant leading Python labs for over 100 students.
                        </p>
                    </div>
                    <div className='about-section skills'>
                        <h2>Technical Skills</h2>
                        <p>
                            <strong>Languages:</strong> Java, JavaScript, Python, C, Ocaml, HTML/CSS
                        </p>
                        <p>
                        <strong>Frameworks/Technologies:</strong> React, React Native, Node.js, Firebase, Google Cloud, Flask, SQL, Bootstrap
                        </p>
                        <p>
                            <strong>Developer Tools:</strong> Git, GitHub, IntelliJ IDEA, VS Code, JUnit, Mockito
                        </p>
                        <p>
                            <strong>Concepts/Algorithms: </strong> A*, BFS, DFS, Alpha-Beta Pruning, minimax, Heaps, AVL Trees, Graph Traversal, Design Patterns
                        </p>

                        <h2>Honors and Awards</h2>
                        <p>
                            <strong>Tau Beta Pi, Engineering Honor Society</strong> - University of Minnesota
                        </p>
                        <p>
                            <strong>CSE Dean's List (5 Semesters)</strong> - University of Minnesota
                        </p>
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#3c6a9a" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color="#e9342e" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}



export default About