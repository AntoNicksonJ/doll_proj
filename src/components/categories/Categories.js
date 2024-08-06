// import React from 'react';
// import '../styles/cat.css';


// const Categories = () => {
//   return (
    
//         <>
          
//         </>
//   );
// }

// export default Categories;

















import React, { useState } from 'react';
import Doll from './Doll'
import '../../styles/cat.css'
// Example components
const ComponentA = () => <Doll />;
const ComponentB = () => <div>Component B Content</div>;
const ComponentC = () => <div>Component C Content</div>;

const components = {
  ComponentA,
  ComponentB,
  ComponentC
};

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const SelectedComponent = selectedComponent ? components[selectedComponent] : null;

  return (
    <div class="Catt">
      <div class="Category">
        <h3>Components</h3>
        {Object.keys(components).map((componentName) => (
          <div 
            key={componentName}
            onClick={() => handleComponentClick(componentName)}
            className='Cat_list'
          >
            {componentName}
          </div>
        ))}
      </div>
      <div class="List-cat">
        <h3>Preview</h3>
        {SelectedComponent ? <SelectedComponent /> : <p>Select a component to view</p>}
      </div>
    </div>
  );
};

export default ComponentSelector;
