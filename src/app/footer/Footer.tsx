"use client"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
        <div className='flex justify-evenly p-16'>
            <section className='text-gray-500 flex flex-col gap-y-12'>
                <p>©Copyright koderx developers 2022</p>
                <p>Koderx Developers</p>
                <p>Harold Castaño</p>
                <p><a href="https://harold-enyoi.netlify.com/">https://harold-enyoi.netlify.com/</a></p>
            </section>
            <section>
                <div className='flex gap-x-12'>
                    <a href="https://www.facebook.com/profile.php?id=100073088183904"><FacebookRoundedIcon style={{color: "#666", fontSize: "40px"}} /></a>
                    <a href="https://github.com/haroldCoder/"><GitHubIcon style={{color: "#666", fontSize: "40px"}} /></a>
                    <a href="https://www.instagram.com/koder_alvarez/"><InstagramIcon style={{color: "#666", fontSize: "40px"}} /></a>
                    <a href="https://www.linkedin.com/in/harold-casta%C3%B1o-816180216/"><LinkedInIcon style={{color: "#666", fontSize: "40px"}} /></a>
                </div>
            </section> 
        </div>
        <h5 className='text-gray-600 text-center mb-4'>⚫Terminos y condiciones</h5>
    </>
  )
}
