import React from 'react'
import Avatar from '../../assets/avatar-muneeb.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './Card.css'

const Card = () => {
    return (
        <>
            <div className="card-container">
                <div className="info">
                    <img src={Avatar} alt="avatar" />
                    <h1>Muneeb Ur Rehman</h1>
                    <h3>Faisalabad, Pakistan</h3>
                    <div className="bio">"Front-End Developer and avid reader."</div>
                </div>
                <div className="links">
                    <ul>
                        <li><FaGithub />{" "}Github</li>
                        <li><FaInstagram />{" "}Instagram</li>
                        <li><FaWhatsapp />{" "}Whatsapp</li>
                        <li><FaXTwitter />{" "}Twitter</li>
                        <li><FaLinkedin />{" "}LinkedIn</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
