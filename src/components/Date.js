import React from 'react'
import {DateContainer,DateWrapper} from './DateStyle'


const DateToday = () => {

    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()

    return (
        <DateContainer>
            <DateWrapper>{date}</DateWrapper>
            </DateContainer>
    )
}

export default DateToday