import React from "react";
import { Row, Col } from "react-bootstrap";

const GoBack = (props) => {

    const goBack = () => {
        props.history.goBack();
    }

    return (
        <Row className="custom-row" onClick= {() => goBack()}>
            <Col md={12}>
                <div className="back-link">
                    <span>
                        <i className="far fa-arrow-left"></i> Back
                    </span>
                </div>
            </Col>
        </Row>
    )
}

export default GoBack;