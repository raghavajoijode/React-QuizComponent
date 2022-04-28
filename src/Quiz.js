import React, { Component } from "react";
let quizData = require("./quiz_data.json")

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quiz_position: 1
        }
    }

    render() {
        let firstQuiz = quizData.quiz_questions[0]
        return (
            <div>
                <div className="QuizQuestion">
                    {firstQuiz.instruction_text}
                </div>
            </div>
        )
    }
}

export default Quiz;