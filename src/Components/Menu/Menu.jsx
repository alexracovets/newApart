
import { useState } from 'react';
import s from './Menu.module.scss';

export default function Menu() {
    const [isActive, setIsActive] = useState(false);

    const redirectLink = (link) => {
        window.location.replace(link);
    }

    const links = [
        {
            image: './image/web.svg',
            link: '###',
            name: 'web'
        },
        {
            image: './image/contact.svg',
            link: '###',
            name: 'contact'
        },
        {
            image: './image/share.svg',
            link: '###',
            name: 'share'
        }
    ]
    return (
        <div className={s.menu_wrapper}>
            <div className={s.menu}>
                <div className={isActive ? s.burger + ' ' + s.active : s.burger} onClick={() => setIsActive(!isActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={s.buttons} style={{ opacity: 0, position: 'relative', pointerEvents: 'none' }}>
                    <button></button>
                    {links.map((link, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => redirectLink(link.link)}
                            >
                                <img src={link.image} alt={link.name} />
                            </button>
                        )
                    })}
                </div>
                <div className={s.buttons} style={{ transform: isActive ? 'translateY(0%)' : `translateY(-150%)`, opacity: isActive ? `1` : '0' }}>
                    <button></button>
                    {links.map((link, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => redirectLink(link.link)}
                                style={{ opacity: isActive ? `1` : '0', transitionDelay: isActive ? `100ms` : '0', transitionDuration: isActive ? `0` : '300ms' }}
                            >
                                <img src={link.image} alt={link.name} />
                            </button>
                        )
                    })}
                </div>
            </div>
        </div >
    )
} 
