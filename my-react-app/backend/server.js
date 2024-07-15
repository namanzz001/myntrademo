const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-quiz', (req, res) => {
  const answers = req.body;

  const countAnswers = (answers) => {
    const count = { Streetwear: 0, Minimalist: 0, Vintage: 0 };

    answers.forEach(answer => {
      count[answer] += 1;
    });

    return count;
  };

  const result = countAnswers(answers);
  const finalResult = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);

  res.json({ result: finalResult });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
