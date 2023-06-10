import imageAbout from "../../../assets/images/img_1231.jpg";
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function LandingPage() {
    return (
    <>
    <section id="cabecera" className="mb-5 min-vh-100 d-flex align-items-center text-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-semibold text-uppercase display-1 text-white">marca personal</h1>
                    <h5 className="text-white mt-3 mb-4">Un lugar donde podrás compartir, visualizar y editar los proyectos realizados durante el curso académico.</h5>
                    <div>
                        <a href="#" className="btn btn-primary">¡Quiero registrarme!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="utilidades" className="mb-3">
        <div className="container">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <div className="mb-4">
                        <h1 className="mb-3 display-4 fw-semibold">¿Qué puedes hacer en Marca Personal?</h1>
                        <p className="mb-3">Según si eres profesor, alumno o empresa, Marca Personal te servirá para diferentes cometidos:</p>
                    </div>
                </div>
            </div>
            <div className="row text-center g-5">
                <div className="col-12 col-md-4">
                    <div className="utilidades shadow p-lg-5 p-4">
                        <div className="cajaIcono mb-4">
                            <PersonIcon sx={{fontSize: 30}}></PersonIcon>
                        </div>
                        <h5 className="fw-semibold mb-3">Alumno</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero excepturi ab.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="utilidades shadow p-lg-5 p-4">
                        <div className="cajaIcono mb-4">
                            <AccountBalanceIcon sx={{fontSize: 30}}></AccountBalanceIcon>
                        </div>
                        <h5 className="fw-semibold mb-3">Docente</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero excepturi ab.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="utilidades shadow p-lg-5 p-4">
                        <div className="cajaIcono mb-4">
                            <LocationCityIcon sx={{fontSize: 30}}></LocationCityIcon>
                        </div>
                        <h5 className="fw-semibold mb-3">¿Y si no estoy registrado?</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero excepturi ab.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contador">
        
    </section>
    </>
    )
}

export default LandingPage;