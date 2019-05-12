export interface IData {}

export interface IContributors {

}

export interface IContributor {
    id: number,
    login: string,
    type: string,
    contributions: number,
    url: string
}

/*
[
  {
    "login": "Pscheidl",
    "id": 8769110,
    "node_id": "MDQ6VXNlcjg3NjkxMTA=",
    "avatar_url": "https://avatars3.githubusercontent.com/u/8769110?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Pscheidl",
    "html_url": "https://github.com/Pscheidl",
    "followers_url": "https://api.github.com/users/Pscheidl/followers",
    "following_url": "https://api.github.com/users/Pscheidl/following{/other_user}",
    "gists_url": "https://api.github.com/users/Pscheidl/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Pscheidl/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Pscheidl/subscriptions",
    "organizations_url": "https://api.github.com/users/Pscheidl/orgs",
    "repos_url": "https://api.github.com/users/Pscheidl/repos",
    "events_url": "https://api.github.com/users/Pscheidl/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Pscheidl/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 10
  }
]
*/