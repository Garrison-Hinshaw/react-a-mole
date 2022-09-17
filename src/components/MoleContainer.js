import { useState } from 'react'
import Mole from './Mole'
import EmptySlots from './EmptySlot'

function MoleContainer(props){
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
            <EmptySlots />
        </div>
    )
}

export default MoleContainer