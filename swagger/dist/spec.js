var spec = {
  "basePath": "/api",
  "externalDocs": {
    "description": "http://118.82.6.185:8000/api/",
    "url": "http://118.82.6.185:8000/api/"
  },
  "host": "118.82.6.185",
  "info": {
    "description": "Oasis API Documentation",
    "title": "Oasis API",
    "version": "1.0.0"
  },
  "paths": {
    "/account/authenticator/": {
      "get": {
        "description": "",
        "operationId": "generateAuthenticator",
        "parameters": [],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Generate Authenticator account",
        "tags": [
          "authenticator"
        ]
      }
    },
    "/account/authenticator/activate/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "activateAuthenticator",
        "parameters": [
          {
            "description": "code authenticator",
            "in": "formData",
            "name": "code",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid code supplied"
          },
          "404": {
            "description": "Code not found"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Activate Authenticator",
        "tags": [
          "authenticator"
        ]
      }
    },
    "/account/authenticator/disable/": {
      "put": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "disableAuthenticator",
        "parameters": [
          {
            "description": "password account",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid password supplied"
          },
          "404": {
            "description": "Wrong Password"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Disable Authenticator",
        "tags": [
          "authenticator"
        ]
      }
    },
    "/account/authenticator/login/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "verifyAuthenticator",
        "parameters": [
          {
            "description": "authenticator code",
            "in": "formData",
            "name": "code",
            "required": true,
            "type": "string"
          },
          {
            "description": "authenticator xtoken",
            "in": "formData",
            "name": "xtoken ",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid password supplied"
          },
          "404": {
            "description": "Wrong Password"
          }
        },
        "summary": "Verify Authenticator",
        "tags": [
          "authenticator"
        ]
      }
    },
    "/account/change-password/": {
      "put": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "changePassword",
        "parameters": [
          {
            "description": "password that need to be updated",
            "in": "formData",
            "name": "old_password",
            "required": true,
            "type": "string"
          },
          {
            "description": "new password to be updated",
            "in": "formData",
            "name": "new_password",
            "required": true,
            "type": "string"
          },
          {
            "description": "confirm new password to be updated",
            "in": "formData",
            "name": "confirm_password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid password supplied"
          },
          "404": {
            "description": "Wrong old Password"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Change Password Account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/delete/": {
      "delete": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteAccount",
        "parameters": [
          {
            "description": "Delete account username",
            "in": "formData",
            "name": "delete_account",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Delete account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/history-job/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "historyjob",
        "parameters": [
          {
            "description": "services",
            "in": "formData",
            "name": "services",
            "required": true,
            "type": "string"
          },
          {
            "description": "target domain",
            "in": "formData",
            "name": "domain",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid domain supplied"
          },
          "404": {
            "description": "Domain not found"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "History Job",
        "tags": [
          "account"
        ]
      }
    },
    "/account/list-block/": {
      "get": {
        "description": "",
        "operationId": "listblockAccount",
        "parameters": [],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "List blocked account current logged in account session",
        "tags": [
          "account"
        ]
      }
    },
    "/account/login/": {
      "get": {
        "description": "",
        "operationId": "loginAccount",
        "parameters": [
          {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "headers": {
              "X-Expires-After": {
                "description": "date in UTC when token expires",
                "format": "date-time",
                "type": "string"
              },
              "X-Rate-Limit": {
                "description": "calls per hour allowed by the user",
                "format": "int32",
                "type": "integer"
              }
            },
            "schema": {
              "type": "string"
            }
          },
          "400": {
            "description": "Invalid username/password supplied"
          }
        },
        "summary": "Logs user into the system",
        "tags": [
          "account"
        ]
      },
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "",
        "operationId": "logintoAccount",
        "parameters": [
          {
            "description": "username to create account",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "password to create account",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "headers": {
              "X-Expires-After": {
                "description": "date in UTC when token expires",
                "format": "date-time",
                "type": "string"
              },
              "X-Rate-Limit": {
                "description": "calls per hour allowed by the user",
                "format": "int32",
                "type": "integer"
              }
            },
            "schema": {
              "type": "string"
            }
          },
          "400": {
            "description": "Invalid username/password supplied"
          }
        },
        "summary": "Logs user into the system",
        "tags": [
          "account"
        ]
      }
    },
    "/account/logout/": {
      "get": {
        "description": "",
        "operationId": "logoutAccount",
        "parameters": [],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Logs out current logged in account session",
        "tags": [
          "account"
        ]
      }
    },
    "/account/password-reset/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "forgotPassword",
        "parameters": [
          {
            "description": "email account",
            "in": "formData",
            "name": "email",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid email supplied"
          },
          "404": {
            "description": "Email not found"
          }
        },
        "summary": "Reset password account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/password-reset/confirm/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "confirmpasswordReset",
        "parameters": [
          {
            "description": "token account",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "password account",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid token or password supplied"
          },
          "404": {
            "description": "Token or password not found"
          }
        },
        "summary": "Confirm reset password account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/regen-token/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "regenToken",
        "parameters": [],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Generate Token",
        "tags": [
          "account"
        ]
      }
    },
    "/account/register/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "createAccount",
        "parameters": [
          {
            "description": "username to create account",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "password to create account",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          },
          {
            "description": "email to create account",
            "in": "formData",
            "name": "email",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Create account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/suspend/": {
      "put": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "suspendAccount",
        "parameters": [
          {
            "description": "password username",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid user supplied"
          },
          "404": {
            "description": "User not found"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Suspend account",
        "tags": [
          "account"
        ]
      }
    },
    "/account/unblock/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "unblockAccount",
        "parameters": [
          {
            "description": "username to unblock",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid user supplied"
          },
          "404": {
            "description": "User not found"
          }
        },
        "security": [
          {
            "account_key": []
          }
        ],
        "summary": "Suspend account",
        "tags": [
          "account"
        ]
      }
    },
    "/scan/burp/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "burp",
        "parameters": [
          {
            "description": "target domain",
            "in": "formData",
            "name": "domain",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid domain supplied"
          },
          "404": {
            "description": "Domain not found"
          }
        },
        "security": [
          {
            "service_key": []
          }
        ],
        "summary": "Burp Suite",
        "tags": [
          "services"
        ]
      }
    },
    "/scan/ping/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "ping",
        "parameters": [
          {
            "description": "target domain",
            "in": "formData",
            "name": "domain",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid domain supplied"
          },
          "404": {
            "description": "Domain not found"
          }
        },
        "security": [
          {
            "service_key": []
          }
        ],
        "summary": "PING",
        "tags": [
          "services"
        ]
      }
    },
    "/scan/subdomain/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "subdomain",
        "parameters": [
          {
            "description": "target domain",
            "in": "formData",
            "name": "domain",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid domain supplied"
          },
          "404": {
            "description": "Domain not found"
          }
        },
        "security": [
          {
            "service_key": []
          }
        ],
        "summary": "Sub Domain Finder",
        "tags": [
          "services"
        ]
      }
    },
    "/scan/whois/": {
      "post": {
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "whois",
        "parameters": [
          {
            "description": "target domain",
            "in": "formData",
            "name": "domain",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid domain supplied"
          },
          "404": {
            "description": "Domain not found"
          }
        },
        "security": [
          {
            "service_key": []
          }
        ],
        "summary": "Whois",
        "tags": [
          "services"
        ]
      }
    }
  },
  "schemes": [
    "http"
  ],
  "securityDefinitions": {
    "account_key": {
      "in": "header",
      "name": "Authorization",
      "type": "apiKey"
    },
    "service_key": {
      "in": "header",
      "name": "Authorization",
      "type": "apiKey"
    }
  },
  "swagger": "2.0",
  "tags": [
    {
      "description": "Operations about account",
      "name": "account"
    },
    {
      "description": "Operations about account authenticator",
      "name": "authenticator"
    },
    {
      "description": "Oasis service",
      "name": "services"
    }
  ]
}