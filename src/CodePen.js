import React from "react";
import "./CodePen.css";

const CodePen = () => {
  return (
    <>
      <div className="codePen">
        <header className="pen">
          <div className="pen-details">
            <h1>Some Amazing Pen Name</h1>
            <p className="pen-author">A Pen by Wes Bos</p>
          </div>
          <button className="button button-dirty">☁️ Save</button>
          <button className="button">️️☁️ Save As Private</button>
          <button className="button">⚙ Settings</button>
          <button className="button">👀 Change View</button>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/profile/profile-80.jpg?1"
            alt="Wes Bos"
            height="44"
          />
        </header>
        <section className="code">
          <div className="editor">
            <header className="editor-header">
              <button className="button button-small editor-settings">⚙</button>
              <h3 className="editor-heading">HTML</h3>
              <button className="button button-small editor-settings">⌄</button>
            </header>
            <div className="editor-code">
              <div className="editor-gutter">
                <span className="editor-number">1</span>
              </div>

              <textarea className="editor-input">
               Oh Hey There!
              </textarea>
            </div>
          </div>
          <div className="editor">
            <header className="editor-header">
              <button className="button button-small editor-settings">⚙</button>
              <h3 className="editor-heading">CSS</h3>
              <button className="button button--small editor-settings">
                ⌄
              </button>
            </header>
            <div className="editor-code">
              <div className="editor-gutter">
                <span className="editor-number">1</span>
                <span className="editor-number">2</span>
                <span className="editor-number">3</span>
              </div>

              <textarea className="editor-input">
                .codepen
                {/* {
  is: cool;
} */}
              </textarea>
            </div>
          </div>
          <div className="editor">
            <header className="editor-header">
              <button className="button button-small editor-settings">⚙</button>
              <h3 className="editor-heading">JS</h3>
              <button className="button button-small editor-settings">⌄</button>
            </header>
            <div className="editor-code">
              <div className="editor-gutter">
                <span className="editor-number">1</span>
              </div>
              <textarea className="editor-input">
                const wes = 'coolest';
              </textarea>
            </div>
          </div>
        </section>
        <section className="preview">
          <iframe
            src="https://css-tricks.com"
            frameborder="0"
            title="#"
          />
        </section>
        <footer className="settings">
          <button className="button button-small button-black">Console</button>
          <button className="button button-small button-black">Assets</button>
          <button className="button button-small button-black">⌘</button>
        </footer>
      </div>
    </>
  );
};

export default CodePen;
