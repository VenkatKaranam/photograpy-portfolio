import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import baby3 from '@/assets/images/works/baby3.png'
import { teaserData } from '@/shared/works';

const Teasers = () => {
    const [isOpen, setOpen] = useState(false);
    const [videoId,setVideoId] = useState('');

  return (
    <React.Fragment>
        <div className='teasers max-width-container'>
            <p className='section-heading'>Teasers</p>
        <div className='teasers-container'>
          {teaserData && (
            teaserData.map((teaser,key)=>(
              <div key={key} className="teaser-thumbnail" 
              onClick={() => (
                setOpen(true),
                setVideoId(teaser.videoID)
              )
                }
              > 
                <img src={teaser.thumbnail.src} className='thumbnail'/>
              </div>
            ))
          )}
        </div>
      </div>

      <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId={videoId}
				onClose={() => setOpen(false)} 
			/>
    </React.Fragment>
  )
}

export default Teasers