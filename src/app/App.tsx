import { TextCardData } from '../data/TextCard.ts'

import ImgCard from '../components/ImgCard/ImgCard.tsx'
import TextCard from '../components/TextCard/TextCard.tsx'
import Timer from '../components/Timer/Timer.tsx'
import Footer from '../components/Footer/Footer.tsx'
import Stage from '../components/Stage/Stage.tsx'
import Header from '../components/Header/Header.tsx'
import Img2 from '/2.svg'
import Img3 from '/3.svg'
import Img4 from '/4.svg'
import './App.css'

function App() {
    return (
        <>
            <div className="">
                <Header/>
                <div id="imgCards" className="row col-12 bg-d">
                    <ImgCard src={Img2} description="Олимпиада - это мероприятие, которое позволит оценить уровень знаний, даст толчок для дальнейшего совершенствования и расширения возможностей. Главная цель олимпиады - раскрыть направление информационных технологий  «изнутри»"/>
                    <ImgCard src={Img3} description="Олимпиада пройдет на базе кафедры автоматизированных систем управления 5 апреля, в дистанционном формате"/>
                    <ImgCard src={Img4} description="Участники смогут увидеть новые горизонты своего увлечения современными технологиями, а также сориентироваться в выборе профессии или закрепить сделанный уже выбор"/>
                </div>
                <div className="h65">Дополнительная информация</div>
                <div className="row col-12">
                    <TextCard {...TextCardData[0]} />
                    <TextCard {...TextCardData[1]} />
                </div>
                <div className="row col-12">
                    <TextCard {...TextCardData[2]} />
                    <TextCard {...TextCardData[3]} />
                </div>
                <div id="textCards" className="col-12">
                    <div className="h65">Этапы олимпиады</div>
                    <Stage
                        num="1"
                        head="Дистанционный этап"
                        des={[
                            {
                                description1: "Регистрация",
                                description2:
                                    "на сайте олимпиады (указать ФИО, город, школу, класс, e-mail, телефон)",
                            },
                            {
                                description1: "Прохождение",
                                description2:
                                    "в день проведения олимпиады, с 09:00 до 09:15, участники получают на указанные при регистрации адреса электронной почты ссылку на форму с тестовыми вопросами",
                            },
                            {
                                description1: "Оценивание",
                                description2:
                                    "тест с выбором ответа, до 100 баллов; проверка автоматическая, результаты публикуются на сайте",
                            },
                        ]}
                    ></Stage>
                    <Stage
                        num="2"
                        head="Очный этап"
                        des={[
                            {
                                description1: "Допуск",
                                description2:
                                    "более 60 баллов на первом этапе",
                            },
                            {
                                description1: "Место",
                                description2:
                                    "аудитории ДонНТУ",
                            },
                            {
                                description1: "Прохождение",
                                description2:
                                    "участники получат комбинированные задания; результат выполнения будет оцениваться по 100-балльной шкале; победители получат грамоты и дипломы🤩🥳",
                            },
                        ]}
                    ></Stage>
                </div>
                <Timer />
                <Footer />
            </div>
        </>
    )
}

export default App
