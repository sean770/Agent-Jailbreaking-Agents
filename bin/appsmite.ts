appsmith-backup/
├── bin/
│   └── appsmith.ts
├── src/
│   ├── commands/
│   │   ├── backup.ts
│   │   └── restore.ts
│   ├── core/
│   │   ├── context.ts
│   │   ├── encryption.ts
│   │   ├── filesystem.ts
│   │   ├── mongo.ts
│   │   └── retention.ts
│   ├── logger/
│   │   └── index.ts
│   ├── progress/
│   │   └── progress.ts
│   ├── utils/
│   │   └── exec.ts
│   └── constants.ts
├── tests/
│   ├── retention.test.ts
│   ├── env-sanitize.test.ts
│   └── timestamp.test.ts
├── tsconfig.json
├── jest.config.js
└── package.json