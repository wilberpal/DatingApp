import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotsgraph',
  templateUrl: './dotsgraph.component.html',
  styleUrls: ['./dotsgraph.component.css']
})
export class DotsgraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  drawgraph(args: any) {
    if(((typeof args['jEULine'] === 'undefined') && (typeof args['jEU'] !== 'undefined')) || ((typeof args['jEULine'] !== 'undefined') && (typeof args['jEU'] !== 'undefined') && (args['jEULine'] != args['jEU']))){
      args['jEULine'] = args['jEU'];
    }

    var left = 115;
    var top = 5;
    var width = 506;
    var nodespacing = 40;
    var eutext = (typeof args['EU'] !== 'undefined' ? "EU = " + args['EU'] : '');

	  if(typeof args['jEU'] !== 'undefined' && typeof args['graphpage'] !== 'undefined' && args['graphpage'] !== 'match'){
      switch (args['jEU'])
      {
        case "1":
        case "2":
        eutext = 'EU = 0 - 31';
        break;

        case "3":
        case "4":
        eutext = 'EU = 32 - 40';
        break;

        case "5":
        case "6":
        eutext = 'EU = 41 - 49';
        break;

        case "7":
        case "8":
        eutext = 'EU = 50 - 59';
        break;

        case "9":
        case "10":
        eutext = 'EU = 60 - 97';
        break;
      }
    }
    var scale = 1;
    if(typeof args['scale'] !== 'undefined'){
      scale = args['scale'];
    }
  }

}
