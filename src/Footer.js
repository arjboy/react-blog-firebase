import PhoneIcon  from '@mui/icons-material/Phone'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import React from 'react'
import './footer.css'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
function Footer() {
  return (
    <div className='footer'>
        <div className="ftexts">
        <a href="/">Bloggy</a>
        <p>This site is made by <a href="https://instagram.com/arth_dgaf"> Arth Jain </a> :)</p>
        </div>
        <div className="flist">
             <a href="https://instagram.com/arth_dgaf"><PhoneIcon title='Instagram' />Contact me</a>
             <a href=''>  <MiscellaneousServicesIcon /> Terms of Service</a>
             <a href='/blog'> <LibraryBooksIcon/> Our Blog</a>
            
        </div>
    </div>
  )
}

export default Footer