import questions from "../data/questions";
import { useParams } from "react-router-dom";
import AnswerOptions from "../components/AnswerOptions";
import { useState } from "react";

function Exam() {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const { SectionId } = useParams();
    const quizquestion = questions[SectionId]
    const [currentquesion, setCurrentQuestion] = useState(0)

    return (
        <>
            <h1>{SectionId} Exam</h1>
            <h2>Question no : {currentquesion + 1}</h2>
            <p>{quizquestion[currentquesion].question}</p>
            <AnswerOptions
                options={quizQuestions[currentQuestion].options}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
            />            <button onClick={() => setCurrentQuestion(currentquesion + 1)}>Next</button>

        </>
    )
}
export default Exam;