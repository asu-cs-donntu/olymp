import LogoDonNTUWhite from '/icons/logo donntu white.svg'
import LogoASUCS from '/images/3.svg'
import './Footer.scss'

function Footer() {
    return(
        <>
            <div id="footer">
                <div id="top">
                    <div className="side">
                        <div id="logotype1">
                            <a href="donntu.ru" target="_blank"><img src={LogoDonNTUWhite}/></a>
                        </div>
                        <div className="text">
                            <p>донецкий национальный</p>
                            <p>технический университет</p>
                        </div>
                    </div>
                    <div className="center"></div>
                    <div className="side">
                        <div id="logotype2">
                            <a href="http://asu-cs.donntu.ru/" target="_blank"><img src={LogoASUCS}/></a>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <p>© 2025 - 2026</p>
                </div>
            </div>
        </>
    )
}

export default Footer
