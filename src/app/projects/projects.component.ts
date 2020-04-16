import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  private projectsSubscription: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.projectsSubscription = this.projectService.projectsUpdated.subscribe(
      () => {
        this.projects = this.projectService.getProjects();
      }
    );
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
