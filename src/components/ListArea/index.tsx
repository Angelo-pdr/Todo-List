import * as C from './styles'
import {TypeList} from '../../types/type.list'
import {useState} from 'react'


type Props = {
    item:TypeList
    onRemove: (itemNumber: TypeList) => void
}

export const ListArea = ({item ,onRemove}: Props) => {

    const RandomColor = ():string => {
    
        let colors = ['#04D939', '#0FC2C0', '#D92525', '#FF4858', '#FF6B1A', 'white', '#0099DD', '#A1C7E0']
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
        return  colors[random(0, colors.length)]  
    }

    const HandleClick = (event: TypeList) => {
        onRemove(event)
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
            <div onClick={event => HandleClick(item)}>🗑️</div>
        </C.Container>
    )
}