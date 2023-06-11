import AllOutIcon from '@mui/icons-material/AllOut';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FooterComponent() {

    return (
        <>
        <footer className="py-5 text-white">
            <div className="footer-top my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <AllOutIcon sx={{fontSize: 70}} className='mb-3' id="footer-icon"></AllOutIcon>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi earum atque consequuntur suscipit.</p>
                            <div className="social-links d-flex gap-2">
                                <a href=""><FacebookIcon></FacebookIcon></a>
                                <a href=""><InstagramIcon></InstagramIcon></a>
                                <a href=""><LinkedInIcon></LinkedInIcon></a>
                                <a href=""><YouTubeIcon></YouTubeIcon></a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 ms-auto">
                            <h6 className='fw-semibold text-uppercase mb-4'>Contacto</h6>
                            <p className='mb-1'>968 32 13 01</p>
                            <p className='mb-1'>30019702@murciaeduca.es</p>
                            <p className='mb-1'>Calle Carlos III, 3 - Cartagena, 30201</p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h6 className='fw-semibold text-uppercase mb-4'>Horario de apertura</h6>
                            <p className='mb-1'>Lunes a Viernes - 8:00h a 21:15h</p>
                            <p className='mb-1'>Sábados y domingos - Cerrado</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mb-4">
                <div className="container">
                    <div className="row mt-4 justify-content-between">
                        <div className="col-auto">
                            <p className="mb-0">Copyrights all rights reserved</p>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0">Designed by <a href='#'>CIFP Carlos III</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )

}

export default FooterComponent;