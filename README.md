# Introduction

A seed project for Angular 2 apps.

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

```bash
git clone https://github.com/erodriguezh/mytunes.git
cd mytunes

npm install
# dev
npm start
```

# Directory Structure

```
.
├── app
│   ├── app.component.ts
│   ├── common
│   │   ├── directives
│   │   │   ├── forRange.dir.ts
│   │   │   └── highlight.dir.ts
│   │   ├── footer.component.ts
│   │   ├── header.component.ts
│   │   ├── models
│   │   │   ├── country.ts
│   │   │   ├── icountry.ts
│   │   │   ├── ipager.ts
│   │   │   └── pager.ts
│   │   ├── pagination.component.ts
│   │   ├── search.component.ts
│   │   ├── services
│   │   │   └── country.srv.ts
│   │   └── welcome.component.ts
│   ├── main.ts
│   ├── music
│   │   ├── album.component.ts
│   │   ├── albums.component.ts
│   │   ├── models
│   │   │   ├── album.ts
│   │   │   ├── ialbum.ts
│   │   │   ├── isong.ts
│   │   │   └── song.ts
│   │   └── services
│   │       └── music.srv.ts
│   └── user
│       ├── login.component.ts
│       ├── models
│       │   ├── iuser.ts
│       │   └── user.ts
│       ├── registration.component.ts
│       └── services
│           └── user.srv.ts
├── css
│   └── styles.css
├── index.html
├── js
│   ├── app.component.js
│   ├── app.component.js.map
│   ├── common
│   │   ├── directives
│   │   │   ├── forRange.dir.js
│   │   │   ├── forRange.dir.js.map
│   │   │   ├── highlight.dir.js
│   │   │   └── highlight.dir.js.map
│   │   ├── footer.component.js
│   │   ├── footer.component.js.map
│   │   ├── header.component.js
│   │   ├── header.component.js.map
│   │   ├── models
│   │   │   ├── country.js
│   │   │   ├── country.js.map
│   │   │   ├── icountry.js
│   │   │   ├── icountry.js.map
│   │   │   ├── ipager.js
│   │   │   ├── ipager.js.map
│   │   │   ├── pager.js
│   │   │   └── pager.js.map
│   │   ├── pagination.component.js
│   │   ├── pagination.component.js.map
│   │   ├── search.component.js
│   │   ├── search.component.js.map
│   │   ├── services
│   │   │   ├── country.srv.js
│   │   │   └── country.srv.js.map
│   │   ├── welcome.component.js
│   │   └── welcome.component.js.map
│   ├── main.js
│   ├── main.js.map
│   ├── music
│   │   ├── album.component.js
│   │   ├── album.component.js.map
│   │   ├── albums.component.js
│   │   ├── albums.component.js.map
│   │   ├── models
│   │   │   ├── album.js
│   │   │   ├── album.js.map
│   │   │   ├── ialbum.js
│   │   │   ├── ialbum.js.map
│   │   │   ├── isong.js
│   │   │   ├── isong.js.map
│   │   │   ├── song.js
│   │   │   └── song.js.map
│   │   └── services
│   │       ├── music.srv.js
│   │       └── music.srv.js.map
│   └── user
│       ├── login.component.js
│       ├── login.component.js.map
│       ├── models
│       │   ├── iuser.js
│       │   ├── iuser.js.map
│       │   ├── user.js
│       │   └── user.js.map
│       ├── registration.component.js
│       ├── registration.component.js.map
│       ├── services
│       │   ├── user.srv.js
│       │   └── user.srv.js.map
│       ├── user.component.js
│       └── user.component.js.map
└── typings.json
```


# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
