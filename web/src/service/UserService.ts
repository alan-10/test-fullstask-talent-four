import type { CreateUser, User } from "@/interface/User";

import { AxiosPoint }  from "@/plugins/axios";


export  class UserService  {
  static URI = "/user"
  async save(user: CreateUser): Promise<User> {
    return  await AxiosPoint.post(UserService.URI+"/createUsers",  user).
      then(response => {
        return response.data;
      }).catch(erro=>{
        console.log(erro);
      })
  }

  async findAll(): Promise<User[]> {
    return  await AxiosPoint.get(UserService.URI+"/listUsers").
      then(response => {
        console.log(response.data)
        return response.data;
      })
  }

  async findByID(id: string): Promise<User> {
    return  await AxiosPoint.get(UserService.URI+"/"+id).
      then(response => {
        return response.data;
      })
  }

  async delete(id: string): Promise<Boolean> {
    return  await AxiosPoint.put(UserService.URI+"/delete/"+id).
      then(response => {
        return true
      })
  }

  async update( {email, name, id}: CreateUser): Promise<User> {
    
    return  await AxiosPoint.put(UserService.URI+"/"+id, { email, name }).
      then(response => {
        return response.data
      }).catch((error) => {
        console.log(error);
        
      })
  }
}
