import { Component, OnInit ,  Inject } from '@angular/core';
import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  leaders : Leader[] ;
  selectedLeader : Leader ;

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

  constructor(private leaderService:LeaderService,@Inject('BaseURL') public BaseURL) { }

  ngOnInit()
  {
    this.leaderService.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  }


}
