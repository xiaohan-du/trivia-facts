import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card, Button } from 'react-bulma-components';
import './TFCard.scss';
class TFCard extends React.Component {

    constructor(props) {
        super(props);
        this.cardInner = React.createRef();
        this.state = {
            answerBtnShow: true
        };
    }

    flipCardToBack = _ => {
        this.cardInner.current.style.transform = 'rotateY(180deg)';
        this.setState({ answerBtnShow: false });
    }

    flipCardToFront = _ => {
        this.cardInner.current.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            this.setState({ answerBtnShow: true });
        }, 400);
    }

    render() {
        return (
            <Card className="TFCard">
                <div className="TFCard__inner" ref={this.cardInner}>
                    <div className="TFCard__front">
                        <Card.Header>
                            <Card.Header.Title className="TFCard__header__title">{this.props.Category}</Card.Header.Title>
                        </Card.Header>
                        <Card.Content className="TFCard__content">{this.props.Question}</Card.Content>
                        <Card.Footer className="TFCard__footer">
                            <Card.Footer.Item>
                                <Button
                                    className={[this.state.answerBtnShow ? null : 'TFCard__answer-btn__hide', "is-light is-large"].join(' ')}
                                    onClick={this.flipCardToBack}>
                                    Answer
                                </Button>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </div>
                    <div className="TFCard__back">
                        <Card.Header>
                            <Card.Header.Title className="TFCard__header__title">{this.props.Category}</Card.Header.Title>
                        </Card.Header>
                        <Card.Content className="TFCard__content">{this.props.Answer}</Card.Content>
                        <Card.Footer className="TFCard__footer">
                            <Card.Footer.Item>
                                <Button className="is-light is-large" onClick={this.flipCardToFront}>Back</Button>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </div>
                </div>
            </Card>
        )
    }
}

export default TFCard;