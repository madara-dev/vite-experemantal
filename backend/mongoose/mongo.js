const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/clickCounter');



const UserSchema = new mongoose.Schema({
    email: String,
    clicks: Number
  });

  const GlobalSchema = new mongoose.Schema({
    clicks: Number
  });

  const userModel = mongoose.model('users', UserSchema);

  const globalModel = mongoose.model('global-clicks', GlobalSchema);



async function totalclickssaver(){
    // for (let i = 0; i<10; i++) {
        const filter = {};
        const all = await userModel.find(filter)
        const filtersort = all.sort((a, b)=>{return b.clicks - a.clicks;})
        let total = []

        for (let index = 0; index < 10; index++) {
          
          
           total.push(filtersort[index]) 
          
          }

          
          return total

         
      // let globaldata = await globalModel.findById("644129b8be2fb73873901ef6").exec(
}


//   async function nameFinder(param){
//      const name = await (await userModel.find({ name: param}).exec()).pop()
    
//      if(name){
//       return true
//      } else if(name === 'undefined'){
//         return false
//      }

//  }
async function idgetter(params) {

      const id = await (await userModel.find({ email: params}).exec()).pop()
      return id
    

}


  
 async function emailFinder(param){
    const email = await (await userModel.find({ email: param}).exec()).pop()
   
    if(email){
     return true
    } else{
       return false
    }

}


async function globaldatareturner(params) {
  let globaldata = await globalModel.findById('644129b8be2fb73873901ef6').exec()

  return globaldata.clicks
}

// async function hashFinder(param){
//     const name = await (await userModel.find({ name: param}).exec()).pop()
//     if(name){
//         return name.password
//     }
   


// }



//error checker is used to identify issues

// const errorchecker = async ( )=>{

//     console.log(await hashFinder('karlo2'));
// }

// errorchecker()

  module.exports = {userModel,emailFinder, idgetter, globalModel, totalclickssaver,globaldatareturner}