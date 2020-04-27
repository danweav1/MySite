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
      name: 'My Site',
      description: "The site you're currently on :)",
      imagePath: 'assets/my-site-image.png',
      url: 'https://github.com/danweav1/MySite',
    },
    {
      name: 'Fitness Tracker',
      description: 'Simple fitness tracker built with Angular and Firebase.',
      imagePath: 'assets/fitness-app-image.png',
      url: 'https://github.com/danweav1/Fitness-Tracker',
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
