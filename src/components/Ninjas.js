import React from "react";

// const Ninjas = (props) => {

//   const { ninjas } = props;
//   const ninjaList = ninjas.map(ninja => {
//       if (ninja.age > 20) {
//       return (
//       <div className="ninja" key={ninja.id}>
//       <div>Name: {ninja.name}</div>
//       <div>Age: {ninja.age}</div>
//       <div>Belt: {ninja.belt}</div>
//   </div>
//   ) }
//   else return null
//     })
//   return <div className="ninja-list">{ninjaList}</div>;
// };

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id} style={{backgroundColor:`${ninja.belt}`, fontSize:"20px",width:"50%", padding:"10px", margin:"10px", color:"red",border:"1px solid black",minWidth:"350px"}}>      
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};


// const Ninjas = ({ninjas}) => {
  
//   return <div className="ninja-list">
//       { ninjas.map(ninja => {
//     return ninja.age > 20 ? (
//       <div className="ninja" key={ninja.id}>
//         <div>Name: {ninja.name}</div>
//         <div>Age: {ninja.age}</div>
//         <div>Belt: {ninja.belt}</div>
//       </div>
//     ) : null;
//   })
// }
//   </div>;
// };

export default Ninjas;

