# @daffodil/analytics
`@daffodil/analytics` is a lightweight Angular package that helps integrate analytics providers into your Angular applications, supporting multiple analytics services.

## Overview
It simplifies event tracking and provides configuration options, such as defining analyzable actions. Notably, `@daffodil/analytics` focuses on handling state-related events and operates specifically on [`Actions`](https://ngrx.io/api/store/Action) from [`@ngrx/store`](https://ngrx.io/guide/store), rather than browser events. Additionally, it includes testing utilities tailored for analytics event tracking in Angular applications.

## Installation
To install `@daffodil/analytics` and its required dependencies, use the following commands in the terminal.

Install with npm:
```bash
npm install @daffodil/auth @angular/common @angular/core @ngrx/store @ngrx/effects rxjs --save
```

Install with yarn:

```bash
yarn add @daffodil/auth @angular/common @angular/core @ngrx/store @ngrx/effects rxjs
```

## Features
- ["Opt-in" action tracking](/libs/analytics/guides/configuration.md#configuring-analyzeableactions)
