# Iphone Component

## Purpose
This component serves a way to render an image inside the screen of an Apple iPhone.

## Aspect Ratio
The [aspect ratio of iPhone versions](https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html) is as follows:

|Device|Native Resolution (Pixels)|UIKit Size (Points)|Native Scale factor|UIKit Scale factor|
|--- |--- |--- |--- |--- |
|iPhone X|1125 x 2436|375 x 812|3.0|3.0|
|iPhone 8 Plus|1080 x 1920|414 x 736|2.608|3.0|
|iPhone 8|750 x 1334|375 x 667|2.0|2.0|
|iPhone 7 Plus|1080 x 1920|414 x 736|2.608|3.0|
|iPhone 6s Plus|1080 x 1920|375 x 667|2.608|3.0|
|iPhone 6 Plus|1080 x 1920|375 x 667|2.608|3.0|
|iPhone 7|750 x 1334|375 x 667|2.0|2.0|
|iPhone 6s|750 x 1334|375 x 667|2.0|2.0|
|iPhone 6|750 x 1334|375 x 667|2.0|2.0|
|iPhone SE|640 x 1136|320 x 568|2.0|2.0|

## Usage
```
<daffio-iphone>
    <img src="/path/to/some/file.jpg"/>
</daffio-iphone>
```