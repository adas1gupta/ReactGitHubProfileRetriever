import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useState, useRef } from "react";

function App () {
    const githubUsername = useRef()
    const [username, setUsername] = useState(null)
    const [loading, setLoading] = useState(true)
    const [github, setGithub] = useState(null)
    const [repos, setRepos] = useState(null)

    function handleSubmit (event) {
        const username = githubUsername.current.value.trim()
        setUsername(username)
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
                return response.json()
            }
        )
        .then((data) => (
            setGithub(data)
        ))

    },[username])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
                return response.json()
            }
        )
        .then((data) => (
            setRepos(data)
        ))

    },[github])

    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault()
                    handleSubmit(e)
                }
            }>
                <label htmlFor="githubUsername"></label>
                <input
                required id="githubUsername"
                    type="text"
                    ref={githubUsername}
                    placeholder="Search..."
                />
            </form>
            {github && (
                <div>
                    <h2>{github.name || "Name not available"}</h2>
                    <img
                        src={github.avatar_url}
                        alt={`${github.name}'s avatar`}
                        width={100}
                        style={{ borderRadius: "50%" }}
                    />
                    <p>{github.bio || "No bio available"}</p>
                    <p>Followers: {github.followers}</p>
                    <p>Following: {github.following}</p>
                </div>
            )}
            {repos && repos.length > 0 ? (
                <div>
                    <h3>Repositories:</h3>
                    <ul>
                        {repos.map((repo) => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                                <p>{repo.description || "No description available"}</p>
                                <p>Language: {repo.language || "N/A"}</p>
                                <p>Stars: {repo.stargazers_count}</p>
                                <p>Forks: {repo.forks_count}</p>
                                <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No repositories found.</p>
            )}
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)