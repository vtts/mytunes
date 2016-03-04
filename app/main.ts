/**
 * Created by rangi36 on 29/02/16.
 */
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';

bootstrap(<any>AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
