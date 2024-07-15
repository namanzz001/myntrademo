import { useState } from 'react';
import '../quiz/quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [aesthetic, setAesthetic] = useState(null);

  const questions = [
    {
      question: 'When shopping, what catches your eye first?',
      options: [
        { text: 'Bold colors', category: 'Streetwear' },
        { text: 'Simple silhouettes, clean lines, and high-quality fabrics', category: 'Minimalist' },
        { text: 'Unique or interesting details, vintage finds, and one-of-a-kind pieces', category: 'Vintage' }
      ],
    },
    {
      question: 'What kind of activities do you enjoy most?',
      options: [
        { text: 'Hanging out with friends, skateboarding, or attending concerts', category: 'Streetwear' },
        { text: 'Relaxing at home, enjoying nature, or going on simple adventures', category: 'Minimalist' },
        { text: 'Visiting museums, exploring antique shops, or attending vintage fairs', category: 'Vintage' }
      ],
    },
    {
      question: 'Where do you get your fashion inspiration?',
      options: [
        { text: 'Streetwear influencers, hip-hop music videos, or popular trends', category: 'Streetwear' },
        { text: 'Minimalist fashion blogs, Scandinavian design, or classic movies', category: 'Minimalist' },
        { text: 'Vintage fashion icons, old Hollywood movies, or historical styles', category: 'Vintage' }
      ],
    },
    {
      question: 'What describes your ideal wardrobe?',
      options: [
        { text: 'Edgy, full of personality, and always up-to-date', category: 'Streetwear' },
        { text: 'Simple, versatile, and built on high-quality pieces', category: 'Minimalist' },
        { text: 'Eclectic, full of stories, and with a touch of the past', category: 'Vintage' }
      ],
    },
    {
      question: 'What is your favorite color palette?',
      options: [
        { text: 'Bold colors and graphic prints', category: 'Streetwear' },
        { text: 'Neutrals like black, white, and grey', category: 'Minimalist' },
        { text: 'Earthy tones, jewel tones, and unique color combinations', category: 'Vintage' }
      ],
    },
    {
      question: 'How do you feel about patterns in clothing?',
      options: [
        { text: 'I love them! Stripes, logos, anything that makes a statement', category: 'Streetwear' },
        { text: 'I prefer solid colors for a clean, streamlined look', category: 'Minimalist' },
        { text: 'I enjoy unique patterns like florals, paisleys, or geometric prints', category: 'Vintage' }
      ],
    },
    {
      question: 'Comfort or style? What matters more to you?',
      options: [
        { text: 'Style is my main focus, even if it means sacrificing some comfort', category: 'Streetwear' },
        { text: 'Comfort is important, but I still want to look good', category: 'Minimalist' },
        { text: 'I can find a balance between comfort and style with vintage pieces', category: 'Vintage' }
      ],
    },
  ];

  const handleOptionClick = (category) => {
    setSelectedAnswers([...selectedAnswers, category]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Send the answers to the backend
      fetch('http://localhost:5000/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedAnswers),
      })
        .then(response => response.json())
        .then(data => setAesthetic(data.result))
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const renderQuestion = () => {
    const { question, options } = questions[currentQuestion];
    return (
      <div>
        <h2>{question}</h2>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleOptionClick(option.category)}>{option.text}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderResult = () => (
    <h2>Your dominant aesthetic is: {aesthetic}</h2>
  );

  return (
    <div className="aesthetic-quiz">
      {aesthetic ? renderResult() : renderQuestion()}
    </div>
  );
}

export default Quiz;
