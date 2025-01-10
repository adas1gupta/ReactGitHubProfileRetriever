# GitHub Activity Tracker

A React-based application that allows users to search for a GitHub username and retrieve detailed information about the user, including their profile and repositories. The app interacts with the GitHub API to fetch and display data dynamically.

## Features

- **User Information**: Displays the GitHub user's name, profile picture, bio, follower count, and following count.
- **Repositories List**: Shows the list of repositories with details such as description, programming language, star count, fork count, and the last update date.
- **Dynamic Search**: Users can input a GitHub username to dynamically fetch and display the corresponding user's data.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **GitHub API**: For fetching user and repository data.
- **JavaScript**: Core language for app logic.
- **HTML & CSS**: For structuring and styling the app.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-activity-tracker.git
   cd github-activity-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter a GitHub username in the search input field.
2. View the user's profile information and a list of their repositories.
3. Click on a repository name to visit its GitHub page.

## Project Structure

- **index.html**: The main HTML file linking to the React application.
- **App.jsx**: Contains the main React component for rendering user information and repositories.
- **src/**: Directory containing all source files.

## API Integration

The app uses the following GitHub API endpoints:

- **User Information**: `https://api.github.com/users/{username}`
- **Repositories**: `https://api.github.com/users/{username}/repos`

## Known Issues

- **Rate Limiting**: The GitHub API has a rate limit for unauthenticated requests. Consider adding authentication if the app is frequently used.
- **Error Handling**: Limited error handling for invalid usernames or network issues.

## Future Improvements

- Add a loading spinner while fetching data.
- Enhance error handling and display user-friendly messages for invalid input or network errors.
- Implement authentication for higher API rate limits.
- Improve UI/UX with additional styling and responsiveness.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding!

