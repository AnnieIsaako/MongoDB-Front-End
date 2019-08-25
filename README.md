# MongoDB-Front-End
So you want to see MongoDB in use, huh?
You also need to install the MongoDB-Front-End repo.
Here's a quick set of installation instructions.


If you are the admin of your device, enter the following into your terminal:
```sh
$ git clone [REPOSITORY LINK]
$ npm install
```

If you are using a server, enter the following into your terminal:
```sh
$ git clone [RESPOSITORY LINK]
```
Make another tab for easy access and go into your vagrant server

```sh
$ vagrant ssh
```

Locate the folder in your vagrant server using cd and ls commands
Once you have located the folder, install the node modules

```sh
$ npm install
```

This will install all of the modules from the package.json file so you don't have to.


Once you have the modules installed, make a config file using the config.example.json file.
You should be good to go! :)
