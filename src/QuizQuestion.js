import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton"

class QuizQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        let answerStatus = true;
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            answerStatus = false
        }
        this.setState({ incorrectAnswer: answerStatus })
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answerOption, index) => {
                            return <QuizQuestionButton
                                key={index}
                                clickHandler={this.handleClick.bind(this)}
                                button_text={answerOption} />

                        })}

                    </ul>
                </section>
                {this.state.incorrectAnswer &&
                    <p className="error">Sorry, that's not right</p>}
            </main>
        )
    }
}

export default QuizQuestion