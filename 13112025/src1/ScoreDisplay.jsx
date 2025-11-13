import {useContext} from 'react'
import { ScoreContext } from './ScoreProvider'

const ScoreDisplay = () => {
    const {score} = useContext(ScoreContext)
    return <p>Twój wynik {score}</p>
}

export default ScoreDisplay