import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //importa il registro

platformBrowserDynamic().bootstrapModule(AppModule, { //esegue l'applicazione
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err)); //o segnala un errore
