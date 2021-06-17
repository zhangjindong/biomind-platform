ng generate @nrwl/angular:application --name=platform --inlineStyle --routing --tags=pc

npx ng g @angular-architects/ddd:domain user --addApp --appDirectory=mfr --ngrx
npx ng g @angular-architects/ddd:domain dept --addApp --appDirectory=mfr --ngrx
npx ng g @angular-architects/ddd:feature list --domain user --entity user --ngrx
npx ng g @angular-architects/ddd:feature detail --domain user --entity user --ngrx
npx ng g @angular-architects/ddd:feature list --domain dept --entity dept --ngrx

ng generate @schematics/angular:component --name=header --project=shared-ui-layout --style=scss --changeDetection=OnPush --inlineStyle

ng generate @angular-architects/ddd:feature --name=home-list --domain=dept --app=management --entity=dept --lazy --ngrx
