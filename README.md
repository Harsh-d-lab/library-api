# Library Management API

## Overview
The Library Management API is designed to manage books in a library. It allows users to create, read, update, and delete book entries, as well as search for books based on various criteria.

## Features
- Create a new book entry
- Retrieve all books
- Retrieve a single book by its ID
- Update an existing book
- Delete a book by its ID
- Search for books based on criteria such as ISBN, title, author, and genre

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi for validation

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/library-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd library-api
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/library
   ```
5. Start the server:
   ```sh
   node app.js
   ```
   The server will be running on `http://localhost:3000`.

## API Endpoints

### Create Book
- **Endpoint:** `POST /api/books`
- **Description:** Create a new book entry.
- **Request Body:**
  ```json
  {
    "isbn": "1234567890",
    "title": "Sample Book",
    "author": "John Doe",
    "publishedDate": "2020-01-01",
    "genre": "Fiction",
    "available": true
  }
  ```
- **Response:** The created book object.

### Get All Books
- **Endpoint:** `GET /api/books`
- **Description:** Retrieve all books.
- **Response:** List of all books.

### Get Book by ID
- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieve a single book by its ID.
- **Response:** The book object.

### Update Book
- **Endpoint:** `PUT /api/books/:id`
- **Description:** Update an existing book.
- **Request Body:** Book details to be updated.
  ```json
  {
    "title": "Updated Book Title"
  }
  ```
- **Response:** The updated book object.

### Delete Book
- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Delete a book by its ID.
- **Response:** Success message.

### Search Books
- **Endpoint:** `GET /api/books/search`
- **Description:** Search for books based on criteria such as ISBN, title, author, and genre.
- **Query Parameters:** Search criteria.
- **Response:** List of matching books.

## Validation and Error Handling
The project uses Joi for request payload validation and has proper error handling to return appropriate HTTP status codes and messages.

## Verify the Application
1. **Create a Book:**
   - Method: `POST`
   - URL: `http://localhost:3000/api/books`
   - Body: JSON (raw)
     ```json
     {
       "isbn": "1234567890",
       "title": "Sample Book",
       "author": "John Doe",
       "publishedDate": "2020-01-01",
       "genre": "Fiction",
       "available": true
     }
     ```

2. **Get All Books:**
   - Method: `GET`
   - URL: `http://localhost:3000/api/books`

3. **Get Book by ID:**
   - Method: `GET`
   - URL: `http://localhost:3000/api/books/{id}`
   - Replace `{id}` with the actual ID of the book you want to retrieve.

4. **Update Book:**
   - Method: `PUT`
   - URL: `http://localhost:3000/api/books/{id}`
   - Replace `{id}` with the actual ID of the book you want to update.
   - Body: JSON (raw)
     ```json
     {
       "title": "Updated Book Title"
     }
     ```

5. **Delete Book:**
   - Method: `DELETE`
   - URL: `http://localhost:3000/api/books/{id}`
   - Replace `{id}` with the actual ID of the book you want to delete.

6. **Search Books:**
   - Method: `GET`
   - URL: `http://localhost:3000/api/books/search?author=John%20Doe`

## Contact
For any questions or suggestions, please contact dhamaharsh9@gmail.com.

---

By following these instructions, you should be able to set up, run, and verify the Library Management API successfully. If you encounter any issues, feel free to reach out for support.
