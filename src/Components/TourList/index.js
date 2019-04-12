import React, {Component} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../TourList/tourData';

class TourList extends Component {
    state = {
        tours : tourData,
    }

    removeTourHandler = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour=> {
            return tour.id !==id
        })
        this.setState({
            tours : sortedTours
        })
    }
    render() {
        const {tours} = this.state; 
        return(
            <section className="tour-list">
                {tours.map(tour => {
                    return (
                    <Tour key ={tour.id} tour = {tour} removetour = {this.removeTourHandler}/>
                    )
                })}
            </section>
        )
    }
}

export default TourList;