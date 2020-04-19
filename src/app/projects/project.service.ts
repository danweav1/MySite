import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: 'wtf m8',
      description: 'graduated to pof my class',
      imagePath:
        'https://pics.me.me/please-be-patient-i-have-autism-44399238.png',
      url: 'thisurldoesntwork',
    },
    {
      name: 'dota',
      description: 'Magnus 0 20 0',
      imagePath:
        'https://www.esportsbets.com/wp-content/uploads/2019/09/insane-ban-1024x516.jpg',
      url: 'thisurldoesntwork',
    },
  ];

  projectsUpdated = new Subject();

  constructor(private http: HttpClient) {}

  addProject(name: string, desc: string, imagePath: string, url: string) {
    this.projects.push({
      name: name,
      description: desc,
      imagePath: imagePath,
      url: url,
    });
    this.projectsUpdated.next();
  }

  getProjects() {
    // this.http.get('https://api.github.com/users/danweav1/repos').subscribe(() => {

    // });
    return [...this.projects];
  }
}
