import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import TrophoImg from '../../assets/images/tropho.png';
import UMNImg from '../../assets/images/umn.png';
import USCImg from '../../assets/images/usc.jpg';
import DBFLImg from '../../assets/images/dbfl.png';

const ExperienceSection = () => {

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
            <div className="container experience-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>

                    <div className="timeline">
                        
                        <div className="experience-card">
                            <div className="time">Jun 2025 — Present</div>

                            <div className="card-content">
                                <img src={TrophoImg} alt="Tropho Logo" />

                                <div className="info">
                                <h3>Software Engineer</h3>
                                <h4>Tropho</h4>

                                <p>
                                    Used <strong>React Native and Expo</strong> to develop a cross-platform mobile frontend, allowing users to find
                                    allergy-free restaurant menu items and improving accessibility for those with allergy and dietary restrictions. Leveraged
                                    <strong> Firebase Authentication, Firestore, and Firebase Storage</strong> to build and manage scalable backend services, supporting user and restaurant accounts,
                                    and menu data as the platform expands. Integrated third-party APIs, including <strong>Google Maps and Places Autocomplete</strong> for location services and fuzzy search with 
                                    <strong> Fuse.js</strong>, enhancing user experience and enabling efficient restaurant discovery. <strong>Collaborated within a team</strong>, to effectively create and maintain features within the
                                    app, using softwares like <strong>Jira</strong> and <strong>GitHub</strong>, to display updates more efficiently. Effectively worked with higher management to discuss future features and plans,
                                    and the most productive way to implement said features to priotize user experience and satisfaction.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-card">
                            <div className="time">Oct 2021 — Present</div>

                            <div className="card-content">
                                <img src={DBFLImg} alt="DBFL Logo" />

                                <div className="info">
                                <h3>Founder</h3>
                                <h4>DBFL | Football League</h4>

                                <p>
                                    Founded a non-profit football league, which currently contains more than <strong>30 members</strong>. 
                                    Created a backend system, using <strong>Google Sheets API</strong>, with over 100 statistics to ensure competitive play and better 
                                    understatement of lower-level football <em>(flag football)</em>. Will soon integrate a new backend system in the 2026 season, which is a more
                                    standard system such as a <strong>noSQL database like MongoDB</strong>. In previous seasons, used <strong>Node.js and Discord.js</strong> to create an easy-access discord bot 
                                    to display all statistics to players and distribute them more efficiently. This will still be in use but with the current integration of a noSQL database, the league is transfering
                                    over to a new website, utilizing <strong>ExpressJS and a templating language</strong> to make easier access.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-card">
                            <div className="time">Sep 2024 — May 2025</div>

                            <div className="card-content">
                                <img src={UMNImg} alt="UMN Logo" />

                                <div className="info">
                                <h3>Undergraduate Teaching Assistant</h3>
                                <h4>University of Minnesota</h4>

                                <p>
                                    Led weekly <strong>Python programming labs</strong> for over 100 students, providing guidance and troubleshooting to reinforce programming
                                    concepts. Streamlined grading and provided <strong>technical feedback</strong> on homework and lab assignements for hundreds of students, accelerating their
                                    understanding of Python and more advanced concepts within programming. Created <strong>instructional content and debugging exercises</strong> to clarify complex programming concepts, enhancing student engagement during
                                    labs and office hours. Was one of the more fun jobs, as I got to help and see the improvement and engagement from students who were excited to learn within labs and expecially my office hours. Because of this, a lot more of my students
                                    ended up learning more than what I previously could have done in the beginner course because of the increased engagement and oppertunities to
                                    obtain more experience than just the concepts being taught.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-card">
                        <div className="time">Jun 2023 — Aug 2024</div>

                        <div className="card-content">
                            <img src={USCImg} alt="USC Logo" />

                            <div className="info">
                            <h3>District Custodian</h3>
                            <h4>Upper St. Clair School District</h4>

                            <p>
                                Collaborated with a <strong>30-member team </strong>to clean and maintain <strong>10 district facilities</strong>, ensuring a safe and sanitary environment for the students
                                and staff. Managed <strong>cleaning schedules and task coordination</strong> under strict time constraints meeting daily and project-based deadlines efficiently.
                                Resolved unexpected maintenance challenges proactively, demonstrating <strong>problem-solving skills and adaptability</strong> to main consistent facility standards. 
                            </p>
                            <p>
                                Notes: Collaborated within smaller teams to complete tasks more efficient. This gave a chance to connect and make the work experience better as you got to work with the same
                                people day to day and made the job easier to perform. Gave the idea of <strong>strong work ethic and standards</strong> that I apply to any job, including my <strong>Engineering position</strong>
                                at Tropho.
                            </p>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default ExperienceSection