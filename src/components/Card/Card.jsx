import React from 'react'
import Avatar from '../../assets/avatar-muneeb.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './Card.css'

const Card = () => {
    const onGithub = () => {
        location.href = "https://github.com/MaestroOG"
    }

    const onInsta = () => {
        location.href = "https://www.instagram.com/ig._flynn?igsh=YnFleTd2aDA2Znll"
    }

    const onWhatsApp = () => {
        location.href = "https://wa.me/qr/HBXECR2NOB5RF1"
    }

    const onLinkedIn = () => {
        location.href = "https://linkedin.com/in/muneeb-ur-rehman-6122b4292/"
    }



    return (
        <>
            <div className="card-container">
                <div className="info">
                    <img src={Avatar} alt="avatar" />
                    <h1>Muneeb Ur Rehman</h1>
                    <h3>Faisalabad, Pakistan</h3>
                    <div className="bio">"Full-Stack Developer and avid reader."</div>
                </div>
                <div className="links">
                    <ul>
                        <li onClick={onGithub}><FaGithub />{" "}Github</li>
                        <li onClick={onInsta}><FaInstagram />{" "}Instagram</li>
                        <li onClick={onWhatsApp}><FaWhatsapp />{" "}Whatsapp</li>
                        <li><FaXTwitter />{" "}Twitter</li>
                        <li onClick={onLinkedIn}><FaLinkedin />{" "}LinkedIn</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
