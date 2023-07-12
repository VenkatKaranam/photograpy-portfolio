import React from 'react'

const Footer = () => {
    const socialmedia=[
        {
            name: 'Gmail',
            link: '',
        },
        {
            name: 'Youtube',
            link: '',
        },
        {
            name: 'Instagram',
            link: '',
        },
        {
            name: 'Whatsapp',
            link: '',
        }
    ]
  return (
    <div className='footer max-width-container'>
        <div className='socialmedia-links'>
            {socialmedia && (
                socialmedia.map((item,key) =>(
                    <a href={item.link} key={key} className='link'>{item.name}</a>
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