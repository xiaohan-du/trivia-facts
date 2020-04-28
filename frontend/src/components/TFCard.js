import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card, Button } from 'react-bulma-components';
import './TFCard.scss';
class TFCard extends React.Component {

    constructor(props) {
        super(props);
        this.flipCardX = this.flipCardX.bind(this);
        this.flipCardY = this.flipCardY.bind(this);
        this.cardInner = React.createRef();
    }

    flipCardY() {
        this.cardInner.current.style.transform = 'rotateY(180deg)';
    }

    flipCardX() {
        this.cardInner.current.style.transform = 'rotateY(360deg)';
    }

    render() {
        return (

            <div className="column is-narrow">
                <Card>
                    <div className="flip-card">
                        <div className="flip-card-inner" ref={this.cardInner}>
                            <div className="flip-card-front">
                                <Card.Header>
                                    <Card.Header.Title data-category={this.props.Category}>
                                        {this.props.Category}
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Content className="TFCard__content">
                                    {this.props.Question}
                                </Card.Content>
                                <Card.Footer className="TFCard__footer">
                                    <Card.Footer.Item>
                                        <Button onClick={this.flipCardY}>Answer</Button>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </div>
                            <div className="flip-card-back">
                                <Card.Header>
                                    <Card.Header.Title>{this.props.Category}</Card.Header.Title>
                                </Card.Header>
                                <Card.Content className="TFCard__content">{this.props.Answer}</Card.Content>
                                <Card.Footer className="TFCard__footer">
                                    <Card.Footer.Item onClick={this.flipCardX}>
                                        <Button onClick={this.flipCardX}>Back</Button>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default TFCard;