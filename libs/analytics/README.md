# @daffodil/analytics
`@daffodil/analytics` is a lightweight Angular package that helps integrate analytics providers into your Angular applications, supporting multiple analytics services.

## Overview
It simplifies event tracking and provides configuration options, such as defining analyzable actions. Notably, `@daffodil/analytics` focuses on handling state-related events and operates specifically on [`Actions`](https://ngrx.io/api/store/Action) from [`@ngrx/store`](https://ngrx.io/guide/store), rather than browser events. Additionally, it includes testing utilities tailored for analytics event tracking in Angular applications.

## Installation
To install `@daffodil/analytics`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/analytics --save
```

Install with yarn:

```bash
yarn add @daffodil/analytics
```

## Features
- ["Opt-in" action tracking](/libs/analytics/guides/configuration.md#configuring-analyzeableactions)
