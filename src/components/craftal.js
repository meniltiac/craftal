import React from "react"
import Button from "./button"

export default () =>
<div className="craftal container">
    <h1 className="robot">
        Craftal
    </h1>
    <h2>
        The <span>sound</span> of <span>cyberfunk</span>.
    </h2>
    <p>
        Craftal lets computers articulate
        themselves through wiggling air molecules to groovy beats. He combines
        influences from the Glitch, Neuro, and Psy styles of dance music with
        bouncy melodic structures and rhythmic complexity to create his sound.
    </p>
    <Button btnText="Book Craftal" btnSubject="Booking" />
    <iframe
        width="40%"
        height="400"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/478824452&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
</div>
