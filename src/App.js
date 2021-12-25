import Header from "./components/Header";
import {useState} from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback, ]);
    }

    

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}  feedback={feedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
            </div>
        </>
      
    )
}

export default App;