import LogoDonNTUWhite from '/logo donntu white.svg'
import LogoASUCS from '/3.svg'
import './Footer.scss'

function Footer() {
    return(
        <>
            <div className="footer">
                <div id="top">
                    <div className="side">
                        <div id="logotype1">
                            <a href="https://donntu.ru/" target="_blank"><img src={LogoDonNTUWhite}/></a>
                        </div>
                        <div className="text">
                            <a href="https://donntu.ru/" target="_blank">
                                <p>донецкий национальный</p>
                                <p>технический университет</p>
                            </a>
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
