
import { useState } from "react";

function Transform() {
    const students = [
        { name: "Aman", marks: 90, category: "A" },
        { name: "Riya", marks: 78, category: "B" },
        { name: "Rahul", marks: 87, category: "A" }
    ];

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("none");
    const [category, setCategory] = useState("all");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );
    const sortedStudents = [...filteredStudents]

    if (sortOrder === "asc") {
        sortedStudents.sort((a, b) => a.marks - b.marks)
    }
    else if (sortOrder === "desc") {
        sortedStudents.sort((a, b) => b.marks - a.marks)
    }
    if (category === "A") {

    }

    return (
        <div>
            <h1>Student Information</h1>

            <input
                type="text"
                value={search}
                placeholder="Search Student Name"
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="none">Default order</option>
                <option value="asc">Marks: Low to High</option>
                <option value="desc">Marks: High to Low</option>
            </select>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="all">All Categories</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>

            <p>Search Text: {search}</p>
            <p>Sorting Order: {sortOrder}</p>

            {sortedStudents.map((student) => (
                <div key={student.name}>
                    <p>Name: {student.name}</p>
                    <p>Marks: {student.marks}</p>
                </div>
            ))}
        </div>
    );
}

export default Transform;