import React, {Component} from 'react';
import './Tour.scss';
//import London from '../../img/london.jpeg';

export default class Tour extends Component {
    state = {
        showinfo: false
    }

    handleShowinfo = ()=> {
        this.setState({
            showinfo : !this.state.showinfo,
        }
        )
    }

    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removetour} = this.props;
        return(
            <article className="tour">
                <div className="image-container">
                    <img src={img} alt="city"></img>
                    <span className="close-btn" onClick={()=>{removetour(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info
                        <span onClick = {this.handleShowinfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showinfo && <p>{info}</p>}              
                </div>
            </article>
        );
    }
}