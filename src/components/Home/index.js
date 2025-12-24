import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from "react";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoS from '../../assets/images/logo_mikey.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ ' ','M', 'i', 'c', 'h', 'a', 'e', 'l', ' ', 'F', 'e', 'r', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={nameArray}
                            idx={15} 
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={jobArray}
                            idx={28} 
                        />
                    </h1>
                    <h2> Web Development | Cloud Computing | Artificial Intelligence </h2>
                    <div style={{display: 'flex', gap: '25px'}}>
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                        <a href="/Michael's Resume.pdf" download className="flat-button">
                        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '10px' }} />
                        RESUME
                        </a>
                    </div>
                </div>
                <div className="logo-image">
                        <img src={LogoS} alt='Michael Fera' /> 
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home