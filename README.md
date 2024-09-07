# Text Utils

## Overview

Text Utils is a versatile web application designed to help users perform various text manipulations and analyses. The application is built using React for the frontend and Node.js for the backend. It provides a range of features, including text conversion, word count, character count, and more.

## Features

- Text Conversion: Convert text to uppercase, lowercase, or capitalize the first letter of each word.
- Word Count: Calculate the total number of words in the given text.
- Character Count: Calculate the total number of characters, including or excluding spaces.
- Text Reversal: Reverse the text for different use cases.
- Sentence Count: Count the number of sentences in the given text.
- Copy Text: Easily copy the processed text to the clipboard.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

Clone the repository:

```bash
git clone https://github.com/neeldevenshah/text_utils.git
cd text-utils/backend
```

Install dependencies:

```bash
npm install
```

Run the backend server:

```bash
npm start
```

The backend server will start on http://localhost:5000.

### Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Run the React development server:

```bash
npm start
```

The frontend will be accessible at http://localhost:3000.

## Usage

1. Open your browser and go to http://localhost:3000.
2. Enter the text you want to manipulate in the text area.
3. Choose an operation from the available options (e.g., Convert to Uppercase, Word Count).
4. View the results in the output section.
5. Copy the processed text using the Copy button for further use.

## API Endpoints

- GET /api/wordcount: Returns the word count for the provided text.
- GET /api/charcount: Returns the character count for the provided text.
- POST /api/convert: Converts the text to the specified format (uppercase, lowercase, etc.).
- POST /api/reverse: Reverses the provided text.
- GET /api/sentencecount: Returns the sentence count for the provided text.

## Technologies Used

- Frontend: React, HTML, CSS
- Backend: Node.js, Express.js
- Other Tools: Axios (for API requests), ESLint (for code linting)

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, feel free to contact the project maintainer at youremail@example.com.
