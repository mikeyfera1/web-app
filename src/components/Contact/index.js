import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

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
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Best way to contact me is through email or through my LinkedIn/Github profiles. I respond to most emails, especially if it is about projects, or anything I have
                        done in the past 
                    </p>
                    <div className='contact-links'>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /> Email: <a href="mailto:mikeyfera1@gmail.com">mikeyfera1@gmail.com</a>
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" /> LinkedIn: <a href="https://www.linkedin.com/in/mikeyfera1/" target="_blank" rel="noreferrer">linkedin.com/in/mikeyfera1</a>
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e" /> GitHub: <a href="https://github.com/mikeyfera1" target="_blank" rel="noreferrer">github.com/mikeyfera1</a>
                        </p>
                    </div>
                    <p>
                        Please feel free to follow me on Github, LinkedIn, or want to connect via Discord or anywhere else, but I respond to emails the fastest!
                    </p>
                    <p>
                        If you're interested in working on a project together, please feel free to reach out!
                    </p>
                </div>
                <div className='info-map'>
                    Michael Fera,
                    <br />
                    United States,
                    <br />
                    Pittsburgh PA, 15241 <br />
                    <span>mikeyfera1@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[40.440624, -79.995888]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[40.440624, -79.995888]}>
                            <Popup>Pittsburgh, Pennsylvania</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact