import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const Impact = () => {
    return (
      <section className="bg-orange text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">OUR IMPACT</h2>
          <p className="text-center mb-12">These are our impact figures over the years.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter start={1} end={940} label="MOTHERS" />
            <AnimatedCounter start={1} end={2050} label="CHILDREN" />
            <AnimatedCounter start={1} end={70} label="BUSINESSES" />
            <AnimatedCounter start={1} end={58} label="WORKSHOPS" />
          </div>
        </div>
      </section>
    );
  };
  

export default Impact;