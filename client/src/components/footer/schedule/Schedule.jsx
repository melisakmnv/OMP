import './schedule.css'

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule__item">
                <span>LUNDI</span>
                <span>Fermé</span>
            </div>

            <div className="schedule__item">
                <span>MARDI</span>
                <span>Fermé</span>
            </div>

            <div className="schedule__item">
                <span>MERCREDI</span>
                <span>17:00 - 23:00</span>
            </div>

            <div className="schedule__item">
                <span>JEUDI</span>
                <span>17:00 - 23:00</span>
            </div>

            <div className="schedule__item">
                <span>VENDREDI</span>
                <span>17:00 - 23:00</span>
            </div>

            <div className="schedule__item">
                <span>SAMEDI</span>
                <span>17:00 - 23:00</span>
            </div>

            <div className="schedule__item">
                <span>DIMANCHE</span>
                <span>Fermé</span>
            </div>
        </div>
    )
}

export default Schedule