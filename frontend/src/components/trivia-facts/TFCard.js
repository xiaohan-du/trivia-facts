import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card, Button } from 'react-bulma-components';
import './TFCard.scss';
class TFCard extends React.Component {

    constructor(props) {
        super(props);
        this.cardInner = React.createRef();
    }

    flipCardY = _ => {
        this.cardInner.current.style.transform = 'rotateY(180deg)';
    }

    flipCardX = _ => {
        this.cardInner.current.style.transform = 'rotateY(360deg)';
    }

    render() {
        return (
            <Card className="TFCard">
                <div className="TFCard-inner" ref={this.cardInner}>
                    <div className="TFCard-front">
                        <Card.Header>
                            <Card.Header.Title>
                                {this.props.Category}
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content className="TFCard__content">
                            {this.props.Question}
                        </Card.Content>
                        <Card.Footer className="TFCard__footer">
                            <Card.Footer.Item>
                                <Button className="button is-success is-large" onClick={this.flipCardY}>Answer</Button>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </div>
                    <div className="TFCard-back">
                        <Card.Header>
                            <Card.Header.Title>{this.props.Category}</Card.Header.Title>
                        </Card.Header>
                        <Card.Content className="TFCard__content">{this.props.Answer}</Card.Content>
                        <Card.Footer className="TFCard__footer">
                            <Card.Footer.Item onClick={this.flipCardX}>
                                <Button className="button is-white is-normal" onClick={this.flipCardX}>Back</Button>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </div>
                </div>
            </Card>
        )
    }
}

export default TFCard;