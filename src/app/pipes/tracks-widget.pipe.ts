import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'tracksWidget'
})
export class TracksWidgetPipe implements PipeTransform {
  constructor(private domSanitizer:DomSanitizer){}

  transform(idTrack: any): any {
    console.log(`https://open.spotify.com/embed/track/${idTrack}`);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${idTrack}`);
  }

}
