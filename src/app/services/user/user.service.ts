import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import {Observable} from "rxjs";
import {User} from "../../models/user/user.model";
import {CreateUserDto} from "../../dtos/user/create-user.dto";
import {UserUpdateDto} from "../../dtos/user/user-update.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = '/api/users';

  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<User[]> {
    return this.apiService.get(this.endpoint);
  }

  getUserById(id: string): Observable<User> {
    return this.apiService.get(`${this.endpoint}/${id}`);
  }

  createUser(user: CreateUserDto): Observable<User> {
    return this.apiService.post(this.endpoint, user);
  }

  updateUser(id: string, user: UserUpdateDto): Observable<User> {
    return this.apiService.patch(`${this.endpoint}/${id}`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.apiService.delete(`${this.endpoint}/${id}`);
  }
}
