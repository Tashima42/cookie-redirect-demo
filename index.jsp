<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Redirecting to login...</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h1 {
        text-align: center;
        font-size: 50px;
        font-family: sans-serif;
        color: black;
        margin-top: 100px;
      }
      button {
        text-align: center;
        background-color: red;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 50px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Redirecting to login...</h1>
    <button onclick="redirectToLogin()">Go to login page</button>
    <%
      Cookie[] array= request.getCookies(); 
      for(int i=0; i<array.length; i++)
      {
        if(array[i].getName().equals("Authentication-Cookie"))
        {
          array[i].setMaxAge(0);
          response.addCookie(array[i]);
        } 
      }
    %>
    <script >
      "use-strict";
      const loginRedirectPage = 'https://product-staging.digicelgroup.com/aapprofile2/permissions.do?'
      let query = window.location.href.split("?")[1]
      query = query ? query : ""

      function redirectToLogin() {
        window.location.replace(loginRedirectPage + decodeURIComponent(query));
      }

      redirectToLogin()
    </script>
  </body>
</html>
