###  检测指定点是否在多边形内部，如果在则为true 否则为false

安装 
```
npm install @falseluffy/point-polygon-test
```

引用
```
import pointPolygonTest from '@falseluffy/point-polygon-test'

<script src="dist/point-polygon-test.min.js"></script>

const pointPolygonTest = require('@falseluffy/point-polygon-test')
```

使用
```
pointer = [200, 10]
polygon = [[10,20],[150, 200],[100,20],[400, 30]]
pointPolygonTest (pointer, polygon)
```