import { useState } from "react";
import "./App.css";

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        city: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="app">
            <div className="container">
                <h1>Student Registration</h1>

                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                    />

                    <label>Course</label>
                    <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                    >
                        <option value="">Select course</option>
                        <option value="MCA">MCA</option>
                        <option value="BCA">BCA</option>
                        <option value="B.Tech">B.Tech</option>
                    </select>

                    <label>City</label>
                    <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                    />

                    <button type="submit">Submit</button>
                </form>

                {submitted && (
                    <div className="details">
                        <h2>Submitted Details</h2>

                        <p><b>Name:</b> {form.name}</p>
                        <p><b>Email:</b> {form.email}</p>
                        <p><b>Phone:</b> {form.phone}</p>
                        <p><b>Course:</b> {form.course}</p>
                        <p><b>City:</b> {form.city}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;