import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {}

  addProject(name: string, desc: string, imagePath: string, url: string) {
    this.projects.push({
      name: name,
      description: desc,
      imagePath: imagePath,
      url: url,
    });
  }
}
