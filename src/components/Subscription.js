import React from 'react'

function Subscription() {
  return (
    <>
      <section id="subscription">
        <h6>Subscribe our newsletter to be notified when it'll be live.</h6>
        <div className="email">
          <input placeholder="Email address"></input>
          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}

export default Subscription