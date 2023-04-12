import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="px-4 lg:px-16">
                <h1 className="font-bold text-center my-6 leading-[54px] text-[45px]">FreeQuently Ask Questions?</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                When should you use Context Api?

                            </h2>
                            <div>
                                <p>Context API in React should be used when you have data or state that needs to be shared between multiple components within your application.</p>
                                <p>1.Theme or styling information that needs to be shared across different parts of the application</p>
                                <p>2.User authentication data or user preferences</p>
                                <p>3.Language or localization settings</p>
                                <p>4.Data that is fetched from an API and needs to be accessed by multiple components</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                What is Custom hook in React?

                            </h2>
                            <p>Custom hooks allow developers to extract and reuse stateful logic from components, making code more modular and easier to maintain. Custom hooks can be used to abstract away complex state management, data fetching, or any other behavior that needs to be shared across different components</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                What is the  useRef?

                            </h2>
                            <p>useRef: You can use useRef to keep track of mutable values such as timers, focus management, or any value that needs to persist across renders without triggering a re-render.

                                The useRef hook returns a mutable ref object that has a current property. The value of current can be updated without triggering a re-render.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                What is the useMemo?

                            </h2>
                            <p>useMemo: useMemo is a built-in hook in React that allows you to memoize expensive function computations so that they are only re-executed when their dependencies change.

                                Memoization is a technique used to optimize the performance of functions by caching the results of expensive calculations and reusing them when the same input is encountered again. This can help to reduce the overall computation time and improve the responsiveness of your application.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;