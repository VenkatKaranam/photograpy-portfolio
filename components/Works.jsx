import { useState } from "react"
import WorksGallery from "./WorksGallery";

const Works = () => {
    const navItems=[
        {
            key:'engagement',
            value: 'Engagement',
        },
        {
            key:'pre_wedding',
            value: 'Pre-wedding',
        },
        {
            key:'haldi',
            value: 'Haldi',
        },
        {
            key:'wedding',
            value: 'Wedding',
        },
        {
            key:'baby_shoot',
            value: 'Baby Shoot',
        },
    ]
    const [tab,setTab] = useState(navItems[0].key);
  return (
    <div id="works" className='section works max-width-container'>
        <p className='section-heading'>
            Our Latest Work
        </p>
        <div className='child-nav no-scrollbar'>
            <div className="nav-items">
            {
                navItems.map((item,key) => (
                    <div key={key}>
                    <button  onClick={()=>setTab(item.key)} className={tab === item.key? 'active' : ''} >{item.value}</button>
                    </div>
                ))
            }
            </div>
          <hr className={`line ${tab}`}></hr>
        </div>

        <div className="tab-view">
            <WorksGallery tab={tab} />
        </div>
    </div>
  )
}

export default Works