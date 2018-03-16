# JSON Server + Passaport - JWT token

This is an implementation of a fake server using the technologies: 

## Passportjs

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.

(http://www.passportjs.org/)

## json-server

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.

(https://github.com/typicode/json-server)

### to use run the commands

* git clone git@github.com:gustavoluciocampos/jsonserver_passaport.git 

* cd jsonserver_passaport
git clone

In the firs request you need get a token:

* curl -X POST \
	  http://localhost:3000/auth/login \
	  -H 'cache-control: no-cache' \
	  -H 'content-type: application/json' \
	  -H 'postman-token: 7aef7a83-a4b5-2954-fcfb-1adb7e1ca979' \
	  -d '{"email": "bruno@email.com",
		"password": "bruno"
	}'

After, with token we call all the collections like this:

* curl -X GET \
	  http://localhost:3000/posts \
	  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.kHZQ03yhLOPC1c7f6CdItQbT2ljvMQLbucdJVkqwEKs' \
	  -H 'cache-control: no-cache' \
	  -H 'postman-token: f30faef9-0cb8-dd3b-43bf-4c3ee9ed0f20'
