import React from 'react'
import EventItem from './Event-item';




const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((item) => {
                return (
                    <EventItem key={item.id} id={item.id} image={item.image} location={item.location} date={item.date} title={item.title} />
                )
            })}
        </ul>
    )
}

export default EventList