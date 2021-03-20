import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Devspacejumbo from '../../img/DevspaceJumbotron.svg';
import './styles.css';

const CodeOfConduct = () => {
    return (
        <Container fluid className="vw-100 black-bg d-flex flex-column justify-content-center align-items-center">
            <Row className="justify-content-center pt-5">
                <Link to="/">
                    <Image
                        src={Devspacejumbo}
                        alt="Devspace"
                        className="devspace-logo-coc"
                        fluid
                    />
                </Link>
            </Row>
            <Row className="mt-5 justify-content-center">
                <h1 className="white font-bold">CODE OF CONDUCT</h1>
            </Row>
            <Row className="mt-4 justify-content-center">
                <ol type="1" className="white coc-ol px-5">
                    <li>
                        Be Nice. Treat everyone with courtesy and respect each
                        other’s boundaries.
                    </li>
                    <li>No NSFW / sexually explicit content.</li>
                    <li>
                        Any form of hate speech, including but not limited to
                        racism, homophobia, sexism will not be tolerated.
                    </li>
                    <li>Do not spam several channels with the same post.</li>
                    <li>
                        If you are one of two users dominating the conversation
                        in a channel, please consider moving your conversation
                        to Direct Messages.
                    </li>

                    <li>
                        Self promotion or use of the platform to share links to
                        profiles, social media posts or servers is prohibited.
                    </li>

                    <li>
                        Maintain the quality of your messages. Posts such as
                        meme dumps, reposting, ASCII art, copypastas, emoji
                        trains are unacceptable.
                    </li>

                    <li>
                        If someone says something that annoys or offends you,
                        report the message and contact admins if needed. Do not
                        engage with them and start a flame war. Just walk away.
                    </li>

                    <li>
                        Do not witch-hunt, dox, or share private information
                        about anyone.
                    </li>

                    <li>
                        Don't share your work with the other participants on the
                        server or elsewhere until the event is over.
                    </li>

                    <li>
                        Use the text and voice channels for their dedicated
                        purpose by sending messages relevant to the respective
                        channels.
                    </li>

                    <li>
                        Feel free to reach out for help on the #help channel.
                        CSI members will take up your issues and move to a voice
                        channel if necessary. Please refrain from spamming,
                        sending Direct messages, or calling members of the
                        support team.
                    </li>

                    <li>
                        Do not try to bypass rules and warnings or aid someone
                        else to do the same by using alt accounts. This will
                        result in strict action being taken against the
                        offenders.
                    </li>
                </ol>
                <p className="coc-p white mt-5 text-center px-5">
                    Devspace aims to be a hub of innovation, encouragement and
                    productive discussion. We appreciate your efforts and
                    commitment towards helping us keep it this way. Thank you
                    and happy hacking!
                </p>
            </Row>
            <Row className="mt-4 justify-content-center white justify-content-center coc-ol px-5">
                <h2><b className="mb-4">Intellectual Property Declaration</b></h2>
                <br />
                <br />
                <br />
                By registering for Devspace, I declare that I am the original
                author of the submission and any associated form of Intellectual
                Property Rights therein. Submission would include any
                information or material created, developed, or submitted as a
                participant during the event.
                <br />
                I hereby unconditionally and without any restriction, agree to
                grant the Company, its affiliates, and its subsidiaries all
                rights, title, and interest in and to the submission including
                all Intellectual Property Rights and moral rights to use,
                reproduce, adapt, modify, publish, distribute, publicly perform,
                create a derivative work from, and publicly display the
                submission.
                <br />
                No confidential information or unauthorized usage of any source
                code, documentation, data points, or any other information
                relating to any third-party is used or included in my
                submission. If I use any third-party material or open source
                edition, I will comply with associate license and furnish
                related complete and accurate information {'&'} details to the
                event organizer.
                <br />
                I shall indemnify and hold the Company harmless from and against
                any third-party claims arising from my act or submission
                committed during the event.
                <br />
                The data sets and platforms made available by the Company to the
                participant remain the sole and exclusive property of the
                organization and should not be stored, reverse-engineered,
                copied, deduced, extracted, shared or replicated in any manner
                or medium whatsoever by the participant.
                <br />
                <br />
                <br />
                By registering for Devspace, I acknowledge and agree, in
                consideration of entering this event, that
                <ol>
                    <li>
                        I will not develop or submit the same or similar
                        submission in any other competition, or similar event
                        organized by any third-party.
                    </li>
                    <li>
                        All intellectual property rights in the entry submitted
                        by me shall vest exclusively with the Company.
                    </li>
                    <li>
                        I have read and understood the terms, and I understand
                        that any non- adherence to the above could lead to
                        strict legal action including immediate disqualification
                        from the event and backlisting from any future
                        event/collaboration held by the Company.
                    </li>
                </ol>
            </Row>
            <Row className="justify-content-center white py-5">
                <a href="/" className="white">
                    <u>Go to Home</u>
                </a>
            </Row>
        </Container>
    );
};

export default CodeOfConduct;
