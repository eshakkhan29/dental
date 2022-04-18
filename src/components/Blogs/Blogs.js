import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>blogs</h1>
            <div className='row mt-5 g-4'>
                <div className='col-lg-6'>
                    <h3 className='quarry-title'>What is the defference between Authentication and Authorization?</h3>
                    <p>Authentication is the process of determining who someone is, whereas authorization is the procedure that occurs after authentication. It is the process of determining which apps, files, and other items the user has access to. Authentication is used in the digital world to verify that people are who they say they are. After that, authorization is used to provide a user permission to access certain sorts of information or services.</p>
                </div>
                <div className='col-lg-6'>
                    <h3 className='quarry-title'>Why we use Firebase? The alternative of firebase.</h3>
                    <p>We utilize Firebase for a variety of reasons. The key reason for this is because Firebase includes Realtime Database collaborative apps for safe authentication, and realtime events continue to fire even when the user is offline. And it came from Google, the world's largest corporation. We all have faith in Google's high-security system. That is why we also have faith in the Firebase security mechanism. It's also simple to use and comes with a full suite of services.
                        Firebase options include: Many other companies, such as Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter, and others, are similar to Firebase.</p>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h3 className='quarry-title'>Other Services of Firebase.</h3>
                        <p>Apart from authentication, Firebase offers a plethora of other features. Analytic is Firebase's main service; it provides such an in-depth picture of our product that it may assist us in growing and developing marketing plans. And it's completely free. The second option is Remote Configuration, which allows us to perform A/B testing, deliver a tailored experience, and much more, depending on how we utilize it. Databse is ranked third. We may describe the Firebase Database as "extremely great!" It supplies us with two sorts of databases. Real-time database powered by Firebase Cloud Firestore powered by Firebase. They're both time saves, and Cloud Messaging is number four.We may use it to choose user segments for push notifications, and we can examine the proportion of users that opened the notice once it has been sent.
                            These are the main services provided by Firebase. Aside from Authentication,</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;