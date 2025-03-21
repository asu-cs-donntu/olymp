import { ResultsData } from '../../data/Results.ts'
import HeaderResults from '../../components/HeaderResults/HeaderResults.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import './Results.scss'

function Results() {
    return(
        <>
            <HeaderResults />
            <div className="content">
                <div className="container">
                    <section>
                        <div className="heading">
                            <h2>Результаты</h2>
                            <h3>Отборочного тура олимпиады для школьников 9 - 11 классов учебных заведений Донецкой
                                Народной
                                Республики по информатике и компьютерным технологиям</h3>
                        </div>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Занятое место</th>
                                <th scope="col">Фамилия, имя</th>
                                <th scope="col">Учебное заведение</th>
                                <th scope="col">Набрано баллов</th>
                                <th scope="col">Допуск*</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ResultsData.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.place}</td>
                                    <td>{result.name}</td>
                                    <td>{result.school}</td>
                                    <td>{result.score}</td>
                                    <td>{result.allowance}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <p>* — На заключительный тур проходят участники, показавшие наилучшие результаты в первом этапе (не более 40 человек). Отметка "+" - участник допущен к заключительному туру, отметка "—" - не допущен.</p>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Results