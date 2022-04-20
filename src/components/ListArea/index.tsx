import * as C from './styles'
import {TypeList} from '../../types/type.list'
import {useState} from 'react'
import {List} from '../../List'

type Props = {
    item:TypeList
}

export const ListArea = ({item}: Props) => {

    const RandomColor = ():string => {
    
        let colors = ['#04D939', '#0FC2C0', '#D92525', '#FF4858', '#FF6B1A', 'white', '#0099DD', '#A1C7E0']
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
        return  colors[random(0, colors.length)]  
    }

    const [isChecked, setIsChecked] = useState (item.done)

    return(

        <C.Container color={RandomColor()} >

            <C.CheckItems done={isChecked}>
                <input type="checkbox" 
                    checked={isChecked}
                    onChange={event => setIsChecked(event.target.checked)}
                 />
                <p>{item.name}</p>
            </C.CheckItems>
            <div >🗑️</div>
        </C.Container>
    )
}