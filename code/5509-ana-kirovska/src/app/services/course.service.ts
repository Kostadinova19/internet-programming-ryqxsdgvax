import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl='http://localhost:3000/courses'

  constructor(private http:HttpClient) { }

  fetchDegrees(){
    return this.http.get<Course[]>(this.apiUrl);
  }
}
