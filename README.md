# mtx Application

Welcome to the mtx project.

It contains these folders and files, following the CAP recommended project layout:

File / Folder | Purpose
---------|----------
`README.md` | this getting started guide
`app/` | content for UI frontends go here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`mta.yaml` | project structure and relationships
`package.json` | project metadata and configuration
`.cdsrc.json` | hidden project configuration
`xs-security` | security profile configuration


## Next Steps...

- Open a new terminal and run  `cds watch`
- ( in VSCode simply choose _**Terminal** > Run Task > cds watch_ )
- Start adding content, e.g. a [db/schema.cds](db/schema.cds), ...


## Learn more...

Learn more at https://cap.cloud.sap/docs/get-started/

# Build Command:
```
cd mtx0 ; mkdir -p mta_archives ; mbt build -p=cf -t=mta_archives --mtar=mtx0.mtar
```

# Deploy Command:
```
cf deploy mta_archives/mtx0.mtar -f
```

# Undeploy Command:
```
cf undeploy mtx -f --delete-services
```
