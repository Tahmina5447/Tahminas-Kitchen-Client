import React from 'react';

const Blog = () => {
    return (
        <div>
            <title>Blog-Tahmina's Kitchen</title>
        <div className='my-12'>
            <h1 className='text-center font-bold text-teal-400 text-3xl mb-3 mt-12'>Know More</h1>
            <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr />
            </div>
            <div className='w-2/3 mx-auto'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium bg-teal-400 text-white">
                    Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content text-teal-400 mt-2">
                        <p>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium bg-teal-400 text-white">
                    What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content text-teal-400 mt-2">
                        <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</p>
                        <p>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium bg-teal-400 text-white">
                        What is the difference between Javascript and Node JS?
                    </div>
                    <div className="collapse-content text-teal-400 mt-2">
                        <p>1. Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
                        <p>2. Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p> 3. It is basically used on the client-side.	It is mostly used on the server-side.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium bg-teal-400 text-white">
                    How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content text-teal-400 mt-2">
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;