
// export async function getUserById(params) {
//   try {
//     const { clerkId } = params;
//     const user = await fetch({
//         url:"http://127.0.0.1:5000/user",
//         method:"POST",
//         body:JSON.stringify(clerkId),
//         headers:{
//             "Content-Type":"application/json"
//         }

//     }) 
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

export async function createUser(userData) {
    console.log(userData)
  try {
    const user = await fetch({
        url:"http://127.0.0.1:5000/register",
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
        })
   console.log(user)
    return user;
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
export async function updateUser(params) {
  try {
    const {updateData, path} = params;
    const user = await fetch({
        url:"http://127.0.0.1:5000/update_user",
        method: "POST",
        body: JSON.stringify(updateData),
        headers: {
            "Content-Type": "application/json"
        }
        })

    revalidatePath(path);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
export async function deleteUser(params) {
  try {
    const {clerkId} = params;
    const user = await fetch({
        url:"http://127.0.0.1:5000/delete_user",
        method:"POST",
        body:JSON.stringify(clerkId),
        headers:{
            "Content-Type":"application/json"
        }

    }) 
    if(!user){
      throw new Error("User not found")
    }
    console.log(user);

    return deleteUser;
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
