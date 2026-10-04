function AnswerOptions({ options, selectedAnswer, setSelectedAnswer }) {
    return (
        <div>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={(e) =>
                            setSelectedAnswer(e.target.value)
                        }
                    />

                    {option}
                </label>
            ))}
        </div>
    );
}

export default AnswerOptions;