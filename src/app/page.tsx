// src/app/page.tsx
export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BestyGram Chat</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="styles.css" /> {/* Custom CSS */}
      </head>
      <body>
        <div className="container-fluid chat-app">
          <div className="row no-gutters">
            {/* Sidebar (Chat List) */}
            <div className="col-md-4 chat-list">
              <div className="search-bar p-3">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <ul className="list-group chat-contacts">
                <li className="list-group-item active">
                  <div className="d-flex align-items-center">
                    <div className="avatar">
                      <img src="avatar.jpg" alt="Avatar" />
                    </div>
                    <div className="ml-3">
                      <h5 className="mb-1">John Doe</h5>
                      <p className="mb-0 text-muted">Last message preview...</p>
                    </div>
                  </div>
                </li>
                {/* Repeat for more contacts */}
              </ul>
            </div>

            {/* Chat Area */}
            <div className="col-md-8 chat-area">
              <div className="chat-header p-3">
                <h4>John Doe</h4>
                <p className="text-muted">Last seen recently</p>
              </div>
              <div className="chat-body">
                <div className="message received">
                  <p>Hello there! How are you?</p>
                  <span className="message-time">10:12 AM</span>
                </div>
                <div className="message sent">
                  <p>I'm doing well, thank you!</p>
                  <span className="message-time">10:13 AM</span>
                </div>
                {/* Repeat for more messages */}
              </div>
              <div className="chat-footer p-3">
                <input type="text" className="form-control" placeholder="Type a message" />
                <button className="btn btn-primary ml-2">Send</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
    
  );
}
