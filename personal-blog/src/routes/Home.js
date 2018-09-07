import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {

        document.title = " Welcome | Renaissance Ernest"
        return (
            <main>
                <Grid>
                    <Row>
                        <Col xs={1} md={2}>
                        </Col>
                        <Col xs={10} md={8}>
                            <h1>
                                What I live by...
                            </h1>
                            <ul id="personalityList">
                                <li>Solving interesting problems and writing beautiful code.</li>
                                <li>Everyone has something special to them so look at each person with open eyes.</li>
                            </ul>
                        </Col>

                        <Col xs={1} md={2}>
                        </Col>

                    </Row>
                </Grid >
            </main>
        )
    }
}
