const questions = {
    javascript: [
        {
            id: 1,
            question: "Which keyword declares a variable?",
            options: ["var", "loop", "define", "variable"],
            answer: "var"
        },
        {
            id: 2,
            question: "Which method converts JSON to a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.convert()",
                "JSON.object()"
            ],
            answer: "JSON.parse()"
        }
    ],

    react: [
        {
            id: 1,
            question: "Which hook is used for state?",
            options: ["useState", "useRoute", "useData", "useComponent"],
            answer: "useState"
        },
        {
            id: 2,
            question: "Which hook is used for side effects?",
            options: ["useState", "useEffect", "useData", "useSide"],
            answer: "useEffect"
        }
    ]
};

export default questions;