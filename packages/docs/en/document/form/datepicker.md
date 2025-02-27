---
layout: doc
lang: zh-CN
---

# DatePicker

Control to enter or select a date.

## Basic usage

Specify the selection box type by setting the `picker` property. Optional values: `date`, `month`, `year`, default is `date`.

:::demo
datepicker/basic
:::

## Date and time selection

Add `isDateTime` property to add time selection function. The default value is `false`.

:::demo
datepicker/datetime
:::

## Range selector

Add the `isRangePicker` property and select a period of time. The default value is `false`.

:::demo
datepicker/range
:::

## Date format

Using the `format` attribute, you can customize the date display format.

:::demo
datepicker/format
:::

## Input box prompt text

Through `placeholder`, `placeholderRange` attribute, the custom input message text.

:::demo
datepicker/placeholder
:::

## An optional date and time

The value of `disabledDate` and `disabledTime` disables partial date and time selection, respectively. The value of `disabledTime` and `isDateTime` are used together.

:::demo
datepicker/disabled
:::

## Holiday view

Add the `showHolidays` property to open the holiday view, default is `false`.

:::demo
datepicker/holiday
:::

## Internationalization

Set `lang` property to `en` and switch to English with one click. The default value is `ch`.

:::demo
datepicker/lang
:::
