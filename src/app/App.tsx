import { ImgCardData } from '../data/ImgCard.ts'
import { TextCardData } from '../data/TextCard.ts'
import ImgCard from '../components/ImgCard/ImgCard.tsx'
import TextCard from '../components/TextCard/TextCard.tsx'
import Timer from '../components/Timer/Timer.tsx'
import Footer from '../components/Footer/Footer.tsx'
import Stage from '../components/Stage/Stage.tsx'
import Header from '../components/Header/Header.tsx'
import './App.css'

function App() {
    return (
        <>
            <div className="">
                <Header/>
                <div id="imgCards" className="row col-12 bg-d">
                    <ImgCard {...ImgCardData[0]} />
                    <ImgCard {...ImgCardData[1]} />
                    <ImgCard {...ImgCardData[2]} />
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
                                    "в день тестирования участник получает доступ к форме на Яндекс; время на выполнение — 3 часа, после чего доступ закрывается",
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
                                description1: "Победители получат",
                                description2:
                                    "грамоты и дипломы",
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
