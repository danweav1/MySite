import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  defaultElevation = 0;
  raisedElevation = 20;

  constructor() {}

  ngOnInit(): void {}
}
