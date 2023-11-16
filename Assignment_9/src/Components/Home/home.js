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
            height: 100,
            width: 450,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle}>
                <Label color={this.props.color} />
            </div>
        );
    }
}

export class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            auth: 0,
        };
    }





    render() {
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }
        return (

            <div>
                <NavBar />
                <br></br><br></br><br></br><br></br>
                <div className='contact'>

                    <br></br><br></br><br></br>
                    <div className='contactdetails'>
                        <br></br>
                        Welcome!!!!
                        <br></br>
                        <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='contactdetails1'>
                        <br></br>
                        <Card color="This is the home page for Job select." />
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;