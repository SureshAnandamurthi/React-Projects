import React, { Component } from 'react';
import quizService from "./quizService";
import "./assets/style.css";
import ReactDOM from 'react-dom';
import QuestionBox from "./components/QuestionBox";

class QuizBee extends Component{
    state = {
        questionBank : [],
        responses : 0,
        score : 0
    }

    componentDidMount = ()=>{
        quizService()
        .then((response)=>{
            this.setState({questionBank : response});
        })
        .catch()
    }

    computerAnswer = (answer, correctAnswer)=>{
        if (answer === correctAnswer){
            this.setState({score : this.state.score + 1})
        }
        this.setState({responses : this.state.responses < 5 ? this.state.responses + 1 : 5})
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="title">
                        QuizBee
                    </div>
                    <div className="body">
                        {this.state.questionBank.length > 0 && 
                        this.state.responses < 5 &&
                        this.state.questionBank.map(({question, answers, correct, questionId}, index)=>{
                            return (
                                <QuestionBox question={question} options={answers} key={index} selected={(answer)=>{
                                    return this.computerAnswer(answer, correct)
                                }}/>
                            ) 
                        })
                        
                        }
                    </div>
                </div>
            </>
        );
    };
};

ReactDOM.render(<QuizBee />, document.getElementById("root"));