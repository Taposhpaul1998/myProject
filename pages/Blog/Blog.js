import React from 'react';

const Blog = () => {
    return (
        <div className='border m-5 p-3 rounded'>
            <h2>Difference between javascript and nodejs</h2>
            <p>JavaScript is a simple programming language, js runs in any browser JavaScript Engine.
                JavaScript programming language that holds many excesses.Javascript is a programming language that is used for writing scripts on the website.
                JavaScript is a lightweight, object-oriented scripting language. Js used to build dynamic HTML pages with interactive effects on a webpage.
                JavaScript is a proper high-level programming language used to create web scripts whereas . Node.js is a run time environment built on google's v8 engine.
            </p>
            <h2>Differences between sql and nosql databases.</h2>
            <p>SQL databases are vertically scalable. NoSQL databases are horizontally scalable.
                SQL databases are better for multi-row transactions. NoSQL is better for unstructured data like documents or JSON.
                SQL databases are primarily called as Relational Databases (RDBMS). whereas NoSQL database are primarily called as non-relational.
            </p>
            <h2>What is the purpose of jwt and how does it work</h2>
            <p>JWT open standard used to share security information between two parties a client and a server.
                JSON Web Token is a standard used to create access tokens for an application.
                The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.
                JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                JWTs are often criticized for their overuse.
            </p>
        </div>
    );
};

export default Blog;