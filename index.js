require('dotenv').config()
const express = require('express')  //similar to import express from "express"

const app = express() //app defined now is an instance variable of express 

const port = 3000 //server is listening the requests on this port 

const githubData = {
    "login": "Harshvardhan580",
    "id": 118586990,
    "node_id": "U_kgDOBxF-bg",
    "avatar_url": "https://avatars.githubusercontent.com/u/118586990?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Harshvardhan580",
    "html_url": "https://github.com/Harshvardhan580",
    "followers_url": "https://api.github.com/users/Harshvardhan580/followers",
    "following_url": "https://api.github.com/users/Harshvardhan580/following{/other_user}",
    "gists_url": "https://api.github.com/users/Harshvardhan580/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Harshvardhan580/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Harshvardhan580/subscriptions",
    "organizations_url": "https://api.github.com/users/Harshvardhan580/orgs",
    "repos_url": "https://api.github.com/users/Harshvardhan580/repos",
    "events_url": "https://api.github.com/users/Harshvardhan580/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Harshvardhan580/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Harshvardhan Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 2,
    "following": 4,
    "created_at": "2022-11-19T04:57:50Z",
    "updated_at": "2025-05-22T16:10:52Z"
  } 

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter' , (req,res) => {
    res.send('Harshvardhan.com')
})

app.get('/login' , (req,res) => {
    res.send('<h1>please login at twitter</h1>')
})

app.get('/github' , (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
