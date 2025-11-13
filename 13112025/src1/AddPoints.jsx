import {useContext} from 'react'
import { ScoreContext } from './ScoreProvider'

const AddPoints = () => {
    const {addPoint} = useContext(ScoreContext)
    return <button onClick={() => addPoint(10)}>Dodaj 10 punktów</button>
}

export default AddPoints