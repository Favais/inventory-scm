
```
inventory-scm
├─ .DS_Store
├─ apps
│  ├─ .DS_Store
│  ├─ backend
│  │  ├─ .env
│  │  ├─ .prettierrc
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ email
│  │  │  │  └─ templates
│  │  │  │     ├─ password-changed.hbs
│  │  │  │     └─ password-reset.hbs
│  │  │  ├─ generated
│  │  │  │  └─ prisma
│  │  │  │     ├─ client.d.ts
│  │  │  │     ├─ client.js
│  │  │  │     ├─ client.js.map
│  │  │  │     ├─ commonInputTypes.d.ts
│  │  │  │     ├─ commonInputTypes.js
│  │  │  │     ├─ commonInputTypes.js.map
│  │  │  │     ├─ enums.d.ts
│  │  │  │     ├─ enums.js
│  │  │  │     ├─ enums.js.map
│  │  │  │     ├─ internal
│  │  │  │     │  ├─ class.d.ts
│  │  │  │     │  ├─ class.js
│  │  │  │     │  ├─ class.js.map
│  │  │  │     │  ├─ prismaNamespace.d.ts
│  │  │  │     │  ├─ prismaNamespace.js
│  │  │  │     │  └─ prismaNamespace.js.map
│  │  │  │     ├─ models
│  │  │  │     │  ├─ AuditLog.d.ts
│  │  │  │     │  ├─ AuditLog.js
│  │  │  │     │  ├─ AuditLog.js.map
│  │  │  │     │  ├─ Category.d.ts
│  │  │  │     │  ├─ Category.js
│  │  │  │     │  ├─ Category.js.map
│  │  │  │     │  ├─ Inventory.d.ts
│  │  │  │     │  ├─ Inventory.js
│  │  │  │     │  ├─ Inventory.js.map
│  │  │  │     │  ├─ PasswordReset.d.ts
│  │  │  │     │  ├─ PasswordReset.js
│  │  │  │     │  ├─ PasswordReset.js.map
│  │  │  │     │  ├─ Product.d.ts
│  │  │  │     │  ├─ Product.js
│  │  │  │     │  ├─ Product.js.map
│  │  │  │     │  ├─ PurchaseOrder.d.ts
│  │  │  │     │  ├─ PurchaseOrder.js
│  │  │  │     │  ├─ PurchaseOrder.js.map
│  │  │  │     │  ├─ PurchaseOrderItem.d.ts
│  │  │  │     │  ├─ PurchaseOrderItem.js
│  │  │  │     │  ├─ PurchaseOrderItem.js.map
│  │  │  │     │  ├─ Session.d.ts
│  │  │  │     │  ├─ Session.js
│  │  │  │     │  ├─ Session.js.map
│  │  │  │     │  ├─ StockTransaction.d.ts
│  │  │  │     │  ├─ StockTransaction.js
│  │  │  │     │  ├─ StockTransaction.js.map
│  │  │  │     │  ├─ Supplier.d.ts
│  │  │  │     │  ├─ Supplier.js
│  │  │  │     │  ├─ Supplier.js.map
│  │  │  │     │  ├─ User.d.ts
│  │  │  │     │  ├─ User.js
│  │  │  │     │  ├─ User.js.map
│  │  │  │     │  ├─ Warehouse.d.ts
│  │  │  │     │  ├─ Warehouse.js
│  │  │  │     │  └─ Warehouse.js.map
│  │  │  │     ├─ models.d.ts
│  │  │  │     ├─ models.js
│  │  │  │     └─ models.js.map
│  │  │  ├─ src
│  │  │  │  ├─ app.controller.d.ts
│  │  │  │  ├─ app.controller.js
│  │  │  │  ├─ app.controller.js.map
│  │  │  │  ├─ app.module.d.ts
│  │  │  │  ├─ app.module.js
│  │  │  │  ├─ app.module.js.map
│  │  │  │  ├─ app.service.d.ts
│  │  │  │  ├─ app.service.js
│  │  │  │  ├─ app.service.js.map
│  │  │  │  ├─ auth
│  │  │  │  │  ├─ auth.controller.d.ts
│  │  │  │  │  ├─ auth.controller.js
│  │  │  │  │  ├─ auth.controller.js.map
│  │  │  │  │  ├─ auth.module.d.ts
│  │  │  │  │  ├─ auth.module.js
│  │  │  │  │  ├─ auth.module.js.map
│  │  │  │  │  ├─ auth.service.d.ts
│  │  │  │  │  ├─ auth.service.js
│  │  │  │  │  ├─ auth.service.js.map
│  │  │  │  │  ├─ decorators
│  │  │  │  │  │  ├─ current-user.decorator.d.ts
│  │  │  │  │  │  ├─ current-user.decorator.js
│  │  │  │  │  │  ├─ current-user.decorator.js.map
│  │  │  │  │  │  ├─ public.decorator.d.ts
│  │  │  │  │  │  ├─ public.decorator.js
│  │  │  │  │  │  ├─ public.decorator.js.map
│  │  │  │  │  │  ├─ roles.decorator.d.ts
│  │  │  │  │  │  ├─ roles.decorator.js
│  │  │  │  │  │  └─ roles.decorator.js.map
│  │  │  │  │  ├─ dto
│  │  │  │  │  │  ├─ auth-response.dto.d.ts
│  │  │  │  │  │  ├─ auth-response.dto.js
│  │  │  │  │  │  ├─ auth-response.dto.js.map
│  │  │  │  │  │  ├─ login.dto.d.ts
│  │  │  │  │  │  ├─ login.dto.js
│  │  │  │  │  │  ├─ login.dto.js.map
│  │  │  │  │  │  ├─ register.dto.d.ts
│  │  │  │  │  │  ├─ register.dto.js
│  │  │  │  │  │  ├─ register.dto.js.map
│  │  │  │  │  │  ├─ reset-password.dto.d.ts
│  │  │  │  │  │  ├─ reset-password.dto.js
│  │  │  │  │  │  └─ reset-password.dto.js.map
│  │  │  │  │  ├─ guards
│  │  │  │  │  │  ├─ jwt-auth.guard.d.ts
│  │  │  │  │  │  ├─ jwt-auth.guard.js
│  │  │  │  │  │  ├─ jwt-auth.guard.js.map
│  │  │  │  │  │  ├─ roles.guard.d.ts
│  │  │  │  │  │  ├─ roles.guard.js
│  │  │  │  │  │  └─ roles.guard.js.map
│  │  │  │  │  ├─ password-reset
│  │  │  │  │  │  ├─ password-reset-cleanup.service.d.ts
│  │  │  │  │  │  ├─ password-reset-cleanup.service.js
│  │  │  │  │  │  ├─ password-reset-cleanup.service.js.map
│  │  │  │  │  │  ├─ password-reset.service.d.ts
│  │  │  │  │  │  ├─ password-reset.service.js
│  │  │  │  │  │  └─ password-reset.service.js.map
│  │  │  │  │  ├─ session
│  │  │  │  │  │  ├─ session-cleanup.service.d.ts
│  │  │  │  │  │  ├─ session-cleanup.service.js
│  │  │  │  │  │  ├─ session-cleanup.service.js.map
│  │  │  │  │  │  ├─ session.service.d.ts
│  │  │  │  │  │  ├─ session.service.js
│  │  │  │  │  │  └─ session.service.js.map
│  │  │  │  │  └─ strategies
│  │  │  │  │     ├─ jwt.strategy.d.ts
│  │  │  │  │     ├─ jwt.strategy.js
│  │  │  │  │     └─ jwt.strategy.js.map
│  │  │  │  ├─ email
│  │  │  │  │  ├─ email.controller.d.ts
│  │  │  │  │  ├─ email.controller.js
│  │  │  │  │  ├─ email.controller.js.map
│  │  │  │  │  ├─ email.module.d.ts
│  │  │  │  │  ├─ email.module.js
│  │  │  │  │  ├─ email.module.js.map
│  │  │  │  │  ├─ email.service.d.ts
│  │  │  │  │  ├─ email.service.js
│  │  │  │  │  └─ email.service.js.map
│  │  │  │  ├─ main.d.ts
│  │  │  │  ├─ main.js
│  │  │  │  ├─ main.js.map
│  │  │  │  ├─ prisma
│  │  │  │  │  ├─ prisma.module.d.ts
│  │  │  │  │  ├─ prisma.module.js
│  │  │  │  │  ├─ prisma.module.js.map
│  │  │  │  │  ├─ prisma.service.d.ts
│  │  │  │  │  ├─ prisma.service.js
│  │  │  │  │  ├─ prisma.service.js.map
│  │  │  │  │  ├─ seed.d.ts
│  │  │  │  │  ├─ seed.js
│  │  │  │  │  └─ seed.js.map
│  │  │  │  ├─ session
│  │  │  │  │  ├─ session-cleanup.service.d.ts
│  │  │  │  │  ├─ session-cleanup.service.js
│  │  │  │  │  ├─ session-cleanup.service.js.map
│  │  │  │  │  ├─ session.service.d.ts
│  │  │  │  │  ├─ session.service.js
│  │  │  │  │  └─ session.service.js.map
│  │  │  │  ├─ token
│  │  │  │  │  ├─ token.module.d.ts
│  │  │  │  │  ├─ token.module.js
│  │  │  │  │  ├─ token.module.js.map
│  │  │  │  │  ├─ token.service.d.ts
│  │  │  │  │  ├─ token.service.js
│  │  │  │  │  └─ token.service.js.map
│  │  │  │  └─ user
│  │  │  │     ├─ dto
│  │  │  │     │  ├─ create-user.dto.d.ts
│  │  │  │     │  ├─ create-user.dto.js
│  │  │  │     │  ├─ create-user.dto.js.map
│  │  │  │     │  ├─ update-user.dto.d.ts
│  │  │  │     │  ├─ update-user.dto.js
│  │  │  │     │  └─ update-user.dto.js.map
│  │  │  │     ├─ entities
│  │  │  │     │  ├─ user.entity.d.ts
│  │  │  │     │  ├─ user.entity.js
│  │  │  │     │  └─ user.entity.js.map
│  │  │  │     ├─ user.controller.d.ts
│  │  │  │     ├─ user.controller.js
│  │  │  │     ├─ user.controller.js.map
│  │  │  │     ├─ user.module.d.ts
│  │  │  │     ├─ user.module.js
│  │  │  │     ├─ user.module.js.map
│  │  │  │     ├─ user.service.d.ts
│  │  │  │     ├─ user.service.js
│  │  │  │     └─ user.service.js.map
│  │  │  └─ tsconfig.build.tsbuildinfo
│  │  ├─ eslint.config.mjs
│  │  ├─ generated
│  │  │  └─ prisma
│  │  │     ├─ browser.ts
│  │  │     ├─ client.ts
│  │  │     ├─ commonInputTypes.ts
│  │  │     ├─ enums.ts
│  │  │     ├─ internal
│  │  │     │  ├─ class.ts
│  │  │     │  ├─ prismaNamespace.ts
│  │  │     │  └─ prismaNamespaceBrowser.ts
│  │  │     ├─ models
│  │  │     │  ├─ AuditLog.ts
│  │  │     │  ├─ Category.ts
│  │  │     │  ├─ Inventory.ts
│  │  │     │  ├─ PasswordReset.ts
│  │  │     │  ├─ Product.ts
│  │  │     │  ├─ PurchaseOrder.ts
│  │  │     │  ├─ PurchaseOrderItem.ts
│  │  │     │  ├─ Session.ts
│  │  │     │  ├─ StockTransaction.ts
│  │  │     │  ├─ Supplier.ts
│  │  │     │  ├─ User.ts
│  │  │     │  └─ Warehouse.ts
│  │  │     └─ models.ts
│  │  ├─ nest-cli.json
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  ├─ migrations
│  │  │  │  ├─ 20260207015209_init
│  │  │  │  │  └─ migration.sql
│  │  │  │  ├─ 20260208084649_add_refresh_token
│  │  │  │  │  └─ migration.sql
│  │  │  │  ├─ 20260210102759_add_session_management
│  │  │  │  │  └─ migration.sql
│  │  │  │  ├─ 20260210143742_merged_session_and_refresh_token
│  │  │  │  │  └─ migration.sql
│  │  │  │  ├─ 20260216192122_added_createdby
│  │  │  │  │  └─ migration.sql
│  │  │  │  ├─ 20260219181527_add_password_reset
│  │  │  │  │  └─ migration.sql
│  │  │  │  └─ migration_lock.toml
│  │  │  └─ schema.prisma
│  │  ├─ prisma.config.ts
│  │  ├─ src
│  │  │  ├─ app.controller.spec.ts
│  │  │  ├─ app.controller.ts
│  │  │  ├─ app.module.ts
│  │  │  ├─ app.service.ts
│  │  │  ├─ auth
│  │  │  │  ├─ auth.controller.spec.ts
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  ├─ auth.module.ts
│  │  │  │  ├─ auth.service.spec.ts
│  │  │  │  ├─ auth.service.ts
│  │  │  │  ├─ decorators
│  │  │  │  │  ├─ current-user.decorator.ts
│  │  │  │  │  ├─ public.decorator.ts
│  │  │  │  │  └─ roles.decorator.ts
│  │  │  │  ├─ dto
│  │  │  │  │  ├─ auth-response.dto.ts
│  │  │  │  │  ├─ login.dto.ts
│  │  │  │  │  ├─ register.dto.ts
│  │  │  │  │  └─ reset-password.dto.ts
│  │  │  │  ├─ guards
│  │  │  │  │  ├─ jwt-auth.guard.ts
│  │  │  │  │  └─ roles.guard.ts
│  │  │  │  ├─ password-reset
│  │  │  │  │  ├─ password-reset-cleanup.service.ts
│  │  │  │  │  ├─ password-reset.service.service.spec.ts
│  │  │  │  │  └─ password-reset.service.ts
│  │  │  │  ├─ session
│  │  │  │  │  ├─ session-cleanup.service.ts
│  │  │  │  │  ├─ session.service.spec.ts
│  │  │  │  │  └─ session.service.ts
│  │  │  │  └─ strategies
│  │  │  │     └─ jwt.strategy.ts
│  │  │  ├─ email
│  │  │  │  ├─ email.controller.spec.ts
│  │  │  │  ├─ email.controller.ts
│  │  │  │  ├─ email.module.ts
│  │  │  │  ├─ email.service.spec.ts
│  │  │  │  ├─ email.service.ts
│  │  │  │  └─ templates
│  │  │  │     ├─ password-changed.hbs
│  │  │  │     └─ password-reset.hbs
│  │  │  ├─ main.ts
│  │  │  ├─ prisma
│  │  │  │  ├─ prisma.module.ts
│  │  │  │  ├─ prisma.service.spec.ts
│  │  │  │  ├─ prisma.service.ts
│  │  │  │  └─ seed.ts
│  │  │  ├─ session
│  │  │  │  ├─ session-cleanup.service.ts
│  │  │  │  ├─ session.service.spec.ts
│  │  │  │  └─ session.service.ts
│  │  │  ├─ token
│  │  │  │  ├─ token.module.ts
│  │  │  │  ├─ token.service.spec.ts
│  │  │  │  └─ token.service.ts
│  │  │  └─ user
│  │  │     ├─ dto
│  │  │     │  ├─ create-user.dto.ts
│  │  │     │  └─ update-user.dto.ts
│  │  │     ├─ entities
│  │  │     │  └─ user.entity.ts
│  │  │     ├─ user.controller.spec.ts
│  │  │     ├─ user.controller.ts
│  │  │     ├─ user.module.ts
│  │  │     ├─ user.service.spec.ts
│  │  │     └─ user.service.ts
│  │  ├─ test
│  │  │  ├─ app.e2e-spec.ts
│  │  │  └─ jest-e2e.json
│  │  ├─ tsconfig.build.json
│  │  └─ tsconfig.json
│  └─ frontend
│     ├─ .DS_Store
│     ├─ .next
│     │  └─ types
│     │     ├─ cache-life.d.ts
│     │     ├─ routes.d.ts
│     │     └─ validator.ts
│     ├─ README.md
│     ├─ app
│     │  ├─ favicon.ico
│     │  ├─ globals.css
│     │  ├─ layout.tsx
│     │  └─ page.tsx
│     ├─ eslint.config.mjs
│     ├─ next-env.d.ts
│     ├─ next.config.ts
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ public
│     │  ├─ file.svg
│     │  ├─ globe.svg
│     │  ├─ next.svg
│     │  ├─ vercel.svg
│     │  └─ window.svg
│     └─ tsconfig.json
└─ packages
   ├─ .DS_Store
   └─ shared-types

```