# Sentry Logging Service

::: warning Dependencies

- [sentry_flutter](https://pub.dev/packages/sentry_flutter)

- implements LoggingService

:::

::: danger Developer Guide

- Developer should never use this service directly, use [Logging Library](../logging_library.md) instead.

:::


[[toc]]

## SentryLoggingService

- Implements [LoggingService](./logging_service.md).

- Provides methods which implements sentry services for event, exception, and transaction.

## Configuration

- To configure sentry for your project you just have to pass sentryConfig in [environment config](../../../env.md).

  - You will have to add sentry dsn in sentryConfig.

  - And you can configure SampleRate to trace uncaught errors. Value of `tracesSampleRate` (in `sentryConfig`) can be between 0 and 1. if value of `tracesSampleRate` is `0.4` then it will record 40% of uncaught errors, if it's `1` it will record 100% of uncaught errors.

- Check [this](https://youtu.be/LWc67Vja5YA) video for, how to get config values.

- Check this also for other [sentry integration (PERFORMANCE)](../../performance_monitoring.md).

## Source code

```dart
import 'package:sentry_flutter/sentry_flutter.dart';

import './logging_service.dart';
import '../models/log.dart';

abstract class SentryLoggingService implements LoggingService {
  static logEvent({
    required String message,
    SentryLevel? level,
    Object? data,
  }) {
    final SentryEvent event = SentryEvent(message: SentryMessage(message), level: level);
    Sentry.captureEvent(
      event,
      hint: data,
    );
  }

  static logException(
    dynamic throwable, {
    dynamic stackTrace,
    dynamic hint,
  }) {
    Sentry.captureException(throwable, stackTrace: stackTrace, hint: hint);
  }

  static logTransaction({
    required Function execute,
    required TransactionDetails details,
  }) async {
    final ISentrySpan transaction = Sentry.startTransaction(details.name, details.operation);
    await execute();
    await transaction.finish();
  }
}
```