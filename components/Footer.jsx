import React from 'react'

const Footer = () => {
    const socialmedia=[
        {
            name: 'Gmail',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=aithavijay926@gmail.com',
        },
        {
            name: 'Youtube',
            link: 'https://www.youtube.com/@vjrishiphotography3973/videos',
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/vj_rishi_photography/',
        },
        {
            name: 'Whatsapp',
            link: 'https://api.whatsapp.com/send?phone=7659988244',
        }
    ]
  return (
    <div className='section footer max-width-container'>
        <div className='socialmedia-links'>
            {socialmedia && (
                socialmedia.map((item,key) =>(
                    <a href={item.link}  target="_blank" key={key} className='link'>{item.name}</a>
                ))
            )}
        </div>
        <div className='contact-details'>
            <p>booknow@vjrishiphotography</p>
            <p>+91 7659988244</p>
        </div>
    </div>
  )
}

export default Footer