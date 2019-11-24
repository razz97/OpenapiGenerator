import { Info } from './info.model';
import { Server } from './server.model';
import { Paths } from './path.model';
import { Components } from './components.model';
import { Security, Tag, ExternalDocs } from './misc.model';

export class Root {
    public openapi: string = "3.0.1";
    public info: Info = new Info();     
    public servers: Server[] = [];
    public paths: Paths = new Paths();
    public components: Components = undefined; //
    public security: Security = undefined; //
    public tags: Tag[] = undefined; //
    public externalDocs: ExternalDocs = undefined; //
}










