import Social from '../components/Social'
import Navbar from '../components/Navbar'

import '../css/layout.css'

const HomeLanding = () => {
    return <div className="home-landing">
        {/* home landing */}
        <div className="social-container">
            <Social/>
        </div>

        <div className="navbar-container">
            <Navbar/>
        </div>
        {/* home landing */}
    </div>
}

export default HomeLanding