import React from 'react';

function navbar() {
  return (
    <div className='navbar border mt-5'>
      <div className='col1'>
        <div className='name-col border'>Devika Kumari</div>

        <div className='contact-col border'>
            <img src="https://static.vecteezy.com/system/resources/previews/017/396/815/non_2x/google-contacts-icon-free-png.png" alt= "" className='image-logo border'/>  
            <span>+916204032137</span>
        </div>

        <div className='image-col'>
          <img src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg" alt="" className='gmail-logo'/>
          <span>devika21@navgurukul.org</span>
        </div>
      </div>

      <div className='col2'>
        <div className='col-1'>Home</div>
        <div className='col-2'>Portfolio</div>
        <div className='col-3'>Skills</div>
        <div className='col-4'>contact</div>
      </div>
    </div>
  )
}

export default navbar;
