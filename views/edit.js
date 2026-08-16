<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Edit Chat</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            padding: 40px;
        }

        .container {
            width: 500px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
        }

        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            box-sizing: border-box;
        }

        button {
            margin-top: 20px;
            width: 100%;
            padding: 10px;
            background-color: #128c7e;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Edit Chat</h1>

        <form action="/chats/<%= chat._id %>?_method=PUT" method="POST">

            <label for="from">From</label>
            <input
                type="text"
                id="from"
                name="from"
                value="<%= chat.from %>"
                required
            >

            <label for="to">To</label>
            <input
                type="text"
                id="to"
                name="to"
                value="<%= chat.to %>"
            >

            <label for="msg">Message</label>
            <textarea
                id="msg"
                name="msg"
                rows="4"
                maxlength="50"
                required
            ><%= chat.msg %></textarea>

            <button type="submit">Update Chat</button>

        </form>

    </div>

</body>
</html>
