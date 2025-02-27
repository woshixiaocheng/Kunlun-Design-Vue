---
layout: doc
lang: zh-CN
---

# Message 消息提示

常用于主动操作后的反馈提示。与 **Notification** 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

**Message** 在配置上与 **Notifications** 非常相似，所以部分 options 在此不做详尽解释。

:::demo
feedback/basic
:::

## 不同状态

用来显示 [成功、警告、消息、错误] 类的操作反馈。

当需要自定义更多属性时，Message 也可以接口一个对象为参数。
比如，设置 `type` 字段可以定义不同的状态，默认为 `info`。此时正文内容以 `message` 的值传入。
同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下直接调用。

:::demo
feedback/status
:::

## 可关闭的消息提示

可以用来添加关闭按钮

默认的 Message 是不可以被人工关闭的。如果你需要手动关闭功能，你可以把 `close` 设置为 true。Message 拥有可控的 `duration`，默认的关闭时间为 3000 毫秒，当把这个属性的值设置为 `0` 便表示该消息不会被自动关闭。

:::demo
feedback/close
:::

## 可滚动的消息提示

可以用来展示超长的消息提示文本内容

默认的 Message 是不支持文字滚动的，当文字超出消息提示框的时候，便会被隐藏为 `...`，你可以把 `scroll` 设置为 true。Message 会自动根据文本的实际长度来进行滚动。

当然，Message 也会自己判断，就算你将 `scroll` 设置为 true，只要文本内容没有超过消息框就不会进行滚动，Message 照常运行。

将 `scroll` 设置为 true 之后，`duration` 将成为滚动动画的时长，这个时候文字将在开始滚动之前保持静止 2000 毫秒，在滚动动画结束之后保持静止 1000 毫秒，然后消失。

**`注意：在宽度尺寸较窄的窗口测试本功能，且不建议文本太长，长文本可以使用其他的通知提示组件`**

:::demo
feedback/scroll
:::
