import React from 'react';

const FactItem = ({ icon, text }) => (
  <div className="bg-orange p-4 rounded-lg flex items-center mb-4">
    <span className="text-orange-600 mr-3 text-xl">{icon}</span>
    <p className="text-white text-sm">{text}</p>
  </div>
);

const Facts = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">FACTS</h2>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-semibold text-orange-500 mb-6">WOMEN IN CONGO</h3>
            <FactItem 
              icon="🍃"
              text="Violence against women and girls in the Congo are 'deep-seated cultural norms'"
            />
            <FactItem 
              icon="🍃"
              text="Congo was called the most dangerous place in the world to be a woman."
            />
            <FactItem 
              icon="🍃"
              text="48 women are raped in the Congo every hour."
            />
          </div>
          
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-semibold text-orange-500 mb-6">CHILDREN IN CONGO</h3>
            <FactItem 
              icon="🍃"
              text="Parents pay for their children to attend elementary and high schools"
            />
            <FactItem 
              icon="🍃"
              text="The costs for education are almost as high as the per capita income"
            />
            <FactItem 
              icon="🍃"
              text="Only 50% of children age 6 - 11 attend primary school"
            />
            <FactItem 
              icon="🍃"
              text="Cities in the Congo may host as many as 20,000 street children"
            />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
            DONATE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facts;