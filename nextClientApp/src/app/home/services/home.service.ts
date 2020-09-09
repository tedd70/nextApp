import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SchoolInterface } from '../bussiness/interfaces/school.interface';
import { StudentInterface } from '../bussiness/interfaces/student.interface';

@Injectable({
  providedIn: "root"
})

export class HomeService {
  constructor(private http: HttpClient) { }

  public getSchoolsData(): Observable<SchoolInterface[]> {
    return this.http.get<SchoolInterface[]>('https://localhost:44370/School')
  }

  public getProfsData() {
    return this.http.get('https://localhost:44370/Prof')
  }

  public getClassesData(schoolId) {
    return this.http.get(`https://localhost:44370/Class?schoolId=${schoolId}`)
  }

  public getStudentsData(classId) {
    return this.http.get<StudentInterface[]>(`https://localhost:44370/Students?classId=${classId}`)
  }

  public getMarksData(studentId) {
    return this.http.get(`https://localhost:44370/Mark?studentId=${studentId}`);
  }


  public createOrUpdateStudent(student) {
    return this.http.post(`https://localhost:44370/Students`, student);
  }

  public addNewMark(markValue) {
    return this.http.post(`https://localhost:44370/Mark`, markValue);
  }
}
