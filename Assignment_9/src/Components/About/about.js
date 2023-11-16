import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };

        return (
            <p style={labelStyle}>{this.props.color}</p>
        );
    }
}

class Card extends React.Component {
    render() {

        var cardStyle = {
            height: 170,
            width: 690,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }
        return (
            <div style={cardStyle}>
                <Label color={this.props.color} />
            </div>
        );
    }
}

export class About extends Component {
    render() {
        return (
            <div className='contact'>
                <NavBar />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className='contactdetails6'>
                    <br></br>
                    Hi There!!
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='contactdetails5'>
                    <br></br>
                    <Card color="This is the about page for Job select.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    <br></br>
                </div>
            </div>
        )
    }
}

export default About;