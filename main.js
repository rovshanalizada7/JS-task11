//  Task 1
// asagidaki arraydan isdifade ederek main.js  ve index.js yaradin
// index.js icinde newArray i daxil edin main.js de ele bir function qurun ki
// name ve arrayi parametr olaraq verdikde hemin namenin city ve streetini 
// versin eger name olan objectin icinde city ve ya street yoxdusa
//  error versin logda 



// const checkName = (array, name) => {
//     try {
//       const item = array.find(item => item.name === name);
//       if (item) {
//         if (!item.address.street  || !item.address.city) throw new Error(`${item.name}: City or street does not match`)
//         else  console.log(`Street: ${item.address.street}, City: ${item.address.city}`);
//       } 
//     } catch (error) {
//       console.log(error.message);
//     }
//   };


// export default checkName


//-------------------------------------------------------------------------



// Task 2
// main.js de ele bir function qurunki parametr olaraq id ve array 
// qebul etsin gelen array e gore id ni tapa bilmiyende xeta versin
// eyni zamanda geriye hemen ide aid objecti geri qaytarsin
// qaytarilan objecti index.js de import edin daha sonra logda json stringfy 
// birdefede parse ile logda cixardin .



const checkID = (array, id) => {
    try {
      const item = array.find(item => item.id === id);
      if (item) {
        console.log(item);
      } else {
        throw new Error (`ID ${id} not found`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
export default checkID;

